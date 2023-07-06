<script lang="ts">
	import { useChat } from 'ai/svelte';

	// export default function Chat() {
		const { messages, input, handleInputChange, handleSubmit } = useChat(
            api: '/chat',
        );

		// return (
			
		// );
	// }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
