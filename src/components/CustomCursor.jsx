import React, { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (hidden) setHidden(false)
    }

    const handleMouseLeave = () => setHidden(true)
    const handleMouseEnter = () => setHidden(false)

    const handleMouseOver = (e) => {
      const target = e.target
      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('.service-card') ||
        target.closest('.team-social-btn') ||
        target.closest('.btn') ||
        target.getAttribute('role') === 'button'

      setHovered(!!isClickable)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [hidden])

  if (hidden) return null

  return (
    <>
      <div
        className={`custom-cursor-dot ${hovered ? 'hovered' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`custom-cursor-glow ${hovered ? 'hovered' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  )
}
