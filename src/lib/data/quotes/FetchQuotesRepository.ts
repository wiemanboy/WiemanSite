import Repository from "$lib/data/Repository";
import type QuotesRepository from "$lib/data/quotes/QuotesRepository";
import { injectable } from "inversify";

@injectable()
class FetchQuotesRepository extends Repository implements QuotesRepository {
	async getQuote(id: number): Promise<QuoteDto> {
		const result = await this.fetcher.get(`${this.baseUrl}/quote/${id}`);
		return await result.json();
	}
}

export default FetchQuotesRepository;
