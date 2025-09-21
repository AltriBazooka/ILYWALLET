import { MembersOverview } from "@/components/members-overview"

export default function Members() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Members</h1>
      {/* Add your members-related components here */}
      <MembersOverview />
    </div>
  )
}