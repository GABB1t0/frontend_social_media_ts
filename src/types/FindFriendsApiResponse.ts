import * as z from "zod";

export const RequestSchema = z.object({
});
export type Request = z.infer<typeof RequestSchema>;

export const ConfigHeadersSchema = z.object({
    "Accept": z.string(),
    "Authorization": z.string(),
});
export type ConfigHeaders = z.infer<typeof ConfigHeadersSchema>;

export const TransitionalSchema = z.object({
    "silentJSONParsing": z.boolean(),
    "forcedJSONParsing": z.boolean(),
    "clarifyTimeoutError": z.boolean(),
});
export type Transitional = z.infer<typeof TransitionalSchema>;

export const DatumSchema = z.object({
    "id": z.number(),
    "name": z.string(),
    "lastname": z.string(),
    "email": z.string(),
    "url_image_profile": z.string(),
});
export type Datum = z.infer<typeof DatumSchema>;

export const LinkSchema = z.object({
    "url": z.union([z.null(), z.string()]),
    "label": z.string(),
    "active": z.boolean(),
});
export type Link = z.infer<typeof LinkSchema>;

export const FindFriendsApiResponseHeadersSchema = z.object({
    "cache-control": z.string(),
    "content-type": z.string(),
});
export type FindFriendsApiResponseHeaders = z.infer<typeof FindFriendsApiResponseHeadersSchema>;

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
    "signal": RequestSchema,
    "method": z.string(),
    "url": z.string(),
});
export type Config = z.infer<typeof ConfigSchema>;

export const DataDataSchema = z.object({
    "current_page": z.number(),
    "data": z.array(DatumSchema),
    "first_page_url": z.string(),
    "from": z.number(),
    "last_page": z.number(),
    "last_page_url": z.string(),
    "links": z.array(LinkSchema),
    "next_page_url": z.string(),
    "path": z.string(),
    "per_page": z.number(),
    "prev_page_url": z.null(),
    "to": z.number(),
    "total": z.number(),
});
export type DataData = z.infer<typeof DataDataSchema>;

export const FindFriendsApiResponseDataSchema = z.object({
    "message": z.string(),
    "status": z.boolean(),
    "data": DataDataSchema,
});
export type FindFriendsApiResponseData = z.infer<typeof FindFriendsApiResponseDataSchema>;

export const FindFriendsApiResponseSchema = z.object({
    "data": FindFriendsApiResponseDataSchema,
    "status": z.number(),
    "statusText": z.string(),
    "headers": FindFriendsApiResponseHeadersSchema,
    "config": ConfigSchema,
    "request": RequestSchema,
});
export type FindFriendsApiResponse = z.infer<typeof FindFriendsApiResponseSchema>;
