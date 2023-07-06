import type { RequestHandler } from './$types';
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'
import { OPENAI_API_KEY } from '$env'

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config)
 
// IMPORTANT! Set the runtime to edge
export const runtime = 'edge'
 
export const POST: RequestHandler = async () => {
	return new Response();
};

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json()
 
  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages
  })
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response)
  // Respond with the stream
  return new StreamingTextResponse(stream)
}
