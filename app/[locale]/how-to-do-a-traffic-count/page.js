import { Suspense } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedReading from "@/components/RelatedReading";
import headerImage from "@/public/blog/como-hacer-un-aforo-vehicular/header.jpeg";
import { faqs, TEMPLATE_URL, SIGNUP_URL } from "./data";

const h2 = "text-2xl lg:text-3xl font-bold text-white mt-12 mb-4";
const p = "text-white/80 leading-relaxed";
const strong = "font-semibold text-white";
const th = "text-left text-white font-semibold py-3 pr-4 border-b border-white/20";
const td = "py-3 pr-4 align-top text-white/80 border-b border-white/10";
const linkCls = "link link-accent";

const example = [
  ["7:00", "7:15", 98, 4, 3, 1, 9, 5, 120],
  ["7:15", "7:30", 112, 5, 4, 1, 8, 5, 135],
  ["7:30", "7:45", 124, 6, 5, 2, 9, 4, 150],
  ["7:45", "8:00", 116, 5, 4, 2, 8, 5, 140],
];

const methods = [
  [
    "Manual in the field",
    "Counters with tally sheets, hand counters or an electronic count board",
    "Records turns and vehicle classes with no equipment to install",
    "Every counted hour costs the same; fatigue and data entry errors",
  ],
  [
    "Pneumatic tubes",
    "Hoses across the road that record axles passing over them",
    "Covers many days in a row, with volume, speed and axle class",
    "No turning movements; damaged by heavy traffic",
  ],
  [
    "Video",
    "A fixed camera or drone, counted later in the office or by software",
    "Can be reviewed and recounted; fast with software",
    "Needs a shot that sees the whole intersection",
  ],
];

const relatedLinks = [
  {
    href: "/traffic-count-cost-calculator",
    title: "Traffic count cost calculator",
    description: "Compare what a manual count costs against counting from video with AI.",
  },
  {
    href: "/analysis",
    title: "YOAO: AI video analysis",
    description: "Robotipy's platform for vehicle and pedestrian counts from video.",
  },
  {
    href: "/computer-vision",
    title: "Computer vision for businesses",
    description: "Queues, parking, yards, safety and custom projects with your cameras.",
  },
];

