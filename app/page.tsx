import SiteShell from './site-shell';
export const metadata = { title: "Home | Jing Han", alternates: { canonical: "/" } };
export default function Home() { return <SiteShell active="home"><main id="top" className="home-page">      <section className="hero" id="about">
        <div className="hero-copy">
          <h1>Jing Han</h1>
          <p className="role">Ph.D. Student in Economics · The Chinese University of Hong Kong (CUHK)</p>
          <div className="bio">
            <p>I am a Ph.D. student in Economics studying <strong>urban economics, consumer mobility, digital platforms, and international trade</strong>. My research combines empirical analysis with economic modeling to understand how people, goods, and economic activity move across space.</p>
            <p>My job market paper examines how consumers make local consumption tradable by moving themselves across cities, using anonymized transaction data that follow Hong Kong consumers across Hong Kong and mainland China. I am a Hong Kong PhD Fellow.</p>
          </div>
          <div className="links">
            <a href="/research/">Explore my research →</a>
            <a href="mailto:1155179329@link.cuhk.edu.hk">Email me ↗</a>
          </div>
        </div>
        <aside className="profile">
          <div className="portrait portrait-photo">
            <img src="/jing-han-portrait.jpg" alt="Portrait of Jing Han" width="1080" height="1440" />
          </div>
        </aside>
      </section>

</main></SiteShell>; }
