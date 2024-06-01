import "$lib/i18n";
import { locale, waitLocale } from "svelte-i18n";
import { browser } from "$app/environment";
import type { LayoutLoad } from "../../.svelte-kit/types/src/routes/$types";

export const load: LayoutLoad = async () => {
	if (browser) {
		locale.set(window.navigator.language);
	}
	await waitLocale();
};
