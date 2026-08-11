"use client";

import { useEffect, useState } from "react";
import { docsUi, type DocPage, type DocsLang } from "./docsContent";

export function DocView({ doc }: { doc: DocPage }) {
  const [lang, setLang] = useState<DocsLang>("ru");
  const ui = docsUi[lang];

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

  return (
    <main className="docsPage docPage">
      <div className="docsToolbar">
        <a className="docsBack" href="/documentation">{ui.allDocs}</a>
        <div className="langSwitch animated" aria-label={ui.language}>
          <span className={`langThumb ${lang}`} aria-hidden="true" />
          <button type="button" className={lang === "ru" ? "active" : ""} onClick={() => setLang("ru")}>RU</button>
          <button type="button" className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
        </div>
      </div>

      <article className="docArticle">
        <header>
          <span className="kicker">{ui.template}</span>
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
