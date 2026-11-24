export function BrowserShot({
  url,
  src,
  alt,
  width,
  height,
  tall = false,
  className = "device browser",
}: {
  url: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  tall?: boolean;
  className?: string;
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
        <img src={src} alt={alt} width={width} height={height} />
      </div>
    </figure>
  );
}
