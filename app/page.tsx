"use client";

import { useEffect, useState } from "react";
import logoUrl from "./lemiri-logo.png?url";

type Lang = "ru" | "en";

const copy = {
  ru: {
    nav: ["Возможности", "Как работает", "Роли", "Вопросы"],
    product: "Посмотреть продукт",
    try: "Попробовать",
    lang: "Переключить язык",
    eyebrow: "ИИ-сотрудник уже на связи",
    heroStart: "Наймите сотрудника,",
    heroMid: "который",
    heroEnd: "ни одного клиента",
    phrases: ["не пропускает", "не упускает", "не забывает"],
    heroText: "Lemiri AI отвечает клиентам, собирает заявки, записывает на услуги и передает сложные диалоги менеджеру по правилам вашего бизнеса.",
    primary: "Создать ИИ-сотрудника",
    secondary: "Как это работает",
    trust: ["Работает там, где пишут клиенты", "Сайт", "WhatsApp", "Telegram", "Календарь", "CRM"],
    capabilities: {
      kicker: "Один сотрудник. Весь путь клиента.",
      title: ["Не просто отвечает.", "Доводит до результата."],
      text: "ИИ использует базу знаний компании, помнит контекст диалога и понимает, когда нужно передать разговор человеку.",
      cards: [
        ["Общение", "Отвечает сразу и по делу", "Ведет естественный диалог в чате и мессенджерах, сохраняя тон бренда."],
        ["Знания", "Не выдумывает факты", "Отвечает по сайту, документам, FAQ и правилам компании."],
        ["Контроль", "Передает человеку вовремя", "Определяет сложные вопросы и прикладывает краткое резюме диалога."],
        ["Действия", "Делает следующий шаг", "Создает заявку, показывает свободные окна, меняет статус и уведомляет команду."],
      ],
      miniChat: ["Клиент", "Подскажите, есть доставка сегодня?", "Lemiri · источник: FAQ", "Да, заказы до 17:00 доставим сегодня."],
      sources: ["Сайт", "Услуги и цены.pdf", "FAQ"],
      flow: ["Диалог завершен", "Лид создан", "Команда уведомлена"],
    },
    how: {
      kicker: "Запуск без технических знаний",
      title: ["От идеи до первого", "диалога за 15 минут"],
      text: "Вы выбираете роль, добавляете знания, подключаете канал связи и проверяете ответы в тестовом режиме.",
      steps: [
        ["01", "Выберите роль", "Администратор, продажи или поддержка. Lemiri предложит сценарии под задачу."],
        ["02", "Добавьте знания", "Подключите сайт, документы и FAQ, чтобы ответы были привязаны к источникам."],
        ["03", "Подключите канал", "Сайт, WhatsApp, Telegram, CRM или календарь собираются в один процесс."],
        ["04", "Проверьте и запустите", "Протестируйте диалоги и включите ИИ-сотрудника для клиентов."],
      ],
    },
    roles: {
      kicker: "Понятные роли",
      title: ["Начните с того,", "кто нужен сегодня"],
      text: "Каждая роль отвечает за конкретный бизнес-результат.",
      items: [
        ["01", "Администратор", "Отвечает на вопросы, записывает и напоминает о визите."],
        ["02", "Менеджер продаж", "Уточняет потребность, бюджет и передает теплого лида команде."],
        ["03", "Поддержка", "Решает типовые вопросы по базе знаний и зовет человека вовремя."],
      ],
      action: "Выбрать роль",
    },
    proof: {
      kicker: "Все под контролем",
      title: ["Вы видите не только ответы,", "но и результат"],
      text: "Диалоги, лиды, записи, передачи человеку и ошибки собраны в понятном отчете.",
      list: ["Источник каждого ответа", "История выполненных действий", "Тестовый режим до публикации"],
      dashboard: ["Обзор недели", "1–7 августа", "Сообщения", "Лиды", "Записи", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    },
    faq: {
      kicker: "Частые вопросы",
      title: ["Коротко", "о важном"],
      items: [
        ["ИИ может ошибиться?", "Lemiri отвечает по подключенным источникам, показывает их в журнале и передает сомнительные вопросы человеку."],
        ["Нужно уметь программировать?", "Нет. Настройка сделана как пошаговый запуск сотрудника: роль, знания, канал и тест."],
        ["Можно подключить CRM?", "Да. Основные CRM подключаются напрямую, остальные системы можно связать через вебхуки и сервисы автоматизации."],
        ["Что происходит, когда нужен человек?", "ИИ-сотрудник передает диалог по заданным правилам и добавляет резюме, чтобы менеджер быстро продолжил разговор."],
      ],
    },
    cta: ["Ваш следующий сотрудник уже готов", "Пусть клиенты получают", "ответ, пока вы заняты бизнесом", "Создайте первого ИИ-сотрудника и проведите тестовый диалог.", "Начать бесплатно", "Запросить демо"],
    footer: ["Готовый цифровой сотрудник для вашего бизнеса.", "Документация", "© 2026 Lemiri AI"],
    mock: ["Новая заявка", "квалифицирована", "Анна К.", "Хочет записаться на консультацию", "Диалоги сегодня", "Ответить клиенту...", "Лид", "Календарь", "ИИ", "Отвечает сейчас", "На завтра есть два свободных окна: 12:30 и 16:00. Какое вам удобнее?", "Передача менеджеру", "Клиент готов обсудить детали", "Резюме подготовлено"],
  },
  en: {
    nav: ["Capabilities", "How it works", "Roles", "FAQ"],
    product: "View product",
    try: "Try it",
    lang: "Switch language",
    eyebrow: "Your AI employee is online",
    heroStart: "Hire an employee",
    heroMid: "who",
    heroEnd: "a single customer",
    phrases: ["never misses", "never loses", "never forgets"],
    heroText: "Lemiri AI replies to customers, captures leads, books appointments, and hands complex conversations to managers using your business rules.",
    primary: "Create AI employee",
    secondary: "How it works",
    trust: ["Works where customers message you", "Website", "WhatsApp", "Telegram", "Calendar", "CRM"],
    capabilities: {
      kicker: "One employee. The whole customer path.",
      title: ["More than replies.", "Built for outcomes."],
      text: "The AI uses company knowledge, remembers conversation context, and knows when a human should step in.",
      cards: [
        ["Messaging", "Replies fast and on point", "Runs natural conversations in chat and messengers while keeping your brand tone."],
        ["Knowledge", "Does not invent facts", "Answers from your website, documents, FAQ, and company rules."],
        ["Control", "Hands off on time", "Detects complex questions and attaches a short conversation summary."],
        ["Actions", "Takes the next step", "Creates a lead, shows available slots, updates status, and notifies the team."],
      ],
      miniChat: ["Customer", "Do you deliver today?", "Lemiri · source: FAQ", "Yes, orders placed before 5 PM can be delivered today."],
      sources: ["Website", "Services and pricing.pdf", "FAQ"],
      flow: ["Chat completed", "Lead created", "Team notified"],
    },
    how: {
      kicker: "Launch without technical setup",
      title: ["From idea to first", "conversation in 15 minutes"],
      text: "Choose a role, add knowledge, connect a channel, and test replies before going live.",
      steps: [
        ["01", "Choose a role", "Administrator, sales, or support. Lemiri suggests workflows for the job."],
        ["02", "Add knowledge", "Connect your website, documents, and FAQ so answers stay grounded."],
        ["03", "Connect a channel", "Website, WhatsApp, Telegram, CRM, or calendar come together in one flow."],
        ["04", "Test and launch", "Run test conversations and switch the AI employee on for customers."],
      ],
    },
    roles: {
      kicker: "Clear roles",
      title: ["Start with the role", "you need today"],
      text: "Each role is tied to a concrete business outcome.",
      items: [
        ["01", "Administrator", "Answers questions, books appointments, and sends reminders."],
        ["02", "Sales manager", "Qualifies needs, budget, and passes warm leads to the team."],
        ["03", "Support", "Solves common issues from the knowledge base and escalates on time."],
      ],
      action: "Choose role",
    },
    proof: {
      kicker: "Full control",
      title: ["You see not only replies,", "but results"],
      text: "Conversations, leads, bookings, handoffs, and errors are collected in a clear report.",
      list: ["Source for every answer", "History of completed actions", "Test mode before publishing"],
      dashboard: ["Weekly overview", "August 1–7", "Messages", "Leads", "Bookings", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    faq: {
      kicker: "FAQ",
      title: ["Short answers", "to key questions"],
      items: [
        ["Can AI make a mistake?", "Lemiri answers from connected sources, shows them in the log, and escalates uncertain questions to a human."],
        ["Do I need to code?", "No. Setup works like a guided employee launch: role, knowledge, channel, and test."],
        ["Can I connect my CRM?", "Yes. Core CRMs can connect directly, and other systems can work through webhooks and automation services."],
        ["What happens when a human is needed?", "The AI employee hands off the conversation using your rules and adds a summary so the manager can continue quickly."],
      ],
    },
    cta: ["Your next employee is ready", "Let customers get", "answers while you run the business", "Create your first AI employee and run a test conversation.", "Start free", "Request demo"],
    footer: ["A ready-to-launch digital employee for your business.", "Documentation", "© 2026 Lemiri AI"],
    mock: ["New lead", "qualified", "Anna K.", "Wants to book a consultation", "Conversations today", "Write a reply...", "Lead", "Calendar", "AI", "Replying now", "Tomorrow has two available slots: 12:30 and 16:00. Which one works better?", "Human handoff", "Customer is ready to discuss details", "Summary prepared"],
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<Lang>("ru");
  const t = copy[lang];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedPhrase, setTypedPhrase] = useState(t.phrases[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    setPhraseIndex(0);
    setTypedPhrase(copy[lang].phrases[0]);
    setIsDeleting(false);
  }, [lang]);

  useEffect(() => {
    const phrases = copy[lang].phrases;
    const phrase = phrases[phraseIndex];
    const complete = typedPhrase === phrase;
    const empty = typedPhrase.length === 0;
    const delay = isDeleting ? 50 : complete ? 1450 : 82;
    const timer = window.setTimeout(() => {
      if (!isDeleting && complete) setIsDeleting(true);
      else if (isDeleting && empty) {
        setIsDeleting(false);
        setPhraseIndex((current) => (current + 1) % phrases.length);
      } else {
        setTypedPhrase(isDeleting ? phrase.slice(0, typedPhrase.length - 1) : phrase.slice(0, typedPhrase.length + 1));
      }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [typedPhrase, isDeleting, phraseIndex, lang]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = document.querySelectorAll(".sectionHead, .splitHead, .feature, .steps article, .roles article, .proofText, .dashboard, .faq > div, .cta, footer, .artifact, .trustInner > *, .buttonRow");
    elements.forEach((element, index) => {
      element.classList.add("scrollReveal");
      (element as HTMLElement).style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("isVisible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px" });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [lang]);

  return (
    <main>
      <header className="nav shell">
        <a className="logo" href="#top" aria-label="Lemiri AI"><img src={logoUrl} alt="Lemiri AI" /></a>
        <nav aria-label={lang === "ru" ? "Основная навигация" : "Main navigation"}>
          <a href="#capabilities">{t.nav[0]}</a><a href="#how">{t.nav[1]}</a><a href="#roles">{t.nav[2]}</a><a href="#faq">{t.nav[3]}</a>
        </nav>
        <div className="navActions">
          <div className="langSwitch animated" aria-label={t.lang}>
            <span className={`langThumb ${lang}`} aria-hidden="true" />
            <button type="button" className={lang === "ru" ? "active" : ""} onClick={() => setLang("ru")}>RU</button>
            <button type="button" className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
          </div>
          <a className="pill ghost navProductButton" href="#how">{t.product}</a>
          <a className="pill dark" href="#cta">{t.try}</a>
        </div>
      </header>

      <section className="hero shell" id="top">
        <div className="eyebrow"><i /> {t.eyebrow}</div>
        <h1>{t.heroStart}<br />{t.heroMid} <em className="typePhrase"><span>{typedPhrase}</span><i aria-hidden="true" /></em><br />{t.heroEnd}</h1>
        <p className="heroCopy">{t.heroText}</p>
        <div className="buttonRow"><a className="pill dark" href="#cta">{t.primary} <b>↗</b></a><a className="pill ghost" href="#how">{t.secondary}</a></div>

        <div className="artifact leadCard"><div className="artifactTop"><span>{t.mock[0]}</span><span className="live">● {t.mock[1]}</span></div><strong>{t.mock[2]}</strong><small>{t.mock[3]}</small><div className="leadMeta"><span>CRM<br /><b>{t.mock[6]}</b></span><span>{t.mock[7]}<br /><b>16:00</b></span></div></div>
        <div className="artifact statCard"><small>{t.mock[4]}</small><strong>128</strong><span>↑ 24%</span><div className="bars"><i/><i/><i/><i/><i/><i/><i/></div></div>
        <div className="artifact chatCard"><div className="avatar">{t.mock[8]}</div><div><b>Lemiri</b><small>{t.mock[9]}</small></div><p>{t.mock[10]}</p><div className="reply">{t.mock[5]} <span>↑</span></div></div>
        <div className="artifact handoffCard"><small>{t.mock[11]}</small><b>{t.mock[12]}</b><span>{t.mock[13]} →</span></div>
      </section>

      <section className="trust"><div className="shell trustInner">{t.trust.map((item, index) => index === 0 ? <span key={item}>{item}</span> : <b key={item}>{item}</b>)}</div></section>

      <section className="section shell" id="capabilities">
        <div className="sectionHead"><span className="kicker">{t.capabilities.kicker}</span><h2>{t.capabilities.title[0]}<br /><em>{t.capabilities.title[1]}</em></h2><p>{t.capabilities.text}</p></div>
        <div className="featureGrid">{t.capabilities.cards.map(([tag, title, text], index) => <article className={`feature ${index === 0 ? "large" : ""} ${index === 2 ? "peach" : ""} ${index === 3 ? "wide" : ""}`} key={title}><span className="tag">{tag}</span><h3>{title}</h3><p>{text}</p>{index === 0 && <div className="miniChat"><span>{t.capabilities.miniChat[0]}</span><p>{t.capabilities.miniChat[1]}</p><span>{t.capabilities.miniChat[2]}</span><p>{t.capabilities.miniChat[3]}</p></div>}{index === 1 && <div className="sourceRows">{t.capabilities.sources.map((source) => <span key={source}>✓ {source}</span>)}</div>}{index === 3 && <div className="actionFlow">{t.capabilities.flow.map((item, flowIndex) => <span key={item}>{item}{flowIndex < t.capabilities.flow.length - 1 ? <b> →</b> : null}</span>)}</div>}</article>)}</div>
      </section>

      <section className="fog" id="how"><div className="section shell"><div className="splitHead"><div><span className="kicker">{t.how.kicker}</span><h2>{t.how.title[0]}<br /><em>{t.how.title[1]}</em></h2></div><p>{t.how.text}</p></div><div className="steps">{t.how.steps.map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="section shell" id="roles"><div className="splitHead"><div><span className="kicker">{t.roles.kicker}</span><h2>{t.roles.title[0]}<br /><em>{t.roles.title[1]}</em></h2></div><p>{t.roles.text}</p></div><div className="roles">{t.roles.items.map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p><a href="#cta">{t.roles.action} →</a></article>)}</div></section>

      <section className="section shell proof"><div className="proofText"><span className="kicker">{t.proof.kicker}</span><h2>{t.proof.title[0]} <em>{t.proof.title[1]}</em></h2><p>{t.proof.text}</p><ul>{t.proof.list.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="dashboard"><div className="dashTop"><b>{t.proof.dashboard[0]}</b><span>{t.proof.dashboard[1]}</span></div><div className="metrics"><span><small>{t.proof.dashboard[2]}</small><b>846</b><i>↑ 18%</i></span><span><small>{t.proof.dashboard[3]}</small><b>127</b><i>↑ 31%</i></span><span><small>{t.proof.dashboard[4]}</small><b>64</b><i>↑ 12%</i></span></div><div className="chart"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div><div className="dashFoot">{t.proof.dashboard.slice(5).map((day) => <span key={day}>{day}</span>)}</div></div></section>

      <section className="section shell faq" id="faq"><div><span className="kicker">{t.faq.kicker}</span><h2>{t.faq.title[0]}<br /><em>{t.faq.title[1]}</em></h2></div><div className="questions">{t.faq.items.map(([question, answer], index) => <div className={`faqItem ${openFaq === index ? "isOpen" : ""}`} key={question}><button className="faqQuestion" type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><i aria-hidden="true" /></button><div className="faqAnswer"><div><p>{answer}</p></div></div></div>)}</div></section>

      <section className="cta shell" id="cta"><span className="kicker">{t.cta[0]}</span><h2>{t.cta[1]}<br /><em>{t.cta[2]}</em></h2><p>{t.cta[3]}</p><div className="buttonRow"><a className="pill dark" href="mailto:hello@lemiri.ai?subject=Lemiri AI">{t.cta[4]} <b>↗</b></a><a className="pill ghost" href="mailto:hello@lemiri.ai?subject=Lemiri AI demo">{t.cta[5]}</a></div></section>

      <footer className="shell"><a className="logo footerLogo" href="#top"><img src={logoUrl} alt="Lemiri AI" /></a><p>{t.footer[0]}</p><div><a href="#capabilities">{t.nav[0]}</a><a href="#how">{t.nav[1]}</a><a href="#faq">{t.nav[3]}</a><a href="/documentation">{t.footer[1]}</a></div><small>{t.footer[2]}</small></footer>
    </main>
  );
}
