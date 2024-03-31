'use client';

const isBrowser = () => typeof window !== 'undefined';

export default function getViewportWidth(): number {
  return isBrowser() ? window.innerWidth : 400; // default screen is mobile
}
