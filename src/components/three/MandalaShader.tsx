"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function MandalaShader() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [webglFailed, setWebglFailed] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let isVisible = true;
    let isTabActive = true;
    let animFrameId: number;

    const glRaw =
      canvas.getContext("webgl", {
        alpha: false,
        powerPreference: "low-power",
        antialias: false,
      }) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

    if (!glRaw) {
      setWebglFailed(true);
      return;
    }

    const gl: WebGLRenderingContext = glRaw;

    // DPR capped at 1.5 to guarantee 60fps across mobile and high-DPI displays
    const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 1.5);

    function syncSize() {
      if (!canvas || !container) return;
      const w = Math.floor(container.clientWidth * dpr);
      const h = Math.floor(container.clientHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = Math.max(w, 1);
        canvas.height = Math.max(h, 1);
      }
    }

    syncSize();

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => syncSize());
      resizeObserver.observe(container);
    }

    const vsSource = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      varying vec2 v_texCoord;

      void main() {
          vec2 st = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
          vec2 mouse = (u_mouse / u_resolution) * 2.0 - 1.0;
          st += mouse * 0.05;
          
          // Deep midnight indigo background with rich royal maroon depth
          vec3 col = vec3(0.043, 0.043, 0.102); // #0B0B1A
          vec3 maroon = vec3(0.361, 0.102, 0.169); // #5C1A2B
          vec3 saffron = vec3(1.0, 0.6, 0.2); // #FF9933
          vec3 gold = vec3(0.95, 0.72, 0.02); // #F2B705
          vec3 peacock = vec3(0.059, 0.639, 0.694); // #0FA3B1
          
          // Background maroon radial gradient
          float bgGlow = length(st - vec2(0.0, -0.2));
          col = mix(maroon * 0.35, col, smoothstep(0.1, 1.4, bgGlow));

          // Polar coordinates for Mandala / Jaali sacred geometry rings
          float r = length(st);
          float a = atan(st.y, st.x);

          // Rotating 8-fold and 16-fold Rajasthani symmetry
          float time = u_time * 0.25;
          float ring1 = sin(a * 8.0 + time) * 0.04 + 0.55;
          float ring2 = cos(a * 16.0 - time * 0.8) * 0.03 + 0.38;
          float ring3 = sin(a * 12.0 + time * 1.2) * 0.02 + 0.22;

          float line1 = smoothstep(0.015, 0.0, abs(r - ring1));
          float line2 = smoothstep(0.012, 0.0, abs(r - ring2));
          float line3 = smoothstep(0.008, 0.0, abs(r - ring3));

          // Sacred geometric Jaali center node
          float core = smoothstep(0.08, 0.01, r);
          col += peacock * core * 0.6;

          // Glowing mandala rays
          float rays = pow(max(0.0, cos(a * 8.0 + time)), 16.0) * smoothstep(0.8, 0.1, r);
          col += gold * rays * 0.4;
          col += saffron * (line1 * 0.6 + line2 * 0.5 + line3 * 0.7);

          // Floating festive spark / ember particles (Diyas floating upward)
          for(int i = 0; i < 18; i++) {
              float fi = float(i);
              vec2 p = vec2(
                  sin(fi * 1.7 + u_time * 0.3) * 0.85,
                  mod(fi * 0.45 + u_time * (0.2 + sin(fi)*0.1), 2.4) - 1.2
              );
              float d = length(st - p);
              float spark = 0.004 / (d + 0.002);
              vec3 sparkColor = mix(saffron, gold, fract(fi * 0.33));
              col += sparkColor * spark * 0.18;
          }

          gl_FragColor = vec4(col, 1.0);
      }
    `;

    function compileShader(type: number, src: string): WebGLShader | null {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = compileShader(gl.VERTEX_SHADER, vsSource);
    const fs = compileShader(gl.FRAGMENT_SHADER, fsSource);

    if (!vs || !fs) {
      setWebglFailed(true);
      return;
    }

    const prog = gl.createProgram();
    if (!prog) {
      setWebglFailed(true);
      return;
    }

    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);

    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error("Shader link error:", gl.getProgramInfoLog(prog));
      setWebglFailed(true);
      return;
    }

    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");

    const targetMouse = { x: canvas.width / 2, y: canvas.height / 2 };
    const currentMouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (event: MouseEvent) => {
      const currentCanvas = canvasRef.current;
      if (!currentCanvas) return;
      const rect = currentCanvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        targetMouse.x = nx * currentCanvas.width;
        targetMouse.y = ny * currentCanvas.height;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Pause when offscreen
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && isTabActive) {
            cancelAnimationFrame(animFrameId);
            animFrameId = requestAnimationFrame(render);
          }
        });
      });
      observer.observe(container);
    }

    // Pause on hidden tab
    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
      if (isVisible && isTabActive) {
        cancelAnimationFrame(animFrameId);
        animFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    function render(t: number) {
      const activeCanvas = canvasRef.current;
      if (!isVisible || !isTabActive || !gl || !activeCanvas) return;

      // Smooth mouse lerp
      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.08;
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.08;

      gl.viewport(0, 0, activeCanvas.width, activeCanvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, activeCanvas.width, activeCanvas.height);
      if (uMouse) gl.uniform2f(uMouse, currentMouse.x, currentMouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animFrameId = requestAnimationFrame(render);
    }

    animFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (resizeObserver) resizeObserver.disconnect();
      if (observer) observer.disconnect();
      if (prog && gl) gl.deleteProgram(prog);
      if (vs && gl) gl.deleteShader(vs);
      if (fs && gl) gl.deleteShader(fs);
      if (buf && gl) gl.deleteBuffer(buf);
    };
  }, [prefersReduced]);

  if (webglFailed || prefersReduced) {
    return (
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(92, 26, 43, 0.45) 0%, rgba(11, 11, 26, 0.95) 70%, #0B0B1A 100%)",
        }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-85 dark:opacity-85"
      />
      {/* Subtle vignette layer to ensure text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/40 pointer-events-none" />
    </div>
  );
}
