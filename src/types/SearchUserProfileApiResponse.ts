import * as z from "zod";

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

export const SearchUserProfileApiResponseSchema = z.object({
    "status": z.boolean(),
    "user": UserSchema,
});
export type SearchUserProfileApiResponse = z.infer<typeof SearchUserProfileApiResponseSchema>;
