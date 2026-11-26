export function BrowserShot({
  url,
  src,
  alt,
  width,
  height,
  tall = false,
  className = "device browser",
  priority = false,
}: {
  url: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  tall?: boolean;
  className?: string;
  /** Only the page's hero / LCP screenshot. Everything else lazy-loads. */
  priority?: boolean;
}) {
  return (
    <figure className={className}>
      <div className="chrome">
        <span className="dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="url">{url}</span>
      </div>
      <div className={tall ? "shot tall" : "shot"}>
        {priority ? (
          <img src={src} alt={alt} width={width} height={height} fetchPriority="high" decoding="async" />
        ) : (
          <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
        )}
      </div>
    </figure>
  );
}
