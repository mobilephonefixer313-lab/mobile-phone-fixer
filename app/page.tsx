export default function MobilePhoneFixer313Website() {
  const services = [
    {
      title: 'Screen Repair',
      desc: 'Fast replacement for cracked or damaged iPhone and Android screens.',
      price: 'Starting at $79',
    },
    {
      title: 'Battery Replacement',
      desc: 'Restore battery life and charging performance with quality replacement batteries.',
      price: 'Starting at $59',
    },
    {
      title: 'Charging Port Repair',
      desc: 'Fix phones that will not charge, charge intermittently, or have damaged ports.',
      price: 'Starting at $69',
    },
    {
      title: 'Camera & Speaker Repair',
      desc: 'Help with camera issues, speaker problems, microphones, and common device faults.',
      price: 'Starting at $69',
    },
    {
      title: 'PS5 / Console Repair',
      desc: 'Help with HDMI issues, no display, overheating, and diagnostic repair.',
      price: 'Quote required',
    },
    {
      title: 'Board-Level Diagnostics',
      desc: 'Advanced troubleshooting and component-level repair backed by engineering experience.',
      price: 'Diagnostic fee applies',
    },
  ];

  const steps = [
    'Send a message with your device model and issue.',
    'Get a quick quote and repair recommendation.',
    'Drop off your device or schedule repair service.',
    'Pick up your repaired device with confidence.',
  ];

  const reasons = [
    'Electrical engineer approach to diagnostics',
    'Same-day service on many common repairs',
    'Straightforward pricing and honest assessments',
    'Local small business focus with personal service',
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.12),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-200">
                Mobile Phone Fixer 313 LLC
              </div>
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Fast, reliable phone and electronics repair.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Phone repair built for speed, trust, and real diagnostics. We help with cracked screens,
                weak batteries, charging problems, common device issues, and deeper diagnostic work.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:+13135550133"
                  className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-900/40 transition hover:bg-blue-500"
                >
                  Call Now
                </a>
                <a
                  href="sms:+13135550133"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Text for Quote
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View Services
                </a>
              </div>
              <div className="mt-6 max-w-xl rounded-[1.5rem] border border-blue-400/20 bg-blue-500/10 p-5 text-sm text-blue-100">
                Same-day repair available on many common issues. Diagnostics available for phones, consoles, and advanced board-level problems.
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
                    <div className="rounded-2xl bg-blue-600 px-3 py-1 text-sm font-semibold">313</div>
                  </div>
                  <div className="space-y-4 text-sm text-slate-300">
                    <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
                      Cracked screen? Bad battery? Phone not charging? Start with a quick quote.
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
                      Get a clear recommendation before spending money on unnecessary repairs.
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
                      Built for a local repair business that wants trust, speed, and clean branding.
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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Services</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Repair services built for real device problems.</h2>
          <p className="mt-4 text-slate-400">
            Start lean and clear. These sections are ready to use now and can be expanded as your business grows.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
              <div className="text-xl font-semibold">{service.title}</div>
              <p className="mt-3 text-sm leading-7 text-slate-300">{service.desc}</p>
              <div className="mt-5 inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-200">
                {service.price}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Why Choose Us</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A repair business with engineering discipline.</h2>
            <div className="mt-8 space-y-4">
              {reasons.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">How It Works</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Simple process. Clear communication.</h2>
            <div className="mt-8 space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
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

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-900/30 to-slate-900 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Get Started</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Ready to turn this into your real site.</h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              This starter page is set up for Mobile Phone Fixer 313 LLC and can be customized with your real phone number, service area, pricing, booking link, customer reviews, and repair intake form.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm text-slate-400">Phone</div>
                <div className="mt-2 text-lg font-semibold">(313) 555-0133</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm text-slate-400">Text for Quote</div>
                <div className="mt-2 text-lg font-semibold">Fast response for common repairs</div>
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
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm text-slate-400">Email</div>
                <div className="mt-2 text-lg font-semibold">service@mobilephonefixer313.com</div>
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
            <h3 className="text-2xl font-bold">Starter Website Includes</h3>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>• Home hero section with strong call to action</li>
              <li>• Service cards with starting prices</li>
              <li>• “Why choose us” trust section</li>
              <li>• Contact section ready for real info</li>
              <li>• Clean mobile-friendly layout</li>
            </ul>
            <a
              href="#"
              className="mt-8 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Book Repair
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
