<!--
Profile

-->

<script lang="ts">
	import { Image } from "@unpic/svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { t } from "svelte-i18n";

	const tBase = "component.profile.";

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		name: string;
	}

	export let name: string;
</script>

<div {...$$restProps}>
	<div class="p-2">
		<div class="text-3xl font-extrabold">
			<div>{$t(tBase + "introduction")}</div>
			<div>{name}</div>
		</div>
		<div class="flex flex-col md:flex-row-reverse mt-5">
			<div class="flex flex-grow justify-end">
				<Image
					alt="{$t(tBase + 'profilePictureAlt')}"
					class="rounded"
					height="{350}"
					layout="fixed"
					src="https://jarnowieman.nl/assets/profile_picture.png"
					width="{300}"
				/>
			</div>
			<div class="flex flex-col text-xl font-bold">
				<div>{$t(tBase + "skills.title")}:</div>
				<div>{$t(tBase + "socials.title")}:</div>
			</div>
		</div>
	</div>
</div>