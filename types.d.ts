export type JokeType = "single" | "twopart";

export type JokeCategory = "Misc" | "Programming" | "Dark" | "Pun" | "Spooky" | "Christmas";

export interface JokeFlags {
    [key: string]: boolean;
    nsfw: boolean;
    racist: boolean;
    religious: boolean;
    political: boolean;
    sexist: boolean;
    explicit: boolean;
}

export type LangCode<T extends string = "en"> = T;

export interface JokeBase {
    categories: JokeCategory[];
    type: JokeType;
    flags: JokeFlags;
    id: number;
    lang: LangCode;
}

export interface SingleJoke extends JokeBase {
    type: "single";
    joke: string;
}

export interface TwopartJoke extends JokeBase {
    type: "twopart";
    joke: string;
    joke2: string;
}

export type Joke = SingleJoke | TwopartJoke;
