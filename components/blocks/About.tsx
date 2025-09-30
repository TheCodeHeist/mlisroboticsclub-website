import { Code, Users, Trophy } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Code,
      title: "Learn & Build",
      description:
        "Hands-on experience with robotics, programming, and engineering principles through real-world projects.",
    },
    {
      icon: Users,
      title: "Collaborate",
      description: "Work alongside passionate students who share your interest in technology and innovation.",
    },
    {
      icon: Trophy,
      title: "Compete",
      description: "Participate in regional and national robotics competitions, showcasing your skills and creativity.",
    },
  ]

  return (
    <section className="py-24 bg-muted/30 w-full flex item-center justify-center">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">What We Do</h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            The MLIS Robotics Club is a community of students passionate about robotics, engineering, and technology. We
            design, build, and program robots while developing critical thinking and problem-solving skills.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
