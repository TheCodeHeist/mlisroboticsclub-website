import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Members() {
  const members = [
    {
      name: "Nusaiba Nazahat Chisty",
      role: "President",
      specialty: "Artificial Intelligence",
      image: "/nusaiba.jpg",
    },
    {
      name: "Md Riyasat Hossain",
      role: "Vice President",
      specialty: "Software Engineering",
      image: "/riyasat.jpg",
    },
    {
      name: "Imtiaz Khan",
      role: "General Secretary",
      specialty: "Tech and Communication",
      image: "/imtiaz.jpg",
    },
    {
      name: "Ahnaf Juhayer Rahman",
      role: "Treasurer",
      specialty: "Graphics Designing",
      image: "/juhayer.jpg",
    },
  ]

  return (
    <section className="py-24 bg-background flex items-center justify-center">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Our diverse team of talented students brings together expertise in engineering, programming, design, and
            leadership.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {members.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:border-primary/50 transition-colors">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <Badge variant="secondary" className="mb-3">
                  {member.role}
                </Badge>
                <p className="text-sm text-muted-foreground">{member.specialty}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
