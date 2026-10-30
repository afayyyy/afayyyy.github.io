import SiteShell from '../site-shell';
export const metadata = { title: "Personal Life | Jing HAN (Faye)", alternates: { canonical: "/personal-life/" } };

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


export default function PersonalLife() { return <SiteShell active="life"><main id="top" className="personal-page">      <section className="section life" id="life">
        <div className="section-title life-heading">
          <p>04 · Personal life</p>
          <div>
            <h1>Life beyond<br />research</h1>
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

</main></SiteShell>; }
