<!--
	Link
	This is a generic link component that can be used to navigate in the app and to external links.
 -->

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