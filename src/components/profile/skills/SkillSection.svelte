<!--
SkillSection

Simple component to display a section of skills in the SkillsList component.
It includes a title and a list of skills.
-->

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { t } from "svelte-i18n";
	import { SkillItem } from "$lib/components";
	import type SkillSectionDto from "$lib/dtos/profile/skills/SkillSectionDto";

	interface Props extends HTMLAttributes<HTMLDivElement> {
		skillSection: SkillSectionDto;
	}

	let { skillSection, ...props }: Props = $props();
</script>

<div {...props}>
	<div class="text-md font-bold border-b mb-2 max-w-72 text-nowrap text-xl">{$t(skillSection.title)}</div>
	<ul class="flex flex-wrap gap-2">
		{#each skillSection.skills as skill}
			<li>
				<SkillItem {skill} />
			</li>
		{/each}
	</ul>
</div>