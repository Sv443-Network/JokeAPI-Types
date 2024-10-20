import type categories from "./categories.json";
import type flags from "./flags.json";
import type { LocaleIdentifier } from "./data.js";

/** The different types of joke structures that can be returned by the API */
export type JokeType = "single" | "multipart";

/**
 * Categories that jokes can be sorted into.  
 * These are not mutually exclusive, and a joke can be in multiple categories.  
 * The category "other" should only be used if no other category applies.
 */
export type JokeCategory = keyof typeof categories | "other";

/**
 * Flags that can be applied to jokes to indicate that they may contain sensitive content.  
 * They serve as a way of filtering out inappropriate, unwanted, unfunny or otherwise undesirable jokes.
 */
export type JokeFlag = keyof typeof flags;

/** Base properties that are in every joke object */
export type JokeBase = {
  /** Categories / tags associated with the joke */
  categories: JokeCategory[];
  /** Flags that indicate the joke may contain sensitive content */
  flags: JokeFlag[];
  /** Unique ID of the joke */
  id: string;
  /** Language and/or country of the joke */
  locale: LocaleIdentifier;
};

/** A joke object of type "single" */
export type SingleJoke = JokeBase & {
  /** Type of the joke */
  type: "single";
  /** The joke text */
  text: string;
};

/** A joke object of type "multipart" */
export type MultiPartJoke = {
  /** Type of the joke */
  type: "multipart";
  /** All parts of the joke, in order */
  text: string[];
};
