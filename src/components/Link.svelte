<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		to: string;
	}

	export let to: $$Props["to"];
</script>

<a {...$$restProps} href="{to}">
	<slot />
</a>