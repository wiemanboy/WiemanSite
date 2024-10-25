<!--
SkillItem

Simple component to display a skill in the SkillSection component.
-->

<script lang="ts">
	import type SkillDto from "$lib/dtos/profile/skills/SkillDto";

	interface Props {
		skill: SkillDto;
	}

	let { skill }: Props = $props();

</script>


<div class="p-1 rounded font-semibold card-themed text-nowrap">{skill.name}</div>
