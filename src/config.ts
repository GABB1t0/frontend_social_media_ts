import { EndPointApi, RoutesApp } from "./types.d"

export const nameCookieSessionApp = 'cookie_api_social_media_session'

export const ROUTES_API =  {
    userLogged: ():EndPointApi => '/user',
    findUser: (user:string):EndPointApi => `find/${user}/user`,
    getImagesUser: (user:string,offset:number,page:number):EndPointApi => `/user/view/${user}/images/${offset}?page=${page}`,
    updateFieldUser: (user:string):EndPointApi => `/user/${user}/update`,
    deleteUser: (user:string):EndPointApi => `/user/${user}/destroy`,
    searchPostsUser: (user:string,offset:number,page:number):EndPointApi => `/posts/${user}/${offset}?page=${page}`,
    createPost: ():EndPointApi => '/posts/store',
    updatePost: (post:string):EndPointApi => `/posts/${post}/update/`,
    destroyPost: (post:string):EndPointApi => `/posts/${post}/destroy`,
    searchComment: (id_post:string):EndPointApi => `/post/${id_post}/comments`,
    updateComment: (id_comment:string):EndPointApi => `/post/comment/${id_comment}/update`,
    destroyComment: (id_comment:string):EndPointApi => `/post/comment/${id_comment}/destroy`,
    destroyReaction: (reaction:string):EndPointApi => `/reaction/${reaction}/destroy`,
    verifyFriendshipRelationship: (user:string):EndPointApi => `/friends/${user}/verifyFriendshipRelationship`,
    findFriends: (user:string):EndPointApi => `/friends/${user}/findFriends`,
    findAllMyRequestFriend: ():EndPointApi => '/friends/friendRequest',
    findUsersToRecommend: ():EndPointApi => '/friends/findUsersToRecommend',
    sendRequestFriend: (recipient:string):EndPointApi => `/friends/${recipient}/request`,
    acceptRequestFriend: (friendRequest:string):EndPointApi => `/friends/${friendRequest}/accept`,
    destroyFriendshipRelationship: (user:string):EndPointApi => `/friends/${user}/destroy`,
    login: ():EndPointApi => 'auth/login',
    signUp: ():EndPointApi => 'auth/register',
    logout: ():EndPointApi => 'auth/logout',
    verificationEmailSend: ():EndPointApi => 'auth/email/verification-notification',
    userVerified: (user:string):EndPointApi => `/user/${user}/verificationEmail`
}

export const SUPPORTED_ROUTES = {
    home: ():RoutesApp => '/',
    profile: ():RoutesApp => '/profile',
    login: ():RoutesApp => '/login',
    signUp: ():RoutesApp => '/signup',
}

export const statusRequestApi = {
    idle : 'idle',
    pending: 'pending',
    succeeded: 'succeeded',
    failed: 'failed'
}