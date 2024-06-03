<!-- Home page -->

<script lang="ts">
	import { onMount } from "svelte";
	import { t } from "svelte-i18n";
	import type QuotesRepository from "$lib/data/quotes/QuotesRepository";
	import type QuoteDto from "$lib/dtos/quotes/QuoteDto";
	import types from "$lib/types";
	import { container } from "../../../inversify.config";
	import UnderConstruction from "../../components/Placeholder.svelte";

	const quotesRepository = container.get<QuotesRepository>(types.quotesRepository);

	let promise: Promise<QuoteDto>;

	onMount(() => {
		promise = quotesRepository.getRandomQuote();
	});

</script>

<main class="flex flex-grow flex-col h-screen">
	<UnderConstruction class="flex flex-grow flex-col h-max m-5">
		<div class="front-themed rounded border p-4 mx-10 flex flex-col text-center">
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
	</UnderConstruction>
</main>
