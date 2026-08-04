const papers = [
  {
    status: "Under review",
    title: "Infrastructure Development and Cross-Border Consumption: Evidence from the Largest Fintech Platform in China",
    authors: "with Xijie Gao",
    field: "Digital platforms · Fintech · Consumption",
  },
  {
    status: "Manuscript available upon request",
    title: "Industrial Firm Dynamics and Trade Policy Uncertainty",
    authors: "with Zhiyuan Li",
    field: "International trade · Firm dynamics",
  },
  {
    status: "Invited to resubmit · Research Policy",
    title: "Trade Barriers as Risks to Low-Carbon Technology Innovation",
    authors: "with Donghui Yu and Baihe Gu",
    field: "Technological change · Trade policy",
  },
  {
    status: "Manuscript available upon request",
    title: "How Do ESG Ratings Incorporate CSR Disclosures? Evidence from Rating Revisions and Third-Party Assurance",
    authors: "with Aitong Zhang",
    field: "ESG · Information disclosure",
  },
  {
    status: "Under review · Economic Analysis and Policy",
    title: "Migration Dynamics and Reproductive Choices: Evidence from China",
    authors: "with Zeyang Bian",
    field: "Labor · Demography",
  },
];

const experience = [
  { years: "2024", place: "Ant Research Institute, Ant Group", role: "Visiting Researcher · Hong Kong" },
  { years: "2021–22", place: "Luohan Academy, Alibaba Group", role: "Research Assistant · Digital economy research" },
  { years: "2021–22", place: "UNICEF South-South Cooperation", role: "Research Assistant · International policy research" },
  { years: "2018–19", place: "Bain & Company, Shanghai", role: "Business Analyst Intern" },
];

const lifeNotes = [
  {
    number: "01",
    title: "City walks",
    text: "I enjoy discovering a city on foot—quiet streets, neighborhood markets, and the small details that make a place feel lived in.",
    tag: "Wandering · Observing",
  },
  {
    number: "02",
    title: "Books & ideas",
    text: "I love science fiction, modern Chinese literature, and psychology—books that open new worlds and illuminate the hidden landscapes within us.",
    tag: "Reading · Inner worlds",
  },
];

const cityWalks = [
  { image: "/city-walks/01-shenzhen-urban-village.jpg", place: "Shenzhen", title: "Inside the urban village", note: "Dense, improvised, and alive: an everyday architecture shaped by migration and work." },
  { image: "/city-walks/02-hong-kong-mother-child.jpg", place: "Hong Kong", title: "Mother and child", note: "A quiet sculpture in an art museum—intimacy held in bronze and light." },
  { image: "/city-walks/03-sentosa-couple.jpg", place: "Singapore · Sentosa", title: "Two by the water", note: "A couple at the edge of a carefully made tropical landscape." },
  { image: "/city-walks/04-zurich-fries.jpg", place: "Zürich", title: "Let’s get fries at the pier", note: "The city, the river, and a local who arrived before us." },
  { image: "/city-walks/05-victoria-park-gorilla.jpg", place: "Hong Kong · Victoria Park", title: "A gorilla woven from flowers", note: "Public spectacle where horticulture, craft, and urban play meet." },
  { image: "/city-walks/06-kaohsiung-city-nature.jpg", place: "Kaohsiung", title: "Where the city meets nature", note: "Grass settles between the rails while the skyline keeps rising." },
  { image: "/city-walks/07-kaohsiung-family.jpg", place: "Kaohsiung", title: "A family looking at the sea", note: "Three figures facing the horizon: a small scene of care beside a vast landscape." },
  { image: "/city-walks/08-hong-kong-street.jpg", place: "Hong Kong", title: "Street rhythm", note: "Signs, crossings, headlights, and old façades compressed into one restless frame." },
  { image: "/city-walks/09-hong-kong-fishing-village.jpg", place: "Hong Kong · Fishing village", title: "Stones without an answer", note: "Graffiti, fish, and carefully stacked stones. I still do not know what the stones mean." },
  { image: "/city-walks/10-beijing-zhongguancun.jpg", place: "Beijing · Zhongguancun", title: "The productivity of light", note: "I heard every company keeps its lights on at night, as if illumination itself could signal productivity." },
];

