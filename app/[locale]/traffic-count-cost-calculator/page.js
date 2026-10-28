import { Suspense } from "react";
import { Link } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedReading from "@/components/RelatedReading";
import TrafficCountCalculator from "./TrafficCountCalculator";
import { faqs } from "./data";

const comparison = [
  {
    item: "Field staff",
    manual: "One or two counters per intersection for the whole period.",
    video: "One fixed camera, drone or phone recording each location.",
  },
  {
    item: "Cost",
    manual: "Person-hours in the field plus office time.",
    video: "USD 7 per hour of video, with no fixed fee or minimum.",
  },
  {
    item: "Verification",
    manual: "Only the counter's sheet or board file.",
    video: "Annotated video with every vehicle marked, so anyone can audit it.",
  },
  {
    item: "Intervals",
    manual: "Whatever was set before going to the field.",
    video: "Every 5, 15, 30 or 60 minutes, or per signal cycle.",
  },
  {
    item: "Vehicle classes",
    manual: "The ones the counters can tell apart in real time.",
    video: "The classes your study needs, defined by you.",
  },
  {
    item: "Deliverable",
    manual: "Count sheets to clean up and reconcile.",
    video: "Excel, CSV and an executive PDF with charts and origin and destination.",
  },
];

const benchmarks = [
  { count: "One intersection, 2-hour AM and 2-hour PM peaks", range: "USD 250 to 450" },
  { count: "One intersection, 12 hours", range: "USD 500 to 900" },
];

const benchmarkSource = {
  name: "Aptocoiner, How much does a traffic study cost? (updated August 2026)",
  href: "https://www.aptocoiner.com/blog/traffic-study-cost/",
};

const relatedLinks = [
  {
    href: "/computer-vision",
    title: "Computer vision for businesses",
    description: "Queues, parking, yards, safety and custom projects with your cameras.",
  },
  {
    href: "/analysis",
    title: "YOAO: AI video analysis",
    description: "Robotipy's platform for vehicle and pedestrian counts from video.",
  },
];

export default function TrafficCountCostCalculatorPage() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main id="main-content" className="px-4 pb-16 lg:pb-0">
        <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto pt-6 text-sm text-white/60">
          <Link href="/" className="link link-hover">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white/80">Traffic count cost calculator</span>
        </nav>

        <header className="max-w-3xl mx-auto text-center pt-8 pb-10">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Free tool, no sign-up
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            How much does a traffic count cost? Manual counters vs. AI video
          </h1>
          <p className="text-white/80 text-lg mt-4 leading-relaxed">
            Enter how many intersections and hours you need to count. You will see right away what
            it costs with counters in the field and what it costs with video analysis.
          </p>
        </header>

        <TrafficCountCalculator />

        <section className="max-w-3xl mx-auto py-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            What a manual traffic count costs
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            A manual count is priced by person-hours, so its cost grows with every hour and every
            counter. Typical prices for a turning movement count in the United States:
          </p>
          <div className="overflow-x-auto">
            <table className="table w-full text-white/80">
              <thead>
                <tr className="text-white border-white/10">
                  <th>Count</th>
                  <th>Typical price</th>
                </tr>
              </thead>
              <tbody>
                {benchmarks.map((b) => (
                  <tr key={b.count} className="border-white/10">
                    <td>{b.count}</td>
                    <td className="font-semibold text-white">{b.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-white/60 mt-3">
            Source:{" "}
            <a
              href={benchmarkSource.href}
              target="_blank"
              rel="noopener nofollow"
              className="link link-accent"
            >
              {benchmarkSource.name}
            </a>
          </p>
          <p className="text-white/80 leading-relaxed mt-6">
            With two counters on a four-hour count, that range works out to about USD 30 to 55 per
            counter-hour, which is where the calculator&apos;s default of USD 42 comes from. The same
            four hours of video cost USD 28 with YOAO, and a 12-hour count costs USD 84. Video
            analysis costs the same per hour whatever the count length, so the gap grows with every
            hour you add.
          </p>

          <h2 className="text-2xl lg:text-3xl font-bold text-white mt-12 mb-4">
            Manual count vs. counting from video
          </h2>
          <div className="overflow-x-auto">
            <table className="table w-full text-white/80">
              <thead>
                <tr className="text-white border-white/10">
                  <th></th>
                  <th>Manual count</th>
                  <th>AI video count</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((c) => (
                  <tr key={c.item} className="border-white/10">
                    <td className="font-semibold text-white">{c.item}</td>
                    <td>{c.manual}</td>
                    <td>{c.video}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl lg:text-3xl font-bold text-white mt-12 mb-4">
            What traffic studies use video counts for
          </h2>
          <p className="text-white/80 leading-relaxed">
            Traffic impact studies, signal timing, pedestrian and public space counts, bike lanes,
            drone surveys and before and after measurements around a construction project. The
            analysis runs on{" "}
            <Link href="/analysis" className="link link-accent">
              YOAO
            </Link>
            , Robotipy&apos;s video analysis platform: you upload the video, mark the approaches and
            get counts by movement and vehicle type.
          </p>
        </section>

        <section className="max-w-3xl mx-auto pb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border border-white/10 bg-white/5 rounded-xl p-5">
                <summary className="cursor-pointer list-none flex justify-between items-start gap-4 font-semibold text-white">
                  <h3 className="text-base">{q}</h3>
                  <span className="text-accent text-xl leading-none transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-white/80 mt-3 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <RelatedReading title="Keep going" links={relatedLinks} />
      </main>
      <Footer />
    </>
  );
}
