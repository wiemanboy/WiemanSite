import "reflect-metadata";
import { Container } from "inversify";
import { PUBLIC_API_BASE_URL } from "$env/static/public";
import FetchApiClient from "$lib/network/FetchApiClient";
import FetchQuotesRepository from "./src/lib/data/quotes/FetchQuotesRepository";
import types from "./src/lib/types";

const container = new Container();
container.bind(types.baseUrl).toConstantValue(PUBLIC_API_BASE_URL);
container.bind(types.apiClient).to(FetchApiClient);
container.bind(types.quotesRepository).to(FetchQuotesRepository);

export { container };
