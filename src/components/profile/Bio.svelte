<!--
Profile

-->

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { inview, type ObserverEventDetails } from "svelte-inview";

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
		<div class="text-3xl md:text-6xl font-extrabold">
			<div>{title}</div>
		</div>
		<div class="flex flex-col md:flex-row-reverse mt-5 gap-3">
			<div class="flex justify-end min-w-72">
				<slot name="image" />
			</div>
			<div class="flex flex-grow flex-col gap-5">
				<div>
					{content}
				</div>
				<div>
					<slot name="extraSection" />
				</div>
			</div>
		</div>
	</div>
</div>