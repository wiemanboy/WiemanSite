import "reflect-metadata";
import { Container } from "inversify";
import { PUBLIC_API_BASE_URL } from "$env/static/public";
import FetchApiClient from "$lib/network/FetchApiClient";
import FetchQuotesRepository from "./src/lib/data/quotes/FetchQuotesRepository";
import types from "./src/lib/types";

const container = new Container();
container.bind(types.apiClient).toConstantValue(new FetchApiClient(PUBLIC_API_BASE_URL));
container
	.bind(types.quotesRepository)
	.toConstantValue(new FetchQuotesRepository(container.get(types.apiClient)));

export { container };
