import * as z from "zod";


export const UserLoggedApiResponseHeadersSchema = z.object({
    "cache-control": z.string(),
    "content-type": z.string(),
});
export type UserLoggedApiResponseHeaders = z.infer<typeof UserLoggedApiResponseHeadersSchema>;

export const UserSchema = z.object({
    "id": z.number(),
    "name": z.string(),
    "lastname": z.string(),
    "url_image_profile": z.null(),
    "url_image_cover": z.null(),
    "biography": z.null(),
    "age": z.null(),
    "address": z.null(),
    "email": z.string(),
    "email_verified_at": z.coerce.date(),
    "two_factor_secret": z.null(),
    "two_factor_recovery_codes": z.null(),
    "two_factor_confirmed_at": z.null(),
    "created_at": z.coerce.date(),
    "updated_at": z.coerce.date(),
});
export type User = z.infer<typeof UserSchema>;

export const DataSchema = z.object({
    "status": z.boolean(),
    "user": UserSchema,
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

export const UserLoggedApiResponseSchema = z.object({
    "data": DataSchema,
    "status": z.number(),
    "statusText": z.string(),
    "headers": UserLoggedApiResponseHeadersSchema,
    "config": ConfigSchema,
    "request": RequestSchema,
});
export type UserLoggedApiResponse = z.infer<typeof UserLoggedApiResponseSchema>;
