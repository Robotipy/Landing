export const PAGE_TITLE = "Traffic Count Cost Calculator: Manual vs. AI Video | Robotipy";

export const PAGE_DESCRIPTION =
  "Compare what a manual traffic count costs against counting from video with AI. Enter intersections and hours and get the cost and savings instantly. Free, no sign-up.";

export const SIGNUP_URL =
  "https://analysis.robotipy.dev/signup?utm_source=robotipy.com&utm_medium=calculator&utm_campaign=traffic-count-cost";

// Valores por defecto: conteo de giros en hora punta (2 h AM + 2 h PM) con dos
// personas por intersección. USD 42 por persona-hora queda en el medio del
// rango de USD 250 a 450 por intersección que publica Aptocoiner (2026).
export const EN_DEFAULTS = {
  points: 4,
  hours: 4,
  days: 1,
  counters: 2,
  rate: 42,
  digitizing: 0.25,
  video: "standard",
};

export const EN_COPY = {
  numberLocale: "en-US",
  scope: "Study scope",
  points: "Intersections or count locations",
  hours: "Hours per day",
  days: "Days",
  manualTitle: "If you counted manually",
  counters: "Counters per intersection",
  countersHint: "A four-leg intersection usually needs 2 people, more if traffic is heavy.",
  rate: "Billed cost per counter-hour",
  rateHint: "Industry ranges work out to about USD 30 to 55. Adjust it to your market.",
  digitizing: "Office hours per counted hour",
  digitizingHint: "Setup, data cleanup, QA and the report.",
  videoTitle: "How would you record?",
  videoTypes: [
    { value: "standard", label: "Fixed camera or phone" },
    { value: "drone", label: "High-altitude drone or live stream" },
  ],
  perHour: (price) => `USD ${price} per hour of video`,
  savingsShort: "Savings",
  seeResult: "See result ↓",
  resultTitle: "Your comparison",
  manualLabel: "Manual count",
  videoLabel: "AI video count",
  savings: "Savings",
  fieldLine: (hours, cost) => `Field work: ${hours} person-hours, ${cost}`,
  digitizingLine: (cost) => `Office work: ${cost}`,
  videoLine: (hours, credits, packs, n) =>
    `Video to analyze: ${hours} h, ${credits} credits (${packs} ${n === 1 ? "pack" : "packs"} of 60)`,
  cta: "Create your account and upload your first video",
  ctaNote: "No monthly fee and no minimum spend.",
  disclaimer:
    "YOAO price before taxes. It does not include recording the video. The manual cost depends on the values you entered.",
  ctaEvent: "traffic_calc_cta",
};

export const faqs = [
  {
    q: "What is a turning movement count?",
    a: "It is a count of the vehicles that enter an intersection, split by approach, by movement (left, through or right) and usually by vehicle type, in 15-minute intervals. It is the basis of traffic impact studies, signal timing and intersection design.",
  },
  {
    q: "How much does a manual traffic count cost?",
    a: "It is the sum of every counter's hours in the field plus the office time to clean up the data and build the report. Industry guides put a turning movement count at one intersection, with a 2-hour AM and a 2-hour PM peak, at USD 250 to 450, and a 12-hour count at USD 500 to 900. With YOAO you pay USD 7 per hour of video analyzed, with no fixed fee, and you only need to record.",
  },
  {
    q: "What video works for a traffic count?",
    a: "Video from a fixed camera, a drone or a phone, in MP4, MOV, AVI or MKV. You mark the approaches and the movements to count on a frame of the video, with no coding. High-altitude drone video and live streams cost USD 14 per hour.",
  },
  {
    q: "What do I get from a video count?",
    a: "An annotated video with every vehicle marked, counts every 5, 15, 30 or 60 minutes or per signal cycle with the peak window, an origin and destination matrix by movement, counts by vehicle type and reports in Excel, CSV and PDF.",
  },
  {
    q: "Can I use my own vehicle classes?",
    a: "Yes. Each vehicle is classified from its image, and you can define the classes your study needs, for example school buses, taxis or local bus types, instead of a fixed list.",
  },
  {
    q: "How do I check that the count is right?",
    a: "Every vehicle is marked in the annotated video, so you can review any interval and compare it with the count. A manual count only leaves the counter's sheet, with nothing to audit.",
  },
  {
    q: "How is YOAO billed?",
    a: "With credits: 1 credit is 1 minute of video and a pack of 60 credits costs USD 7. High-altitude drone video and live streams use 2 credits per minute. There are no licenses, installation or monthly fees, and prices are before taxes.",
  },
];
