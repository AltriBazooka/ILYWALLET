import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function MembersOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Members Overview</CardTitle>
        <CardDescription>Details about your members.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is a placeholder for your members' details.</p>
      </CardContent>
    </Card>
  )
}