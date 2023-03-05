import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({children}) {
  const { pathname } = useLocation();


  useEffect(() => {
    if (pathname == "/dev" || pathname == '/' || pathname == '/uiux' || pathname == '/life' || pathname == '/uiux/instagram') {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <>{children}</>;
}