// app/api/whatsapp/webhook/route.ts

export const runtime = "nodejs";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const u = new URL(req.url);

  const ok =
    u.searchParams.get("hub.mode") === "subscribe" &&
    u.searchParams.get("hub.verify_token") === process.env.WHATSAPP_VERIFY_TOKEN;

  const challenge = u.searchParams.get("hub.challenge") ?? "";

  return new Response(ok ? challenge : "forbidden", {
    status: ok ? 200 : 403,
    headers: { "content-type": "text/plain" },
  });
}

export async function POST() {
  return new Response("ok", { status: 200 });
}

