'use client';

import { useEffect } from 'react';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="flex flex-col items-center gap-4 max-w-md">
        <span className="text-6xl font-bold text-(--accent) opacity-60">!</span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Something went wrong
        </h2>
        <p className="text-(--muted) text-base">
          An unexpected error occurred. You can try again or come back later.
        </p>
        {error.digest && (
          <p className="text-xs text-(--muted)/50 font-mono">
            Error ID: {error.digest}
          </p>
        )}
        <button
          onClick={reset}
          className="mt-2 inline-flex items-center justify-center bg-(--accent) px-6 py-3 text-sm font-semibold uppercase tracking-wider text-background hover:bg-(--accent-hover) transition-colors rounded-xl"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
