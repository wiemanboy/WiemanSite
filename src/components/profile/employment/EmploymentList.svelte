<!--
EmploymentList

-->

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import type EmploymentDTO from "$lib/dtos/profile/employment/EmploymentDTO";
	import EmploymentItem from "./EmploymentItem.svelte";

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		employments: EmploymentDTO[];
	}

	export let employments: $$Props["employments"];
</script>

<div {...$$restProps}>
	<div>
		<h2 class="text-3xl md:text-6xl font-bold">Employment:</h2>
		<ul class="flex flex-col lg:flex-row gap-5 mt-5 ">
			{#each employments as employment}
				<li>
					<EmploymentItem {employment} />
				</li>
			{/each}
		</ul>
	</div>
</div>