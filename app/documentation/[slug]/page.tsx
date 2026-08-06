"use client";

import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { docs, docsUi, getDoc, type DocsLang } from "../docsContent";

export function generateStaticParams() {
  return docs.map((doc) => ({ slug: doc.slug }));
}

export default function DocumentPage({ params }: { params: { slug: string } }) {
  const doc = getDoc(params.slug);
  const [lang, setLang] = useState<DocsLang>("ru");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = document.querySelectorAll(".docArticle header, .docSection, .docsToolbar");
    elements.forEach((element, index) => {
      element.classList.add("scrollReveal");
      (element as HTMLElement).style.setProperty("--reveal-delay", `${Math.min(index, 4) * 55}ms`);
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("isVisible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [lang]);

  if (!doc) notFound();

  const ui = docsUi[lang];

  return (
    <main className="docsPage docPage">
      <div className="docsToolbar">
        <a className="docsBack" href="/documentation">{lang === "ru" ? "← Все документы" : "← All documents"}</a>
        <div className="langSwitch animated" aria-label={ui.language}>
          <span className={`langThumb ${lang}`} aria-hidden="true" />
          <button type="button" className={lang === "ru" ? "active" : ""} onClick={() => setLang("ru")}>RU</button>
          <button type="button" className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
        </div>
      </div>

      <article className="docArticle">
        <header>
          <span className="kicker">{ui.updated}</span>
          <h1>{doc.title[lang]}</h1>
          <p>{doc.summary[lang]}</p>
        </header>

        {doc.sections.map((section) => (
          <section className="docSection" key={section.title.en}>
            <h2>{section.title[lang]}</h2>
            {section.body[lang].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </article>
    </main>
  );
}
