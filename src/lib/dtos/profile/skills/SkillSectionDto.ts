import type SkillDto from "$lib/dtos/profile/skills/SkillDto";

export default interface SkillSectionDto {
	title: string;
	skills: SkillDto[];
}
