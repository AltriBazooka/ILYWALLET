import { InvoicesOverview } from "@/components/invoices-overview"

export default function Invoices() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Invoices</h1>
      {/* Add your invoices-related components here */}
      <InvoicesOverview />
    </div>
  )
}