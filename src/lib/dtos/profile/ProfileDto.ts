import type DescriptionDto from "$lib/dtos/profile/DescriptionDto";
import type SkillSectionDto from "$lib/dtos/profile/skills/SkillSectionDto";
import type SocialDto from "$lib/dtos/profile/socials/SocialDto";

export default interface ProfileDto {
	firstName: string;
	lastName: string;
	username: string;
	avatarKey: string;
	description: DescriptionDto;
	skillSections: SkillSectionDto[];
	socials: SocialDto[];
}
