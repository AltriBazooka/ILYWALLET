import { TransactionsOverview } from "@/components/transactions-overview"

export default function Transactions() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
      {/* Add your transactions-related components here */}
      <TransactionsOverview />
    </div>
  )
}