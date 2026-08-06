export type DocsLang = "ru" | "en";

export type DocPage = {
  slug: string;
  title: Record<DocsLang, string>;
  summary: Record<DocsLang, string>;
  sections: Array<{
    title: Record<DocsLang, string>;
    body: Record<DocsLang, string[]>;
  }>;
};

export const docsUi = {
  ru: {
    back: "← На сайт",
    eyebrow: "Документация Lemiri AI",
    title: "Документы проекта",
    subtitle: "Краткие рабочие документы для SaaS-платформы. Их можно использовать после подстановки реквизитов компании.",
    open: "Открыть",
    language: "Язык",
    updated: "Шаблон для редактирования",
  },
  en: {
    back: "← Back to site",
    eyebrow: "Lemiri AI documentation",
    title: "Project documents",
    subtitle: "Compact working documents for the SaaS platform. Replace company placeholders before publication.",
    open: "Open",
    language: "Language",
    updated: "Editable template",
  },
} as const;

export const docs: DocPage[] = [
  {
    slug: "project-documentation",
    title: { ru: "Документация проекта", en: "Project Documentation" },
    summary: {
      ru: "Описание продукта, аудитории, функций, архитектуры, интеграций, безопасности и развития Lemiri AI.",
      en: "Product overview, audience, features, architecture, integrations, security, and roadmap for Lemiri AI.",
    },
    sections: [
      {
        title: { ru: "Описание проекта", en: "Project overview" },
        body: {
          ru: ["Lemiri AI — SaaS-платформа с подпиской. Сервис помогает бизнесу запускать интеллектуального ИИ-сотрудника, который отвечает клиентам, использует базу знаний компании, работает с CRM, календарём и подключёнными каналами связи."],
          en: ["Lemiri AI is a subscription SaaS platform. It helps businesses launch an intelligent AI employee that replies to customers, uses company knowledge, works with CRM, calendar, and connected communication channels."],
        },
      },
      {
        title: { ru: "Цель и аудитория", en: "Goal and audience" },
        body: {
          ru: ["Цель — сократить пропущенные обращения, ускорить ответы и превратить диалоги в заявки, записи или задачи для команды.", "Основная аудитория: малый и средний бизнес, сервисные компании, клиники, онлайн-школы, агентства, e-commerce и отделы продаж."],
          en: ["The goal is to reduce missed requests, speed up replies, and turn conversations into leads, bookings, or tasks for the team.", "Core audience: SMBs, service companies, clinics, online schools, agencies, e-commerce, and sales teams."],
        },
      },
      {
        title: { ru: "Основные функции", en: "Core functions" },
        body: {
          ru: ["Ответы в чате и мессенджерах, работа по базе знаний, квалификация лидов, запись в календарь, передача менеджеру, история диалогов, тестовый режим и отчёты по результатам."],
          en: ["Chat and messenger replies, knowledge-base grounding, lead qualification, calendar booking, human handoff, conversation history, test mode, and result reports."],
        },
      },
      {
        title: { ru: "Архитектура и интеграции", en: "Architecture and integrations" },
        body: {
          ru: ["Клиентская часть предоставляет интерфейс настройки и контроля. Серверная часть обрабатывает сценарии, доступы, сообщения, интеграции и журнал событий. Интеграции подключают сайт, WhatsApp, Telegram, CRM, календарь и внешние сервисы через API или вебхуки."],
          en: ["The client app provides setup and control interfaces. The server side handles workflows, permissions, messages, integrations, and event logs. Integrations connect the website, WhatsApp, Telegram, CRM, calendar, and external systems through APIs or webhooks."],
        },
      },
      {
        title: { ru: "Безопасность и бизнес-модель", en: "Security and business model" },
        body: {
          ru: ["Доступы должны быть разграничены по ролям. Данные хранятся только для работы сервиса, а критичные действия логируются. Модель монетизации — подписка с тарифами по объёму диалогов, количеству сотрудников и подключённым интеграциям."],
          en: ["Access should be role-based. Data is stored only to operate the service, and critical actions are logged. Monetization is subscription-based, with plans depending on conversation volume, number of AI employees, and enabled integrations."],
        },
      },
      {
        title: { ru: "Этапы развития", en: "Roadmap" },
        body: {
          ru: ["MVP: чат-виджет, база знаний, базовая CRM-логика, календарь, передача менеджеру и отчёты.", "Дальше: расширенные роли, больше интеграций, аналитика качества, шаблоны сценариев и командная работа."],
          en: ["MVP: chat widget, knowledge base, basic CRM logic, calendar, human handoff, and reports.", "Next: advanced roles, more integrations, quality analytics, workflow templates, and team collaboration."],
        },
      },
    ],
  },
  {
    slug: "terms-of-service",
    title: { ru: "Пользовательское соглашение", en: "Terms of Service" },
    summary: {
      ru: "Правила регистрации, использования сервиса, подписки, ограничений и ответственности.",
      en: "Rules for registration, service use, subscriptions, restrictions, and liability.",
    },
    sections: [
      {
        title: { ru: "Предмет соглашения", en: "Subject" },
        body: {
          ru: ["{{CompanyName}} предоставляет доступ к Lemiri AI — SaaS-платформе для автоматизации общения с клиентами. Пользователь получает право использовать сервис в рамках выбранного тарифа."],
          en: ["{{CompanyName}} provides access to Lemiri AI, a SaaS platform for customer communication automation. The user may use the service within the selected plan."],
        },
      },
      {
        title: { ru: "Регистрация и использование", en: "Registration and use" },
        body: {
          ru: ["Пользователь указывает корректные данные, отвечает за сохранность аккаунта и использует сервис только законным способом.", "Запрещено загружать вредоносные материалы, нарушать права третьих лиц, пытаться обходить ограничения или использовать сервис для спама."],
          en: ["The user provides accurate information, keeps account access secure, and uses the service lawfully.", "Uploading harmful materials, infringing third-party rights, bypassing limits, or using the service for spam is prohibited."],
        },
      },
      {
        title: { ru: "Интеллектуальная собственность", en: "Intellectual property" },
        body: {
          ru: ["Права на Lemiri AI, интерфейс, код, дизайн и материалы сервиса принадлежат {{CompanyName}} или правообладателям. Данные, загруженные пользователем, остаются данными пользователя."],
          en: ["Rights to Lemiri AI, its interface, code, design, and service materials belong to {{CompanyName}} or the respective rights holders. User-uploaded data remains the user’s data."],
        },
      },
      {
        title: { ru: "Подписка и блокировка", en: "Subscription and suspension" },
        body: {
          ru: ["Доступ предоставляется по подписке. При нарушении условий, неоплате или угрозе безопасности {{CompanyName}} может ограничить или заблокировать аккаунт."],
          en: ["Access is provided by subscription. If terms are violated, payment is missing, or security is at risk, {{CompanyName}} may restrict or suspend the account."],
        },
      },
      {
        title: { ru: "Ответственность и контакты", en: "Liability and contacts" },
        body: {
          ru: ["Сервис предоставляется без гарантии бесперебойной работы. Пользователь отвечает за проверку результатов ИИ перед использованием в критичных процессах.", "Контакты: {{Email}}, {{Phone}}, {{Website}}."],
          en: ["The service is provided without a guarantee of uninterrupted operation. The user is responsible for checking AI outputs before using them in critical processes.", "Contacts: {{Email}}, {{Phone}}, {{Website}}."],
        },
      },
    ],
  },
  {
    slug: "privacy-policy",
    title: { ru: "Политика конфиденциальности", en: "Privacy Policy" },
    summary: {
      ru: "Какие данные собирает Lemiri AI, зачем они нужны, как хранятся и как пользователь может ими управлять.",
      en: "What data Lemiri AI collects, why it is needed, how it is stored, and how users can manage it.",
    },
    sections: [
      {
        title: { ru: "Какие данные собираются", en: "Data collected" },
        body: {
          ru: ["Мы можем обрабатывать данные аккаунта, контактные данные, платёжную информацию через {{PaymentProvider}}, настройки, сообщения клиентов, загруженные документы, базу знаний, историю действий и технические данные."],
          en: ["We may process account data, contact details, payment information through {{PaymentProvider}}, settings, customer messages, uploaded documents, knowledge-base content, activity history, and technical data."],
        },
      },
      {
        title: { ru: "Цели обработки", en: "Purposes" },
        body: {
          ru: ["Данные используются для работы сервиса, ответов ИИ, интеграций, поддержки, оплаты, безопасности, улучшения качества и исполнения договорных обязательств."],
          en: ["Data is used to operate the service, power AI replies, support integrations, provide support, process payments, maintain security, improve quality, and fulfill contractual obligations."],
        },
      },
      {
        title: { ru: "Cookie и хранение", en: "Cookies and storage" },
        body: {
          ru: ["Cookie и похожие технологии могут использоваться для входа, аналитики и сохранения настроек. Срок хранения зависит от цели обработки и требований к работе сервиса."],
          en: ["Cookies and similar technologies may be used for login, analytics, and preferences. Storage duration depends on the processing purpose and service operation requirements."],
        },
      },
      {
        title: { ru: "Передача третьим лицам", en: "Third parties" },
        body: {
          ru: ["Данные могут передаваться провайдерам хостинга, платежей, связи, аналитики, CRM и ИИ-инфраструктуры только в объёме, необходимом для работы Lemiri AI."],
          en: ["Data may be shared with hosting, payment, communication, analytics, CRM, and AI infrastructure providers only as needed to operate Lemiri AI."],
        },
      },
      {
        title: { ru: "Права пользователя", en: "User rights" },
        body: {
          ru: ["Пользователь может запросить доступ, исправление, экспорт или удаление данных, а также удаление аккаунта. Запросы направляются на {{Email}}."],
          en: ["The user may request access, correction, export, deletion of data, or account deletion. Requests should be sent to {{Email}}."],
        },
      },
    ],
  },
  {
    slug: "personal-data-consent",
    title: { ru: "Согласие на обработку персональных данных", en: "Personal Data Consent" },
    summary: {
      ru: "Краткое согласие пользователя на обработку данных для работы Lemiri AI.",
      en: "A short user consent for data processing required to operate Lemiri AI.",
    },
    sections: [
      {
        title: { ru: "Согласие", en: "Consent" },
        body: {
          ru: ["Пользователь даёт {{CompanyName}} согласие на обработку персональных данных, указанных при регистрации, оплате, обращении в поддержку и использовании Lemiri AI."],
          en: ["The user gives {{CompanyName}} consent to process personal data provided during registration, payment, support requests, and use of Lemiri AI."],
        },
      },
      {
        title: { ru: "Цель обработки", en: "Purpose" },
        body: {
          ru: ["Цели: создание аккаунта, предоставление доступа, обработка платежей, поддержка, безопасность, уведомления и работа подключённых функций сервиса."],
          en: ["Purposes: account creation, access provision, payment processing, support, security, notifications, and operation of connected service features."],
        },
      },
      {
        title: { ru: "Срок и отзыв", en: "Term and withdrawal" },
        body: {
          ru: ["Согласие действует до его отзыва или до прекращения необходимости обработки. Отозвать согласие можно письмом на {{Email}}. Отзыв может ограничить доступ к сервису."],
          en: ["Consent remains valid until withdrawn or until processing is no longer needed. It can be withdrawn by contacting {{Email}}. Withdrawal may limit access to the service."],
        },
      },
    ],
  },
  {
    slug: "public-offer",
    title: { ru: "Публичная оферта", en: "Public Offer" },
    summary: {
      ru: "Условия покупки подписки, оплаты, продления, прекращения и возврата средств.",
      en: "Terms for subscription purchase, payment, renewal, termination, and refunds.",
    },
    sections: [
      {
        title: { ru: "Предмет договора", en: "Subject" },
        body: {
          ru: ["{{CompanyName}} предлагает пользователю платный доступ к Lemiri AI. Акцептом оферты считается регистрация, оплата или фактическое использование платных функций."],
          en: ["{{CompanyName}} offers paid access to Lemiri AI. Registration, payment, or actual use of paid features constitutes acceptance of the offer."],
        },
      },
      {
        title: { ru: "Подписка и оплата", en: "Subscription and payment" },
        body: {
          ru: ["Подписка оформляется через интерфейс сервиса. Стоимость зависит от выбранного тарифа и отображается до оплаты. Платежи обрабатываются через {{PaymentProvider}}."],
          en: ["The subscription is ordered through the service interface. Pricing depends on the selected plan and is shown before payment. Payments are processed through {{PaymentProvider}}."],
        },
      },
      {
        title: { ru: "Продление и прекращение", en: "Renewal and termination" },
        body: {
          ru: ["Если включено автоматическое продление, подписка продлевается на следующий период до отмены. Пользователь может прекратить подписку в аккаунте или через обращение в поддержку."],
          en: ["If automatic renewal is enabled, the subscription renews for the next period until cancelled. The user may cancel in the account or by contacting support."],
        },
      },
      {
        title: { ru: "Ответственность и споры", en: "Liability and disputes" },
        body: {
          ru: ["Стороны отвечают за нарушение условий в пределах фактически оплаченной стоимости услуг за текущий период, если иное не требуется применимыми правилами. Споры сначала решаются переговорами через {{Email}}."],
          en: ["The parties are liable for breaches within the amount actually paid for the current service period, unless applicable rules require otherwise. Disputes should first be handled through negotiation via {{Email}}."],
        },
      },
      {
        title: { ru: "Возвраты", en: "Refunds" },
        body: {
          ru: ["Возврат средств регулируется политикой возврата Lemiri AI на странице документации «Политика возврата средств»."],
          en: ["Refunds are governed by the Lemiri AI Refund Policy available on the documentation page."],
        },
      },
    ],
  },
  {
    slug: "refund-policy",
    title: { ru: "Политика возврата средств", en: "Refund Policy" },
    summary: {
      ru: "Когда возможен возврат, сроки заявки, рассмотрения и способ возврата.",
      en: "When refunds are available, request deadlines, review time, and refund method.",
    },
    sections: [
      {
        title: { ru: "Когда возможен возврат", en: "When refunds are possible" },
        body: {
          ru: ["Возврат может быть рассмотрен, если пользователь ошибочно оплатил тариф, не получил доступ к сервису по технической причине или обратился вскоре после оплаты без существенного использования функций."],
          en: ["A refund may be considered if the user paid for a plan by mistake, did not receive access due to a technical issue, or contacted support shortly after payment without substantial feature use."],
        },
      },
      {
        title: { ru: "Когда возврат невозможен", en: "When refunds are not available" },
        body: {
          ru: ["Возврат обычно невозможен, если оплаченный период был существенно использован, лимиты тарифа израсходованы, нарушение условий привело к блокировке или запрос подан слишком поздно."],
          en: ["Refunds are generally unavailable if the paid period was substantially used, plan limits were consumed, the account was suspended for violations, or the request was submitted too late."],
        },
      },
      {
        title: { ru: "Сроки и способ возврата", en: "Timing and method" },
        body: {
          ru: ["Заявку рекомендуется подать в течение 14 дней после оплаты на {{Email}}. Рассмотрение обычно занимает до 10 рабочих дней. Возврат производится тем же способом, которым была совершена оплата, если это технически возможно."],
          en: ["Requests should preferably be submitted within 14 days after payment to {{Email}}. Review usually takes up to 10 business days. Refunds are made using the original payment method where technically possible."],
        },
      },
      {
        title: { ru: "Контакты", en: "Contacts" },
        body: {
          ru: ["Для вопросов по возвратам: {{Email}}, {{Phone}}, {{Website}}."],
          en: ["For refund questions: {{Email}}, {{Phone}}, {{Website}}."],
        },
      },
    ],
  },
];

export function getDoc(slug: string) {
  return docs.find((doc) => doc.slug === slug);
}
