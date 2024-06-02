import { inject, injectable } from "inversify";
import type Fetcher from "$lib/network/Fetcher";
import types from "$lib/types";

@injectable()
class FetchFetcher implements Fetcher {
	public readonly baseUrl: string;

	constructor(@inject(types.baseUrl) baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	get(url: string): Promise<Response> {
		return fetch(this.baseUrl + url);
	}

	post(url: string, data: unknown): Promise<Response> {
		return fetch(this.baseUrl + url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
	}

	put(url: string, data: unknown): Promise<Response> {
		return fetch(this.baseUrl + url, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
	}

	delete(url: string): Promise<Response> {
		return fetch(this.baseUrl + url, {
			method: "DELETE",
		});
	}
}

export default FetchFetcher;
