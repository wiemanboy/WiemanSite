<!--
Profile

-->

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { t } from "svelte-i18n";
	import type SkillSectionDto from "$lib/dtos/profile/skills/SkillSectionDto";
	import type SocialDto from "$lib/dtos/profile/socials/SocialDto";
	import SkillsList from "./skills/SkillList.svelte";
	import SocialList from "./socials/SocialList.svelte";

	const tBase = "component.profile.";

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		name: string;
		skills: SkillSectionDto[];
		socials: SocialDto[];
		extraMessage: string | undefined;
	}

	export let name: $$Props["name"];
	export let skills: $$Props["skills"];
	export let socials: $$Props["socials"];
	export let extraMessage: $$Props["extraMessage"];
</script>

<div {...$$restProps}>
	<div class="p-2">
		<div class="text-3xl font-extrabold">
			<div>{$t(tBase + "introduction", { values: { from: extraMessage } })}</div>
			<div>{name}</div>
		</div>
		<div class="flex flex-col md:flex-row-reverse mt-5 gap-3">
			<div class="flex justify-end min-w-72">
				<slot name="image" />
			</div>
			<div class="flex flex-grow flex-col gap-5">
				<div>
					{$t(tBase + "description")}
				</div>
				<div>
					<slot name="extraSection" />
				</div>
				<SkillsList {skills} />
				<SocialList {socials} />
			</div>
		</div>
	</div>
</div>