import { useEffect } from "react";
export const useHeaderScroll = ({ headerRef, showBtnRef, breakpointPx = 600 }) => {
  useEffect(() => {
    const header = headerRef.current;
    const showBtn = showBtnRef.current;
    if (!header || !showBtn) return;

    const isMobile = () => window.innerWidth <= breakpointPx;

    let lastScrollTop = 0;
    let headerVisible = true;

    const onScroll = () => {
      if (!isMobile()) {
        header.classList.remove("hidden");
        showBtn.classList.remove("visible");
        headerVisible = true;
        return;
      }

      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (
        scrollTop - lastScrollTop > 12 &&
        scrollTop > 100 &&
        headerVisible
      ) {
        header.classList.add("hidden");
        showBtn.classList.add("visible");
        headerVisible = false;
      } else if (
        lastScrollTop - scrollTop > 12 &&
        !headerVisible
      ) {
        header.classList.remove("hidden");
        showBtn.classList.remove("visible");
        headerVisible = true;
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [headerRef, showBtnRef, breakpointPx]);
};
