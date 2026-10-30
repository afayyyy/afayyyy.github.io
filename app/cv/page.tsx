import SiteShell from "../site-shell";

export const metadata = {
  title: "CV | Jing HAN (Faye)",
  alternates: { canonical: "/cv/" },
};

export default function CV() {
  return <SiteShell active="cv">
    <main id="top" className="cv-page">
      <h1>CV</h1>
      <p>My CV is available <a href="/Jing_Han_CV.pdf" target="_blank" rel="noopener noreferrer">HERE</a>.</p>
    </main>
  </SiteShell>;
}
