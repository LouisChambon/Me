import { useRef, useEffect } from 'react'

export default function Background({ theme }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W = canvas.width = window.innerWidth
    let H = canvas.height = window.innerHeight
    let animId

    const orbs = [
      { x: W * 0.15, y: H * 0.2,  r: 320, hue: 260, vx: 0.18,  vy: 0.12  },
      { x: W * 0.8,  y: H * 0.7,  r: 280, hue: 280, vx: -0.14, vy: -0.10 },
      { x: W * 0.5,  y: H * 0.9,  r: 240, hue: 220, vx: 0.10,  vy: -0.16 },
      { x: W * 0.9,  y: H * 0.15, r: 200, hue: 300, vx: -0.12, vy: 0.14  },
    ]

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      const isDark = theme === 'dark'
      ctx.fillStyle = isDark ? '#07070f' : '#f0f0f8'
      ctx.fillRect(0, 0, W, H)

      orbs.forEach(o => {
        o.x += o.vx
        o.y += o.vy
        if (o.x < -o.r || o.x > W + o.r) o.vx *= -1
        if (o.y < -o.r || o.y > H + o.r) o.vy *= -1

        const alpha = isDark ? 0.18 : 0.10
        const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r)
        grad.addColorStop(0, `hsla(${o.hue},80%,60%,${alpha})`)
        grad.addColorStop(1, `hsla(${o.hue},80%,60%,0)`)
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2)
        ctx.fill()
      })

      ctx.strokeStyle = isDark ? 'rgba(124,58,237,0.04)' : 'rgba(124,58,237,0.06)'
      ctx.lineWidth = 1
      const gridSize = 80
      for (let x = 0; x < W; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke()
      }
      for (let y = 0; y < H; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
      }

      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  )
}
