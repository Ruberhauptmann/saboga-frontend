/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/boardgames": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Read All Games */
        get: operations["read_all_games_boardgames_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/boardgames/rank-history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Read Games With Rank Changes
         * @description Returns a list of boardgames from the database, sorted by rank.
         */
        get: operations["read_games_with_rank_changes_boardgames_rank_history_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/boardgames/by-category": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Read All Games By Category */
        get: operations["read_all_games_by_category_boardgames_by_category_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/boardgames/by-mechanic": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Read All Games By Mechanic */
        get: operations["read_all_games_by_mechanic_boardgames_by_mechanic_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/boardgames/by-family": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Read All Games By Family */
        get: operations["read_all_games_by_family_boardgames_by_family_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/boardgames/by-designer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Read All Games By Designer */
        get: operations["read_all_games_by_designer_boardgames_by_designer_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/boardgames/clusters": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Game Clusters */
        get: operations["game_clusters_boardgames_clusters_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/boardgames/recommendations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Recommend Games */
        get: operations["recommend_games_boardgames_recommendations_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/boardgames/recommendations/{username}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Recommend Games For User */
        get: operations["recommend_games_for_user_boardgames_recommendations__username__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/boardgames/uploadfile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create Upload File */
        post: operations["create_upload_file_boardgames_uploadfile_post"];
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
        /**
         * Read Game
         * @description Returns a single board game from the database.
         */
        get: operations["read_game_boardgames__bgg_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/boardgames/{bgg_id}/forecast": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Forecast */
        get: operations["forecast_boardgames__bgg_id__forecast_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/boardgames/{bgg_id}/rank-history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Rank History */
        get: operations["rank_history_boardgames__bgg_id__rank_history_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/boardgames/{bgg_id}/statistics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Game Statistics */
        get: operations["game_statistics_boardgames__bgg_id__statistics_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/boardgames/{bgg_id}/reviews/summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Reviews Summary */
        get: operations["reviews_summary_boardgames__bgg_id__reviews_summary_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/boardgames/{bgg_id}/reviews/sentiment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Reviews Sentiment */
        get: operations["reviews_sentiment_boardgames__bgg_id__reviews_sentiment_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/boardgames/{bgg_id}/similar": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Similar Games */
        get: operations["similar_games_boardgames__bgg_id__similar_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Read All Categories */
        get: operations["read_all_categories_categories_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/designers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Read All Designers */
        get: operations["read_all_designers_designers_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/families": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Read All Families */
        get: operations["read_all_families_families_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/mechanics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Read All Mechanics */
        get: operations["read_all_mechanics_mechanics_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Search */
        get: operations["search_search_get"];
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
        /** BoardgameComparison */
        BoardgameComparison: {
            /** Bgg Id */
            bgg_id: number;
            /** Name */
            name?: string | null;
            /** Description */
            description?: string | null;
            /** Image Url */
            image_url?: string | null;
            /** Thumbnail Url */
            thumbnail_url?: string | null;
            /** Year Published */
            year_published?: number | null;
            /** Minplayers */
            minplayers?: number | null;
            /** Maxplayers */
            maxplayers?: number | null;
            /** Playingtime */
            playingtime?: number | null;
            /** Minplaytime */
            minplaytime?: number | null;
            /** Maxplaytime */
            maxplaytime?: number | null;
            /**
             * Categories
             * @default []
             */
            categories: components["schemas"]["Category"][];
            /**
             * Families
             * @default []
             */
            families: components["schemas"]["Family"][];
            /**
             * Designers
             * @default []
             */
            designers: components["schemas"]["Person"][];
            /**
             * Mechanics
             * @default []
             */
            mechanics: components["schemas"]["Mechanic"][];
            /** Bgg Rank */
            bgg_rank: number;
            /** Bgg Geek Rating */
            bgg_geek_rating?: number | null;
            /** Bgg Average Rating */
            bgg_average_rating?: number | null;
            /** Bgg Rank Change */
            bgg_rank_change?: number | null;
            /** Bgg Geek Rating Change */
            bgg_geek_rating_change?: number | null;
            /** Bgg Average Rating Change */
            bgg_average_rating_change?: number | null;
        };
        /** BoardgameWithHistoricalData */
        BoardgameWithHistoricalData: {
            /** Bgg Id */
            bgg_id: number;
            /** Name */
            name?: string | null;
            /** Description */
            description?: string | null;
            /** Image Url */
            image_url?: string | null;
            /** Thumbnail Url */
            thumbnail_url?: string | null;
            /** Year Published */
            year_published?: number | null;
            /** Minplayers */
            minplayers?: number | null;
            /** Maxplayers */
            maxplayers?: number | null;
            /** Playingtime */
            playingtime?: number | null;
            /** Minplaytime */
            minplaytime?: number | null;
            /** Maxplaytime */
            maxplaytime?: number | null;
            /**
             * Categories
             * @default []
             */
            categories: components["schemas"]["Category"][];
            /**
             * Families
             * @default []
             */
            families: components["schemas"]["Family"][];
            /**
             * Designers
             * @default []
             */
            designers: components["schemas"]["Person"][];
            /**
             * Mechanics
             * @default []
             */
            mechanics: components["schemas"]["Mechanic"][];
            /** Bgg Rank */
            bgg_rank: number;
            /** Bgg Geek Rating */
            bgg_geek_rating?: number | null;
            /** Bgg Average Rating */
            bgg_average_rating?: number | null;
            /**
             * Bgg Rank History
             * @default []
             */
            bgg_rank_history: components["schemas"]["RankHistory"][];
        };
        /** Body_create_upload_file_boardgames_uploadfile_post */
        Body_create_upload_file_boardgames_uploadfile_post: {
            /**
             * Csv Zip File
             * Format: binary
             */
            csv_zip_file: string;
        };
        /** Category */
        Category: {
            /** Name */
            name: string;
            /** Bgg Id */
            bgg_id: number;
        };
        /** Family */
        Family: {
            /** Name */
            name: string;
            /** Bgg Id */
            bgg_id: number;
        };
        /** ForecastData */
        ForecastData: {
            /** Bgg Id */
            bgg_id: number;
            /** Game Name */
            game_name: string;
            /** Prediction */
            prediction: components["schemas"]["Prediction"][];
        };
        /** ErrorResponse */
        HTTPValidationError: {
            /** Detail */
            detail: string;
            /** Status Code */
            status_code: number;
            /** Extra Info */
            extra_info?: Record<string, never> | null;
        };
        /** Mechanic */
        Mechanic: {
            /** Name */
            name: string;
            /** Bgg Id */
            bgg_id: number;
        };
        /** Person */
        Person: {
            /** Name */
            name: string;
            /** Bgg Id */
            bgg_id: number;
        };
        /** Prediction */
        Prediction: {
            /**
             * Date
             * Format: date
             */
            date: string;
            /** Bgg Rank */
            bgg_rank: number;
            /** Bgg Rank Confidence Interval */
            bgg_rank_confidence_interval: [
                number,
                number
            ];
            /** Bgg Average Rating */
            bgg_average_rating: number;
            /** Bgg Average Rating Confidence Interval */
            bgg_average_rating_confidence_interval: [
                number,
                number
            ];
            /** Bgg Geek Rating */
            bgg_geek_rating: number;
            /** Bgg Geek Rating Confidence Interval */
            bgg_geek_rating_confidence_interval: [
                number,
                number
            ];
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
            /** Bgg Geek Rating */
            bgg_geek_rating: number | null;
            /** Bgg Average Rating */
            bgg_average_rating: number | null;
        };
        /** SearchResult */
        SearchResult: {
            /** Bgg Id */
            bgg_id: number;
            /** Name */
            name: string;
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
    read_all_games_boardgames_get: {
        parameters: {
            query?: never;
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
                    "application/json": unknown;
                };
            };
            /** @description Not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    read_games_with_rank_changes_boardgames_rank_history_get: {
        parameters: {
            query?: {
                compare_to?: string | null;
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
                    "application/json": components["schemas"]["BoardgameComparison"][];
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
    read_all_games_by_category_boardgames_by_category_get: {
        parameters: {
            query?: never;
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
                    "application/json": {
                        [key: string]: string;
                    };
                };
            };
            /** @description Not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    read_all_games_by_mechanic_boardgames_by_mechanic_get: {
        parameters: {
            query?: never;
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
                    "application/json": {
                        [key: string]: string;
                    };
                };
            };
            /** @description Not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    read_all_games_by_family_boardgames_by_family_get: {
        parameters: {
            query?: never;
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
                    "application/json": {
                        [key: string]: string;
                    };
                };
            };
            /** @description Not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    read_all_games_by_designer_boardgames_by_designer_get: {
        parameters: {
            query?: never;
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
                    "application/json": {
                        [key: string]: string;
                    };
                };
            };
            /** @description Not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    game_clusters_boardgames_clusters_get: {
        parameters: {
            query?: never;
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
                    "application/json": {
                        [key: string]: string;
                    };
                };
            };
            /** @description Not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    recommend_games_boardgames_recommendations_get: {
        parameters: {
            query?: never;
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
                    "application/json": {
                        [key: string]: string;
                    };
                };
            };
            /** @description Not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    recommend_games_for_user_boardgames_recommendations__username__get: {
        parameters: {
            query?: never;
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
                    "application/json": {
                        [key: string]: string;
                    };
                };
            };
            /** @description Not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    create_upload_file_boardgames_uploadfile_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["Body_create_upload_file_boardgames_uploadfile_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: string;
                    };
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
            query?: {
                start_date?: string | null;
                end_date?: string | null;
                mode?: string;
            };
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
                    "application/json": components["schemas"]["BoardgameWithHistoricalData"];
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
    forecast_boardgames__bgg_id__forecast_get: {
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
                    "application/json": components["schemas"]["ForecastData"];
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
    rank_history_boardgames__bgg_id__rank_history_get: {
        parameters: {
            query?: never;
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
                    "application/json": unknown;
                };
            };
            /** @description Not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    game_statistics_boardgames__bgg_id__statistics_get: {
        parameters: {
            query?: never;
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
                    "application/json": unknown;
                };
            };
            /** @description Not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    reviews_summary_boardgames__bgg_id__reviews_summary_get: {
        parameters: {
            query?: never;
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
                    "application/json": unknown;
                };
            };
            /** @description Not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    reviews_sentiment_boardgames__bgg_id__reviews_sentiment_get: {
        parameters: {
            query?: never;
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
                    "application/json": unknown;
                };
            };
            /** @description Not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    similar_games_boardgames__bgg_id__similar_get: {
        parameters: {
            query?: never;
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
                    "application/json": unknown;
                };
            };
            /** @description Not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    read_all_categories_categories_get: {
        parameters: {
            query?: never;
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
                    "application/json": {
                        [key: string]: string;
                    };
                };
            };
            /** @description Not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    read_all_designers_designers_get: {
        parameters: {
            query?: never;
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
                    "application/json": {
                        [key: string]: string;
                    };
                };
            };
            /** @description Not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    read_all_families_families_get: {
        parameters: {
            query?: never;
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
                    "application/json": {
                        [key: string]: string;
                    };
                };
            };
            /** @description Not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    read_all_mechanics_mechanics_get: {
        parameters: {
            query?: never;
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
                    "application/json": {
                        [key: string]: string;
                    };
                };
            };
            /** @description Not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    search_search_get: {
        parameters: {
            query: {
                query: string;
                limit?: number;
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
                    "application/json": components["schemas"]["SearchResult"][];
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
