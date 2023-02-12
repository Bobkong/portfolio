import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({children}) {
  const { pathname } = useLocation();


  useEffect(() => {
    if (pathname == "/dev" || pathname == '/') {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <>{children}</>;
}