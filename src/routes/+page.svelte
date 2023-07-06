<script lang="ts">
	import { useChat } from 'ai/svelte';

	// const { messages, input, handleInputChange, handleSubmit } = useChat({
	const { messages, input, handleSubmit } = useChat({
		api: '/chat'
	});
</script>

<h1>Welcome to ChatAI</h1>
<p>Visit <a href="https://github.com/BrightProgrammer7/ai-chat-app.git">ai-chat-app.git</a> to read the documentation of the code source</p>

<div>
	<ul>
		{#each $messages as m}
			<li>{m.role} says... {m.content}</li>
		{/each}
	</ul>

	<form on:submit={handleSubmit}>
		<label>
			Say something...
			<!-- <input bind:value={$input} on:change={handleInputChange} /> -->
			<input bind:value={$input} />
			<button type="submit">Send</button>
		</label>
	</form>
</div>
