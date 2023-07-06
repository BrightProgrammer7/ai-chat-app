import type { RequestHandler } from './$types';
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'
import { OPENAI_KEY } from '$env/static/private'

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: OPENAI_KEY
})
const openai = new OpenAIApi(config)
 
// IMPORTANT! Set the runtime to edge
export const runtime = 'edge'
 
export const POST: RequestHandler = async () => {

  // Extract the `messages` from the body of the request
  const { messages } = await req.json()
 
  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages
  })
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response, {
    // onStart: async() => {
    //     await savePromptToDatabase(prompt)
    // }, 
    // onToken: async(token: string) => {
    //     console.log(token)
    // }, 
    // onCompletion: async(completion: string) => {
    //     await saveCompletionToDatabase(completion)
    // },
  })
  // Respond with the stream
  return new StreamingTextResponse(stream)
}
