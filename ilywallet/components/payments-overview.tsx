import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PaymentsOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payments Overview</CardTitle>
        <CardDescription>Details about your payments.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is a placeholder for your payments' details.</p>
      </CardContent>
    </Card>
  )
}