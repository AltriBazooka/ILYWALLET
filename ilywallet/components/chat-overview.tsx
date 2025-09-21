import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ChatOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Chat Overview</CardTitle>
        <CardDescription>Details about your chat.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is a placeholder for your chat's details.</p>
      </CardContent>
    </Card>
  )
}