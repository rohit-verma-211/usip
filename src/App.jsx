import { useEffect, useState } from "react";
import { slides, news, departments, projects, faculty, fellows, interns, pages, topLinks, socials, tabs, quickLinks } from "./data.js";
import { Cycle, Venn, Hierarchy, Flow } from "./Diagrams.jsx";

const Card = ({ children, className = "" }) => (
  <div className={`border border-slate-300 bg-white p-4 ${className}`}>{children}</div>
);
const H2 = ({ children }) => (
  <h2 className="mb-3 border-b-2 border-dtu pb-1 text-xl font-bold text-ink">{children}</h2>
);
const Grid = ({ children }) => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
);
const Initials = ({ name }) => (
  <div className="grid h-20 w-20 flex-none place-items-center  bg-ink text-2xl font-bold text-white">
    {name.split(" ").slice(-2).map((w) => w[0]).join("")}
  </div>
);
const Person = ({ name, role }) => (
  <Card className="flex items-center gap-4">
    <Initials name={name} />
    <div><div className="font-semibold">{name}</div><div className="text-sm text-slate-500">{role}</div></div>
  </Card>
);

const NewTag = () => <span className="mr-1 animate-pulse rounded-sm bg-red-600 px-1 text-[10px] font-bold uppercase text-white">new</span>;

function Header() {
  return (
    <header className="border-t-4 border-amber-500 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-4 py-3">
        <img
          src="/dtu.png"
          alt="DTU emblem"
          width={76}
          height={76}
          className="h-[76px] w-[76px] shrink-0 object-contain"
        />
        <div>
          <h1 className="text-xl font-bold text-ink sm:text-2xl">
            School of Integrated Learning and Research (SILR)
          </h1>
          <p className="text-slate-500">
            Delhi Technological University · formerly Delhi College of Engineering
          </p>
          <p className="text-sm text-slate-500">
            Shahbad Daulatpur, Main Bawana Road, Delhi-42
          </p>
          <p className="text-sm font-semibold text-maroon">
            Accredited with 'A+' Grade (CGPA 3.47 out of 4) by NAAC (2nd cycle) · ISO 9001:2015 Certified
          </p>
        </div>
      </div>
    </header>
  );
}

function Nav({ page }) {
  const cls = (id) => `block px-4 py-2.5 text-sm font-semibold text-white hover:bg-dtu-dark ${page === id ? "bg-dtu-dark" : ""}`;
  return (
    <nav className="bg-dtu">
      <ul className="mx-auto flex max-w-6xl flex-wrap">
        {pages.map(([id, label]) => (
          <li key={id} className="group relative">
            <a href={`#${id}`} className={cls(id)}>{label}{id === "academics" && " ▾"}</a>
            {id === "academics" && (
              <ul className="absolute left-0 top-full z-20 hidden w-72 border-t-2 border-amber-500 bg-dtu-dark group-hover:block group-focus-within:block">
                {departments.map((d) => <li key={d}><a href="#academics" className="block border-b border-white/20 px-3 py-2 text-xs text-white hover:bg-dtu">{d}</a></li>)}
              </ul>
            )}
          </li>
        ))}

      </ul>
    </nav>
  );
}

function Ticker() {
  return (
    <div className="overflow-hidden border-b border-slate-300 bg-white py-1.5 text-sm font-semibold text-maroon">
      <div className="animate-marquee"><NewTag />{news[0].t}</div>
    </div>
  );
}

