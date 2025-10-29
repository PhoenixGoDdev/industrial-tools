import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");
    
    if (!isAdminLoggedIn) {
      // Redirect to login page if not authenticated
      navigate("/admin/login");
    }
  }, [navigate]);

  // Check authentication status
  const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");
  
  // Render children if authenticated, otherwise render nothing (redirect will happen)
  return isAdminLoggedIn ? <>{children}</> : null;
};

export default ProtectedRoute;