import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import * as motion from "motion/react-client";
import content from "@/www/content";

export function Members() {
  return (
    <section className="py-24 bg-background flex items-center justify-center">
      <div className="container px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Our diverse team of talented students brings together expertise in
            engineering, programming, design, and leadership.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {content.teamInfo.map((member, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              key={index}
            >
              <Card
                key={index}
                className="overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-circle-user-round-icon lucide-circle-user-round"
                    >
                      <path d="M18 20a6 6 0 0 0-12 0" />
                      <circle cx="12" cy="10" r="4" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">
                    {member.role}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    {member.specialty}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
