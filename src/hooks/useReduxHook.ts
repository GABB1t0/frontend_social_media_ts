import { useDispatch, useSelector } from "react-redux";

const useReduxHook = () => {
    const myUseSelector = useSelector;
    const dispatch = useDispatch();

    return {
        myUseSelector,
        dispatch
    }
}

export default useReduxHook;