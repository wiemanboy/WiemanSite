<!--
Link

This is a generic link component that can be used to navigate in the app and to external links.
 -->

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		to: string;
		withLocale?: string;
		undecorated?: boolean;
	}

	export let to: $$Props["to"];
	export let withLocale: $$Props["withLocale"] = "";
	export let undecorated: $$Props["undecorated"] = false;
</script>

<a {...$$restProps} href="{withLocale}{to}">
	<span class="{undecorated ? '' : 'text-link hover:underline hover:text-link-hover'}">
		<slot>{to}</slot>
	</span>
</a>