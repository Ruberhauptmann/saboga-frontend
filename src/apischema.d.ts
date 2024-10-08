/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/boardgames/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Read All Games */
        get: operations["read_all_games_boardgames__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/boardgames/{bgg_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Read Game */
        get: operations["read_game_boardgames__bgg_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** BoardgamePublic */
        BoardgamePublic: {
            /** Bgg Id */
            bgg_id: number;
            /** Name */
            name: string;
            /** Bgg Rank */
            bgg_rank: number;
            /** Bgg Rank Change */
            bgg_rank_change: number;
            /** Bgg Geek Rating */
            bgg_geek_rating: number;
            /** Bgg Geek Rating Change */
            bgg_geek_rating_change: number;
            /** Bgg Average Rating */
            bgg_average_rating: number;
            /** Bgg Average Rating Change */
            bgg_average_rating_change: number;
            /** Bgg Rank History */
            bgg_rank_history: components["schemas"]["RankHistory"][];
            /**
             * Id
             * @example 5eb7cf5a86d9755df3a6c593
             */
            id: string;
        };
        /** HTTPValidationError */
        HTTPValidationError: {
            /** Detail */
            detail?: components["schemas"]["ValidationError"][];
        };
        /** RankHistory */
        RankHistory: {
            /**
             * Date
             * Format: date-time
             */
            date: string;
            /** Bgg Rank */
            bgg_rank: number | null;
            /** Bgg Rank Change */
            bgg_rank_change: number | null;
            /** Bgg Geek Rating */
            bgg_geek_rating: number | null;
            /** Bgg Geek Rating Change */
            bgg_geek_rating_change: number | null;
            /** Bgg Average Rating */
            bgg_average_rating: number | null;
            /** Bgg Average Rating Change */
            bgg_average_rating_change: number | null;
        };
        /** ValidationError */
        ValidationError: {
            /** Location */
            loc: (string | number)[];
            /** Message */
            msg: string;
            /** Error Type */
            type: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    read_all_games_boardgames__get: {
        parameters: {
            query?: {
                date?: string;
                page?: number;
                per_page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BoardgamePublic"][];
                };
            };
            /** @description Not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    read_game_boardgames__bgg_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                bgg_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BoardgamePublic"];
                };
            };
            /** @description Not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
}
