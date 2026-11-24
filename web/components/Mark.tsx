export function Mark({ className = "mark-svg" }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-15.022 -93.333 124.135 109.465"
      fill="none"
      aria-hidden="true"
    >
      <g shapeRendering="geometricPrecision">
        <path
          d="M-7.4727,-72.0000 H12.0528 V0.0000 H0.0000 V-65.9736 L-7.4727,-67.2994 Z"
          fill="currentColor"
        />
        <path
          d="M19.8288,-36.0000 A37.1520,37.1520 0 1 1 94.1328,-36.0000 A37.1520,37.1520 0 1 1 19.8288,-36.0000 Z M32.7888,-36.0000 A24.1920,24.1920 0 1 0 81.1728,-36.0000 A24.1920,24.1920 0 1 0 32.7888,-36.0000 Z"
          fill="currentColor"
          fillRule="evenodd"
        />
        <path
          d="M101.5632,-36.0000 L87.6528,-41.4432 L77.7859,-36.0000 L87.6528,-30.5568 Z"
          fill="currentColor"
        />
        <path
          d="M56.9808,8.5824 L62.4240,-5.3280 L56.9808,-15.1949 L51.5376,-5.3280 Z"
          fill="currentColor"
        />
        <path
          d="M12.3984,-36.0000 L26.3088,-30.5568 L36.1757,-36.0000 L26.3088,-41.4432 Z"
          fill="currentColor"
        />
        <path
          d="M56.9808,-85.7837 L49.2048,-66.6720 L56.9808,-54.8698 L64.7568,-66.6720 Z"
          fill="var(--accent)"
        />
      </g>
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="word">
      <span className="point">Point</span>
      <span className="studios">Studios</span>
    </span>
  );
}
