<script lang="ts">
	import { count } from "./store.ts";
	// biome-ignore lint/style/useConst: <explanation>
	let name = $state("Jesse");
</script>

<h1 class="text-3xl font-bold underline">Hello, {name}</h1>
<input
	type="text"
	class="input input-bordered w-full max-w-xs"
	bind:value={name}
	onchange={() => {
		if (name.length <= 0) {
			name = "Jesse";
		}
	}}
/>
<h2 class="text-2xl">Count: {$count}</h2>
<button
	class="btn btn-primary"
	onclick={() => {
		count.value += 1;
		localStorage.setItem("count", count.value.toString());
	}}>Increment</button
>
