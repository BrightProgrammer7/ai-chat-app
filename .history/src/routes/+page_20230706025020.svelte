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
<p>Visit <a href="https://kit.svelte.dev">bri</a> to read the documentation</p>

<div>
    {messages.map((m) => (
        <div key={m.id}>
            {m.role}: {m.content}
        </div>
    ))}

    <form onSubmit={handleSubmit}>
        <label>
            Say something...
            <input value={input} onChange={handleInputChange} />
        </label>
    </form>
</div>