// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* Top nav */}
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-cyan-400/10 border border-cyan-400/40 flex items-center justify-center text-xs font-bold text-cyan-300">
              WA
            </div>
            <span className="text-sm font-semibold tracking-tight md:text-base">
              AutoBot<span className="text-cyan-400">WA</span>
            </span>
            <span className="ml-2 rounded-full border border-slate-700 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-slate-400">
              Beta
            </span>
          </div>

          <nav className="hidden items-center gap-6 text-xs font-medium text-slate-300 md:flex">
            <a href="#features" className="hover:text-cyan-400 transition">
              Features
            </a>
            <a href="#pricing" className="hover:text-cyan-400 transition">
              Pricing
            </a>
            <a href="#testimonials" className="hover:text-cyan-400 transition">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-cyan-400/60 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-300 shadow-sm hover:bg-cyan-500/20 md:text-sm"
          >
            Get early access
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 md:flex-row md:items-center md:py-20">
          {/* Left */}
          <div className="flex-1 space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-cyan-200">
              WhatsApp automation for everyday teams
            </span>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Supercharge your{" "}
              <span className="text-cyan-400">WhatsApp</span> conversations.
            </h1>

            <p className="max-w-xl text-sm text-slate-300 md:text-base">
              AutoBotWA helps you send bulk updates, answer common questions,
              and schedule reminders from a single, simple dashboard. Spend
              less time typing the same messages and more time talking to real
              customers.
            </p>

            <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 hover:bg-cyan-400"
              >
                Start free trial
              </a>
              <button className="inline-flex items-center justify-center rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-slate-500">
                Watch quick demo
              </button>
            </div>

            <div className="flex flex-wrap gap-4 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                No complex setup
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Works with WhatsApp Business API
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                5-day free trial, no card
              </div>
            </div>
          </div>

          {/* Right "dashboard" mock */}
          <div className="flex-1">
            <div className="mx-auto max-w-md rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-xl shadow-cyan-500/10">
              <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
                <span>Campaign overview</span>
                <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-[10px] text-cyan-300">
                  Live
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center text-xs">
                <DashboardStat label="Messages sent" value="9.8k" />
                <DashboardStat label="Replies" value="3.1k" highlight />
                <DashboardStat label="CTR" value="29%" subtle />
              </div>

              <div className="mt-4 space-y-2 text-[11px]">
                <DashboardRow
                  title="New collection launch"
                  subtitle="Scheduled · Tomorrow 11:00 AM"
                  pill="2,100 contacts"
                />
                <DashboardRow
                  title="Welcome flow"
                  subtitle="Auto-reply · Always on"
                  pill="+15% reply rate"
                  muted
                />
              </div>
            </div>
            <p className="mt-3 text-center text-[11px] text-slate-500">
              Simple mock interface to show how AutoBotWA might look.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                Built for high-volume WhatsApp workflows
              </h2>
              <p className="mt-1 max-w-xl text-sm text-slate-300">
                Use AutoBotWA for launches, payment reminders, admission
                enquiries, or simple updates. You decide the message, we help
                you send it on time.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="Bulk messaging without chaos"
              description="Upload contacts once, create simple lists like “New leads” or “Existing customers”, and send updates in a few clicks."
              badge="Campaigns"
            />
            <FeatureCard
              title="Smart auto-replies 24/7"
              description="Reply with FAQs, links, and next steps using keyword-based flows so late-night queries still get an answer."
              badge="Automation"
            />
            <FeatureCard
              title="Schedule and never forget"
              description="Set up reminders for fees, renewals, or events. AutoBotWA sends them even if your team is busy or offline."
              badge="Scheduling"
            />
          </div>

          {/* Simple extra strip: who it's for */}
          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-[11px] md:flex md:items-center md:justify-between">
            <p className="font-medium text-slate-200 mb-3 md:mb-0">
              Who uses AutoBotWA?
            </p>
            <div className="flex flex-wrap gap-2">
              {["D2C brands", "Coaching centres", "Agencies", "Local businesses"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 px-3 py-1 text-[11px] text-slate-300"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="mb-8 text-center">
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              Teams already seeing value
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              A small sample of how different teams use WhatsApp automation in
              their day-to-day work.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <TestimonialCard
              quote="We send stock updates and offers in minutes instead of manually forwarding messages all day."
              name="Aditi Sharma"
              role="Owner, fashion store"
            />
            <TestimonialCard
              quote="Most admission queries now come on WhatsApp. Auto-replies help us answer basic questions quickly."
              name="Rahul Verma"
              role="Admin, coaching institute"
            />
            <TestimonialCard
              quote="Reminder flows reduced our follow-up calls. The team finally has breathing space."
              name="Kunal Mehta"
              role="Operations, SaaS company"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="mb-8 text-center">
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              Simple plans for different stages
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Start small, grow when you&apos;re ready. You only pay for the
              contacts and features you actually use.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <PriceCard
              name="Launch"
              price="₹0"
              label="Trying WhatsApp automation for the first time"
              features={[
                "Up to 300 contacts",
                "Broadcast 500 msgs / month",
                "1 simple auto-reply flow",
                "Email support",
              ]}
            />
            <PriceCard
              name="Growth"
              price="₹1,299"
              highlight
              label="For growing brands and institutes"
              features={[
                "Up to 3,000 contacts",
                "Reasonable bulk messaging (fair use)",
                "Multiple keyword-based flows",
                "Team inbox + priority support",
              ]}
            />
            <PriceCard
              name="Business"
              price="Custom"
              label="When WhatsApp becomes your main channel"
              features={[
                "5k+ contacts",
                "Custom integrations and routing",
                "Dedicated success contact",
                "SLA and onboarding support",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-b border-slate-800 bg-slate-950/90"
      >
        <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              Want to try AutoBotWA with your team?
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Share a few details and we&apos;ll send you a short product tour
              and trial instructions on email.
            </p>
          </div>

          <form className="mx-auto grid max-w-xl gap-4 text-sm">
            <div className="grid gap-1.5">
              <label className="text-slate-200" htmlFor="name">
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Shubham Singh"
                className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400"
              />
            </div>
            <div className="grid gap-1.5">
              <label className="text-slate-200" htmlFor="email">
                Work email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400"
              />
            </div>
            <div className="grid gap-1.5">
              <label className="text-slate-200" htmlFor="company">
                Company / brand name
              </label>
              <input
                id="company"
                type="text"
                placeholder="Example Store"
                className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400"
              />
            </div>
            <div className="grid gap-1.5">
              <label className="text-slate-200" htmlFor="volume">
                Approx. monthly WhatsApp messages
              </label>
              <select
                id="volume"
                className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400"
              >
                <option>Up to 1,000</option>
                <option>1,000 – 10,000</option>
                <option>10,000 – 50,000</option>
                <option>50,000+</option>
              </select>
            </div>
            <div className="grid gap-1.5">
              <label className="text-slate-200" htmlFor="hear">
                How did you hear about AutoBotWA?
              </label>
              <select
                id="hear"
                className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400"
              >
                <option>Internship listing</option>
                <option>Friend or colleague</option>
                <option>Social media</option>
                <option>Other</option>
              </select>
            </div>
            <div className="grid gap-1.5">
              <label className="text-slate-200" htmlFor="message">
                What do you want to automate?
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Eg. payment reminders, abandoned carts, support queries..."
                className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400"
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
            >
              Request demo
            </button>
            <p className="text-[11px] text-slate-500">
              By submitting, you agree to receive WhatsApp and email updates
              about your trial and product improvements.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-[11px] text-slate-500 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-200">
              AutoBot<span className="text-cyan-400">WA</span>
            </span>
            <span>© {new Date().getFullYear()} AutoBotWA. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#hero" className="hover:text-cyan-400">
              Back to top
            </a>
            <span>Made with Next.js and Tailwind CSS</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* Small reusable pieces so structure looks clean but not over-complicated */

type DashboardStatProps = {
  label: string;
  value: string;
  highlight?: boolean;
  subtle?: boolean;
};

function DashboardStat({ label, value, highlight, subtle }: DashboardStatProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
      <div className="text-[10px] text-slate-400">{label}</div>
      <div
        className={`mt-1 text-lg font-semibold ${
          highlight
            ? "text-cyan-400"
            : subtle
            ? "text-cyan-200"
            : "text-slate-50"
        }`}
      >
        {value}
      </div>
    </div>
  );
}

type DashboardRowProps = {
  title: string;
  subtitle: string;
  pill: string;
  muted?: boolean;
};

function DashboardRow({ title, subtitle, pill, muted }: DashboardRowProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/90 px-3 py-2">
      <div>
        <div className="font-medium text-slate-50 text-xs">{title}</div>
        <div className="text-[10px] text-slate-400">{subtitle}</div>
      </div>
      <span
        className={`rounded-full px-2 py-0.5 text-[10px] ${
          muted
            ? "bg-slate-800 text-slate-300"
            : "bg-cyan-500/10 text-cyan-300"
        }`}
      >
        {pill}
      </span>
    </div>
  );
}

type FeatureCardProps = {
  title: string;
  description: string;
  badge: string;
};

function FeatureCard({ title, description, badge }: FeatureCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm md:p-5">
      <span className="mb-2 inline-flex w-fit rounded-full bg-cyan-500/10 px-2 py-0.5 text-[10px] font-medium text-cyan-300">
        {badge}
      </span>
      <h3 className="text-sm font-semibold text-slate-50 md:text-base">
        {title}
      </h3>
      <p className="mt-2 text-xs text-slate-300 md:text-sm">{description}</p>
    </div>
  );
}

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm md:p-5">
      <p className="text-xs text-slate-200 md:text-sm">“{quote}”</p>
      <div className="mt-4">
        <div className="text-sm font-semibold text-slate-50">{name}</div>
        <div className="text-[11px] text-slate-400">{role}</div>
      </div>
    </div>
  );
}

