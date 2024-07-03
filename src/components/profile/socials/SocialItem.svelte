<!--
SocialItem

-->

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import type SocialDto from "$lib/dtos/profile/socials/SocialDto";
	import Link from "../../Link.svelte";

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		social: SocialDto;
	}

	export let social: $$Props["social"];
</script>

<div>
	<span class="inline">
		<slot />
	</span>
	<Link to="{social.url}">{social.username}</Link>
</div>