<!-- Home page -->

<script lang="ts">
	import { onMount } from "svelte";
	import { t } from "svelte-i18n";
	import MdiGithub from "virtual:icons/mdi/github";
	import type QuotesRepository from "$lib/data/quotes/QuotesRepository";
	import type QuoteDto from "$lib/dtos/quotes/QuoteDto";
	import types from "$lib/types";
	import { container } from "../../../inversify.config";
	import Link from "../../components/Link.svelte";

	const quotesRepository = container.get<QuotesRepository>(types.quotesRepository);

	let promise: Promise<QuoteDto>;

	onMount(() => {
		promise = quotesRepository.getRandomQuote();
	});

</script>

<main class="flex h-screen flex-grow flex-col items-center justify-center text-center">
	<h1 class="flex text-4xl sm:text-7xl">{$t("underConstruction")}!</h1>
	<div class="mx-2 flex flex-grow flex-col justify-center">
		<div class="front-themed rounded border p-4">
			<div class="mb-2 font-bold">{$t("quotes.message")}:</div>
			{#await promise}
				<div>{$t("quotes.loading")}...</div>
			{:then quote}
				{#if quote !== undefined}
					<div class="lowercase">{quote.quote}</div>
					<div>- {quote.author}</div>
				{/if}
			{:catch error}
				<div>{$t("quotes.error")}!</div>
				<div class="underline">{error.message}</div>
			{/await}
		</div>
		<Link
			class="flex justify-center"
			to="https://github.com/wiemanboy"
			undecorated
		>
			<MdiGithub />
		</Link>
	</div>
</main>
