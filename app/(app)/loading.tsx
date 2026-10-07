export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-4">
        <span className="text-2xl font-bold tracking-tight text-foreground animate-pulse">
          AMR SAMY
        </span>
        <div className="h-0.5 w-16 rounded-full bg-(--accent) animate-pulse" />
      </div>
    </div>
  );
}
