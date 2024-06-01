<script lang="ts">
	import { t } from "svelte-i18n";
	import { onMount } from "svelte";
	import { container } from "../../../inversify.config";
	import type QuotesRepository from "$lib/data/quotes/QuotesRepository";
	import types from "$lib/types";

	const quotesRepository = container.get<QuotesRepository>(types.quotesRepository);

	let quote = "";

	onMount(() => {
		quotesRepository.getQuote(1).then((result) => {
			console.log(result);
			quote = result.quote;
		});
	})
</script>

<h1>{$t("language")}</h1>
<p>Visit <a class="text-link dark:text-link-light hover:text-link-hover dark:hover:text-link-light-hover" href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div>Quote: {quote}</div>
