<!-- Home page -->

<script lang="ts">
	import { t } from "svelte-i18n";
	import { page } from "$app/stores";
	import Image from "../../components/Image.svelte";
	import Link from "../../components/Link.svelte";
	import Profile from "../../components/profile/Profile.svelte";

	const tBase = "page.home.";

	const skills = [
		{
			title: $t("component.profile.skills.section.programmingLanguages"),
			skills: ["Java", "C#", "Python", "JavaScript", "TypeScript", "php", "html", "css", "scss", "sass"],
		},
		{
			title: $t("component.profile.skills.section.frameworks"),
			skills: ["Spring boot", "ASP.NET Core", "Laravel", "Svelte", "SvelteKit", "React.js", "Next.js", "Vue.js", "Nuxt.js"],
		},
		{
			title: $t("component.profile.skills.section.tools"),
			skills: ["Git", "GitHub", "GitHub Actions", "Docker", "Figma"],
		},
		{
			title: $t("component.profile.skills.section.concepts"),
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

	const ref = $page.url.searchParams.get("ref");
</script>

<main class="flex flex-grow flex-col">
	<Profile class="m-3" extraMessage="{ref ? ref + ' browser' : '' }" name="Jarno Wieman" {skills} {socials}>
		<svelte:fragment slot="extraSection">
			{#if ref && /git|svelte|dev/.test(ref)}
				{$t(tBase + "devMessage")}
				<Link to="https://github.com/wiemanboy/WiemanSite">GitHub</Link>
				.
			{/if}
		</svelte:fragment>
		<Image
			alt="{$t('component.profile.profilePictureAlt')}"
			height="{350}"
			key="profile_picture"
			slot="image"
			width="{300}"
		/>
	</Profile>
</main>

<svelte:head>
	<title>{$t(tBase + "title", { default: "Home" })}</title>
</svelte:head>

