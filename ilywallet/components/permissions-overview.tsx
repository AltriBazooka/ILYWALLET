import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PermissionsOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Permissions Overview</CardTitle>
        <CardDescription>Details about your permissions.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is a placeholder for your permissions' details.</p>
      </CardContent>
    </Card>
  )
}