function Slider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative min-h-80 overflow-hidden text-white">
      {slides.map((s, k) => (
        <div
          key={k}
          className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-br ${s.bg} p-6 pb-14 transition-opacity duration-700 ${k === i ? "opacity-100" : "opacity-0"}`}
        >
          {s.img && (
            <img
              src={s.img}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          )}
          {/* dark overlay so the text is readable on any photo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="relative">
            <h2 className="text-3xl font-semibold drop-shadow">{s.t}</h2>
            <p className="max-w-md drop-shadow">{s.d}</p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-3 right-3 flex gap-1">
        {slides.map((_, k) => (
          <button
            key={k}
            onClick={() => setI(k)}
            aria-label={`Slide ${k + 1}`}
            className={`h-7 w-7 text-sm font-bold text-white ${k === i ? "bg-black" : "bg-ink/80"}`}
          >
            {k + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

function Updates() {
  const list = [...news, ...news];
  return (
    <aside className="flex h-80 flex-col border border-leaf bg-white">
      <h3 className="bg-leaf py-1.5 text-center text-sm font-bold text-white">Important Updates</h3>
      <div className="flex-1 overflow-hidden px-3">
        <ul className="animate-roll">
          {list.map((n, k) => (
            <li key={k} className="border-b border-dashed border-slate-400 py-2 text-[13px] leading-snug text-ink">
              {n.isNew && <NewTag />}<a href="#research" className="hover:text-maroon hover:underline">{n.t}</a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}



const SideLinks = ({ title, items }) => (
  <Card>
    <h3 className="-mx-4 -mt-4 mb-2 bg-dtu px-4 py-1.5 text-sm font-bold text-white">{title}</h3>
    {items.map(([h, t]) => <a key={h} href={`#${h}`} className="block border-b border-dotted border-slate-300 py-1.5 text-sm text-ink hover:text-maroon">{t}</a>)}
  </Card>
);
function DeanPhoto({ src, name }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return <Initials name={name} />;
  return (
    <img
      src={src}
      alt={name}
      onError={() => setFailed(true)}
      className="h-24 w-24 shrink-0 rounded-full object-cover object-top ring-2 ring-slate-200"
    />
  );
}

function Home() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2"><Slider /></div><Updates />
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-[200px_1fr_260px]">
        <SideLinks title="Latest Updates" items={[["academics", "B.Tech / M.Tech / PhD programmes"], ["research", "Research Park at Narela"], ["interns", "Fellows & interns"]]} />
        <div>
          <Card className="mb-4">
            <H2>Vision</H2>
            <ul className="mb-4 list-disc space-y-1 pl-5">
              <li>To establish a leading centre for integral education that fosters interdisciplinary and multidisciplinary learning.</li>
              <li>To nurture technologically adept researchers through a globally benchmarked curriculum in a dynamic, integrated learning environment.</li>
              <li>Creation of new knowledge, innovations and credentials with strong industry and R&D collaborations.</li>
            </ul>
            <H2>Mission</H2>
            <ul className="list-disc space-y-1 pl-5">
              <li>Integrate a variety of academic disciplines into a cohesive learning program.</li>
              <li>Link the Indian knowledge system with existing mono-disciplinary DTU departments.</li>
              <li>Build an inclusive educational environment for students from all backgrounds.</li>
              <li>Foster innovation in interdisciplinary and multidisciplinary collaborative research.</li>
              <li>Give students the skills to navigate the complexity of the modern world.</li>
            </ul>
          </Card>
          <Card>
            <H2>Administration</H2>
            <div className="flex items-center gap-4 rounded-lg bg-slate-50 p-4">
              <DeanPhoto src="/atrivedi.jpg" name="A Trivedi" />
              <a href="https://www.dtu.ac.in/Web/Departments/Civil/faculty/" className="block hover:text-blue-700">
                <div className="text-lg font-semibold">Prof. A. Trivedi</div>
                Dean, SILR<br />Delhi Technological University
              </a>
            </div>
          </Card>
        </div>
        <SideLinks title="Notices / Circulars" items={[["about", "About the School"], ["academics", "Departments & Centres"], ["research", "Collaborative Projects"], ["faculty", "Faculty"], ["contact", "Contact"]]} />
      </div>

    </>
  );
}

