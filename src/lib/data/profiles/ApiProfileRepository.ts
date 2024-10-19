import type ProfileRepository from "$lib/data/profiles/ProfileRepository";
import type ProfileDto from "$lib/dtos/profile/ProfileDto";
import type ApiClient from "$lib/network/ApiClient";

class ApiProfileRepository implements ProfileRepository {
	private apiClient: ApiClient;

	constructor(apiClient: ApiClient) {
		this.apiClient = apiClient;
	}

	async getProfileByName(name: string, locale: string): Promise<ProfileDto> {
		const result = await this.apiClient.get(`/profiles/${name}/${locale}`);
		return result.json();
	}
}

export default ApiProfileRepository;
