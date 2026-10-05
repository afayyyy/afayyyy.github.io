const papers = [
  {
    status: "Job Market Paper · Preliminary Draft",
    title: "When Consumers Move: The Tradability of Local Consumption",
    field: "Urban Economics · Consumer Mobility · Digital Platforms",
    summary: "Using anonymized transaction data that follow Hong Kong consumers across Hong Kong and mainland China, I document systematic differences in cross-border market entry, destination choice, consumption breadth, and the composition of portable and place-based spending across expenditure levels and distance. I develop a spatial model of cross-border consumption that integrates nonhomothetic demand, consumer mobility, and spatial access costs, linking passenger connectivity to consumer welfare and the spatial distribution of urban demand.",
    featured: true,
  },
  {
    status: "Under review",
    title: "Physical Connectivity, Digital Payments, and Cross-Border Consumption",
    authors: "with Xijie Gao",
    field: "Digital platforms · Fintech · Consumption",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6112366",
  },
  {
    status: "R&R · Research Policy",
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
  { image: "/city-walks/11-hebei-winter-town.jpg", place: "Northern Hebei", title: "A winter town", note: "Reeds, frozen water, bare trees, and distant homes beneath an impossibly clear northern sky." },
  { image: "/city-walks/12-shanghai-sanitation-reader.jpg", place: "Shanghai", title: "Reading between shifts", note: "A sanitation worker pauses under the streetlight with a book—the private life of the mind within public labor." },
  { image: "/city-walks/13-pattaya-reader.jpg", place: "Pattaya", title: "Reading by borrowed light", note: "Beside a beach in the red-light district, an elderly waste picker reads beneath a streetlamp." },
  { image: "/city-walks/14-hong-kong-fire-dragon.jpg", place: "Hong Kong · Tai Hang", title: "The fire dragon travels", note: "A local folk ritual carried through narrow streets, now joined and witnessed by people from many cultures." },
  { image: "/city-walks/15-zhengzhou-square.jpg", place: "Zhengzhou", title: "A slogan above the clocks", note: "Traditional roofs, twin clocks, a red star, and the words ‘Long live Mao Zedong Thought’ layered into the city square." },
  { image: "/city-walks/16-longmen-grottoes.jpg", place: "Luoyang · Longmen Grottoes", title: "Before the great Buddha", note: "A monumental sacred figure in stone; below, dense streams of visitors make the scale suddenly human." },
  { image: "/city-walks/17-hebei-fortune-telling.jpg", place: "Hebei", title: "Fate as a street business", note: "Palm reading, names, dates, and fortune-telling offered from a small blue cart at the edge of the market." },
  { image: "/city-walks/18-west-lake-sunset.jpg", place: "Hangzhou · West Lake", title: "Autumn water and the endless sky", note: "At sunset, water and sky become one color—an old poetic image returning in an ordinary evening." },
  { image: "/city-walks/19-shenzhen-lianhuashan.jpg", place: "Shenzhen · Lianhuashan Park", title: "A city written into history", note: "Deng Xiaoping’s inscription links Shenzhen’s urban landscape to the story it tells about reform and development." },
  { image: "/city-walks/20-beijing-houhai-preservation.jpg", place: "Beijing · Houhai", title: "Buildings that must remain", note: "These buildings cannot be demolished. Their tiled roofs preserve an old urban fabric while the modern skyline rises beyond it." },
  { image: "/city-walks/21-northeast-autumn-fruit.jpg", place: "Northeast China", title: "The colors of autumn", note: "Crimson crabapples and yellow pears fill a street stall—season and local abundance arranged in two bands of color." },
  { image: "/city-walks/22-xixi-balloon.jpg", place: "Hangzhou · Xixi", title: "A dreamcore afternoon", note: "A balloon rises above the wetland park, suspended between trees, water, and a sky that feels almost remembered rather than real." },
  { image: "/city-walks/23-fuyang-rapeseed-fields.jpg", place: "Hangzhou · Fuyang", title: "Fields as geometry", note: "Rapeseed flowers, vegetable plots, paths, and a canal turn an agricultural landscape into an accidental abstract composition." },
  { image: "/city-walks/24-summer-palace-father-daughter.jpg", place: "Beijing · Summer Palace", title: "Winter light at the window", note: "A father and daughter warm themselves by the glass, looking out together at the snow-covered lake." },
  { image: "/city-walks/25-oxford-front-gardens.jpg", place: "Oxford", title: "Gardens at every doorstep", note: "In Oxford, even the walk home passes through a small garden." },
  { image: "/city-walks/26-florence-supermarket.jpg", place: "Florence", title: "Would you have guessed?", note: "A wall of Chinese snacks—in a supermarket in Florence." },
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
          <p className="kicker">Ph.D. student · Urban economics · Digital economy</p>
          <h1>Jing Han</h1>
          <p className="role">Ph.D. Student in Economics · The Chinese University of Hong Kong</p>
          <div className="bio">
            <p>I am a Ph.D. student in Economics studying <strong>urban economics, consumer mobility, digital platforms, and international trade</strong>. My research combines empirical analysis with economic modeling to understand how people, goods, and economic activity move across space.</p>
            <p>My job market paper examines how consumers make local consumption tradable by moving themselves across cities, using anonymized transaction data that follow Hong Kong consumers across Hong Kong and mainland China. I am a Hong Kong PhD Fellow.</p>
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
            <div><dt>Fields</dt><dd>Urban Economics · Digital Economics</dd></div>
            <div><dt>Affiliation</dt><dd>The Chinese University of Hong Kong</dd></div>
            <div><dt>Advisor</dt><dd>Zheng (Michael) Song</dd></div>
            <div><dt>Location</dt><dd>Hong Kong SAR</dd></div>
          </dl>
        </aside>
      </section>

      <div className="fields" aria-label="Research interests">
        <span>Urban Economics</span><i>01</i><span>Consumer Mobility</span><i>02</i><span>Digital Platforms</span><i>03</i><span>International Trade</span><i>04</i>
      </div>

      <section className="section" id="research">
        <div className="section-title"><p>01 · Research</p><h2>Research portfolio</h2></div>
        <div className="papers">
          {papers.map((paper, index) => (
            <article key={paper.title} className={paper.featured ? "featured-paper" : undefined}>
              <span className="paper-index">0{index + 1}</span>
              <div>
                <p className="status">{paper.status}</p>
                <h3>{paper.link ? <a href={paper.link} target="_blank" rel="noopener noreferrer">{paper.title} <span aria-hidden="true">↗</span></a> : paper.title}</h3>
                {paper.authors && <p className="authors">{paper.authors}</p>}
                {paper.summary && <p className="paper-summary">{paper.summary}</p>}
                <p className="abstract">{paper.field}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section publication">
        <div className="section-title"><p>02 · Publications</p><h2>Published work</h2></div>
        <div className="papers">
          <article><span className="paper-index">01</span><div><p className="status">Energy Policy · Accepted for publication</p><h3><a href="https://www.sciencedirect.com/science/article/abs/pii/S0301421526004738" target="_blank" rel="noopener noreferrer">The Role of Trade Protectionism and Local Industry Support Policies in Low-Carbon Technologies Trade <span aria-hidden="true">↗</span></a></h3><p className="authors">with Donghui Yu and Baihe Gu</p></div></article>
          <article><span className="paper-index">02</span><div><p className="status">Review of Industrial Economics · 2020 · In Chinese</p><h3>The New Coronavirus and Other Major Pandemics: A Review</h3><p className="authors">with Zhiyuan Li</p></div></article>
        </div>
      </section>

      <section className="section publication policy-study" id="policy">
        <div className="section-title"><p>03 · Policy study</p><h2>Policy study</h2></div>
        <div className="papers">
          <article>
            <span className="paper-index">01</span>
            <div>
              <p className="status">Policy report · 2025</p>
              <h3><a href="https://www.michael-song.org/uploads/4/8/1/4/48141215/hongkongers_in_mainland.pdf" target="_blank" rel="noopener noreferrer">Hong Kong Travelers in Mainland China: Scale, Destinations, and Expenditure Patterns <span aria-hidden="true">↗</span></a></h3>
              <p className="authors">with Xijie Gao and Zheng (Michael) Song</p>
              <p className="abstract"><strong>Media coverage:</strong> RTHK, HKET, Ming Pao, Xinhua News Agency, People&apos;s Daily Online, Yahoo Finance, and other regional media.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section teaching" id="background">
        <div className="section-title"><p>04 · Background</p><h2>Education &amp; experience</h2></div>
        <div className="course-list">
          <article><span>2022–present</span><div><h3>The Chinese University of Hong Kong</h3><p>Ph.D. in Economics · Hong Kong PhD Fellowship</p></div></article>
          <article><span>2019–22</span><div><h3>Fudan University</h3><p>M.S. in World Economics</p></div></article>
          <article><span>2015–19</span><div><h3>Fudan University</h3><p>B.S. in International Economics and Trade · Second major in English Literature and Translation</p></div></article>
          {experience.map((item) => <article key={item.place}><span>{item.years}</span><div><h3>{item.place}</h3><p>{item.role}</p></div></article>)}
        </div>
      </section>

      <section className="section life" id="life">
        <div className="section-title life-heading">
          <p>05 · Personal life</p>
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
        <p>06 · Contact</p><h2>Let&apos;s talk about<br />research.</h2>
        <a className="email" href="mailto:1155179329@link.cuhk.edu.hk">1155179329@link.cuhk.edu.hk <span>↗</span></a>
        <div className="contact-grid">
          <div><b>Based in</b><span>Hong Kong SAR<br />The Chinese University of Hong Kong</span></div>
          <div><b>Methods &amp; tools</b><span>Python · R · SQL · Stata · MATLAB · ArcGIS</span></div>
          <div><b>Documents</b><span><a href="/Jing_Han_CV.pdf" target="_blank">Download curriculum vitae ↗</a></span></div>
        </div>
      </section>
      <footer><span>© 2026 Jing Han</span><span>Last updated September 2026</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
