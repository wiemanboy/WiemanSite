import type Fetcher from "$lib/network/Fetcher";
import { inject, injectable } from "inversify";
import types from "$lib/types";

@injectable()
class Repository {
	public readonly baseUrl: string;
	public readonly fetcher: Fetcher;

	constructor(@inject(types.baseUrl) baseUrl: string, @inject(types.fetcher) fetcher: Fetcher) {
		this.baseUrl = baseUrl;
		this.fetcher = fetcher;
	}
}

export default Repository;
