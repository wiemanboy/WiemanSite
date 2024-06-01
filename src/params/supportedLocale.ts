import LocaleTypes from "$lib/enums/LocaleTypes";
import type { ParamMatcher } from "@sveltejs/kit";

export const match: ParamMatcher = (param) => {
	return Object.values(LocaleTypes).includes(param as LocaleTypes);
};
