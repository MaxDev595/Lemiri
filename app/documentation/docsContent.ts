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
      ru: "Правила использования Lemiri AI, регистрации, подписки, ответственности и прав пользователя.",
      en: "Terms governing the use of Lemiri AI, registration, subscription, liability, and user rights.",
    },
    sections: [
      {
        title: { ru: "Предмет", en: "Subject" },
        body: {
          ru: ["Lemiri AI предоставляет интеллектуального ИИ-сотрудника для работы с клиентскими обращениями. Сервис помогает отвечать на сообщения, использовать базу знаний, работать с CRM и календарем."],
          en: ["Lemiri AI provides an intelligent AI employee for handling customer inquiries. The service helps answer messages, use a knowledge base, and work with CRM and calendar systems."],
        },
      },
      {
        title: { ru: "Регистрация", en: "Registration" },
        body: {
          ru: ["Для использования Lemiri AI пользователь может создать аккаунт и предоставить точные контактные и платёжные данные. Пользователь отвечает за безопасность своих учетных данных."],
          en: ["To use Lemiri AI, the user may create an account and provide accurate contact and billing information. The user is responsible for the security of their credentials."],
        },
      },
      {
        title: { ru: "Использование сервиса", en: "Use of the Service" },
        body: {
          ru: ["Пользователь может использовать сервис только в законных и деловых целях. Пользователь несет ответственность за содержание, документы, инструкции и интеграции, подключенные к сервису."],
          en: ["The user may use the service only for lawful business purposes. The user is responsible for the content, documents, instructions, and integrations connected to the service."],
        },
      },
      {
        title: { ru: "Обязанности пользователя", en: "User obligations" },
        body: {
          ru: ["Пользователь обязуется предоставлять достоверные данные, хранить логин и пароль в безопасности, использовать сервис этично и не нарушать права третьих лиц.", "Пользователь должен контролировать использование системы и работу ИИ, чтобы избежать неправомерных действий."],
          en: ["The user agrees to provide truthful information, keep login and password secure, use the service ethically, and not infringe third-party rights.", "The user must monitor system use and AI behavior to prevent unlawful actions."],
        },
      },
      {
        title: { ru: "Ограничения", en: "Restrictions" },
        body: {
          ru: ["Запрещено использовать сервис для незаконных, вредоносных, вводящих в заблуждение или спам-рассылок действий.", "Нельзя пытаться нарушить систему, обойти защиту или использовать сервис для вредоносных целей."],
          en: ["It is prohibited to use the service for illegal, harmful, deceptive, or spam-related activities.", "Do not attempt to breach the system, bypass protections, or use the service for malicious purposes."],
        },
      },
      {
        title: { ru: "Интеллектуальная собственность", en: "Intellectual Property" },
        body: {
          ru: ["Lemiri AI, программное обеспечение, дизайн, интерфейс и материалы принадлежат {{CompanyName}} или её правообладателям.", "Пользователь сохраняет права на свои собственные данные и загруженный контент."],
          en: ["Lemiri AI, the software, design, interface, and materials are owned by {{CompanyName}} or its licensors.", "The user retains rights to their own data and uploaded content."],
        },
      },
      {
        title: { ru: "Подписка и оплата", en: "Subscription and Payment" },
        body: {
          ru: ["Сервис предоставляется по подписке. Условия, цена и особенности тарифа отображаются при оформлении покупки.", "Платежи могут обрабатываться через {{PaymentProvider}} или другого провайдера, указанного при оплате."],
          en: ["The service is provided by subscription. Terms, price, and plan features are displayed during checkout.", "Payments may be processed through {{PaymentProvider}} or another provider specified at payment."],
        },
      },
      {
        title: { ru: "Ограничение ответственности", en: "Limitation of Liability" },
        body: {
          ru: ["Сервис не гарантирует бесперебойную или безошибочную работу. {{CompanyName}} не несет ответственности за косвенные убытки, упущенную выгоду или решения, принятые на основе ответов ИИ."],
          en: ["The service does not guarantee uninterrupted or error-free operation. {{CompanyName}} is not liable for indirect losses, lost profits, or decisions made based on AI responses."],
        },
      },
      {
        title: { ru: "Приостановка доступа", en: "Account Suspension" },
        body: {
          ru: ["{{CompanyName}} может приостановить или ограничить доступ при нарушении условий, подозрении на мошенничество, угрозе безопасности или отсутствии оплаты."],
          en: ["{{CompanyName}} may suspend or restrict access if terms are violated, fraud is suspected, security is threatened, or payment is overdue."],
        },
      },
      {
        title: { ru: "Изменения условий", en: "Changes to Terms" },
        body: {
          ru: ["{{CompanyName}} может обновлять условия. Важные изменения публикуются на сайте или отправляются через аккаунт или email."],
          en: ["{{CompanyName}} may update the terms. Material changes are published on the website or communicated through the account or email."],
        },
      },
      {
        title: { ru: "Контакты", en: "Contacts" },
        body: {
          ru: ["Компания: {{CompanyName}}", "Юридический адрес: {{LegalAddress}}", "Email: {{Email}}", "Телефон: {{Phone}}", "Сайт: {{Website}}"],
          en: ["Company: {{CompanyName}}", "Legal address: {{LegalAddress}}", "Email: {{Email}}", "Phone: {{Phone}}", "Website: {{Website}}"],
        },
      },
    ],
  },
  {
    slug: "privacy-policy",
    title: { ru: "Политика конфиденциальности", en: "Privacy Policy" },
    summary: {
      ru: "Определяет, какие данные собираются, зачем они нужны, как хранятся и с кем могут быть разделены.",
      en: "Explains what data is collected, why it is needed, how it is stored, and with whom it may be shared.",
    },
    sections: [
      {
        title: { ru: "Собираемые данные", en: "Data We Collect" },
        body: {
          ru: ["Мы можем собирать данные аккаунта: имя, email, телефон, название компании; платёжные данные для обработки подписок; технические данные: IP, браузер, устройство, логи, cookies; загруженные документы, FAQ, контент сайта и материалы базы знаний; сообщения клиентов и данные интеграций."],
          en: ["We may collect account data: name, email, phone, company name; payment data to process subscriptions; technical data: IP, browser, device, logs, cookies; uploaded documents, FAQ, website content and knowledge base materials; customer messages, and integration data."],
        },
      },
      {
        title: { ru: "Зачем собираются данные", en: "Why We Collect Data" },
        body: {
          ru: ["Данные обрабатываются для работы и улучшения Lemiri AI, создания и управления аккаунтом, обработки подписок и платежей, выполнения AI-диалогов и поддержки интеграций, предоставления поддержки, защиты сервиса и соблюдения обязательств."],
          en: ["Data is processed to operate and improve Lemiri AI, create and manage accounts, process subscriptions and payments, perform AI conversations and integrations, provide support, protect the service, and comply with obligations."],
        },
      },
      {
        title: { ru: "AI-обработка", en: "AI Processing" },
        body: {
          ru: ["Lemiri AI может обрабатывать загруженные документы, бизнес-правила и сообщения клиентов для генерации ответов и выполнения настроенных действий. Пользователь отвечает за законность загрузки и обработки таких данных."],
          en: ["Lemiri AI may process uploaded documents, business rules, and customer messages to generate replies and perform configured actions. The user is responsible for the legality of uploading and processing such data."],
        },
      },
      {
        title: { ru: "Cookies", en: "Cookies" },
        body: {
          ru: ["Cookie и схожие технологии могут использоваться для поддержки сессий входа, безопасности, аналитики, настроек и производительности продукта."],
          en: ["Cookies and similar technologies may be used to support login sessions, security, analytics, preferences, and product performance."],
        },
      },
      {
        title: { ru: "Хранение данных", en: "Data Storage" },
        body: {
          ru: ["Данные хранятся столько, сколько необходимо для предоставления сервиса, выполнения юридических или платёжных обязательств, разрешения споров и обеспечения безопасности. Некоторые данные могут сохраняться в резервных копиях на ограниченное время."],
          en: ["Data is stored as long as needed to provide the service, fulfill legal or billing obligations, resolve disputes, and maintain security. Some data may remain in backups for a limited time."],
        },
      },
      {
        title: { ru: "Защита данных", en: "Data Protection" },
        body: {
          ru: ["Мы используем разумные технические и организационные меры для защиты данных от несанкционированного доступа, утраты, злоупотребления или раскрытия. Абсолютной безопасности ни один сервис не гарантирует."],
          en: ["We use reasonable technical and organizational measures to protect data from unauthorized access, loss, misuse, or disclosure. No online service can guarantee absolute security."],
        },
      },
      {
        title: { ru: "Передача третьим лицам", en: "Sharing with Third Parties" },
        body: {
          ru: ["Данные могут передаваться платёжным провайдерам, хостингу, AI-провайдерам, CRM, календарям, мессенджерам и юридическим органам, если это необходимо для работы сервиса или требуется по закону. Мы не продаем персональные данные."],
          en: ["Data may be shared with payment providers, hosting, AI providers, CRM, calendar, messenger services, and legal authorities if needed to operate the service or required by law. We do not sell personal data."],
        },
      },
      {
        title: { ru: "Права пользователя", en: "User Rights" },
        body: {
          ru: ["В зависимости от применимых правил пользователь может запросить доступ, исправление, удаление, ограничение, экспорт или возражение против обработки своих данных."],
          en: ["Depending on applicable rules, the user may request access, correction, deletion, restriction, export, or objection to processing of their data."],
        },
      },
      {
        title: { ru: "Удаление аккаунта", en: "Account Deletion" },
        body: {
          ru: ["Пользователь может запросить удаление аккаунта, написав на {{Email}}. Некоторые данные могут сохраняться там, где это требуется для безопасности, выставления счетов или разрешения споров."],
          en: ["The user may request account deletion by contacting {{Email}}. Some data may be retained where required for security, billing, or dispute resolution."],
        },
      },
      {
        title: { ru: "Контакты", en: "Contacts" },
        body: {
          ru: ["Компания: {{CompanyName}}", "Юридический адрес: {{LegalAddress}}", "Email: {{Email}}", "Телефон: {{Phone}}", "Сайт: {{Website}}"],
          en: ["Company: {{CompanyName}}", "Legal address: {{LegalAddress}}", "Email: {{Email}}", "Phone: {{Phone}}", "Website: {{Website}}"],
        },
      },
    ],
  },
  {
    slug: "personal-data-consent",
    title: { ru: "Согласие на обработку персональных данных", en: "Personal Data Consent" },
    summary: {
      ru: "Краткое согласие пользователя на обработку данных, необходимых для работы Lemiri AI.",
      en: "A short user consent for processing data necessary to operate Lemiri AI.",
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
        title: { ru: "Данные, охваченные согласием", en: "Data Covered by This Consent" },
        body: {
          ru: ["Согласие может включать имя, email, телефон, название компании, данные аккаунта и подписки, сообщения и запросы в Lemiri AI, загруженные документы, контент базы знаний и данные интеграций."],
          en: ["The consent may include name, email, phone number, company name, account and subscription data, messages and requests in Lemiri AI, uploaded documents, knowledge base content, and integration data."],
        },
      },
      {
        title: { ru: "Цель обработки", en: "Purpose of Processing" },
        body: {
          ru: ["Данные обрабатываются для создания и обслуживания аккаунта, предоставления доступа, работы ИИ-коммуникаций, обработки платежей, оказания поддержки, улучшения качества и безопасности."],
          en: ["Data is processed to create and maintain an account, provide access, operate AI communications, process payments, provide support, and improve quality and security."],
        },
      },
      {
        title: { ru: "Методы обработки", en: "Processing Methods" },
        body: {
          ru: ["Обработка может включать сбор, запись, хранение, организацию, использование, передачу подключенным провайдерам и удаление данных, необходимых для работы сервиса."],
          en: ["Processing may include collection, recording, storage, organization, use, transfer to connected providers, and deletion of data needed to operate the service."],
        },
      },
      {
        title: { ru: "Срок действия", en: "Term" },
        body: {
          ru: ["Согласие действует, пока пользователь пользуется Lemiri AI и до тех пор, пока обработка данных необходима для выполнения обязательств."],
          en: ["The consent remains valid while the user uses Lemiri AI and as long as data processing is necessary to fulfill obligations."],
        },
      },
      {
        title: { ru: "Отзыв", en: "Withdrawal" },
        body: {
          ru: ["Пользователь может отозвать согласие, отправив запрос на {{Email}}. Отзыв может привести к ограничению или прекращению доступа к некоторым функциям."],
          en: ["The user may withdraw consent by sending a request to {{Email}}. Withdrawal may result in limited or discontinued access to some features."],
        },
      },
      {
        title: { ru: "Контакты", en: "Contacts" },
        body: {
          ru: ["Компания: {{CompanyName}}", "Юридический адрес: {{LegalAddress}}", "Email: {{Email}}", "Телефон: {{Phone}}", "Сайт: {{Website}}"],
          en: ["Company: {{CompanyName}}", "Legal address: {{LegalAddress}}", "Email: {{Email}}", "Phone: {{Phone}}", "Website: {{Website}}"],
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
