import { ProjectsOverview } from "@/components/projects-overview"

export default function Projects() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
      {/* Add your projects-related components here */}
      <ProjectsOverview />
    </div>
  )
}