export default function HowToDoATrafficCountPage() {
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
          <span className="text-white/80">How to do a traffic count</span>
        </nav>

        <header className="max-w-3xl mx-auto text-center pt-8 pb-10">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Guide with free Excel template
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            How to do a traffic count: format, peak hour factor and Excel template
          </h1>
          <p className="text-white/80 text-lg mt-4 leading-relaxed">
            What to count, how to lay out the data, how to find the peak hour and its factor, and
            which counting methods exist.
          </p>
        </header>

        <article className="max-w-3xl mx-auto pb-8">
          <Image
            src={headerImage}
            alt="Highway seen from above with every vehicle detected and numbered by YOAO"
            className="rounded-2xl w-full h-auto"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />

          <p className={`${p} mt-8`}>
            A traffic count records the vehicles that pass a location during a period, split by
            class and by movement. At an intersection it is called a turning movement count, and it
            is the starting point of almost every traffic study: without those numbers you cannot
            time a signal, assess the impact of a new development or justify changing a street.
          </p>
          <p className={`${p} mt-4`}>
            At the end of this guide you can download an Excel template that does the math for you.
          </p>

          <h2 className={h2}>What a traffic count records</h2>
          <p className={p}>Three things define a count: vehicle classes, movements and periods.</p>
          <ul className="list-disc pl-6 mt-4 space-y-3 text-white/80 leading-relaxed">
            <li>
              <strong className={strong}>Vehicle classes.</strong> A common split is cars, buses,
              two-axle trucks, trucks with three or more axles, motorcycles and bikes. Some studies
              ask for more detail, such as the 13 vehicle categories used by the FHWA, and many add
              pedestrians.
            </li>
            <li>
              <strong className={strong}>Movements.</strong> Knowing how many vehicles enter on
              each approach is not enough. You need to know where they go: left, through or right.
              Each pair of approach and exit is a movement, so a four-leg intersection has twelve.
            </li>
            <li>
              <strong className={strong}>Periods.</strong> You count the hours that matter for the
              study, usually the morning and evening peaks of a typical weekday.
            </li>
          </ul>

          <h2 className={h2}>The format: 15-minute intervals</h2>
          <p className={p}>
            Counts are recorded in 15-minute intervals, by movement and by vehicle class. That level
            of detail lets you find the peak hour and see how traffic changes within it. An example
            for one movement:
          </p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr>
                  {["From", "To", "Cars", "Buses", "2-axle trucks", "3+ axle trucks", "Motorcycles", "Bikes", "Total"].map((h) => (
                    <th key={h} className={th}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {example.map((row) => (
                  <tr key={row[0]}>
                    {row.map((v, i) => (
                      <td key={i} className={`${td} ${i === row.length - 1 ? "font-semibold text-white" : ""}`}>
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-white/60 mt-3">Sample values, not from a real study.</p>

          <h2 className={h2}>Peak hour and peak hour factor</h2>
          <p className={p}>
            The peak hour is the hour with the most vehicles. You find it by adding four consecutive
            15-minute intervals and keeping the highest sum. In the example, from 7:00 to 8:00 there
            are 120 + 135 + 150 + 140 = <strong className={strong}>545 vehicles</strong>.
          </p>
          <p className={`${p} mt-4`}>
            The peak hour factor (PHF), as defined in the Highway Capacity Manual, measures how even
            that hour is. Divide the hourly volume by four times the busiest 15-minute interval:
          </p>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 mt-4 text-white">
            PHF = 545 / (4 × 150) = <strong className={strong}>0.91</strong>
          </div>
          <p className={`${p} mt-4`}>
            A PHF close to 1 means traffic was steady through the hour. A lower value means a peak
            packed into a few minutes, typical of school drop-off or a factory shift change.
          </p>
          <p className={`${p} mt-4`}>
            Many studies also ask for volumes in passenger car equivalents (PCE), which weight each
            class by how much of the road it takes up: a bus counts for more than a car. The factors
            depend on the manual your study follows, so check which one applies.
          </p>

          <h2 className={h2}>How to do a turning movement count, step by step</h2>
          <ol className="list-decimal pl-6 space-y-3 text-white/80 leading-relaxed">
            <li>
              <strong className={strong}>Define the scope.</strong> Locations, days, periods,
              vehicle classes and whether you need pedestrians and bikes. If an agency requested
              the study, its requirements come first.
            </li>
            <li>
              <strong className={strong}>Choose the method.</strong> Counters in the field, tubes or
              video. Tubes alone cannot give you turning movements.
            </li>
            <li>
              <strong className={strong}>Set up.</strong> For a manual count, assign movements to
              each counter and prepare one sheet per movement. For video, place the camera high
              enough to see every approach without vehicles hiding each other.
            </li>
            <li>
              <strong className={strong}>Count in 15-minute intervals.</strong> Record each class
              separately and note anything unusual, such as a crash, roadwork or a signal outage.
            </li>
            <li>
              <strong className={strong}>Find the peak hour and its PHF.</strong> For each movement
              and for the intersection as a whole.
            </li>
            <li>
              <strong className={strong}>Check and report.</strong> Compare entering and exiting
              totals, look for intervals that do not make sense, and deliver the tables with the peak
              hour, PHF and volumes by movement.
            </li>
          </ol>

          <h2 className={h2}>Counting methods compared</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr>
                  <th className={th}>Method</th>
                  <th className={th}>How it works</th>
                  <th className={th}>Pros</th>
                  <th className={th}>Cons</th>
                </tr>
              </thead>
              <tbody>
                {methods.map(([m, how, pro, con]) => (
                  <tr key={m}>
                    <td className={`${td} font-semibold text-white`}>{m}</td>
                    <td className={td}>{how}</td>
                    <td className={td}>{pro}</td>
                    <td className={td}>{con}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className={h2}>Free traffic count template in Excel</h2>
          <p className={p}>
            The template uses 15-minute intervals from 7:00 to 20:00. It calculates the total per
            interval, the PCE volume, the rolling hourly volume, the peak hour and its PHF. Use one
            copy of the count sheet per movement.
          </p>
          <p className="mt-6">
            <a
              href={TEMPLATE_URL}
              download
              className="inline-flex rounded-lg bg-accent px-5 py-3 font-semibold text-white hover:opacity-90"
            >
              Download the traffic count template (Excel)
            </a>
          </p>

          <h2 className={h2}>How to automate traffic counts with video</h2>
          <p className={p}>
            Manual counting has a built-in limit: every counted hour costs the same, so studies count
            as little as they can. With video you record once and count afterwards. When software
            does the counting, the office work goes away too.
          </p>
          <ol className="list-decimal pl-6 mt-4 space-y-3 text-white/80 leading-relaxed">
            <li>Record the location with a high camera or a drone, covering every approach.</li>
            <li>Upload the video to YOAO and draw the approaches and movements on a frame.</li>
            <li>
              YOAO detects, classifies and tracks each vehicle, and returns the count by movement
              and class in 15-minute intervals, with the peak hour and an annotated video to audit.
            </li>
            <li>
              Validate the first location with a short manual count. If the difference is
              acceptable, the method is ready for the rest.
            </li>
          </ol>
          <p className={`${p} mt-4`}>
            Analysis costs USD 7 per hour of video. To compare that with what a manual count costs
            you, try the{" "}
            <Link href="/traffic-count-cost-calculator" className={linkCls}>
              traffic count cost calculator
            </Link>
            .
          </p>
          <div className="rounded-2xl border border-accent/40 bg-accent/10 p-6 mt-8 text-center">
            <p className="text-white font-semibold text-lg">Count from video instead of tally sheets</p>
            <p className="text-white/80 mt-2">
              Upload a video and get counts by movement and vehicle class. No monthly fee and no
              minimum spend.
            </p>
            <a
              href={SIGNUP_URL}
              className="inline-flex mt-4 rounded-lg bg-accent px-5 py-3 font-semibold text-white hover:opacity-90"
            >
              Create your account
            </a>
          </div>
        </article>

        <section className="max-w-3xl mx-auto pb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mt-8 mb-6">
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