type PriceCardProps = {
  name: string;
  price: string;
  label: string;
  features: string[];
  highlight?: boolean;
};

function PriceCard({ name, price, label, features, highlight }: PriceCardProps) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border p-5 text-sm md:p-6 ${
        highlight
          ? "border-cyan-500/70 bg-slate-900 shadow-lg shadow-cyan-500/20"
          : "border-slate-800 bg-slate-900/70"
      }`}
    >
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-slate-50 md:text-base">
            {name}
          </h3>
          <p className="text-[11px] text-slate-400">{label}</p>
        </div>
        {highlight && (
          <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-[10px] font-medium text-cyan-300">
            Most common choice
          </span>
        )}
      </div>
      <div className="mb-4 flex items-baseline gap-1">
        <span className="text-2xl font-semibold text-slate-50 md:text-3xl">
          {price}
        </span>
        {price !== "Custom" && (
          <span className="text-[11px] text-slate-400">/ month</span>
        )}
      </div>
      <ul className="mb-4 space-y-1.5 text-xs text-slate-200">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button
        className={`mt-auto inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold ${
          highlight
            ? "bg-cyan-500 text-slate-950 hover:bg-cyan-400"
            : "border border-slate-700 text-slate-100 hover:border-cyan-400"
        }`}
      >
        {price === "₹0" ? "Get started" : "Choose plan"}
      </button>
    </div>
  );
}