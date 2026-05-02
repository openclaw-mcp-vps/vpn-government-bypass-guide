export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-4 py-16 space-y-20">

      {/* Hero */}
      <section className="text-center space-y-6">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
          Updated Weekly
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          Bypass Government Censorship —{" "}
          <span className="text-[#58a6ff]">Tools That Actually Work</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto">
          A curated, regularly updated database of VPN alternatives and
          circumvention tools organized by country and threat model. Know
          what works before you need it.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Access — $9/mo
        </a>
        <p className="text-[#8b949e] text-sm">Cancel anytime. Instant access.</p>
      </section>

      {/* Pricing */}
      <section className="flex justify-center">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 w-full max-w-sm space-y-6">
          <div>
            <p className="text-[#8b949e] text-sm uppercase tracking-widest font-semibold">Full Access</p>
            <p className="text-4xl font-extrabold text-white mt-1">
              $9<span className="text-lg font-normal text-[#8b949e]">/mo</span>
            </p>
          </div>
          <ul className="space-y-3 text-sm text-[#c9d1d9]">
            {[
              "50+ countries covered and growing",
              "Weekly status updates on tool availability",
              "Threat-model based recommendations",
              "Mirror links & fallback options",
              "Private community access",
              "Email alerts when tools go down"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
          <p className="text-center text-[#8b949e] text-xs">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How is this different from a free VPN list?",
              a: "Free lists go stale within days. We actively verify every tool weekly, track which ones are blocked in which regions, and provide working mirror links and fallback options so you always have something that works."
            },
            {
              q: "Is this safe to use in high-risk countries?",
              a: "We include threat-model guidance for each tool — covering logging policies, jurisdiction, and detection risk. We never recommend tools without vetting them, and we flag any that have been compromised or subpoenaed."
            },
            {
              q: "What happens if a tool stops working after I subscribe?",
              a: "You'll receive an email alert immediately. We update the database within 24 hours with verified alternatives, and every country page always shows at least three working options."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 space-y-2">
              <p className="font-semibold text-white">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
