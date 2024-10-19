import type ProfileDto from "$lib/dtos/profile/ProfileDto";

export default interface ProfileRepository {
	getProfileByName(name: string, locale: string): Promise<ProfileDto>;
}
