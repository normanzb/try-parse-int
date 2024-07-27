import assert from "node:assert";
import { describe, it } from "node:test";
import { tryParseInt } from '../tryParseInt';

describe('given tryParseInt', () => {
  it('should return null for null value', () => {
    assert.equal(tryParseInt(null), null);
  });

  it('should not consider empty string or spaces as 0', () => {
    assert.equal(tryParseInt(' '), null);
    assert.equal(tryParseInt('   '), null);
  });

  it('should return null for undefined value', () => {
    assert.equal(tryParseInt(undefined), null);
  });

  it('should return null for a string that does not contain valid number', () => {
    assert.equal(tryParseInt('foobar'), null);
  });

  it('should return null for a string that contains a number followed by alphabet such as 1px', () => {
    assert.equal(tryParseInt('1px'), null);
    assert.equal(tryParseInt('1abc'), null);
  });

  it('should return the number for a string that contains a number', () => {
    assert.equal(tryParseInt('123'), 123);
  });

  it('should not consider a number string with leading 0 as octal', () => {
    assert.equal(tryParseInt('011'), 11);
  });

  it('should return the number for a string that contains a number in hex format', () => {
    assert.equal(tryParseInt('0x11'), 17);
  });
  
  it('should return 0 for "0"', () => {
    assert.equal(tryParseInt('0'), 0);
  });
});
