import { useEffect, useState, type ReactNode } from "react";

type ProjectVisualProps = {
  src: string;
  alt: string;
  url: string;
  variant: "browser" | "phone";
  images?: string[];
};

function Glow({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/35 via-purple-500/25 to-cyan-500/10 blur-3xl opacity-70 transition-opacity duration-500 group-hover/visual:opacity-100 ${className}`}
    />
  );
}

function useSlideshow(length: number, intervalMs = 5000) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (length < 2) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [length, intervalMs]);

  return { activeIndex, setActiveIndex };
}

function SlideIndicators({
  count,
  activeIndex,
  onSelect,
  placement = "overlay",
}: {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
  placement?: "overlay" | "inline";
}) {
  return (
    <div
      className={
        placement === "overlay"
          ? "absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2"
          : "flex justify-center gap-2 pt-3"
      }
    >
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Show slide ${index + 1}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onSelect(index);
          }}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            index === activeIndex
              ? "w-6 bg-primary"
              : placement === "inline"
                ? "w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground/60"
                : "w-1.5 bg-white/40 hover:bg-white/60"
          }`}
        />
      ))}
    </div>
  );
}

function PhoneDevice({
  url,
  children,
}: {
  url: string;
  children: ReactNode;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[280px] md:max-w-[300px]">
      <Glow className="rounded-[3.5rem]" />
      <div className="relative rounded-[2.75rem] border border-white/15 bg-gradient-to-b from-zinc-600 to-zinc-900 p-3 shadow-2xl shadow-black/60 ring-1 ring-white/10 transition duration-500 group-hover/visual:-translate-y-1 group-hover/visual:rotate-[-1deg]">
        <div className="overflow-hidden rounded-[2.1rem] bg-zinc-950 px-2.5 pt-2.5 pb-2">
          <div className="flex justify-center pb-2">
            <div className="h-4 w-[4.5rem] rounded-full bg-zinc-800 ring-1 ring-white/10" />
          </div>
          {children}
          <div className="flex justify-center pt-2">
            <div className="h-1 w-24 rounded-full bg-zinc-700" />
          </div>
        </div>
      </div>
      <p className="mt-5 text-center text-xs tracking-wide text-muted-foreground">{url}</p>
    </div>
  );
}

function PhoneScreen({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[9/16] w-full overflow-hidden rounded-[1.35rem] border border-white/10 bg-zinc-900 shadow-[inset_0_2px_12px_rgba(0,0,0,0.45)] ${className}`}
    >
      {children}
    </div>
  );
}

function PhoneScreenImage({
  src,
  alt,
  screenBg = "bg-white",
  fit = "contain",
}: {
  src: string;
  alt: string;
  screenBg?: string;
  fit?: "contain" | "cover";
}) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center ${screenBg} ${
        fit === "cover" ? "p-2" : "p-3"
      }`}
    >
      <img
        src={src}
        alt={alt}
        className={
          fit === "cover"
            ? "h-full w-full rounded-[0.85rem] object-cover object-center"
            : "max-h-full max-w-full rounded-md object-contain"
        }
      />
    </div>
  );
}

function BrowserSlideshow({
  images,
  alt,
  url,
}: {
  images: string[];
  alt: string;
  url: string;
}) {
  const { activeIndex, setActiveIndex } = useSlideshow(images.length);

  return (
    <div className="relative mx-auto w-full max-w-lg sm:max-w-xl">
      <Glow />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 shadow-2xl shadow-black/60 ring-1 ring-white/10 transition duration-500 group-hover/visual:-translate-y-1 group-hover/visual:shadow-primary/20">
        <div className="flex items-center gap-2 border-b border-white/10 bg-zinc-900/90 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/90" />
          <div className="ml-2 flex-1 truncate rounded-md bg-white/5 px-3 py-1.5 text-center text-xs text-muted-foreground">
            {url}
          </div>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
          {images.map((imageSrc, index) => (
            <img
              key={imageSrc}
              src={imageSrc}
              alt={`${alt} screenshot ${index + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/30 via-transparent to-transparent" />
          <SlideIndicators
            count={images.length}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
          />
        </div>
      </div>
    </div>
  );
}

function BrowserMockup({ src, alt, url }: { src: string; alt: string; url: string }) {
  return (
    <div className="relative mx-auto w-full max-w-lg sm:max-w-xl">
      <Glow />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 shadow-2xl shadow-black/60 ring-1 ring-white/10 transition duration-500 group-hover/visual:-translate-y-1 group-hover/visual:shadow-primary/20">
        <div className="flex items-center gap-2 border-b border-white/10 bg-zinc-900/90 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/90" />
          <div className="ml-2 flex-1 truncate rounded-md bg-white/5 px-3 py-1.5 text-center text-xs text-muted-foreground">
            {url}
          </div>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover transition duration-700 group-hover/visual:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}

function PhoneSlideshow({
  images,
  alt,
  url,
}: {
  images: string[];
  alt: string;
  url: string;
}) {
  const { activeIndex, setActiveIndex } = useSlideshow(images.length);
  const slideStyles = [
    { screenBg: "bg-white", fit: "contain" as const },
    { screenBg: "bg-zinc-950", fit: "cover" as const },
  ];

  return (
    <PhoneDevice url={url}>
      <PhoneScreen>
        {images.map((imageSrc, index) => (
          <div
            key={imageSrc}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <PhoneScreenImage
              src={imageSrc}
              alt={`${alt} screenshot ${index + 1}`}
              screenBg={slideStyles[index]?.screenBg ?? "bg-zinc-950"}
              fit={slideStyles[index]?.fit ?? "cover"}
            />
          </div>
        ))}
      </PhoneScreen>
      <SlideIndicators
        count={images.length}
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
        placement="inline"
      />
    </PhoneDevice>
  );
}

function PhoneMockup({ src, alt, url }: { src: string; alt: string; url: string }) {
  return (
    <PhoneDevice url={url}>
      <PhoneScreen>
        <PhoneScreenImage src={src} alt={alt} />
      </PhoneScreen>
    </PhoneDevice>
  );
}

export function ProjectVisual({ src, alt, url, variant, images }: ProjectVisualProps) {
  const slideshowImages = images && images.length > 1 ? images : null;

  return (
    <div className="group/visual relative flex items-center justify-center py-2 sm:py-4 lg:py-8">
      {variant === "phone" ? (
        slideshowImages ? (
          <PhoneSlideshow images={slideshowImages} alt={alt} url={url} />
        ) : (
          <PhoneMockup src={src} alt={alt} url={url} />
        )
      ) : slideshowImages ? (
        <BrowserSlideshow images={slideshowImages} alt={alt} url={url} />
      ) : (
        <BrowserMockup src={src} alt={alt} url={url} />
      )}
    </div>
  );
}
