<script lang="ts">
  import Chat from './Chat.svelte';

	import { useChat } from 'ai/svelte';

	// const { messages, input, handleInputChange, handleSubmit } = useChat({
	const { messages, input, handleSubmit } = useChat({
		api: '/chat'
	});
</script>

<form on:submit={handleSubmit}>
		<label>
			Say something...
			<!-- <input bind:value={$input} on:change={handleInputChange} /> -->
			<input bind:value={$input} />
			<button type="submit">Send</button>
		</label>
	</form>

