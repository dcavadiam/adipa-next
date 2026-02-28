import { useMediaQuery } from "react-responsive";

export function useBreakpoint() {
  const isMobile = useMediaQuery({ minWidth: 375, maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return { isMobile, isTablet, isDesktop };
}
