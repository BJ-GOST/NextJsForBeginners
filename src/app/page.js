import Image from "next/image";
import PageSection from "@/components/pageSection";

export default function Home(){

  return(

    <main className="home">
      <PageSection/>
      <PageSection/>
      <PageSection/>
      <PageSection/>
      <PageSection/>
      <PageSection/>
      <PageSection/>
    </main>

  )

}







// Difference between the html <a> and nextjs <Link>

// <a>
// ##########
// It reloads the entire page — the browser makes a new request to the server for the /about page.
// You lose any state or data stored in memory (like a form you were filling out).
// It’s simple and works for static websites.

// <Link>
// ##########
// No full page reload! 🎉
// It uses client-side navigation, meaning it only loads the new content — faster and smoother transitions.
// Preserves state between page changes.
// Prefetching: By default, Next.js preloads linked pages in the background when they appear on the screen, making the transition near-instant.
// SEO-friendly: It still renders as a regular <a> tag in the final HTML for search engines to crawl properly.