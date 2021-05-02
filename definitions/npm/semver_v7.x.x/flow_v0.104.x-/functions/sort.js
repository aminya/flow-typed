/**
 * Flowtype definitions for sort
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.14.1
 */

import SemVer from "../classes/semver";
import semver from "../index";

/**
 * Sorts an array of semver entries in ascending order using `compareBuild()`.
 */
declare function sort<T: string | SemVer>(
  list: T[],
  optionsOrLoose?: boolean | semver.Options
): T[];
declare module.exports: typeof sort;
