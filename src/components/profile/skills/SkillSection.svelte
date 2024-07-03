<!--
SkillSection

Simple component to display a section of skills in the SkillsList component.
It includes a title and a list of skills.
-->

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { t } from "svelte-i18n";
	import type SkillSectionDto from "$lib/dtos/profile/skills/SkillSectionDto";
	import SkillItem from "./SkillItem.svelte";

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		skillSection: SkillSectionDto;
	}

	export let skillSection: $$Props["skillSection"];
</script>

<div>
	<div class="text-md font-bold border-b mb-2 max-w-72 text-nowrap">{$t(skillSection.title)}</div>
	<ul class="flex flex-wrap gap-2">
		{#each skillSection.skills as skill}
			<li>
				<SkillItem {skill} />
			</li>
		{/each}
	</ul>
</div>