import { lazy } from "react";
import WrapperSuspense from "../components/wrapperRoutes";
import NotFound from "../components/errors/NotFound";
import { client } from "../api/client";
import { ROUTES_API, nameCookieSessionApp } from "../config";
import { getCookie } from "../utils/cookies";

const Login = lazy(() => import('../pages/Login'))
const SignUp = lazy(() => import('../pages/SignUp'))
const Profile = lazy(() => import('../pages/Profile'));
const Friends = lazy(() => import('../components/profile/friends/Friends'));
const About  = lazy(() => import('../components/profile/about/About'));
const Photos = lazy(() => import('../components/profile/photos/Photos'));
const EmailVerification = lazy(() => import('../pages/EmailVerification'));
const Home = lazy(() => import('../pages/Home'));

const apiClient = client();
export const routes = [
    {
        path:'/',
        element: <WrapperSuspense />,
        errorElement:<NotFound/>,
        children:[
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'signup',
                element:<SignUp/>
            },
            {
                index:true,
                loader: async() => {
                    if(getCookie(nameCookieSessionApp) === undefined)
                        throw {statusText: "Unauthenticated",  status: 401 };

                    return true;                   
                },
                element: <Home/>,
            },
            {
                path:'/emailVerification', 
                element:<EmailVerification />
            },
            {
                path:'/profile/:id/',
                element:<Profile/>,
                loader: async ({params}) => {

                    if(getCookie(nameCookieSessionApp) === undefined)  
                        throw {statusText: "Unauthenticated",  status: 401 };

                    const data = await apiClient.get(ROUTES_API.findUser(`${params.id}`))
                    .then(response => response.data)
                    .catch( error => error)

                    if(data.status == 403 || data.status == 404 || data.status == 401 || data.status == 500){
                        throw {statusText: data.statusText,  status: data.status };
                    }

                    return data ; 
                },
                children : [
                    {
                        path:"friends", 
                        element:<Friends/>,
                    },
                    {
                        path:"about", 
                        element:<About />,
                        
                    },
                    {
                        path:"photos", 
                        element:<Photos />,
                    } 
                ]
            }
        ]
    }
];