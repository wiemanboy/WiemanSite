<!--
SocialList

-->

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { t } from "svelte-i18n";
	import LinkedinIcon from "~icons/devicon/linkedin";
	import StackoverflowIcon from "~icons/devicon/stackoverflow";
	import RedditIcon from "~icons/logos/reddit-icon";
	import GitHubIcon from "~icons/mdi/github";
	import InstagramIcon from "~icons/mdi/instagram";
	import SteamIcon from "~icons/mdi/steam";
	import TwitterIcon from "~icons/ri/twitter-x-fill";
	import type SocialDto from "$lib/dtos/profile/socials/SocialDto";
	import SocialItem from "./SocialItem.svelte";

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		socials: SocialDto[];
	}

	export let socials: $$Props["socials"];

	const iconClass = "inline";
</script>

<div {...$$restProps}>
	<div class="text-xl font-bold">{$t("profile.socials.title")}:</div>
	<ul class="flex flex-row flex-wrap max-w-[740px]">
		{#each socials as social}
			<li class=" basis-1/2 sm:basis-1/3 lg:basis-1/4">
				<SocialItem {social}>
					{#if social.icon === "github"}
						<GitHubIcon class="{iconClass}" />
					{:else if social.icon === "linkedin"}
						<LinkedinIcon class="{iconClass}" />
					{:else if (social.icon === "twitter")}
						<TwitterIcon class="{iconClass}" />
					{:else if (social.icon === "instagram")}
						<InstagramIcon class="{iconClass}" />
					{:else if (social.icon === "reddit")}
						<RedditIcon class="{iconClass}" />
					{:else if (social.icon === "steam")}
						<SteamIcon class="{iconClass}" />
					{:else if (social.icon === "stackoverflow")}
						<StackoverflowIcon class="{iconClass}" />
					{:else}
						{social.icon}
					{/if}

				</SocialItem>
			</li>
		{/each}
	</ul>
</div>