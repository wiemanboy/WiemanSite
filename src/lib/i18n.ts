import { getLocaleFromPathname, init, register } from "svelte-i18n";
import LocaleTypes from "../enums/LocaleTypes";

register(LocaleTypes.english, () => import("../../locales/en.json"));
register(LocaleTypes.dutch, () => import("../../locales/nl.json"));

init({
	fallbackLocale: "en",
	initialLocale: getLocaleFromPathname(/^\/(.*?)$/),
});