export default function Home() {
  return (
    <main id="top">
      <header>
        <a className="brand" href="#top">JING HAN <span>ECONOMICS</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">Home</a><a href="#research">Research</a><a href="#background">Background</a><a href="#life">Personal life</a><a href="#contact">Contact</a>
        </nav>
        <a className="cv" href="/Jing_Han_CV.pdf" target="_blank">CV ↗</a>
      </header>

      <section className="hero" id="about">
        <div className="hero-copy">
          <p className="kicker">Empirical economist · Digital economy · International trade</p>
          <h1>Jing Han</h1>
          <p className="role">Ph.D. Candidate in Economics · The Chinese University of Hong Kong</p>
          <div className="bio">
            <p>I am an empirical economist studying <strong>digital platforms, international trade, and technological change</strong> using large-scale firm and transaction data.</p>
            <p>My research combines rigorous applied microeconomics with research and industry experience in Greater China. I am a Hong Kong PhD Fellow and expect to complete my Ph.D. in 2027.</p>
          </div>
          <div className="links">
            <a href="#research">Explore my research ↓</a>
            <a href="mailto:1155179329@link.cuhk.edu.hk">Email me ↗</a>
          </div>
        </div>
        <aside className="profile">
          <div className="portrait portrait-photo">
            <img src="/jing-han-portrait.jpg" alt="Portrait of Jing Han" width="1080" height="1440" />
          </div>
          <dl>
            <div><dt>Fields</dt><dd>Digital Economics · International Trade</dd></div>
            <div><dt>Affiliation</dt><dd>The Chinese University of Hong Kong</dd></div>
            <div><dt>Advisor</dt><dd>Zheng (Michael) Song</dd></div>
            <div><dt>Location</dt><dd>Hong Kong SAR</dd></div>
          </dl>
        </aside>
      </section>

      <div className="fields" aria-label="Research interests">
        <span>Digital Economics</span><i>01</i><span>Technological Change</span><i>02</i><span>International Trade</span><i>03</i><span>Applied Microeconomics</span><i>04</i>
      </div>

      <section className="section" id="research">
        <div className="section-title"><p>01 · Research</p><h2>Research portfolio</h2></div>
        <div className="papers">
          {papers.map((paper, index) => (
            <article key={paper.title}>
              <span className="paper-index">0{index + 1}</span>
              <div><p className="status">{paper.status}</p><h3>{paper.title}</h3><p className="authors">{paper.authors}</p><p className="abstract">{paper.field}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section publication">
        <div className="section-title"><p>02 · Publications</p><h2>Published work</h2></div>
        <div className="papers">
          <article><span className="paper-index">01</span><div><p className="status">Energy Policy · Accepted for publication</p><h3>The Role of Trade Protectionism and Local Industry Support Policies in Low-Carbon Technologies Trade</h3><p className="authors">with Donghui Yu and Baihe Gu</p></div></article>
          <article><span className="paper-index">02</span><div><p className="status">Review of Industrial Economics · 2020 · In Chinese</p><h3>The New Coronavirus and Other Major Pandemics: A Review</h3><p className="authors">with Zhiyuan Li</p></div></article>
        </div>
      </section>

      <section className="section teaching" id="background">
        <div className="section-title"><p>03 · Background</p><h2>Education &amp; experience</h2></div>
        <div className="course-list">
          <article><span>2022–27</span><div><h3>The Chinese University of Hong Kong</h3><p>Ph.D. in Economics · Hong Kong PhD Fellowship · expected 2027</p></div></article>
          <article><span>2019–22</span><div><h3>Fudan University</h3><p>M.S. in World Economics</p></div></article>
          <article><span>2015–19</span><div><h3>Fudan University</h3><p>B.S. in International Economics and Trade · Second major in English Literature and Translation</p></div></article>
          {experience.map((item) => <article key={item.place}><span>{item.years}</span><div><h3>{item.place}</h3><p>{item.role}</p></div></article>)}
        </div>
      </section>

      <section className="section life" id="life">
        <div className="section-title life-heading">
          <p>04 · Personal life</p>
          <div>
            <h2>Life beyond<br />research</h2>
            <p className="life-intro">Research is only one way I stay curious. Away from papers and datasets, I find stories in books and in the cultural traces of the cities I walk through.</p>
          </div>
        </div>
        <div className="life-grid">
          {lifeNotes.map((item) => (
            <article key={item.title}>
              <span className="life-number">{item.number}</span>
              <div className="life-mark" aria-hidden="true">{item.title.charAt(0)}</div>
              <p className="life-tag">{item.tag}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="walks-feature">
          <div className="walks-heading">
            <p className="life-tag">City walks · A visual notebook</p>
            <h3>Culture lives in<br />ordinary scenes.</h3>
            <p>I photograph cities as places where memory, labor, art, nature, and everyday relationships leave visible traces.</p>
          </div>
          <div className="walks-grid">
            {cityWalks.map((walk, index) => (
              <figure key={walk.image} className={`walk-${index + 1}`}>
                <img src={walk.image} alt={`${walk.title}, photographed in ${walk.place}`} loading="lazy" />
                <figcaption>
                  <span>{walk.place}</span>
                  <h4>{walk.title}</h4>
                  <p>{walk.note}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="reading-feature">
          <div className="reading-statement">
            <p className="life-tag">On my bookshelf</p>
            <h3>I read to explore<br />the human interior.</h3>
            <p>Whether a story travels into the future, looks back at a changing China, or examines the architecture of the mind, I am drawn to books that ask what it means to be human.</p>
          </div>
          <div className="reading-shelves" aria-label="Favorite reading genres">
            <article>
              <span>01</span>
              <div><h4>Science fiction</h4><p>Possible futures, unfamiliar worlds, and new ways of seeing the present.</p></div>
            </article>
            <article>
              <span>02</span>
              <div><h4>Modern Chinese literature</h4><p>Individual lives set against social change, history, and memory.</p></div>
            </article>
            <article>
              <span>03</span>
              <div><h4>Psychology</h4><p>Emotion, motivation, relationships, and the many layers of the inner self.</p></div>
            </article>
          </div>
        </div>
        <p className="life-note">A small, evolving collection of the things that keep me interested in the world.</p>
      </section>

      <section className="contact" id="contact">
        <p>05 · Contact</p><h2>Let&apos;s talk about<br />research.</h2>
        <a className="email" href="mailto:1155179329@link.cuhk.edu.hk">1155179329@link.cuhk.edu.hk <span>↗</span></a>
        <div className="contact-grid">
          <div><b>Based in</b><span>Hong Kong SAR<br />The Chinese University of Hong Kong</span></div>
          <div><b>Methods &amp; tools</b><span>Python · R · SQL · Stata · MATLAB · ArcGIS</span></div>
          <div><b>Documents</b><span><a href="/Jing_Han_CV.pdf" target="_blank">Download curriculum vitae ↗</a></span></div>
        </div>
      </section>
      <footer><span>© 2026 Jing Han</span><span>Last updated August 2026</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
