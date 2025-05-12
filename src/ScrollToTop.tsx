import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const location = useLocation();
  const { pathname, hash } = location;

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" }); 
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
