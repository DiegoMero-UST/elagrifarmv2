import { openai } from "@/app/openai";
import { NextRequest, NextResponse } from 'next/server';

// Send a new message to a thread
export async function POST(
  request: NextRequest,
  { params }: { params: { threadId: string } }
) {
  try {
    const { threadId } = params;
    const { runId, toolCallOutputs } = await request.json();

    const stream = openai.beta.threads.runs.submitToolOutputsStream(
      threadId,
      runId,
      // { tool_outputs: [{ output: result, tool_call_id: toolCallId }] },
      { tool_outputs: toolCallOutputs }
    );

    return new Response(stream.toReadableStream());
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      { status: 500 }
    );
  }
}
