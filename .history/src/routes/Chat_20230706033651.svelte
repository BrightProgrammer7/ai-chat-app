<script lang="ts">
	import { useChat } from 'ai/svelte';

	// const { messages, input, handleInputChange, handleSubmit } = useChat({
	const { messages, input, handleSubmit } = useChat({
		api: '/chat'
	});
</script>

<ul>
		{#each $messages as m}
			<li>{m.role} says... {m.content}</li>
		{/each}
	</ul>

