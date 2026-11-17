export default function Home() {
  const services = [
    {
      title: "Screen Repair",
      desc: "Fast replacement for cracked or damaged iPhone and Android screens.",
      price: "Starting at $79",
    },
    {
      title: "Battery Replacement",
      desc: "Restore battery life and charging performance with quality replacement batteries.",
      price: "Starting at $59",
    },
    {
      title: "Charging Port Repair",
      desc: "Fix phones that will not charge, charge intermittently, or have damaged ports.",
      price: "Starting at $69",
    },
    {
      title: "Camera & Speaker Repair",
      desc: "Help with camera issues, speaker problems, microphones, and common device faults.",
      price: "Starting at $69",
    },
    {
      title: "PS5 / Console Repair",
      desc: "Help with HDMI issues, no display, overheating, and diagnostic repair.",
      price: "Quote required",
    },
    {
      title: "Root Cause Consulting",
      desc: "Engineering-led failure analysis for electrical and electronic systems. Get help isolating failure mechanisms, reviewing measurements, and developing corrective-action recommendations.",
      price: "Consultation by quote",
    },
    {
      title: "Board-Level Diagnostics",
      desc: "Advanced troubleshooting and component-level repair backed by engineering experience.",
      price: "Diagnostic fee applies",
    },
  ];

  const steps = [
    "Call or text with your device model and issue.",
    "Ask for a quote and repair recommendation.",
    "Confirm repair arrangements and parts availability.",
    "Review the repair outcome and next steps.",
  ];

  const reasons = [
    "Electrical engineer approach to diagnostics",
    "Common repairs may be available the same day; ask first",
    "Clear estimates before repair work begins",
    "Local small business focus with personal service",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/95 backdrop-blur"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-4 lg:px-8"><a href="#" className="font-bold tracking-tight text-white">MPF <span className="text-cyan-400">313</span></a><div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-200"><a href="#services" className="hover:text-cyan-300">Repairs</a><a href="#consulting" className="hover:text-cyan-300">Consulting</a><a href="#faq" className="hover:text-cyan-300">FAQ</a><a href="tel:+13134279331" className="rounded-xl bg-cyan-400 px-4 py-2 font-bold text-slate-950 hover:bg-cyan-300">Call Now</a></div></div></nav>
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#020617] via-[#0a2450] to-[#020617]">
        <div aria-hidden="true" className="absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(34,211,238,.22), transparent 32%), radial-gradient(circle at 12% 85%, rgba(37,99,235,.22), transparent 30%), linear-gradient(rgba(56,189,248,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,.055) 1px, transparent 1px)", backgroundSize: "auto, auto, 44px 44px, 44px 44px" }} />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-200">
                Mobile Phone Fixer 313 LLC
              </div>

              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Phone, electronics repair & root cause consulting in Metro Detroit.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Cracked screen, weak battery, charging issue, or PS5 with no display? Get straightforward repair guidance and engineering-led root cause consulting in Metro Detroit.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:+13134279331"
                  className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-900/40 transition hover:bg-blue-500"
                >
                  Call (313) 427-9331
                </a>

                <a
                  href="sms:+13134279331"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Text for Quote
                </a>

                <a
                  href="#consulting"
                  className="rounded-2xl border border-cyan-400/40 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/20"
                >
                  Root Cause Consulting
                </a>

                <a
                  href="#services"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Repair Services
                </a>
              </div>

              <div className="mt-6 max-w-xl rounded-[1.5rem] border border-blue-400/20 bg-blue-500/10 p-5 text-sm text-blue-100">
                Need help with a device? Call or text for availability, repair options, and a quote. Diagnostics and root cause consulting are available for complex electrical and electronic problems.
              </div>

              <div className="mt-8 grid max-w-xl grid-cols-2 gap-4 text-sm text-slate-300 sm:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="font-semibold text-white">Same-Day</div>
                  <div className="mt-1">Common repairs</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="font-semibold text-white">Phones</div>
                  <div className="mt-1">iPhone & Android</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="font-semibold text-white">Consoles</div>
                  <div className="mt-1">PS5 diagnostics</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="font-semibold text-white">Advanced</div>
                  <div className="mt-1">Board-level help</div>
                </div>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
                <div className="rounded-[1.5rem] border border-blue-400/20 bg-slate-900 p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <div className="text-sm text-slate-400">Featured Service</div>
                      <div className="text-2xl font-bold">Phone Repair</div>
                    </div>
                    <div className="rounded-2xl bg-blue-600 px-3 py-1 text-sm font-semibold">
                      313
                    </div>
                  </div>

                  <div className="space-y-4 text-sm text-slate-300">
                    <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
                      Cracked screen? Bad battery? Phone not charging? Start with a quick quote.
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
                      Get a clear recommendation before spending money on unnecessary repairs.
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
                      Serving Metro Detroit with practical repair advice and clear next steps.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Repair services built for real device problems.
          </h2>
          <p className="mt-4 text-slate-400">
            From everyday screen and battery repairs to advanced failure analysis and root cause consulting, tell us what is wrong and request a quote.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
            >
              <div className="text-xl font-semibold">{service.title}</div>
              <p className="mt-3 text-sm leading-7 text-slate-300">{service.desc}</p>
              <div className="mt-5 inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-200">
                {service.price}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="consulting" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-cyan-400/30 bg-gradient-to-br from-cyan-950/70 via-slate-900 to-blue-950/60 p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Engineering Consulting</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">Root Cause Consulting</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            Go beyond replacing parts. Get engineering-led help investigating electrical and electronic failures, isolating fault mechanisms, reviewing test measurements, and identifying practical corrective actions.
          </p>
          <div className="mt-7 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">Electrical &amp; electronic failure analysis</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">Measurement review &amp; fault isolation</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">Troubleshooting process development</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">Corrective-action recommendations</div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="sms:+13134279331" className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">Text About Consulting</a>
            <a href="tel:+13134279331" className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold transition hover:bg-white/10">Call (313) 427-9331</a>
            <span className="text-sm text-slate-300">Consultations quoted by scope</span>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A repair business with engineering discipline.
            </h2>

            <div className="mt-8 space-y-4">
              {reasons.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              How It Works
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Simple process. Clear communication.
            </h2>

            <div className="mt-8 space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold">
                    {index + 1}
                  </div>
                  <div className="pt-2 text-slate-200">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Common Questions</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Know what to expect before you book.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            {q: "What devices do you work on?", a: "We offer services for iPhones, Android phones, tablets, computers, and game consoles. Contact us with the exact model and problem to confirm availability."},
            {q: "Can you repair my device the same day?", a: "Some common repairs may be completed the same day. Timing depends on the issue, parts availability, and the repair schedule."},
            {q: "How much will my repair cost?", a: "Pricing depends on the device and issue. Call or text the model and symptoms to discuss a quote before proceeding."},
            {q: "What is Root Cause Consulting?", a: "Engineering-led investigation of electrical and electronic failures, including measurement review, fault isolation, and corrective-action recommendations. Consulting is quoted by scope."}
          ].map(item => <div key={item.q} className="rounded-2xl border border-white/10 bg-white/5 p-6"><h3 className="text-lg font-semibold text-white">{item.q}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{item.a}</p></div>)}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-900/30 to-slate-900 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Get Started
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to get your device repaired?
            </h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              Tell us your device model and what is happening. We can discuss repair options, parts availability, and advanced diagnostics.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm text-slate-400">Phone</div>
                <div className="mt-2 text-lg font-semibold">(313) 427-9331</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm text-slate-400">Text for Quote</div>
                <div className="mt-2 text-lg font-semibold">Message us with your device model and issue</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm text-slate-400">Hours</div>
                <div className="mt-2 text-lg font-semibold">Mon–Sat, 9 AM–7 PM</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm text-slate-400">Service Area</div>
                <div className="mt-2 text-lg font-semibold">Metro Detroit</div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold">Core Services</h3>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>• Screen replacement</li>
              <li>• Battery replacement</li>
              <li>• Charging port repair</li>
              <li>• Ask about same-day repair availability</li>
              <li>• Diagnostics available for advanced problems</li>
            </ul>

            <a
              href="sms:+13134279331"
              className="mt-8 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Text for Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}