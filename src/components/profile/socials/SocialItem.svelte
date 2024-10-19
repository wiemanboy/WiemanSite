<!--
SocialItem

-->

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { Link } from "$lib/components";
	import type SocialDto from "$lib/dtos/profile/socials/SocialDto";

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