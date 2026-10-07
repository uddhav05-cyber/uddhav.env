import type { ReactNode } from 'react';

interface MarqueeProps {
  items: ReactNode[];
  ariaLabel?: string;
}

export function Marquee({ items, ariaLabel }: MarqueeProps) {
  return (
    <div className="overflow-hidden" aria-label={ariaLabel}>
      <div className="animate-marquee">
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {items.map((item, index) => (
            <span key={`first-${index}`} className="shrink-0">
              {item}
            </span>
          ))}
        </div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {items.map((item, index) => (
            <span key={`second-${index}`} className="shrink-0">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
