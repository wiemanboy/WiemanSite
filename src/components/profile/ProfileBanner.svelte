<!--
Banner

-->

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		name: string;
	}

	export let name: string;
</script>

<div {...$$restProps}>
	<div class="front-themed rounded border p-2 font-extrabold">
		<div>{name}</div>
	</div>
</div>