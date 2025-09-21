import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function OrganizationOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Organization Overview</CardTitle>
        <CardDescription>Details about your organization.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is a placeholder for your organization's details.</p>
      </CardContent>
    </Card>
  )
}