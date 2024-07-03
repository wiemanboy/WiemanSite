<!-- Home page -->

<script lang="ts">
	import { t } from "svelte-i18n";
	import ProfileBanner from "../../components/profile/ProfileBanner.svelte";

	const tBase = "page.home.";

</script>

<main class="flex flex-grow flex-col h-screen">
	<ProfileBanner class="m-3" name="Jarno Wieman" />
</main>

<svelte:head>
	<title>{$t(tBase + "title")}</title>
</svelte:head>

