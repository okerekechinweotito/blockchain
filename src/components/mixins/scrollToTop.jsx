import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* ScrollToTop component is used to force React-router to start each page from the top */
export default function ScrollToTop() {
  /* pathname appends iteself to each instance of a url link from useLocation(destructuring) */
  const { pathname } = useLocation();

  /*useeffect gets called each time a new link is loaded(pathname changes)  */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
