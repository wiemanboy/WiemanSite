import type QuoteDto from "$lib/dtos/quotes/QuoteDto";

export default interface QuotesRepository {
	getQuote(id: number): Promise<QuoteDto>;

	getRandomQuote(): Promise<QuoteDto>;
}
