import { inject, injectable } from "inversify";
import type Fetcher from "$lib/network/Fetcher";
import types from "$lib/types";

@injectable()
class FetchFetcher implements Fetcher {
	public readonly baseUrl: string;

	constructor(@inject(types.baseUrl) baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	async get(url: string): Promise<Response> {
		return await fetch(this.baseUrl + url);
	}

	async post(url: string, data: unknown): Promise<Response> {
		const response = await fetch(this.baseUrl + url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		return await response.json();
	}

	async put(url: string, data: unknown): Promise<Response> {
		const response = await fetch(this.baseUrl + url, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		return await response.json();
	}

	async delete(url: string): Promise<Response> {
		const response = await fetch(this.baseUrl + url, {
			method: "DELETE",
		});
		return await response.json();
	}
}

export default FetchFetcher;
