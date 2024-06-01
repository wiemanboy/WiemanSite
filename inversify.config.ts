import "reflect-metadata";
import { Container } from "inversify";
import { PUBLIC_API_BASE_URL } from "$env/static/public";
import FetchFetcher from "$lib/network/FetchFetcher";
import FetchQuotesRepository from "./src/lib/data/quotes/FetchQuotesRepository";
import types from "./src/lib/types";

const container = new Container();
container.bind(types.baseUrl).toConstantValue(PUBLIC_API_BASE_URL);
container.bind(types.fetcher).to(FetchFetcher);
container.bind(types.quotesRepository).to(FetchQuotesRepository);

export { container };
