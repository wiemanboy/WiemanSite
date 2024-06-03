export default interface Params {
	locale: string;
}

export function load({ params }): Params {
	const locale = params.locale;

	return {
		locale: locale ? locale : "",
	};
}
