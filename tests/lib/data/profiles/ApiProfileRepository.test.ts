import { beforeEach, describe, expect, it, vi } from "vitest";
import ApiProfileRepository from "$lib/data/profiles/ApiProfileRepository";
import type DescriptionDto from "$lib/dtos/profile/DescriptionDto";
import type ProfileDto from "$lib/dtos/profile/ProfileDto";

let apiProfileRepository: ApiProfileRepository;

const mockApiClient = {
	get: vi.fn(),
	post: vi.fn(),
	put: vi.fn(),
	delete: vi.fn(),
};

beforeEach(() => {
	apiProfileRepository = new ApiProfileRepository(mockApiClient);
});

describe("ApiProfileRepository", () => {
	it("should be defined", async () => {
		mockApiClient.get.mockReturnValueOnce(
			new Response(
				JSON.stringify([
					{
						id: "id",
						firstName: "name",
						lastName: "name",
						username: "name",
						avatarKey: "key",
						description: {
							content: "content",
							title: "title",
						} as DescriptionDto,
						skillSections: [],
						socials: [],
					} as ProfileDto,
				]),
				{}
			)
		);

		const profile = await apiProfileRepository.getProfileByName("name", "locale");
		expect(profile).toBeDefined();
	});
});
