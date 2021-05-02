/**
 * Flowtype definitions for to-comparators
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.14.1
 */

import Range from "../classes/range";
import semver from "../index";

/**
 * Mostly just for testing and legacy API reasons
 */
declare function toComparators(
  range: string | Range,
  optionsOrLoose?: boolean | semver.Options
): string;
declare module.exports: typeof toComparators;
