import { injectable } from "inversify";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type QuotesRepository from "$lib/data/quotes/QuotesRepository";
import type QuoteDto from "$lib/dtos/quotes/QuoteDto";
import types from "$lib/types";
import { container } from "../../../../inversify.config";

/*
Tests if the QuotesRepository class currently implemented is working as expected.
 */

let quotesRepository: QuotesRepository;
const apiClient = {
	get: vi.fn(),
	post: vi.fn(),
	put: vi.fn(),
	delete: vi.fn(),
};

beforeEach(() => {
	container.rebind(types.apiClient).to(MockApiClient);
	quotesRepository = container.get(types.quotesRepository);
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

@injectable()
class MockApiClient {
	get = apiClient.get;
	post = apiClient.post;
	put = apiClient.put;
	delete = apiClient.delete;
}
