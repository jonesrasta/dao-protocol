import { ProposalCard } from "../components/proposal/ProposalCard";


export default function Home() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <ProposalCard 
        id="1"
        title="Proposal Title 1"
        description="This is a sample proposal description."
        status="Active"
        forVotes={100}
        againstVotes={50}
      />
    </div>
  )
}
