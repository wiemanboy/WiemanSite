<!--
ProfileHeader

This component is the header of the profile page. It contains the name of the profile.
-->

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { t } from "svelte-i18n";
	import { inview, type ObserverEventDetails } from "svelte-inview";

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		name: string;
	}

	export let name: $$Props["name"];

	function handleChange({ detail }: CustomEvent<ObserverEventDetails>) {
		inView = detail.inView;
	}

	let inView: boolean;
</script>

<div {...$$restProps}>
	<div
		class="flex flex-col"
		class:animate-fadein={inView}
		on:inview_change={handleChange}
		use:inview={{unobserveOnEnter: true}}
	>
		<h1 class="text-4xl md:text-7xl lg:text-8xl font-extrabold"
			class:animate-fadein={inView}
		>
			<span
				class="inline-block {inView ? 'animate-[popoutWiggle_1s_ease-in-out_0.6s]' : ''}">{$t("profile.bio.hello")}</span>
			<span class="inline-block -ml-3 md:-ml-5">, {$t("profile.bio.introduction")}</span>
		</h1>
		<div
			class="text-3xl md:text-6xl lg-text=8xl font-extrabold {inView ? 'animate-[fromRight_0.3s_ease-in-out_2s_both]' : ''}"
		>
			{name}
		</div>
		<small
			class="text-lg md:text-2xl font-bold text-center flex grow justify-center mt-12 text-subtle-light dark:text-subtle-dark {inView ? 'animate-[popIn_0.5s_ease-in-out_2.5s_both]' : ''}"
		>
			{$t("profile.bio.subtitle")}
		</small>
	</div>
</div>