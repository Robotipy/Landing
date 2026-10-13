import { permanentRedirect } from "next/navigation";

// La propuesta /home-2 pasó a ser la home principal.
export default function Home2Redirect() {
  permanentRedirect("/es");
}
