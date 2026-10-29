import config from "@/config";

export const PATH = "/how-to-do-a-traffic-count";
export const siteOrigin = `https://www.${config.domainName.replace(/^www\./, "")}`;
export const pageUrl = `${siteOrigin}/en${PATH}`;

export const PAGE_TITLE = "How to Do a Traffic Count: Format, PHF and Free Excel Template";

export const PAGE_DESCRIPTION =
  "How to do a turning movement count step by step: what to count, 15-minute intervals, peak hour and peak hour factor, with a free Excel template and the option to count from video.";

export const PUBLISHED_AT = "2026-10-28";

export const TEMPLATE_URL = "/guides/how-to-do-a-traffic-count/traffic-count-template.xlsx";

export const SIGNUP_URL =
  "https://analysis.robotipy.dev/signup?utm_source=robotipy.com&utm_medium=guide&utm_campaign=traffic-count-guide";

export const faqs = [
  {
    q: "What is a turning movement count?",
    a: "It is a count of the vehicles that enter an intersection, split by approach and by movement (left, through or right), usually by vehicle class and in 15-minute intervals. It is the basis of traffic impact studies, signal timing and intersection design.",
  },
  {
    q: "How many hours should a traffic count cover?",
    a: "It depends on the study. A common scope is a 2-hour AM peak and a 2-hour PM peak on a typical weekday, often Tuesday to Thursday. If the count answers to an agency or a permit, check the periods and duration they require before going to the field.",
  },
  {
    q: "How many people does a manual count need?",
    a: "As a rule of thumb, one person can follow one or two movements when volumes are moderate. A four-leg intersection with turns in every direction needs two or more counters per period, plus someone to coordinate and to enter the data afterwards.",
  },
  {
    q: "Can I use video from a phone?",
    a: "Yes, if the shot is steady, high and shows every movement you need to count. A tripod on a second floor or a drone works better than a shot at street level, where a truck hides the cars behind it.",
  },
  {
    q: "How accurate is counting from video with software?",
    a: "In a pilot with a municipality, the difference against a manual count on fixed cameras was about 3%. Large roundabouts seen from a drone need more tuning. That is why it pays to validate each new location against a short manual count before using the data.",
  },
  {
    q: "What does a peak hour factor tell me?",
    a: "How evenly traffic is spread within the peak hour. A value close to 1 means traffic was steady for the whole hour. A lower value means part of the hour carried much more traffic than the rest, as happens around school drop-off or a shift change, and the design has to handle that short peak.",
  },
];
