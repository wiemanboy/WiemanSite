import type { ParamMatcher } from "@sveltejs/kit";
import LocaleTypes from "$lib/enums/LocaleTypes";

export const match: ParamMatcher = (param) => {
	return Object.values(LocaleTypes).includes(param as LocaleTypes);
};
