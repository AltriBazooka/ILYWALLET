import { OrganizationOverview } from "@/components/organization-overview"

export default function Organization() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Organization</h1>
      {/* Add your organization-related components here */}
      <OrganizationOverview />
    </div>
  )
}