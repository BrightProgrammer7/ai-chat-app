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

<h1>Welcome to ChatAI</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div>
    <ul>
        {#each $messages as m}
            <li>{m.role} says... {m.content}</li>
        {/each}
    </ul>
  

    <form on:submit={handleSubmit}>
        <label>
            Say something...
            <input value={input} on:change={handleInputChange} />
            <button>Send</button>
        </label>
    </form>
</div>