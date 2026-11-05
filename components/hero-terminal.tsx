"use client"

import { useEffect, useRef, useState } from "react"

type Line = { kind: "cmd" | "out"; text: string }

const SCRIPT: { cmd: string; out: string }[] = [
  {
    cmd: "whoami",
    out: "roger — product builder · ai engineer / ml enthusiast",
  },
  {
    cmd: "ls projects",
    out: "polygrow/  socialclubs/  deepbooks/  poetry-ai/  + 20 more on github",
  },
  {
    cmd: "cat philosophy",
    out: '"GitHub is my lab: working code, not claims."',
  },
]

const COMMANDS: Record<string, string> = {
  help: "whoami · ls projects · cat philosophy · skills · contact · clear",
  whoami: "roger — product builder · ai engineer / ml enthusiast",
  "ls projects":
    "polygrow/  socialclubs/  deepbooks/  poetry-ai/  + 20 more on github",
  ls: "polygrow/  socialclubs/  deepbooks/  poetry-ai/  + 20 more on github",
  "cat philosophy": '"GitHub is my lab: working code, not claims."',
  skills: "langgraph · pytorch · rust · next.js · unsloth · supabase · stripe",
  contact: "github.com/SRogDev · rogeroriaglez@gmail.com · CV below",
}

export default function HeroTerminal() {
  const [lines, setLines] = useState<Line[]>([])
  const [typing, setTyping] = useState("")
  const [interacted, setInteracted] = useState(false)
  const [scriptDone, setScriptDone] = useState(false)
  const [input, setInput] = useState("")
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight })
  }, [lines, typing])

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setLines(
        SCRIPT.flatMap((s) => [
          { kind: "cmd" as const, text: s.cmd },
          { kind: "out" as const, text: s.out },
        ]),
      )
      setScriptDone(true)
      return
    }
    let step = 0
    let char = 0
    let cancelled = false
    const typeNext = () => {
      if (cancelled) return
      const current = SCRIPT[step]
      if (!current) {
        setTyping("")
        setScriptDone(true)
        return
      }
      if (char <= current.cmd.length) {
        setTyping(current.cmd.slice(0, char))
        char++
        timers.current.push(setTimeout(typeNext, 45))
      } else {
        timers.current.push(
          setTimeout(() => {
            if (cancelled) return
            setLines((prev) => [
              ...prev,
              { kind: "cmd", text: current.cmd },
              { kind: "out", text: current.out },
            ])
            setTyping("")
            step++
            char = 0
            timers.current.push(setTimeout(typeNext, 500))
          }, 350),
        )
      }
    }
    timers.current.push(setTimeout(typeNext, 600))
    return () => {
      cancelled = true
      timers.current.forEach(clearTimeout)
      timers.current = []
    }
  }, [])

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase()
    setInteracted(true)
    timers.current.forEach(clearTimeout)
    timers.current = []
    setTyping("")
    if (!cmd) return
    if (cmd === "clear") {
      setLines([])
      return
    }
    const out =
      COMMANDS[cmd] ?? `command not found: ${cmd} — try "help"`
    setLines((prev) => [
      ...prev,
      { kind: "cmd", text: raw.trim() },
      { kind: "out", text: out },
    ])
  }

  return (
    <div className="rounded-xl border border-border bg-black/70 text-left font-mono text-xs sm:text-sm shadow-2xl shadow-black/50 overflow-hidden">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/60 bg-white/[0.02]">
        <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="ml-2 text-muted-foreground">roger@personal-web — zsh</span>
      </div>
      <div ref={bodyRef} className="px-3 py-3 min-h-[132px] max-h-[220px] overflow-y-auto">
        {lines.map((line, i) => (
          <div key={i} className="leading-relaxed break-words">
            {line.kind === "cmd" ? (
              <span>
                <span className="text-accent mr-2">&gt;</span>
                <span className="text-foreground">{line.text}</span>
              </span>
            ) : (
              <span className="text-primary/90">{line.text}</span>
            )}
          </div>
        ))}
        {!interacted && !scriptDone && (
          <div className="leading-relaxed">
            <span className="text-accent mr-2">&gt;</span>
            <span className="text-foreground">{typing}</span>
            <span className="inline-block w-2 h-4 bg-primary/80 align-middle animate-pulse" />
          </div>
        )}
        {(interacted || scriptDone) && (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              runCommand(input)
              setInput("")
            }}
            className="flex leading-relaxed"
          >
            <span className="text-accent mr-2">&gt;</span>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='try "help"'
              aria-label="Terminal command"
              className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
            />
          </form>
        )}
      </div>
    </div>
  )
}
