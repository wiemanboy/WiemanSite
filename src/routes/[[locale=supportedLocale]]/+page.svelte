<!-- Home page -->

<script lang="ts">
	import { t } from "svelte-i18n";
	import { page } from "$app/stores";
	import { container } from "$lib/container";
	import type ProfileRepository from "$lib/data/profiles/ProfileRepository";
	import type ProfileDto from "$lib/dtos/profile/ProfileDto";
	import types from "$lib/types";
	import Image from "../../components/Image.svelte";
	import Bio from "../../components/profile/Bio.svelte";
	import ProfileHeader from "../../components/profile/ProfileHeader.svelte";
	import SkillList from "../../components/profile/skills/SkillList.svelte";
	import SocialList from "../../components/profile/socials/SocialList.svelte";

	let locale = $page.params.locale;
	const profileRepository = container.get<ProfileRepository>(types.profileRepository);
	const profile: Promise<ProfileDto> = profileRepository.getProfileByName("wiemanboy", locale || "en");
</script>

<main class="flex justify-center">
	{#await profile}
		<div>Loading...</div>
	{:then profile}
		<div class="mx-4 flex flex-col gap-2 max-2 max-w-[1500px]">
			<div class="min-h-screen my-2 flex justify-center">
				<ProfileHeader class="flex flex-col justify-center"
							   name="{`${profile.firstName} ${profile.lastName}`}" />
			</div>

			<Bio class="min-h-screen flex flex-col justify-center mt-32" content="{profile.description.content}"
				 title="{$t('profile.bio.who.i')}">
				<Image
					alt="{$t('profile.bio.profilePictureAlt')}"
					height="{350}"
					key="profile_picture"
					slot="image"
					width="{300}"
				/>
			</Bio>

			<SkillList class="mt-56 min-h-screen flex flex-col justify-center" skills="{profile.skillSections}" />

			<div class="flex justify-center mt-56">
				<SocialList class="min-h-screen flex flex-col justify-center text-xl" socials="{profile.socials}" />
			</div>
		</div>
	{:catch error}
		<div>{error.message}</div>
	{/await}
</main>

<svelte:head>
	<title>{$t("page.home.title", { default: "Home" })}</title>
</svelte:head>

