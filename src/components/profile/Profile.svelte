<!--
Profile

-->

<script lang="ts">
	import { Image } from "@unpic/svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { t } from "svelte-i18n";
	import SkillsList from "./skills/SkillList.svelte";
	import SocialList from "./socials/SocialList.svelte";


	const tBase = "component.profile.";

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		name: string;
	}

	export let name: string;

	const skills = [
		{
			title: $t(tBase + "skills.section.programmingLanguages"),
			skills: ["Java", "C#", "Python", "JavaScript", "TypeScript", "php", "html", "css", "scss", "sass"],
		},
		{
			title: $t(tBase + "skills.section.frameworks"),
			skills: ["Spring boot", "ASP.NET Core", "Laravel", "Svelte", "SvelteKit", "React.js", "Next.js", "Vue.js", "Nuxt.js"],
		},
		{
			title: $t(tBase + "skills.section.tools"),
			skills: ["Git", "GitHub", "GitHub Actions", "Docker", "Figma"],
		},
		{
			title: $t(tBase + "skills.section.concepts"),
			skills: ["SOLID", "Xtreme Programming", "CI/CD", "OOP", "TDD", "DDD", "REST", "SCRUM", "Agile"],
		},
	];

	const socials = [
		{
			username: "wiemanboy",
			url: "https://github.com/wiemanboy",
			icon: "github",
		},
		{
			username: "Jarno Wieman",
			url: "https://www.linkedin.com/in/jarnowieman/",
			icon: "linkedin",
		},
		{
			username: "wiemanboy",
			url: "https://stackoverflow.com/users/20792492/wiemanboy",
			icon: "stackoverflow",
		},
		{
			username: "wiemanboy",
			url: "https://www.instagram.com/wiemanboy/",
			icon: "instagram",
		},
		{
			username: "@wiemanboy",
			url: "https://x.com/wiemanboy",
			icon: "twitter",
		},
		{
			username: "wiemanboy",
			url: "https://steamcommunity.com/id/wiemanboy/",
			icon: "steam",
		},
		{
			username: "u/wiemanboy",
			url: "https://www.reddit.com/user/wiemanboy/",
			icon: "reddit",
		},
		{
			username: "r/jarno",
			url: "https://www.reddit.com/r/Jarno/",
			icon: "reddit",
		},
	];
</script>

<div {...$$restProps}>
	<div class="p-2">
		<div class="text-3xl font-extrabold">
			<div>{$t(tBase + "introduction")}</div>
			<div>{name}</div>
		</div>
		<div class="flex flex-col md:flex-row-reverse mt-5 gap-3">
			<div class="flex justify-end min-w-72">
				<Image
					alt="{$t(tBase + 'profilePictureAlt')}"
					class="rounded"
					height="{350}"
					layout="fixed"
					src="https://jarnowieman.nl/assets/profile_picture.png"
					width="{300}"
				/>
			</div>
			<div class="flex flex-grow flex-col gap-5">
				<div>
					{$t(tBase + "description")}
				</div>
				<SkillsList {skills} />
				<SocialList {socials} />
			</div>
		</div>
	</div>
</div>