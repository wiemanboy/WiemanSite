import "reflect-metadata";
import { Container } from "inversify";
import { env } from "$env/dynamic/public";
import ApiProfileRepository from "$lib/data/profiles/ApiProfileRepository";
import FetchApiClient from "$lib/network/FetchApiClient";
import types from "./src/lib/types";

const container = new Container();
container.bind(types.apiClient).toConstantValue(new FetchApiClient(env.PUBLIC_API_BASE_URL));
container
	.bind(types.profileRepository)
	.toConstantValue(new ApiProfileRepository(container.get(types.apiClient)));

export { container };
