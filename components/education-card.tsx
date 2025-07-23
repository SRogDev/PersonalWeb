interface EducationCardProps {
  course: string
  provider: string
}

export default function EducationCard({ course, provider }: EducationCardProps) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-foreground">{course}</h3>
      <p className="text-muted-foreground">{provider}</p>
    </div>
  )
}
