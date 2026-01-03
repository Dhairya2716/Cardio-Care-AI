"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Activity, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-500/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400 mb-6 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 inline-block mr-2" />
              AI-Powered Health Screening
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Advanced Heart <br />
              Health <span className="text-gradient-primary">Prediction System</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg mb-10">
              Leverage machine learning to assess your cardiovascular disease risk based on comprehensive health metrics and lifestyle factors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/predict">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14 bg-blue-600 hover:bg-blue-500 border-0 shadow-lg shadow-blue-500/25">
                  <ShieldCheck className="mr-2 h-5 w-5" /> Get Your Assessment
                </Button>
              </Link>
              <Link href="/eda">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 h-14 glass hover:bg-white/10 border-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              {
                icon: Zap,
                title: "Machine Learning Powered",
                desc: "Advanced algorithms trained on extensive medical datasets.",
                color: "text-blue-500"
              },
              {
                icon: Activity,
                title: "Real-Time Analysis",
                desc: "Get instant risk assessment within seconds.",
                color: "text-orange-500"
              },
              {
                icon: ShieldCheck,
                title: "Comprehensive Metrics",
                desc: "Analyzes blood pressure, cholesterol, and lifestyle.",
                color: "text-green-500"
              },
              {
                icon: Activity,
                title: "Detailed Insights",
                desc: "Personalized risk indicators and recommendations.",
                color: "text-purple-500"
              },
            ].map((feature, i) => (
              <div key={i} className="glass p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-white/5 group">
                <div className={`p-3 rounded-lg bg-white/5 w-fit mb-4 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
