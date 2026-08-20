/**
 * Decorative hero graphic: a small layered node graph on a fine grid.
 *
 * Deliberately abstract and low-contrast — it signals "technical" without
 * competing with the copy. Purely decorative, so it is hidden from assistive
 * technology. The edge shimmer is disabled by the global reduced-motion rule.
 */

const LAYERS = [
  { x: 66, count: 4 },
  { x: 200, count: 5 },
  { x: 334, count: 3 },
] as const

const HEIGHT = 300
const NODE_RADIUS = 5

function nodesFor(layer: (typeof LAYERS)[number]) {
  const gap = HEIGHT / (layer.count + 1)
  return Array.from({ length: layer.count }, (_, index) => ({
    x: layer.x,
    y: gap * (index + 1),
  }))
}

export function HeroVisual() {
  const layers = LAYERS.map(nodesFor)
  const edges: Array<{ x1: number; y1: number; x2: number; y2: number; key: string }> = []

  for (let l = 0; l < layers.length - 1; l += 1) {
    layers[l].forEach((from, i) => {
      layers[l + 1].forEach((to, j) => {
        edges.push({ x1: from.x, y1: from.y, x2: to.x, y2: to.y, key: `${l}-${i}-${j}` })
      })
    })
  }

  return (
    <div
      aria-hidden="true"
      className="bg-grid relative overflow-hidden rounded-xl border border-border bg-surface/60"
    >
      {/* Corner ticks — a small piece of drafting-table detail */}
      <span className="absolute top-3 left-3 size-2 border-t border-l border-accent/50" />
      <span className="absolute top-3 right-3 size-2 border-t border-r border-accent/50" />
      <span className="absolute bottom-3 left-3 size-2 border-b border-l border-accent/50" />
      <span className="absolute right-3 bottom-3 size-2 border-r border-b border-accent/50" />

      <svg viewBox="0 0 400 300" className="h-full w-full" role="presentation">
        <g stroke="currentColor" className="text-fg-subtle/25">
          {edges.map((edge) => (
            <line
              key={edge.key}
              x1={edge.x1}
              y1={edge.y1}
              x2={edge.x2}
              y2={edge.y2}
              strokeWidth={0.75}
            />
          ))}
        </g>

        {/* A few highlighted paths so the graph reads as active, not static noise */}
        <g stroke="currentColor" className="animate-edge text-accent/70" strokeWidth={1.25}>
          {[edges[2], edges[9], edges[16], edges[23]].filter(Boolean).map((edge) => (
            <line key={`hot-${edge.key}`} x1={edge.x1} y1={edge.y1} x2={edge.x2} y2={edge.y2} />
          ))}
        </g>

        {layers.map((layer, layerIndex) =>
          layer.map((node, nodeIndex) => (
            <circle
              key={`${layerIndex}-${nodeIndex}`}
              cx={node.x}
              cy={node.y}
              r={NODE_RADIUS}
              className="fill-bg stroke-fg-subtle/60"
              strokeWidth={1.25}
            />
          )),
        )}

        {/* Output node emphasis */}
        <circle cx={334} cy={150} r={NODE_RADIUS + 2} className="fill-accent" />
      </svg>

      <div className="flex items-center justify-between border-t border-border px-4 py-2.5 font-mono text-[0.65rem] text-fg-subtle">
        <span>input → transform → output</span>
        <span className="hidden sm:inline">fig. 01</span>
      </div>
    </div>
  )
}
