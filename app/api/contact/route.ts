import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, website, mrr, challenge, channels } = body;

    const notionDbId = process.env.NOTION_DB_ID;
    const notionApiKey = process.env.NOTION_API_KEY;

    if (!notionDbId || !notionApiKey) {
      return NextResponse.json(
        { error: "Notion configuration missing" },
        { status: 500 },
      );
    }

    const response = await fetch(`https://api.notion.com/v1/pages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${notionApiKey}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({
        parent: { database_id: notionDbId },
        properties: {
          Name: {
            title: [{ text: { content: name } }],
          },
          Email: {
            email: email,
          },
          Company: {
            rich_text: [{ text: { content: company } }],
          },
          Website: {
            url: website,
          },
          MRR: {
            rich_text: [{ text: { content: mrr } }],
          },
          Challenge: {
            rich_text: [{ text: { content: challenge } }],
          },
          Channels: {
            multi_select: channels.map((channel: string) => ({
              name: channel,
            })),
          },
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);
      return NextResponse.json(
        { error: "Failed to save to Notion", details: errorData },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
