import { Button } from "@/components/ui/button"
import { Zap, Cpu } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container relative z-10 px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo/Icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative bg-primary/10 p-6 rounded-2xl border border-primary/20">
              <Cpu className="w-16 h-16 text-primary" />
            </div>
          </div>

          {/* Main heading */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="font-sans text-5xl md:text-7xl font-bold tracking-tight text-balance">MLIS Robotics Club</h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
              Building the future through innovation, collaboration, and cutting-edge robotics technology
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="text-base">
              <Zap className="w-4 h-4 mr-2" />
              Join the Club
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent">
              View Projects
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl w-full">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">12</div>
              <div className="text-sm text-muted-foreground">Competitions Won</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Projects Built</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}