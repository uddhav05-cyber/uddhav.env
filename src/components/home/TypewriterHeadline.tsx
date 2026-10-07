'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const HEADLINES = [
  {
    prefix: 'I build AI agents that do the work, ',
    highlight: 'not just answer.',
  },
  {
    prefix: 'Building scalable, high-performance ',
    highlight: 'cloud-native software.',
  },
  {
    prefix: 'Automating end-to-end ',
    highlight: 'data pipelines & APIs.',
  },
  {
    prefix: 'Turning complex technical ideas into ',
    highlight: 'production code.',
  },
];

const TYPE_DELAY = 50;
const DELETE_DELAY = 30;
const HOLD_DELAY = 3000;

type TypewriterPhase = 'typing' | 'holding' | 'deleting';

export function TypewriterHeadline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [phase, setPhase] = useState<TypewriterPhase>('typing');
  const reduceMotion = useReducedMotion();
  const headline = HEADLINES[activeIndex];
  const fullText = `${headline.prefix}${headline.highlight}`;
  const visibleText = reduceMotion ? fullText : fullText.slice(0, characterCount);

  useEffect(() => {
    if (reduceMotion) return;

    const isComplete = characterCount === fullText.length;
    const isEmpty = characterCount === 0;
    const delay = phase === 'holding'
      ? HOLD_DELAY
      : phase === 'deleting'
        ? DELETE_DELAY
        : TYPE_DELAY;

    const timer = window.setTimeout(() => {
      if (phase === 'typing') {
        if (isComplete) {
          setPhase('holding');
        } else {
          setCharacterCount((count) => count + 1);
        }
      } else if (phase === 'holding') {
        setPhase('deleting');
      } else if (isEmpty) {
        setActiveIndex((index) => (index + 1) % HEADLINES.length);
        setPhase('typing');
      } else {
        setCharacterCount((count) => count - 1);
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [activeIndex, characterCount, fullText, phase, reduceMotion]);

  const highlightStart = headline.prefix.length;

  return (
    <h1
      aria-live="polite"
      className="mt-7 font-display text-[clamp(2.625rem,8vw,6.375rem)] leading-[0.98] tracking-[-0.02em]"
    >
      {visibleText.length > highlightStart ? (
        <>
          {visibleText.slice(0, highlightStart)}
          <em className="text-primary">
            {visibleText.slice(highlightStart, fullText.length)}
          </em>
          {visibleText.slice(fullText.length)}
        </>
      ) : (
        visibleText
      )}
      {!reduceMotion && (
        <span aria-hidden="true" className="ml-1 inline-block animate-pulse text-primary">
          |
        </span>
      )}
    </h1>
  );
}
