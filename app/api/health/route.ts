import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    status: 'ok', 
    message: 'WhatsApp Bot is running',
    timestamp: new Date().toISOString()
  });
}




