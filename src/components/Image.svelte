<!--
Image

This component is a wrapper around the Image component from @unpic/svelte. It is used to display images with a fixed width and height. The image is loaded from the public image base URL with the specified key and size.
The size is used to load a lower quality image for smaller screens. The size is determined by the innerWidth of the window.
-->

<script lang="ts">
	import { Image } from "@unpic/svelte";
	import { env } from "$env/dynamic/public";

	export let alt: string;
	export let key: string;
	export let width: number;
	export let height: number;

	let innerWidth = 0;
	$: size = innerWidth < 640 ? "sm" : innerWidth < 768 ? "md" : innerWidth < 1024 ? "lg" : innerWidth < 1280 ? "xl" : "2xl";
</script>

<svelte:window bind:innerWidth />

<Image
	alt="{alt}"
	class="rounded"
	height="{height}"
	layout="fixed"
	slot="image"
	src="{env.PUBLIC_IMAGE_BASE_URL}/{key}?size={size}"
	width="{width}"
/>
