type ProposalCardProps = {
  id: string
  title: string
  description: string
  status: 'Active' | 'Pending' | 'Executed' | 'Defeated'
  forVotes: number
  againstVotes: number
}

export function ProposalCard({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id,
  title,
  description,
  status,
  forVotes,
  againstVotes,
}: ProposalCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 hover:border-zinc-700 transition">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-xs px-2 py-1 rounded bg-zinc-800">
          {status}
        </span>
      </div>

      <p className="text-sm text-zinc-400 line-clamp-2 mb-4">
        {description}
      </p>

      <div className="flex justify-between text-sm text-zinc-300">
        <span>👍 {forVotes}</span>
        <span>👎 {againstVotes}</span>
      </div>
    </div>
  )
}
