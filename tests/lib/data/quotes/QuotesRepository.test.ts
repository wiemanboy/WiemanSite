import "reflect-metadata";
import { beforeEach, describe, expect, it, vi } from "vitest";
import FetchQuotesRepository from "$lib/data/quotes/FetchQuotesRepository";
import type QuotesRepository from "$lib/data/quotes/QuotesRepository";
import type QuoteDto from "$lib/dtos/quotes/QuoteDto";

/*
Tests if the QuotesRepository class is working as expected.
 */

let quotesRepository: QuotesRepository;
const apiClient = {
	get: vi.fn(),
	post: vi.fn(),
	put: vi.fn(),
	delete: vi.fn(),
};

beforeEach(() => {
	quotesRepository = new FetchQuotesRepository(apiClient);
});

describe("QuotesRepository", () => {
	it("gets a quote", async () => {
		// prettier-ignore
		apiClient.get.mockReturnValueOnce(new Response(JSON.stringify({
			id: 1,
			author: "Author",
			quote: "quote",
		} as QuoteDto), {}));

		const quote = await quotesRepository.getRandomQuote();
		expect(quote).toBeDefined();
	});
});
