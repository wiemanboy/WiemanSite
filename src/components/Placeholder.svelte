<!--
Placeholder

This is a component that will act as a placeholder for components that are not yet implemented.
-->

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { t } from "svelte-i18n";
	import MdiGithub from "virtual:icons/mdi/github.svg";
	import IcRoundConstruction from "~icons/ic/round-construction";
	import Link from "./Link.svelte";

	type Props = HTMLAttributes<HTMLDivElement>

	let { children, ...props }: Props = $props();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const icons = { MdiGithub, IcRoundConstruction };

</script>

<div {...props}>
	<div class="flex flex-grow flex-col p-3 border rounded text-center">
		<div class="flex text-2xl font-extrabold justify-center">{$t("underConstruction")}!</div>
		<IcRoundConstruction
			class="flex flex-grow flex-row h-max w-max text-center mx-auto max-w-72 sm:max-w-full" />
		{@render children?.()}
		<Link
			class="flex mx-auto mt-2"
			to="https://github.com/wiemanboy/personal-website/tree/dev/"
		>
			{$t("sourceCode.linkToMessage")}
			<MdiGithub class="inline" />
		</Link>
	</div>
</div>