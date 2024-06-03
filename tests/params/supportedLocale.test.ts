import { describe, expect, test } from "vitest";
import { match } from "../../src/params/supportedLocale";

describe("supportedLocale", () => {
	test.each([
		["en", true],
		["en", true],
		["de", false],
	])(`%s is supported: %s`, (locale, expected) => {
		expect(match(locale)).toBe(expected);
	});
});
