import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Index = () => {

    let navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token)
            navigate("/home");
    }, []);
    return (
        <>
            <h1>Index</h1>
        </>
    );
};