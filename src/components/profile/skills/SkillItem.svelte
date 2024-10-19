<!--
SkillItem

Simple component to display a skill in the SkillSection component.
-->

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import type SkillDto from "$lib/dtos/profile/skills/SkillDto";

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		skill: SkillDto;
	}

	export let skill: $$Props["skill"];
</script>


<div class="p-1 rounded font-semibold card-themed text-nowrap">{skill.name}</div>
