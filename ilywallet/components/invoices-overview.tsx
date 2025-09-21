import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function InvoicesOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoices Overview</CardTitle>
        <CardDescription>Details about your invoices.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is a placeholder for your invoices' details.</p>
      </CardContent>
    </Card>
  )
}