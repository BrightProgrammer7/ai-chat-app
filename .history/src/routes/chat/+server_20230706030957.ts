import type { RequestHandler } from './$types';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { Configuration, OpenAIApi } from 'openai-edge';
import { OPENAI_KEY, ORG_KEY } from '$env/static/private';

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
	apiKey: OPENAI_KEY
	//   orgKey: ORG_KEY,
});
const openai = new OpenAIApi(config);

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export const POST: RequestHandler = async ({ req }) => {
	// Extract the `messages` from the body of the request
	const { messages } = await req.json();

	// Ask OpenAI for a streaming chat completion given the prompt
	const response = await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		stream: true,
		messages
	});
	// Convert the response into a friendly text-stream
	const stream = OpenAIStream(response, 
    //     {
	// 	onStart: async () => {
	// 		// This callback is called when the stream starts
	// 		// You can use this to save the prompt to your database
	// 		await savePromptToDatabase(prompt);
	// 	},
	// 	onToken: async (token: string) => {
	// 		// This callback is called for each token in the stream
	// 		// You can use this to debug the stream or save the tokens to your database
	// 		console.log(token);
	// 	},
	// 	onCompletion: async (completion: string) => {
	// 		// This callback is called when the stream completes
	// 		// You can use this to save the final completion to your database
	// 		await saveCompletionToDatabase(completion);
	// 	}
	// }
    );

	// Respond with the stream
	return new StreamingTextResponse(stream);
};
