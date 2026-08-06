"use client";

import { useEffect, useState } from "react";
import { docs, docsUi, type DocsLang } from "./docsContent";

export default function Documentation() {
  const [lang, setLang] = useState<DocsLang>("ru");
  const ui = docsUi[lang];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = document.querySelectorAll(".docsHero, .docsToolbar, .docsList a");
    elements.forEach((element, index) => {
      element.classList.add("scrollReveal");
      (element as HTMLElement).style.setProperty("--reveal-delay", `${index * 65}ms`);
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
    <main className="docsPage">
      <div className="docsToolbar">
        <a className="docsBack" href="/">{ui.back}</a>
        <div className="langSwitch animated" aria-label={ui.language}>
          <span className={`langThumb ${lang}`} aria-hidden="true" />
          <button type="button" className={lang === "ru" ? "active" : ""} onClick={() => setLang("ru")}>RU</button>
          <button type="button" className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
        </div>
      </div>

      <section className="docsHero">
        <span className="kicker">{ui.eyebrow}</span>
        <h1>{ui.title}</h1>
        <p>{ui.subtitle}</p>
      </section>

      <section className="docsList" aria-label={ui.title}>
        {docs.map((doc) => (
          <a href={`/documentation/${doc.slug}`} key={doc.slug}>
            <span>
              <strong>{doc.title[lang]}</strong>
              <small>{doc.summary[lang]}</small>
            </span>
            <b>{ui.open}</b>
          </a>
        ))}
      </section>
    </main>
  );
}
