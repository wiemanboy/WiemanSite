<!--
SocialItem

This component is used to display a single social media link. It is used in the SocialList component.
-->

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { Link } from "$lib/components";
	import type SocialDto from "$lib/dtos/profile/socials/SocialDto";

	interface Props extends HTMLAttributes<HTMLDivElement> {
		social: SocialDto;
	}

	let { social, children, ...props }: Props = $props();
</script>

<div {...props}>
	<span class="inline">
		{@render children?.()}
	</span>
	<Link to={social.url}>{social.username}</Link>
</div>