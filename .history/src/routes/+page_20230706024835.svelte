<script lang="ts">
	import { useChat } from 'ai/svelte';

	// export default function Chat() {
		const { messages, input, handleInputChange, handleSubmit } = useChat(
            api: 
        );

		return (
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
		);
	// }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
