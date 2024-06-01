<script lang="ts">
	import { onMount } from "svelte";
	import { t } from "svelte-i18n";
	import type QuotesRepository from "$lib/data/quotes/QuotesRepository";
	import type QuoteDto from "$lib/dtos/quotes/QuoteDto";
	import types from "$lib/types";
	import { container } from "../../../inversify.config";

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

<main class="flex h-screen flex-grow flex-col items-center justify-center text-center">
	<h1 class="flex text-7xl">{$t("underConstruction")}!</h1>
	<div class="flex flex-grow flex-col justify-center">
		<div class="front-themed rounded border p-4">
			<div class="mb-2 font-bold">{$t("quotes")}:</div>
			<div>{quote.quote}</div>
			<div>- {quote.author}</div>
		</div>
	</div>
</main>
