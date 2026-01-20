import { useEffect } from "react";

export const useHeaderScroll = ({
  headerRef,
  showBtnRef,
  breakpointPx = 700,
}) => {
  useEffect(() => {
    const header = headerRef.current;
    const showBtn = showBtnRef.current;

    if (!header || !showBtn) return;

    const isMobile = () => window.innerWidth <= breakpointPx;

    let lastScrollTop = 0;
    let headerVisible = true;

    const onScroll = () => {
      if (!isMobile()) {
        // Reset on desktop
        header.style.transform = "translateY(0)";
        header.style.opacity = "1";
        showBtn.classList.remove("visible");
        showBtn.style.display = "none";
        headerVisible = true;
        return;
      }

      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > 80 && headerVisible) {
        header.style.transform = "translateY(-100%)";
        header.style.opacity = "0";
        showBtn.style.display = "flex";
        showBtn.classList.add("visible");
        headerVisible = false;
      } else if (scrollTop < lastScrollTop && !headerVisible) {
        header.style.transform = "translateY(0)";
        header.style.opacity = "1";
        showBtn.classList.remove("visible");
        showBtn.style.display = "none";
        headerVisible = true;
      }

      lastScrollTop = Math.max(0, scrollTop);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [headerRef, showBtnRef, breakpointPx]);
};
