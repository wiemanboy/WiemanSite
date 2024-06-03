import { inject, injectable } from "inversify";
import type ApiClient from "$lib/network/ApiClient";
import types from "$lib/types";

@injectable()
class Repository {
	public readonly apiClient: ApiClient;

	constructor(@inject(types.apiClient) apiClient: ApiClient) {
		this.apiClient = apiClient;
	}
}

export default Repository;
