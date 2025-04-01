<!--
Image

This component is a wrapper around the Image component from @unpic/svelte. It is used to display images with a fixed width and height. The image is loaded from the public image base URL with the specified key and size.
The size is used to load a lower quality image for smaller screens. The size is determined by the innerWidth of the window.
-->

<script lang="ts">
	import { Image } from "@unpic/svelte";

	interface Props {
		alt: string;
		key: string;
		width: number;
		height: number;
	}

	let { alt, key, width, height }: Props = $props();
</script>

<Image
	{alt}
	class="rounded"
	height={height}
	layout="fixed"
	src="/assets/images/{key}.webp"
	width={width}
/>
