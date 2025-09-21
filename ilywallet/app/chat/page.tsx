import { ChatOverview } from "@/components/chat-overview"

export default function Chat() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Chat</h1>
      {/* Add your chat-related components here */}
      <ChatOverview />
    </div>
  )
}