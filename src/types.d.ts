import { statusRequestApi } from "./config"

export type statusRequestApiTypes = keyof typeof statusRequestApi

export type routesProfile = 'about'|'photos'|'friends';

export type RoutesApp = '/'
    | '/login'
    | '/signup'
    | '/profile';

export type EndPointApi = '/user'
    | `find/${string}/user`
    | `/user/view/${string}/images/${number}?page=${number}`
    | `/user/${string}/update`
    | `/user/${string}/destroy`
    | `/posts/${string}/${number}?page=${number}`
    | '/posts/store'
    | `/posts/${string}/update/`
    | `/posts/${string}/destroy`
    | `/post/${string}/comments`
    | `/post/comment/${string}/update`
    | `/post/comment/${string}/destroy`
    | `/reaction/${string}/destroy`
    | `/friends/${string}/verifyFriendshipRelationship`
    | `/friends/${string}/findFriends`
    | '/friends/friendRequest'
    | '/friends/findUsersToRecommend'
    | `/friends/${string}/request`
    | `/friends/${string}/accept`
    | `/friends/${string}/destroy`
    | 'auth/login'
    | 'auth/register'
    | 'auth/logout'
    | 'auth/email/verification-notification';

export type ErrForActions = {
    status:number,
    statusText:string
}
