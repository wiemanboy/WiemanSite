<!--
Profile

-->

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { t } from "svelte-i18n";
	import { inview, type ObserverEventDetails } from "svelte-inview";
	import { Hidden } from "$lib/components";

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		title: string;
		content: string;
	}

	export let title: $$Props["title"];
	export let content: $$Props["content"];

	function handleChange({ detail }: CustomEvent<ObserverEventDetails>) {
		inView = detail.inView;
	}

	let inView: boolean;
</script>

<div {...$$restProps}>
	<div
		class:animate-fadein={inView}
		on:inview_change={handleChange}
		use:inview={{unobserveOnEnter: true}}
	>
		<h2 class="text-3xl md:text-6xl font-extrabold">
			<span class="inline-block">{title}</span>
			<span
				class="inline-block -ml-1 md:-ml-3 {inView ? 'animate-[popoutWiggle_0.5s_ease-in-out_1s]' : ''}">?</span>
		</h2>
		<Hidden>{$t("profile.bio.who.jarno") + ":"}</Hidden>
		<Hidden>{$t("profile.bio.who.wiemanboy") + ":"}</Hidden>
		<div class="flex flex-col md:flex-row-reverse mt-5 gap-3">
			<div class="flex justify-end min-w-72">
				<slot name="image" />
			</div>
			<div class="flex flex-grow flex-col gap-5">
				<p class="{inView ? 'animate-[popIn_0.5s_ease-in-out_0.3s_both]' : ''} sm:text-xl">
					{content}
				</p>
				<div>
					<slot name="extraSection" />
				</div>
			</div>
		</div>
	</div>
</div>