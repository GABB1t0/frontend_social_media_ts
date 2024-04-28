import * as z from "zod";


export const SearchPostProfileApiResponseHeadersSchema = z.object({
    "cache-control": z.string(),
    "content-type": z.string(),
});
export type SearchPostProfileApiResponseHeaders = z.infer<typeof SearchPostProfileApiResponseHeadersSchema>;

export const LinkSchema = z.object({
    "url": z.union([z.null(), z.string()]),
    "label": z.string(),
    "active": z.boolean(),
});
export type Link = z.infer<typeof LinkSchema>;

export const DatumSchema = z.object({
    "id": z.number(),
    "description": z.union([z.null(), z.string()]),
    "is_edit": z.string(),
    "user_id": z.number(),
    "created_at": z.coerce.date(),
    "updated_at": z.coerce.date(),
});
export type Datum = z.infer<typeof DatumSchema>;

export const PostsSchema = z.object({
    "current_page": z.number(),
    "data": z.array(DatumSchema),
    "first_page_url": z.string(),
    "from": z.number(),
    "last_page": z.number(),
    "last_page_url": z.string(),
    "links": z.array(LinkSchema),
    "next_page_url": z.null(),
    "path": z.string(),
    "per_page": z.number(),
    "prev_page_url": z.null(),
    "to": z.number(),
    "total": z.number(),
});
export type Posts = z.infer<typeof PostsSchema>;

export const DataSchema = z.object({
    "status": z.boolean(),
    "posts": PostsSchema,
});
export type Data = z.infer<typeof DataSchema>;

export const TransitionalSchema = z.object({
    "silentJSONParsing": z.boolean(),
    "forcedJSONParsing": z.boolean(),
    "clarifyTimeoutError": z.boolean(),
});
export type Transitional = z.infer<typeof TransitionalSchema>;

export const ConfigHeadersSchema = z.object({
    "Accept": z.string(),
    "Authorization": z.string(),
});
export type ConfigHeaders = z.infer<typeof ConfigHeadersSchema>;

export const RequestSchema = z.object({
});
export type Request = z.infer<typeof RequestSchema>;

export const ConfigSchema = z.object({
    "transitional": TransitionalSchema,
    "adapter": z.array(z.string()),
    "transformRequest": z.array(z.null()),
    "transformResponse": z.array(z.null()),
    "timeout": z.number(),
    "xsrfCookieName": z.string(),
    "xsrfHeaderName": z.string(),
    "maxContentLength": z.number(),
    "maxBodyLength": z.number(),
    "env": RequestSchema,
    "headers": ConfigHeadersSchema,
    "baseURL": z.string(),
    "method": z.string(),
    "url": z.string(),
});
export type Config = z.infer<typeof ConfigSchema>;

export const SearchPostProfileApiResponseSchema = z.object({
    "data": DataSchema,
    "status": z.number(),
    "statusText": z.string(),
    "headers": SearchPostProfileApiResponseHeadersSchema,
    "config": ConfigSchema,
    "request": RequestSchema,
});
export type SearchPostProfileApiResponse = z.infer<typeof SearchPostProfileApiResponseSchema>;