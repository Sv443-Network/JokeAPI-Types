/** The different types of joke structures that can be returned by the API */
export type JokeType = "single" | "twopart";

/**
 * Categories that jokes can be sorted into.  
 * These are not mutually exclusive, and a joke can be in multiple categories.  
 * The category "other" should only be used if no other category applies.
 */
export type JokeCategory =
  | "absurd"
  | "animal"
  | "christmas"
  | "culture"
  | "dad-joke"
  | "dark"
  | "intellectual"
  | "knock-knock"
  | "movies"
  | "music"
  | "one-liner"
  | "programming"
  | "pun"
  | "question-and-answer"
  | "regional"
  | "sarcasm"
  | "spooky"
  | "sports"
  | "tech"
  | "video-games"
  | "other";

/**
 * Flags that can be applied to jokes to indicate that they may contain sensitive content.  
 * They serve as a way of filtering out inappropriate, unwanted, unfunny or otherwise undesirable jokes.
 */
export type JokeFlag =
  | "body-shaming"
  | "cultural-insensitivity"
  | "drug-use"
  | "explicit-language"
  | "gender-and-sexuality"
  | "mature-content"
  | "politics"
  | "racial-insensitivity"
  | "religious-insensitivity"
  | "sexual-content"
  | "stereotypes"
  | "violence";

/**
 * Language codes should always be in one of two formats:  
 * 1. A two-letter [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes), followed by a hyphen and a two-letter [ISO 3166-1 country code.](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) For example, `en-US` for English (United States).  
 *   These jokes will apply to that specific country, and may contain references to that country's culture, politics, etc.
 * 2. Only a two-letter [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes). For example, `en` for English.  
 *   These jokes will apply to all countries that speak the language, regardless of region.
 */
export type LangCode<TCode extends string = "en-US"> = TCode;

/** A joke object */
export type Joke = {
  categories: JokeCategory[];
  flags: JokeFlag[] | null;
  id: string;
  lang: LangCode;
  text: string;
};
