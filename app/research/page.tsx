import SiteShell from '../site-shell';
function InstitutionLogo({ name, label }: { name: string; label: string }) {
  return <span className={`institution-icon institution-icon-${name}`} role="img" aria-label={label} />;
}
export const metadata = { title: "Research | Jing Han", alternates: { canonical: "/research/" } };

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
];


export default function Research() { return <SiteShell active="research"><main id="top" className="research-page"><div className="page-heading"><p className="kicker">Jing Han · Economics</p><h1>Research</h1><p>Urban economics, consumer mobility, digital platforms, and international trade.</p><nav aria-label="Research sections"><a href="#publications">Publications</a><a href="#research">Working papers</a><a href="#policy">Policy reports</a></nav></div>      <section className="section publication" id="publications">
        <div className="section-title"><p>02 · Publications</p><h2>Published work</h2></div>
        <div className="papers">
          <article><span className="paper-index">01</span><div><p className="publication-venue"><strong>Economic Analysis and Policy</strong><span>2026 · Accepted for publication</span></p><h3>Migration Dynamics and Reproductive Choices: Evidence from China</h3><p className="authors">with Zeyang Bian</p></div></article>
          <article><span className="paper-index">02</span><div><p className="publication-venue"><strong>Energy Policy</strong><span>2026 · Published</span></p><h3><a href="https://www.sciencedirect.com/science/article/abs/pii/S0301421526004738" target="_blank" rel="noopener noreferrer">The Role of Trade Protectionism and Local Industry Support Policies in Low-Carbon Technologies Trade <span aria-hidden="true">↗</span></a></h3><p className="authors">with Donghui Yu and Baihe Gu</p></div></article>
          <article><span className="paper-index">03</span><div><p className="publication-venue"><strong>Review of Industrial Economics</strong><span>2020 · In Chinese</span></p><h3><a href="https://kns.cnki.net/kcms2/article/abstract?v=bGUDtmHwhl1g1sqpYJUycIXLNHV2h1SCzqPVGVCLZ33obOO-dnyVhafLMGqlvA9b-Y0FRWj5pmkTUEGVgaiEKxTesBIfLuznBZnb2-dkgMUzSmnO9utGEfEcndBGKEHe-SWhRfHESOlwbqrlEd69NtMFNMlUPfPfnmtrSwYM2Q2eLF3CurTYnw==" target="_blank" rel="noopener noreferrer">The New Coronavirus and Other Major Pandemics: A Review <span aria-hidden="true">↗</span></a></h3><p className="authors">with Zhiyuan Li</p></div></article>
        </div>
      </section>

      <section className="section" id="research">
        <div className="section-title"><p>01 · Research</p><h2>Job market & working papers</h2></div>
        <div className="papers">
          {papers.map((paper, index) => (
            <article key={paper.title} className={paper.featured ? "featured-paper" : undefined}>
              <span className="paper-index">0{index + 1}</span>
              <div>
                <p className={paper.status.includes("Research Policy") ? "publication-venue" : "status"}>{paper.status.includes("Research Policy") ? <><strong>Research Policy</strong><span>Revise &amp; resubmit</span></> : paper.status}</p>
                <h3>{paper.link ? <a href={paper.link} target="_blank" rel="noopener noreferrer">{paper.title} <span aria-hidden="true">↗</span></a> : paper.title}</h3>
                {paper.authors && <p className="authors">{paper.authors}</p>}
                {paper.summary && <details className="paper-details"><summary>Abstract</summary><p className="paper-summary">{paper.summary}</p></details>}
                <p className="abstract">{paper.field}</p>
              </div>
            </article>
          ))}
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

      <section className="section research-experience" id="experience" aria-labelledby="experience-title">
        <div className="section-title"><h2 id="experience-title">Research &amp; Industry Experience</h2></div>
        <div className="experience-list">
          <article><div><h3>Ant Research Institute, Ant Group <InstitutionLogo name="ant" label="Ant Group logo" /></h3><p>Visiting Researcher · Industry-based economic research in Hong Kong</p></div><p className="experience-date">Jun.–Sep. 2024</p></article>
          <article><div><h3>Luohan Academy, Alibaba Group <InstitutionLogo name="alibaba" label="Alibaba Group logo" /></h3><p>Research Assistant · Digital-economy research</p></div><p className="experience-date">Oct. 2021–Jul. 2022</p></article>
          <article><div><h3>UNICEF <InstitutionLogo name="unicef" label="UNICEF logo" /></h3><p>Intern · South-South Cooperation</p></div><p className="experience-date">Feb. 2021–Mar. 2022</p></article>
          <article><div><h3>Bain &amp; Company, Shanghai <InstitutionLogo name="bain" label="Bain & Company logo" /></h3><p>Business Analyst Intern</p></div><p className="experience-date">May 2018–May 2019</p></article>
        </div>
      </section>
</main></SiteShell>; }
