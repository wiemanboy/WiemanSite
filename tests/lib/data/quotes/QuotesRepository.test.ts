import { injectable } from "inversify";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type QuotesRepository from "$lib/data/quotes/QuotesRepository";
import type QuoteDto from "$lib/dtos/quotes/QuoteDto";
import type Fetcher from "$lib/network/Fetcher";
import types from "$lib/types";
import { container } from "../../../../inversify.config";

/*
Tests if the QuotesRepository class currently implemented is working as expected.
 */

let quotesRepository: QuotesRepository;

@injectable()
class MockFetcher implements Fetcher {
	get = vi.fn().mockReturnValue(
		new Response(
			JSON.stringify({
				id: 1,
				author: "Author",
				quote: "quote",
			} as QuoteDto),
			{}
		)
	);
	post = vi.fn();
	put = vi.fn();
	delete = vi.fn();
}

beforeEach(() => {
	container.rebind(types.fetcher).to(MockFetcher);
	quotesRepository = container.get(types.quotesRepository);
});

describe("QuotesRepository", () => {
	it("gets a quote", async () => {
		const quote = await quotesRepository.getRandomQuote();
		expect(quote).toBeDefined();
	});
});
