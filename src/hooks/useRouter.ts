import { useLocation, useNavigate, useNavigation, useParams, Outlet } from "react-router-dom";

export const useRouter = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const paramUrl = useParams();
    const navigation = useNavigation();
    const OutletComponent = Outlet;

    return {
        navigate,
        navigation,
        location,
        paramUrl,
        OutletComponent
    }
}