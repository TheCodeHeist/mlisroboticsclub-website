import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock } from "lucide-react";
import * as motion from "motion/react-client";
import content from "@/www/content";

export function Events() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Upcoming":
        return "bg-primary text-primary-foreground";
      case "Recurring":
        return "bg-accent text-accent-foreground";
      case "Past":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section className="py-24 bg-muted/30 flex items-center justify-center">
      <div className="container px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Events & Activities
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Stay updated with our competitions, workshops, and team meetings.
            Join us to learn, build, and compete!
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {content.events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                key={index}
                className="hover:border-primary/50 transition-colors"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <Badge className={getStatusColor(event.status)}>
                      {event.status}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {event.type}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
