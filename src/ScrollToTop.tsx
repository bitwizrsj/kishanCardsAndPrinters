import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" }); // use 'smooth' for smooth scrolling
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;
