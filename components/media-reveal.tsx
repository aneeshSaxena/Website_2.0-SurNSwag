"use client"

import { useEffect, useRef, useState } from "react"

interface MediaRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function MediaReveal({ children, className = "", delay = 0 }: MediaRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        } else {
          // Re-trigger animation when scrolling back up
          setIsVisible(false)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-10"
      } ${className}`}
    >
      {children}
    </div>
  )
}