const About = () => (
  <>
    <Card className="mb-4">
      <H2>About the School</H2>
      <p className="mb-3">The School of Integrated Learning and Research (SILR) at DTU integrates interdisciplinary, multidisciplinary and cross-disciplinary practices, including the ancient knowledge of India, with the university's objectives and NEP 2020. It is meant to be the backbone of integrated research at the university and a formative ground for futuristic scientific fields.</p>
      <p>It advances scientific convergence by uniting disciplines, dissolving conventional barriers and promoting new disciplines, with research tie-ups with leading national and international organisations.</p>
    </Card>
    <Card className="mb-4">
      <H2>Message from the Dean</H2>
      <p className="mb-3">SILR is a testament to the university's commitment to academic excellence, integrated learning, interdisciplinary research and innovation-driven learning. It is a dynamic hub for AI, Data Analytics, Environmental Science, Digital Healthcare, Community Development, Energy Transition, Geospatial Technologies, Climatic Action and Indian Knowledge Systems.</p>
      <p className="font-semibold">Prof. A. Trivedi, Dean, SILR, Delhi Technological University</p>
    </Card>
    <Grid>
      {[["Scope", ["Programmes integrating many disciplines", "Course choice across departments", "Research centres for real-world problems", "Technology combined with social sciences, humanities and arts"]],
      ["Objectives", ["Departments, centres and labs in emerging areas", "Collaborative projects with national and international institutions", "New programmes in emerging areas", "Large basket of courses and minor specializations"]],
      ["Needs addressed", ["Global health and environment challenges", "Creativity and innovation", "Skill development and employability", "Inclusive education and NEP 2020 alignment"]]].map(([t, l]) => (
        <Card key={t}><h3 className="mb-2 text-lg text-ink">{t}</h3><ul className="list-disc space-y-1 pl-5 text-sm">{l.map((x) => <li key={x}>{x}</li>)}</ul></Card>
      ))}
    </Grid>
    <Cycle /><Venn /><Hierarchy />
  </>
);

const Academics = () => (
  <>
    <Card className="mb-4"><H2>Academic Programmes</H2>
      <ul className="list-disc space-y-1 pl-5"><li>B.Tech, M.Tech and PhD in integrated domains that are inter-, multi- and cross-disciplinary.</li><li>Engagement in state-of-the-art emerging areas of learning and research.</li></ul></Card>
    <Grid>{departments.map((d) => <Card key={d}><h3 className="text-lg text-ink">{d}</h3></Card>)}</Grid>
  </>
);

const Research = () => (
  <>
    <Card><H2>Collaborative Research Projects</H2>
      <Grid>{projects.map((p) => <Card key={p} className="border border-slate-200 shadow-none"><h3 className="text-ink">{p}</h3></Card>)}</Grid></Card>
    <Flow />
  </>
);

const People = ({ title, list }) => (
  <section className="mb-6"><H2>{title}</H2><Grid>{list.map((p) => <Person key={p.name} {...p} />)}</Grid></section>
);

const Contact = () => (
  <Card><H2>Contact</H2>
    <p>School of Integrated Learning and Research<br />Delhi Technological University, Shahbad Daulatpur, Main Bawana Road, Delhi-42</p>
    <p className="mt-2">Dean: Prof. A. Trivedi · Email: silr[at]dtu[dot]ac[dot]in (placeholder)</p></Card>
);

export default function App() {
  const read = () => (pages.some(([id]) => id === location.hash.slice(1)) ? location.hash.slice(1) : "home");
  const [page, setPage] = useState(read);
  useEffect(() => { const f = () => { setPage(read()); scrollTo(0, 0); }; addEventListener("hashchange", f); return () => removeEventListener("hashchange", f); }, []);
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <Header /><Nav page={page} /><Ticker />
      <main className="mx-auto max-w-6xl p-4">
        {page === "home" && <Home />}
        {page === "about" && <About />}
        {page === "academics" && <Academics />}
        {page === "research" && <Research />}
        {page === "faculty" && <People title="Faculty of SILR" list={faculty} />}
        {page === "interns" && (<><People title="Research Fellows" list={fellows} /><People title="Interns" list={interns} /></>)}
        {page === "contact" && <Contact />}
      </main>
      <footer className="mt-6 border-t-4 border-amber-500 bg-[#0f2f57] text-sm text-blue-100">
        <div className="mx-auto grid max-w-6xl gap-6 p-5 sm:grid-cols-2">
          <div><h4 className="mb-2 font-bold text-white">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-1">{quickLinks.map(([l, h]) => <li key={l}><a href={h} target="_blank" rel="noreferrer" className="hover:underline">» {l}</a></li>)}</ul></div>
          <div><h4 className="mb-2 font-bold text-white">Contact</h4>
            <p>School of Integrated Learning and Research<br />Delhi Technological University<br />Shahbad Daulatpur, Main Bawana Road, Delhi-110042</p></div>
        </div>
        <div className="bg-[#0a2342] p-3 text-center text-xs">© Delhi Technological University · School of Integrated Learning and Research</div>
      </footer>
    </div>
  );
}
