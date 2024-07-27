/**
 * tryParseInt parses number string or return null if failed
 * it is useful so that we can use __nullish-coalescing operator__ to fallback to default value
 *
 * example:
 *    const foobar = tryParseInt('foobar') ?? 20
 *
 * This function will parse only decimal number or hex number, for anything else (e.g. empty string, spaces) it will return null.
 *
 * @param str a string that contains number
 * @returns the number parsed or null for parsing failed
 */
declare function tryParseInt(str: string | null | undefined): number;

export { tryParseInt };
