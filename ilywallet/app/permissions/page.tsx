import { PermissionsOverview } from "@/components/permissions-overview"

export default function Permissions() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Permissions</h1>
      {/* Add your permissions-related components here */}
      <PermissionsOverview />
    </div>
  )
}