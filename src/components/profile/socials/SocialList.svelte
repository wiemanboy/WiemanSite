<!--
SocialList

-->

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { t } from "svelte-i18n";
	import { inview, type ObserverEventDetails } from "svelte-inview";
	import type SocialDto from "$lib/dtos/profile/socials/SocialDto";
	import Hidden from "../../Hidden.svelte";
	import SocialItem from "./SocialItem.svelte";


	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		socials: SocialDto[];
	}

	export let socials: $$Props["socials"];

	const iconClass = "inline";

	function handleChange({ detail }: CustomEvent<ObserverEventDetails>) {
		inView = detail.inView;
	}

	let inView: boolean;
</script>

<div {...$$restProps}
	 class:animate-fadein={inView}
	 on:inview_change={handleChange}
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
						{#if social.icon === "github"}
							<GitHubIcon class="{iconClass}" aria-label="GitHub icon" />
						{:else if social.icon === "linkedin"}
							<LinkedinIcon class="{iconClass}" aria-label="Linkedin icon" />
						{:else if (social.icon === "twitter")}
							<TwitterIcon class="{iconClass}" aria-label="Twitter/X icon" />
						{:else if (social.icon === "instagram")}
							<InstagramIcon class="{iconClass}" aria-label="Instagram icon" />
						{:else if (social.icon === "reddit")}
							<RedditIcon class="{iconClass}" aria-label="Reddit icon" />
						{:else if (social.icon === "steam")}
							<SteamIcon class="{iconClass}" aria-label="Reddit icon" />
						{:else if (social.icon === "stackoverflow")}
							<StackoverflowIcon class="{iconClass}" aria-label="Stackoverflow icon" />
						{:else}
							{social.icon}
						{/if}

					</SocialItem>
				</li>
			{/each}
		</ul>
	</div>
</div>