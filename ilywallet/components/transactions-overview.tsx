import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function TransactionsOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transactions Overview</CardTitle>
        <CardDescription>Details about your transactions.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is a placeholder for your transactions' details.</p>
      </CardContent>
    </Card>
  )
}