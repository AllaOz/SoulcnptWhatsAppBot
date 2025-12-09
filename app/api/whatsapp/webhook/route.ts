// app/api/whatsapp/webhook/route.ts

export const runtime = "nodejs";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const u = new URL(req.url);

  const mode = u.searchParams.get("hub.mode");
  const token = u.searchParams.get("hub.verify_token");
  const challenge = u.searchParams.get("hub.challenge") ?? "";
  const expectedToken = process.env.WHATSAPP_VERIFY_TOKEN;

  // Log for debugging (remove in production)
  console.log("Webhook verification request:", {
    mode,
    token: token ? "***" : null,
    expectedToken: expectedToken ? "***" : null,
    challenge: challenge ? "present" : "missing",
  });

  const ok =
    mode === "subscribe" &&
    token === expectedToken;

  if (!ok) {
    console.log("Verification failed:", {
      modeMatch: mode === "subscribe",
      tokenMatch: token === expectedToken,
    });
  }

  return new Response(ok ? challenge : "forbidden", {
    status: ok ? 200 : 403,
    headers: { "content-type": "text/plain" },
  });
}

export async function POST() {
  return new Response("ok", { status: 200 });
}


