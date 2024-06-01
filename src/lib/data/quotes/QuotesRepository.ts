export default interface QuotesRepository {
	getQuote(id: number): Promise<QuoteDto>;
}
