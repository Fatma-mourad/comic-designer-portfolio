import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ComicPanel, Tag } from "@/components/portfolio-ui";
import { getProject, projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => { const project = getProject(params.slug); if (!project) throw notFound(); return project; },
  head: ({ loaderData }) => ({ meta: [
    { title: loaderData ? `${loaderData.title} Case Study — Fatma Mourad` : "Case Study Not Found — Fatma Mourad" },
    { name: "description", content: loaderData?.description ?? "Product design case study by Fatma Mourad." },
    { property: "og:title", content: loaderData ? `${loaderData.title} — Fatma Mourad` : "Case Study — Fatma Mourad" },
    { property: "og:description", content: loaderData?.description ?? "Product design case study by Fatma Mourad." },
    { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: CaseStudy,
});

function CaseStudy() {
  const project = Route.useLoaderData();
  const current = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(current + 1) % projects.length];
  if (!next) return null;
  return <article className={`case-study case-${project.tone}`}>
    <header className="case-hero"><Link to="/work" className="back-link"><ArrowLeft/> All work</Link><div className="case-title"><p>{project.category}</p><h1>{project.title}</h1><p className="case-deck">{project.description}</p><div className="case-tags"><Tag>{project.role}</Tag><Tag>{project.duration}</Tag><Tag>{project.year}</Tag></div></div><div className="case-cover"><img src={project.image} alt={project.imageAlt} width={1200} height={912}/><span>Case study / 0{current + 1}</span></div></header>
    <div className="case-body">
      <section className="case-opening"><p className="chapter-label">The setup</p><h2>{project.challenge}</h2></section>
      <div className="case-columns"><ComicPanel><span className="panel-label">Challenge</span><p>{project.challenge}</p></ComicPanel><ComicPanel><span className="panel-label">Approach</span><p>{project.approach}</p></ComicPanel></div>
      {project.chapters.map((chapter, chapterIndex) => <section className="case-chapter" key={chapter.title}><p className="chapter-label">{chapter.eyebrow}</p><h2>{chapter.title} <em>{chapter.accent}</em></h2>{chapter.body && <p className="chapter-copy">{chapter.body}</p>}{chapter.items && <div className="process-strip" aria-label={chapter.eyebrow}>{chapter.items.map((item, itemIndex) => <div key={item}><span>0{itemIndex + 1}</span><h3>{item}</h3></div>)}</div>}{chapterIndex === 1 && <div className="prototype-frame"><img src={project.image} alt={`${project.title} interface detail`} width={1200} height={912} loading="lazy" /></div>}</section>)}
      <section className="outcome-section"><div><p className="chapter-label">What changed</p><h2>A clearer path,<br/><em>made tangible.</em></h2><p>{project.outcome}</p></div><div className="metric-grid">{project.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div></section>
      <Link to="/work/$slug" params={{ slug: next.slug }} className="next-case"><span>Next story</span><strong>{next.title}</strong><ArrowRight aria-hidden="true"/></Link>
    </div>
  </article>;
}
