import { beforeEach, describe, expect, it } from "vitest";
import type Fetcher from "$lib/network/Fetcher";
import types from "$lib/types";
import { container } from "../../../inversify.config";

/*
Tests if the Fetcher class is working as expected.
 */

let fetcher: Fetcher;

beforeEach(() => {
	container.rebind(types.baseUrl).toConstantValue("https://dummyjson.com");
	fetcher = container.get(types.fetcher);
});

describe("Fetcher", () => {
	it("can get data", async () => {
		const response = await fetcher.get("/test");
		expect(response.status).toBe(200);
	});

	it("can post data", async () => {
		const response = await fetcher.post("/test", {});
		expect(response.status).toBe(200);
	});

	it("can put data", async () => {
		const response = await fetcher.put("/test", {});
		expect(response.status).toBe(200);
	});

	it("can delete data", async () => {
		const response = await fetcher.get("/test");
		expect(response.status).toBe(200);
	});
});
