// ─── Decorative QR code — deterministic pattern, not a real scannable code ────
interface QRCodeProps {
  size?: number
  label?: string
  dark?: string
  className?: string
}

export function QRCode({ size = 152, label = 'Código QR', dark = '#0B1742', className }: QRCodeProps) {
  const gridSize = 21
  const finderSize = 7
  const cellSize = size / gridSize

  const inFinderZone = (row: number, col: number) =>
    (row < finderSize && col < finderSize) ||
    (row < finderSize && col >= gridSize - finderSize) ||
    (row >= gridSize - finderSize && col < finderSize)

  const cells: { row: number; col: number }[] = []
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      if (inFinderZone(row, col)) continue
      if ((row * 13 + col * 7 + row * col) % 5 < 2) cells.push({ row, col })
    }
  }

  const finderOrigins = [
    [0, 0],
    [gridSize - finderSize, 0],
    [0, gridSize - finderSize],
  ]

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label={label}
      className={className}
    >
      <rect width={size} height={size} fill="white" />
      {cells.map(({ row, col }) => (
        <rect key={`${row}-${col}`} x={col * cellSize} y={row * cellSize} width={cellSize} height={cellSize} fill={dark} />
      ))}
      {finderOrigins.map(([col, row]) => (
        <g key={`${row}-${col}`} transform={`translate(${col * cellSize}, ${row * cellSize})`}>
          <rect width={cellSize * finderSize} height={cellSize * finderSize} fill={dark} />
          <rect x={cellSize} y={cellSize} width={cellSize * 5} height={cellSize * 5} fill="white" />
          <rect x={cellSize * 2} y={cellSize * 2} width={cellSize * 3} height={cellSize * 3} fill={dark} />
        </g>
      ))}
    </svg>
  )
}
