import { useEffect, RefObject } from "react";

type ScrollMagicOptions = {
  triggerHook?: number;
  reverse?: boolean;
};

export function useScrollMagic(ref: RefObject<HTMLElement | null>, onEnter: () => void, options?: ScrollMagicOptions) {
  useEffect(() => {
    let controller: ScrollMagic.Controller | null = null;

    const loadScrollMagic = async () => {
      const ScrollMagic = (await import("scrollmagic")).default;

      controller = new ScrollMagic.Controller();

      new ScrollMagic.Scene({
        triggerElement: ref.current!,
        triggerHook: options?.triggerHook ?? 0.8,
        reverse: options?.reverse ?? false,
        // ✅ Tidak ada "duration" = tidak ada error NaN
      })
        .on("enter", onEnter)
        .addTo(controller);
    };

    if (typeof window !== "undefined" && ref.current) {
      loadScrollMagic();
    }

    return () => {
      controller?.destroy(true);
    };
  }, [ref, onEnter, options?.triggerHook, options?.reverse]);
}
