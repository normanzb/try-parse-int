# tryParseInt

tryParseInt parses number string or return null if failed

# But why

It is useful so that we can use __nullish-coalescing operator__ to fallback to default value

Example:

> const foobar = tryParseInt('foobar') ?? 20

# Caveat

This function will parse only decimal number or hex number, for anything else (e.g. empty string, spaces) it will return null.
