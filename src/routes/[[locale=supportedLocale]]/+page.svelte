<!-- Home page -->

<script lang="ts">
	import { t } from "svelte-i18n";
	import { page } from "$app/stores";
	import { Bio, Image, Loading, ProfileHeader, SkillList, SocialList } from "$lib/components";
	import container from "$lib/container";
	import type ProfileRepository from "$lib/data/profiles/ProfileRepository";
	import type ProfileDto from "$lib/dtos/profile/ProfileDto";
	import types from "$lib/types";

	let locale = $page.params.locale;
	const profileRepository = container.get<ProfileRepository>(types.profileRepository);
	const profile: Promise<ProfileDto> = profileRepository.getProfileByName("wiemanboy", locale || "en");
</script>

<main class="flex justify-center">
	{#await profile}
		<div class="h-screen w-screen flex flex-col justify-center">
			<div class="flex justify-center text-6xl">
				<Loading />
			</div>
		</div>
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

