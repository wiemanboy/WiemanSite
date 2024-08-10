<!--
SkillList

Simple component to display a list of skills in the Profile component.
Skills are grouped by sections.
-->

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { t } from "svelte-i18n";
	import { inview, type ObserverEventDetails } from "svelte-inview";
	import type SkillSectionDto from "$lib/dtos/profile/skills/SkillSectionDto";
	import SkillSection from "./SkillSection.svelte";

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		skills: SkillSectionDto[];
	}

	export let skills: $$Props["skills"];

	function handleChange({ detail }: CustomEvent<ObserverEventDetails>) {
		inView = detail.inView;
	}

	let inView: boolean;
</script>

<div {...$$restProps}
	 class:animate-fadein={inView}
	 on:inview_change={handleChange}
	 use:inview={{unobserveOnEnter: true}}
>
	<div class="text-3xl md:text-6xl font-bold">{$t("profile.skills.title")}:</div>
	<ul class="flex flex-col lg:flex-row gap-5 mt-5">
		{#each skills as skillSection, index}
			<li style={inView ? `animation: fadeIn 1s ease-in-out ${index * 0.3 + 0.5}s backwards;` : ''}>
				<SkillSection {skillSection} />
			</li>
		{/each}
	</ul>
</div>