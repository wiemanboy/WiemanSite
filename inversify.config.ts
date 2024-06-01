import "reflect-metadata";
import { Container } from "inversify";
import DataTypes from "./src/lib/types";
import FetchQuotesRepository from "./src/lib/data/quotes/FetchQuotesRepository";
import FetchFetcher from "$lib/network/FetchFetcher";
import { PUBLIC_API_BASE_URL } from "$env/static/public";

const container = new Container();
container.bind(DataTypes.baseUrl).toConstantValue(PUBLIC_API_BASE_URL);
container.bind(DataTypes.fetcher).to(FetchFetcher);
container.bind(DataTypes.quotesRepository).to(FetchQuotesRepository);

export { container };
