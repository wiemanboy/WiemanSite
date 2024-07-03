<!--
SkillItem

Simple component to display a skill in the SkillSection component.
-->

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		skill: string;
	}

	export let skill: $$Props["skill"];
</script>


<div class="p-1 rounded text-sm font-semibold card-themed text-nowrap">{skill}</div>
