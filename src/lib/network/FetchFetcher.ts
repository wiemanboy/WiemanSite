import type Fetcher from "$lib/network/Fetcher";
import { injectable } from "inversify";

@injectable()
class FetchFetcher implements Fetcher {
	async get(url: string): Promise<Response> {
		return await fetch(url);
	}

	async post(url: string, data: unknown): Promise<Response> {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		return await response.json();
	}

	async put(url: string, data: unknown): Promise<Response> {
		const response = await fetch(url, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		return await response.json();
	}

	async delete(url: string): Promise<Response> {
		const response = await fetch(url, {
			method: "DELETE",
		});
		return await response.json();
	}
}

export default FetchFetcher;
