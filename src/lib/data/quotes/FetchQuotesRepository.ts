import { injectable } from "inversify";
import type QuotesRepository from "$lib/data/quotes/QuotesRepository";
import type QuoteDto from "$lib/dtos/quotes/QuoteDto";
import type ApiClient from "$lib/network/ApiClient";

@injectable()
class FetchQuotesRepository implements QuotesRepository {
	private apiClient: ApiClient;

	constructor(apiClient: ApiClient) {
		this.apiClient = apiClient;
	}

	async getQuote(id: number): Promise<QuoteDto> {
		const result = await this.apiClient.get(`/quote/${id}`);
		return result.json();
	}

	async getRandomQuote(): Promise<QuoteDto> {
		const result = await this.apiClient.get(`/quote/${Math.floor(Math.random() * 100)}`);
		return result.json();
	}
}

export default FetchQuotesRepository;
