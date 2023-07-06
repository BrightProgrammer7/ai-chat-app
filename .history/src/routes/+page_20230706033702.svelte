<script lang="ts">
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

	<form on:submit={handleSubmit}>
		<label>
			Say something...
			<!-- <input bind:value={$input} on:change={handleInputChange} /> -->
			<input bind:value={$input} />
			<button type="submit">Send</button>
		</label>
	</form>
</div>
