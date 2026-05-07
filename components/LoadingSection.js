export default function LoadingSection({ height = 'h-96' }) {
  return (
    <div className={`${height} flex items-center justify-center bg-void`}>
      <div className="relative">
        <div className="w-10 h-10 rounded-full border-2 border-white/[0.06] border-t-cyan-400 animate-spin" />
        <div className="absolute inset-0 rounded-full blur-sm bg-cyan-400/10 animate-pulse-slow" />
      </div>
    </div>
  );
}
