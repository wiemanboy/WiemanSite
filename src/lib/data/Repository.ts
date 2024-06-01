import { inject, injectable } from "inversify";
import type Fetcher from "$lib/network/Fetcher";
import types from "$lib/types";

@injectable()
class Repository {
	public readonly fetcher: Fetcher;

	constructor(@inject(types.fetcher) fetcher: Fetcher) {
		this.fetcher = fetcher;
	}
}

export default Repository;
