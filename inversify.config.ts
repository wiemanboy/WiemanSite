import "reflect-metadata";
import { Container } from "inversify";
import FetchApiClient from "$lib/network/FetchApiClient";
import types from "./src/lib/types";

const container = new Container();
container.bind(types.apiClient).toConstantValue(new FetchApiClient("https://dummyjson.com"));

export { container };
