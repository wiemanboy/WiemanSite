<script lang="ts">
	import "../app.scss";
	import type { HTMLAttributes } from "svelte/elements";

	type Props = HTMLAttributes<any>

	let { children }: Props = $props();


</script>

<div class="bg-themed min-h-screen">
	{@render children?.()}
</div>
