<script lang="ts">
  import Prompt from './Prompt.svelte';

  import Chat from './Chat.svelte';

	import { useChat } from 'ai/svelte';

	// const { messages, input, handleInputChange, handleSubmit } = useChat({
	const { messages, input, handleSubmit } = useChat({
		api: '/chat'
	});
</script>

<h1>Welcome to ChatAI</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div>
	<Chat />

	<Prompt></>
</div>
