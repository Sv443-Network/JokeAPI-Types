import type countries from "./countries.json";
import type languages from "./languages.json";

/** Country code in ISO 3166-1 alpha-2 format (e.g. US, GB, DE) */
export type CountryCode = keyof typeof countries;

/** Language code in ISO 639-1 format (e.g. en, de, fr) */
export type LanguageCode = keyof typeof languages;

/** BCP 47 locale tag (e.g. en-US, de-DE, fr-FR) */
export type LocaleCode = `${LanguageCode}-${CountryCode}`;

/** Either a language code or a locale code, used to loosely or strictly identify a language */
export type LocaleIdentifier = LocaleCode | LanguageCode;
