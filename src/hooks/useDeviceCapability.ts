"use client";

import { useEffect, useState } from "react";

export interface DeviceCapability {
  isLowPower: boolean;
  isDesktop: boolean;
  canRender3D: boolean;
  hasWebGL: boolean;
  isTouch: boolean;
}

export function useDeviceCapability(): DeviceCapability {
  const [capability, setCapability] = useState<DeviceCapability>({
    isLowPower: false,
    isDesktop: false,
    canRender3D: false,
    hasWebGL: true,
    isTouch: false,
  });

  useEffect(() => {
    // 1. WebGL support check
    let webglSupported = false;
    try {
      const testCanvas = document.createElement("canvas");
      webglSupported = !!(
        window.WebGLRenderingContext &&
        (testCanvas.getContext("webgl") ||
          testCanvas.getContext("experimental-webgl"))
      );
    } catch {
      webglSupported = false;
    }

    // 2. Hardware capability checks
    const concurrency =
      typeof navigator !== "undefined" ? navigator.hardwareConcurrency || 4 : 4;
    // @ts-expect-error deviceMemory is experimental on navigator
    const memory = typeof navigator !== "undefined" ? navigator.deviceMemory || 8 : 8;

    const isLowPower = concurrency <= 4 || memory <= 4;
    const isTouch =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);

    const checkDesktop = () => {
      const isDesk = window.innerWidth >= 1024;
      // Capable of 3D only if desktop, has WebGL, and not low-power
      const can3D = isDesk && webglSupported && !isLowPower;

      setCapability({
        isLowPower,
        isDesktop: isDesk,
        canRender3D: can3D,
        hasWebGL: webglSupported,
        isTouch,
      });
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  return capability;
}
