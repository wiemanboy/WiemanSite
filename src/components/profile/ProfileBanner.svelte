<!--
Banner

-->

<script lang="ts">
	import { Image } from "@unpic/svelte";
	import type { HTMLAttributes } from "svelte/elements";

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		name: string;
	}

	export let name: string;
</script>

<div {...$$restProps}>
	<div class="front-themed rounded border p-2 font-extrabold">
		<div class="text-5xl">{name}</div>
		<Image
			alt="A lovely picture of me"
			class="rounded"
			height="{350}"
			layout="fixed"
			src="https://jarnowieman.nl/assets/profile_picture.png"
			width="{300}"
		/>
	</div>
</div>