<!-- Home page -->

<script lang="ts">
	import { t } from "svelte-i18n";
	import type EmploymentDTO from "$lib/dtos/profile/employment/EmploymentDTO";
	import type SkillSectionDto from "$lib/dtos/profile/skills/SkillSectionDto";
	import type SocialDto from "$lib/dtos/profile/socials/SocialDto";
	import Image from "../../components/Image.svelte";
	import Bio from "../../components/profile/Bio.svelte";
	import EmploymentList from "../../components/profile/employment/EmploymentList.svelte";
	import ProfileHeader from "../../components/profile/ProfileHeader.svelte";
	import SkillList from "../../components/profile/skills/SkillList.svelte";
	import SocialList from "../../components/profile/socials/SocialList.svelte";

	const skills: SkillSectionDto[] = [
		{
			title: $t("profile.skills.section.programmingLanguages"),
			skills: ["Java", "C#", "Golang", "Bash", "Python", "JavaScript", "TypeScript", "php", "html", "css", "scss", "sass"],
		},
		{
			title: $t("profile.skills.section.frameworks"),
			skills: ["Spring boot", "ASP.NET Core", "Gin", "Laravel", "Svelte", "SvelteKit", "React.js", "Next.js", "Vue.js", "Nuxt.js"],
		},
		{
			title: $t("profile.skills.section.tools"),
			skills: ["Docker", "Docker Swarm", "Git", "GitHub", "GitHub Actions", "Postman", "Swagger", "Figma"],
		},
		{
			title: $t("profile.skills.section.concepts"),
			skills: ["SOLID", "Xtreme Programming", "CI/CD", "OOP", "TDD", "DDD", "REST", "SCRUM", "Agile", "Observability"],
		},
	];

	const employments: EmploymentDTO[] = [
		{
			company: "HU",
			position: "Software Developer",
			startDate: "2021",
			endDate: "2025",
			active: true,
			imageKey: "employment/hu",
		},
		{
			company: "Depositado",
			position: "Student",
			startDate: "2023",
			endDate: "NOW",
			active: true,
			imageKey: "employment/depositado",
		},
	];

	const socials: SocialDto[] = [
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

<main class="flex justify-center">
	<div class="mx-4 flex flex-col gap-2 max-2 max-w-[1500px]">
		<div class="min-h-screen my-2 flex justify-center">
			<ProfileHeader class="flex flex-col justify-center" name="Jarno Wieman" />
		</div>

		<Bio class="min-h-screen flex flex-col justify-center mt-32" content="{$t('profile.bio.description')}"
			 title="{$t('profile.bio.who.i')}">
			<Image
				alt="{$t('profile.bio.profilePictureAlt')}"
				height="{350}"
				key="profile_picture"
				slot="image"
				width="{300}"
			/>
		</Bio>

		<SkillList class="mt-56 min-h-screen flex flex-col justify-center" {skills} />

		<EmploymentList {employments} />

		<div class="flex justify-center mt-56">
			<SocialList class="min-h-screen flex flex-col justify-center text-xl" {socials} />
		</div>
	</div>
</main>

<svelte:head>
	<title>{$t("page.home.title", { default: "Home" })}</title>
</svelte:head>

