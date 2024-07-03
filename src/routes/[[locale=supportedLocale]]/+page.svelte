<!-- Home page -->

<script lang="ts">
	import { t } from "svelte-i18n";
	import Profile from "../../components/profile/Profile.svelte";

	const tBase = "page.home.";

</script>

<main class="flex flex-grow flex-col h-screen">
	<Profile class="m-3" name="Jarno Wieman" />
</main>

<svelte:head>
	<title>{$t(tBase + "title")}</title>
</svelte:head>

