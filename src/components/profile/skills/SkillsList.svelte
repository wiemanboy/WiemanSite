<!--
SkillsList

Simple component to display a list of skills in the Profile component.
-->

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { t } from "svelte-i18n";
	import type SkillSectionDto from "$lib/dtos/profile/skills/SkillSectionDto";
	import SkillSection from "./SkillSection.svelte";

	const tBase = "component.profile.skills.";

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		skills: SkillSectionDto[];
	}

	export let skills: SkillSectionDto[];

</script>

<div>
	<div class="text-xl font-bold">{$t(tBase + "title")}:</div>
	<ul class="flex flex-col lg:flex-row gap-5">
		{#each skills as skillSection}
			<li>
				<SkillSection {skillSection} />
			</li>
		{/each}
	</ul>
</div>