import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { ThreeCircles } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="h-screen text-accent">
        <ThreeCircles
          className="flex justify-center items-center"
          height="100"
          width="100"
          color="black"
          wrapperStyle={{
            display: "flex",
            justifyContent: "center",
            marginTop: '260px'
          }}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        ></ThreeCircles>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
