import { preload } from "react-dom";

export function BrowserShot({
  url,
  src,
  alt,
  width,
  height,
  srcSet,
  sizes,
  tall = false,
  className = "device browser",
  priority = false,
}: {
  url: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  srcSet?: string;
  sizes?: string;
  tall?: boolean;
  className?: string;
  /** Only the page's hero / LCP screenshot. Everything else lazy-loads. */
  priority?: boolean;
}) {
  if (priority) {
    preload(src, {
      as: "image",
      ...(srcSet ? { imageSrcSet: srcSet, imageSizes: sizes ?? "100vw" } : {}),
      fetchPriority: "high",
    });
  }
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
          <img
            src={src}
            srcSet={srcSet}
            sizes={sizes}
            alt={alt}
            width={width}
            height={height}
            fetchPriority="high"
            decoding="async"
          />
        ) : (
          <img
            src={src}
            srcSet={srcSet}
            sizes={sizes}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
          />
        )}
      </div>
    </figure>
  );
}
