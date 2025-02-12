import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { setAuthToken } from "../services/authSlice";

const useAuthInitialization = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const authToken = Cookies.get("authToken");
        console.log("Retrieved authToken from cookies:", authToken);

        if (authToken) {
            dispatch(setAuthToken(authToken));
        }
    }, [dispatch]);
}

export default useAuthInitialization;