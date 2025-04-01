<!-- Home page -->

<script lang="ts">
	import { t } from "svelte-i18n";
	import { Bio, Image, ProfileHeader, SkillList, SocialList } from "$lib/components";
</script>

<main class="flex justify-center">
	<div class="mx-4 flex flex-col gap-2 max-2 max-w-[1500px]">
		<div class="min-h-screen my-2 flex justify-center">
			<ProfileHeader class="flex flex-col justify-center"
						   name={$t("profile.bio.name")} />
		</div>

		<Bio class="min-h-screen flex flex-col justify-center mt-32" content={$t("profile.bio.description")}
			 title={$t('profile.bio.who.i')}>
			{#snippet image()}
				<Image
					alt={$t('profile.bio.profilePictureAlt')}
					height={350}
					key="profile_picture"
					width={300}
				/>
			{/snippet}
		</Bio>

		<SkillList class="mt-56 min-h-screen flex flex-col justify-center" skills={$t("profile.skills.sections")} />

		<div class="flex justify-center mt-56">
			<SocialList class="min-h-screen flex flex-col justify-center text-xl"
						socials={$t("profile.socials.items")} />
		</div>
	</div>
</main>

<svelte:head>
	<title>{$t("page.home.title", { default: "Home" })}</title>
</svelte:head>

