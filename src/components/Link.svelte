<!--
Link

This is a generic link component that can be used to navigate in the app and to external links.
 -->

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";

	interface Props extends HTMLAttributes<HTMLAnchorElement> {
		to: string;
		withLocale?: string;
		undecorated?: boolean;
	}

	let { to, withLocale, undecorated, children, ...props }: Props = $props();
</script>

<a {...props} href="{withLocale}{to}">
	<span class="{undecorated ? '' : 'text-link hover:underline hover:text-link-hover'}">
		{#if children}
			{@render children()}
		{:else}
			{to}
		{/if}
	</span>
</a>