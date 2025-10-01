"use client";

import { Button } from "@/components/ui/button";
import { Zap, Cpu } from "lucide-react";
import Image from "next/image";
import * as motion from "motion/react-client";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container relative z-10 px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo/Icon */}
          <motion.div
            className="relative"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative bg-primary/10 p-4 rounded-2xl border border-primary/20">
              {/* <Cpu className="w-16 h-16 text-primary" /> */}
              <Image
                width={602}
                height={602}
                src="/rbclogo.png"
                alt="MLIS Robotics Club Logo"
                className="w-32 h-32"
              />
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            className="space-y-4 max-w-4xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: (x: number): number => {
                return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
              },
            }}
          >
            <h1 className="font-sans text-5xl md:text-7xl font-bold tracking-tight text-balance">
              MLIS Robotics Club
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
              Building the future through innovation, collaboration, and
              cutting-edge robotics technology
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <Button size="lg" className="text-base">
              <Zap className="w-4 h-4 mr-1" />
              Join the Club
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base bg-transparent"
            >
              View Projects
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 pt-12 max-w-2xl w-full"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
          >
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                50+
              </div>
              <div className="text-sm text-muted-foreground">
                Active Members
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                12
              </div>
              <div className="text-sm text-muted-foreground">
                Competitions Won
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                25+
              </div>
              <div className="text-sm text-muted-foreground">
                Projects Built
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
