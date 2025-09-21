import { PaymentsOverview } from "@/components/payments-overview"

export default function Payments() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
      {/* Add your payments-related components here */}
      <PaymentsOverview />
    </div>
  )
}