"use strict";Object.defineProperty(exports, "__esModule", {value: true});// tryParseInt.ts
function tryParseInt(str) {
  if (str == null || str.trim() == "") {
    return null;
  }
  const result = Number(str);
  if (isNaN(result)) {
    return null;
  }
  return result;
}


exports.tryParseInt = tryParseInt;
