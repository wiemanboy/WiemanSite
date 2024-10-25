<!--
SocialList

This component is used to display a list of social media links. It uses the SocialItem component to display each individual link.
-->

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { t } from "svelte-i18n";
	import { inview, type ObserverEventDetails } from "svelte-inview";
	import LinkedinIcon from "~icons/devicon/linkedin";
	import StackoverflowIcon from "~icons/devicon/stackoverflow";
	import RedditIcon from "~icons/logos/reddit-icon";
	import GitHubIcon from "~icons/mdi/github";
	import InstagramIcon from "~icons/mdi/instagram";
	import SteamIcon from "~icons/mdi/steam";
	import TwitterIcon from "~icons/ri/twitter-x-fill";
	import { Hidden, SocialItem } from "$lib/components";
	import type SocialDto from "$lib/dtos/profile/socials/SocialDto";

	interface Props extends HTMLAttributes<HTMLDivElement> {
		socials: SocialDto[];
	}

	let { socials, ...props }: Props = $props();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const icons = { LinkedinIcon, StackoverflowIcon, RedditIcon, GitHubIcon, InstagramIcon, SteamIcon, TwitterIcon };
	const iconClass = "inline";
	let inView: boolean = $state(false);

	function handleChange({ detail }: CustomEvent<ObserverEventDetails>) {
		inView = detail.inView;
	}
</script>

<div {...props}
	 class:animate-fadein={inView}
	 oninview_change={handleChange}
	 use:inview={{unobserveOnEnter: true}}
>
	<div>
		<h2 class="text-3xl md:text-6xl font-bold">{$t("profile.socials.title")}:</h2>
		<div class="hidden animate-[popIn]"></div>
		<Hidden>{$t("profile.socials.links.jarno") + ":"}</Hidden>
		<Hidden>{$t("profile.socials.links.wiemanboy") + ":"}</Hidden>
		<ul class="flex flex-row flex-wrap max-w-[740px] mt-5 text-sm sm:text-xl">
			{#each socials as social, index}
				<li class=" basis-1/2 sm:basis-1/3 lg:basis-1/4"
					style={inView ? `animation: popIn 0.5s ease-in-out ${index * 0.1 + 0.5}s backwards;` : ''}
				>
					<SocialItem {social}>
						{#if social.platform === "github"}
							<GitHubIcon class={iconClass} aria-label="GitHub icon" />
						{:else if social.platform === "linkedin"}
							<LinkedinIcon class={iconClass} aria-label="Linkedin icon" />
						{:else if (social.platform === "twitter")}
							<TwitterIcon class={iconClass} aria-label="Twitter/X icon" />
						{:else if (social.platform === "instagram")}
							<InstagramIcon class={iconClass} aria-label="Instagram icon" />
						{:else if (social.platform === "reddit")}
							<RedditIcon class={iconClass} aria-label="Reddit icon" />
						{:else if (social.platform === "steam")}
							<SteamIcon class={iconClass} aria-label="Reddit icon" />
						{:else if (social.platform === "stackoverflow")}
							<StackoverflowIcon class={iconClass} aria-label="Stackoverflow icon" />
						{:else}
							{social.platform}
						{/if}
					</SocialItem>
				</li>
			{/each}
		</ul>
	</div>
</div>