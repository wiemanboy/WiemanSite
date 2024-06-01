import { injectable } from "inversify";
import type QuotesRepository from "$lib/data/quotes/QuotesRepository";
import Repository from "$lib/data/Repository";
import type QuoteDto from "$lib/dtos/quotes/QuoteDto";

@injectable()
class FetchQuotesRepository extends Repository implements QuotesRepository {
	async getQuote(id: number): Promise<QuoteDto> {
		const result = await this.fetcher.get(`/quote/${id}`);
		return result.json();
	}

	async getRandomQuote(): Promise<QuoteDto> {
		const result = await this.fetcher.get(`/quote/${Math.floor(Math.random() * 100)}`);
		return result.json();
	}
}

export default FetchQuotesRepository;
