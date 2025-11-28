"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PricingTier {
  name: string
  description: string
  price: number
  period: string
  badge?: string
  features: string[]
  cta: string
  highlighted?: boolean
}

const tiers: PricingTier[] = [
  {
    name: "Starter",
    description: "Perfect for getting started with WhatsApp automation",
    price: 29,
    period: "month",
    features: [
      "Up to 1,000 messages/month",
      "Basic automation templates",
      "24/7 customer support",
      "Real-time message delivery",
      "Contact management",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses needing advanced features",
    price: 79,
    period: "month",
    badge: "Most Popular",
    features: [
      "Up to 10,000 messages/month",
      "Advanced automation & workflows",
      "Priority 24/7 support",
      "Real-time analytics & reports",
      "Team collaboration (up to 5 users)",
      "Custom integrations",
      "API access",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For large-scale operations with custom requirements",
    price: 0,
    period: "custom",
    features: [
      "Unlimited messages",
      "Unlimited automation",
      "Dedicated support team",
      "Advanced analytics",
      "Unlimited team members",
      "Custom integrations",
      "SLA guarantee",
      "On-premise deployment option",
    ],
    cta: "Contact Sales",
  },
]

export default function PricingSection() {
  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
        <div className="inline-block mb-4 px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
          <span className="text-sm font-semibold text-accent">Simple, Transparent Pricing</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Choose Your Perfect Plan</h1>
        <p className="text-lg text-muted-foreground text-balance">
          Start automating your WhatsApp communications today. Scale as you grow with our flexible pricing.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all duration-300 ${
                tier.highlighted
                  ? "md:scale-105 bg-primary/5 border-2 border-primary shadow-xl"
                  : "bg-card border border-border hover:border-primary/30 hover:shadow-lg"
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Name & Description */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>

                {/* Pricing */}
                <div className="mb-8">
                  {tier.price > 0 ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-foreground">${tier.price}</span>
                      <span className="text-muted-foreground">/{tier.period}</span>
                    </div>
                  ) : (
                    <div className="text-2xl font-bold text-foreground">Custom Pricing</div>
                  )}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full mb-8 font-semibold h-11 rounded-lg transition-all ${
                    tier.highlighted
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-foreground/10 hover:bg-foreground/20 text-foreground"
                  }`}
                >
                  {tier.cta}
                </Button>

                {/* Features */}
                <div className="space-y-4 border-t border-border pt-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="max-w-3xl mx-auto mt-16 text-center">
        <p className="text-muted-foreground mb-4">
          Need more information? Check out our{" "}
          <a href="#" className="text-accent font-semibold hover:underline">
            FAQ
          </a>{" "}
          or{" "}
          <a href="#" className="text-accent font-semibold hover:underline">
            contact support
          </a>
        </p>
      </div>
    </section>
  )
}
