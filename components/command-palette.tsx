"use client"

import { useEffect, useRef, useState } from "react"

type Action = {
  label: string
  hint: string
  run: () => void
}

const ACTIONS: Action[] = [
  {
    label: "Ask the AI about Roger",
    hint: "chat",
    run: () => window.dispatchEvent(new CustomEvent("roger:open-chat")),
  },
  {
    label: "Download CV",
    hint: "pdf",
    run: () => {
      const link = document.createElement("a")
      link.href = "/RogerCV.pdf"
      link.download = "RogerCV.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },
  },
  {
    label: "Go to Featured projects",
    hint: "section",
    run: () =>
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    label: "Go to Industries",
    hint: "section",
    run: () =>
      document.getElementById("industries")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    label: "Go to Education",
    hint: "section",
    run: () =>
      document.getElementById("education")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    label: "Go to Open work",
    hint: "section",
    run: () =>
      document.getElementById("open-work")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    label: "Go to Writing",
    hint: "section",
    run: () =>
      document.getElementById("writing")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    label: "Go to Contact",
    hint: "section",
    run: () =>
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    label: "Copy email address",
    hint: "rogeroriaglez@gmail.com",
    run: () =>
      navigator.clipboard?.writeText("rogeroriaglez@gmail.com").catch(() => {}),
  },
  {
    label: "Open GitHub — SRogDev",
    hint: "github",
    run: () => window.open("https://github.com/SRogDev", "_blank"),
  },
]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((prev) => !prev)
      } else if (e.key === "Escape") {
        setOpen(false)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    if (open) {
      setQuery("")
      setSelected(0)
      setTimeout(() => inputRef.current?.focus(), 0)
    }
  }, [open ])

  const filtered = ACTIONS.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase()),
  )
  const current = filtered[Math.min(selected, Math.max(filtered.length - 1, 0))]

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-start justify-center pt-[15vh] px-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-lg rounded-xl border border-border bg-card shadow-2xl shadow-black/60 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60">
          <span className="font-mono text-accent">⌘K</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setSelected(0)
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault()
                setSelected((s) => Math.min(s + 1, filtered.length - 1))
              } else if (e.key === "ArrowUp") {
                e.preventDefault()
                setSelected((s) => Math.max(s - 1, 0))
              } else if (e.key === "Enter" && current) {
                setOpen(false)
                current.run()
              }
            }}
            placeholder="Type a command or search…"
            aria-label="Command palette"
            className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-sm"
          />
          <kbd className="text-[10px] font-mono text-muted-foreground border border-border rounded px-1.5 py-0.5">
            ESC
          </kbd>
        </div>
        <div className="max-h-72 overflow-y-auto py-1">
          {filtered.length === 0 && (
            <p className="px-4 py-3 text-sm text-muted-foreground">
              No matching command.
            </p>
          )}
          {filtered.map((action, i) => (
            <button
              key={action.label}
              type="button"
              onMouseEnter={() => setSelected(i)}
              onClick={() => {
                setOpen(false)
                action.run()
              }}
              className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between ${
                i === selected ? "bg-accent/10 text-foreground" : "text-muted-foreground"
              }`}
            >
              <span>{action.label}</span>
              <span className="text-xs font-mono text-muted-foreground/70">
                {action.hint}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
