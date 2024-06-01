<script lang="ts">
	import { t } from "svelte-i18n";
	import { onMount } from "svelte";
	import { container } from "../../../inversify.config";
	import type QuotesRepository from "$lib/data/quotes/QuotesRepository";
	import types from "$lib/types";
	import type QuoteDto from "$lib/dtos/quotes/QuoteDto";

	const quotesRepository = container.get<QuotesRepository>(types.quotesRepository);

	let quote = {
		quote: "",
		author: "",
	} as QuoteDto;

	onMount(() => {
		quotesRepository.getRandomQuote().then((result) => {
			quote = result;
		});
	});
</script>

<main class="flex flex-col justify-center items-center text-center flex-grow h-screen">
	<h1 class="text-7xl flex">{$t("underConstruction")}!</h1>
	<div class="flex flex-grow flex-col justify-center">
		<div class="front-themed border rounded p-4">
			<div class="font-bold mb-2">{$t("quotes")}:</div>
			<div>{quote.quote}</div>
			<div>- {quote.author}</div>
		</div>
	</div>
</main>
