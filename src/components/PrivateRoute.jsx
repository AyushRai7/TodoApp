import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const user = useSelector(state => state.user);
    
    console.log("Checking user in PrivateRoute:", user); 

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
}
