interface SignalBarsProps {
  level: 1 | 2 | 3 | 4
}

export default function SignalBars({ level }: SignalBarsProps) {
  return (
    <div className="flex items-end gap-1">
      <div className={`w-1 h-2 rounded-sm ${level >= 1 ? "bg-primary" : "bg-muted"}`}></div>
      <div className={`w-1 h-3 rounded-sm ${level >= 2 ? "bg-primary" : "bg-muted"}`}></div>
      <div className={`w-1 h-4 rounded-sm ${level >= 3 ? "bg-primary" : "bg-muted"}`}></div>
      <div className={`w-1 h-5 rounded-sm ${level >= 4 ? "bg-primary" : "bg-muted"}`}></div>
    </div>
  )
}
