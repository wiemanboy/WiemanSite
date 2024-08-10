<!--
Header

-->

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { t } from "svelte-i18n";

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		name: string;
	}

	export let name: $$Props["name"];
</script>

<div {...$$restProps}>
	<div class="p-2">
		<div>{$t("profile.bio.introduction")}</div>
		<div>{name}</div>
	</div>
</div>