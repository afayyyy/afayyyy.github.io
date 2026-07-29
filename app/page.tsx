const papers = [
  {
    status: "Job Market Paper",
    title: "Your Main Research Paper Title",
    authors: "Your Name · with Coauthor Name",
    abstract:
      "Add a two-sentence summary of the question, method, and main finding. This short description helps visitors understand the contribution immediately.",
  },
  {
    status: "Working Paper",
    title: "A Second Paper That Shows Your Research Agenda",
    authors: "Your Name · with Coauthor Name",
    abstract:
      "Describe why the question matters and what is new about your evidence or approach. Links to the paper, slides, data, and code can be added here.",
  },
  {
    status: "Work in Progress",
    title: "An Ongoing Project",
    authors: "Your Name",
    abstract:
      "Use this space for a concise project description. It can be hidden until the project is ready to share publicly.",
  },
];

export default function Home() {
  return (
    <main id="top">
      <header>
        <a className="brand" href="#top">YOUR NAME <span>ECONOMICS</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">Home</a>
          <a href="#research">Research</a>
          <a href="#teaching">Teaching</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="cv" href="#contact">CV ↗</a>
      </header>

      <section className="hero" id="about">
        <div className="hero-copy">
          <p className="kicker">Welcome to my academic website</p>
          <h1>Your Name <span>你的中文名</span></h1>
          <p className="role">Ph.D. Candidate in Economics · Your University</p>
          <div className="bio">
            <p>
              I am a Ph.D. candidate in Economics at <strong>Your University</strong>.
              My research lies at the intersection of labor economics, human
              capital, and political economy.
            </p>
            <p>
              I study how households, workers, and firms respond to uncertainty
              and institutional change. My work combines administrative data,
              quasi-experimental methods, and economic theory.
            </p>
          </div>
          <div className="links">
            <a href="#research">View research ↓</a>
            <a href="mailto:yourname@university.edu">Email me ↗</a>
          </div>
        </div>

        <aside className="profile">
          <div className="portrait">
            <span>YN</span>
            <small>Replace with your portrait</small>
          </div>
          <dl>
            <div><dt>Research fields</dt><dd>Labor · Human Capital · Applied Micro</dd></div>
            <div><dt>Affiliation</dt><dd>Your Department, Your University</dd></div>
            <div><dt>Email</dt><dd>yourname@university.edu</dd></div>
          </dl>
        </aside>
      </section>

      <div className="fields" aria-label="Research interests">
        <span>Labor Economics</span><i>01</i>
        <span>Human Capital</span><i>02</i>
        <span>Political Economy</span><i>03</i>
        <span>Applied Micro</span><i>04</i>
      </div>

      <section className="section" id="research">
        <div className="section-title">
          <p>01 · Research</p>
          <h2>Selected papers</h2>
        </div>
        <div className="papers">
          {papers.map((paper, index) => (
            <article key={paper.title}>
              <span className="paper-index">0{index + 1}</span>
              <div>
                <p className="status">{paper.status}</p>
                <h3>{paper.title}</h3>
                <p className="authors">{paper.authors}</p>
                <p className="abstract">{paper.abstract}</p>
                <div className="paper-links">
                  <a href="#contact">Paper ↗</a>
                  <a href="#contact">Abstract +</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section teaching" id="teaching">
        <div className="section-title">
          <p>02 · Teaching</p>
          <h2>Courses &amp; mentoring</h2>
        </div>
        <div className="course-list">
          <article><span>2025</span><div><h3>Labor Economics</h3><p>Teaching Fellow · Graduate</p></div></article>
          <article><span>2024</span><div><h3>Econometrics</h3><p>Teaching Assistant · Undergraduate</p></div></article>
          <article><span>2023</span><div><h3>Principles of Microeconomics</h3><p>Teaching Assistant · Undergraduate</p></div></article>
        </div>
      </section>

      <section className="contact" id="contact">
        <p>03 · Contact</p>
        <h2>Let&apos;s talk about<br />research.</h2>
        <a className="email" href="mailto:yourname@university.edu">
          yourname@university.edu <span>↗</span>
        </a>
        <div className="contact-grid">
          <div><b>Office</b><span>Room 000, Economics Building<br />Your University</span></div>
          <div><b>Profiles</b><span><a href="#contact">Google Scholar</a> · <a href="#contact">GitHub</a> · <a href="#contact">ORCID</a></span></div>
          <div><b>Documents</b><span><a href="#contact">Curriculum Vitae ↗</a></span></div>
        </div>
      </section>

      <footer>
        <span>© 2026 Your Name</span>
        <span>Last updated July 2026</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
