<!--
EmploymentItem

-->

<script lang="ts">
	import type EmploymentDTO from "$lib/dtos/profile/employment/EmploymentDTO";
	import Image from "../../Image.svelte";

	export let employment: EmploymentDTO;
</script>

<div>
	<Image alt="{employment.company}" height="{100}" key="{employment.imageKey}" width="{100}" />
	<h3>{employment.company}</h3>
</div>