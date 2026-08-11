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
    allDocs: "← Все документы",
    eyebrow: "Документация Lemiri AI",
    title: "Юридические документы",
    subtitle: "Короткие документы для SaaS-платформы. Перед публикацией замените реквизиты компании.",
    open: "Открыть",
    language: "Язык",
    template: "Шаблон для редактирования",
  },
  en: {
    back: "← Back to site",
    allDocs: "← All documents",
    eyebrow: "Lemiri AI Documentation",
    title: "Legal Documents",
    subtitle: "Short documents for the SaaS platform. Replace company details before publication.",
    open: "Open",
    language: "Language",
    template: "Editable template",
  },
} as const;

export const docs: DocPage[] = [
  {
    slug: "terms-of-service",
    title: { ru: "Пользовательское соглашение", en: "Terms of Service" },
    summary: {
      ru: "Правила регистрации, использования сервиса, подписки, ограничений и ответственности.",
      en: "Rules for registration, service use, subscriptions, restrictions, and liability.",
    },
    sections: [
      {
        title: { ru: "Предмет", en: "Subject" },
        body: {
          ru: ["{{CompanyName}} предоставляет доступ к Lemiri AI, SaaS-платформе для автоматизации общения с клиентами. Пользователь получает право использовать сервис в рамках выбранного тарифа."],
          en: ["{{CompanyName}} provides access to Lemiri AI, a SaaS platform for customer communication automation. The user may use the service within the selected plan."],
        },
      },
      {
        title: { ru: "Регистрация и использование", en: "Registration and Use" },
        body: {
          ru: ["Пользователь указывает корректные данные, отвечает за безопасность аккаунта и использует сервис только законным способом.", "Запрещены спам, вредоносные материалы, нарушение прав третьих лиц и попытки обхода ограничений."],
          en: ["The user provides accurate information, keeps account access secure, and uses the service lawfully.", "Spam, harmful materials, infringement of third-party rights, and attempts to bypass limits are prohibited."],
        },
      },
      {
        title: { ru: "Данные и результаты ИИ", en: "Data and AI Outputs" },
        body: {
          ru: ["Пользователь отвечает за загруженные документы, инструкции и данные клиентов. Результаты ИИ нужно проверять перед использованием в критичных бизнес-процессах."],
          en: ["The user is responsible for uploaded documents, instructions, and customer data. AI outputs should be reviewed before use in critical business processes."],
        },
      },
      {
        title: { ru: "Подписка и блокировка", en: "Subscription and Suspension" },
        body: {
          ru: ["Доступ предоставляется по подписке. При нарушении условий, неоплате или угрозе безопасности {{CompanyName}} может ограничить или заблокировать аккаунт."],
          en: ["Access is subscription-based. If terms are violated, payment is missing, or security is at risk, {{CompanyName}} may restrict or suspend the account."],
        },
      },
      {
        title: { ru: "Собственность и контакты", en: "Ownership and Contacts" },
        body: {
          ru: ["Права на интерфейс, код, дизайн и материалы сервиса принадлежат {{CompanyName}} или правообладателям. Данные пользователя остаются данными пользователя.", "Контакты: {{Email}}, {{Phone}}, {{Website}}."],
          en: ["Rights to the interface, code, design, and service materials belong to {{CompanyName}} or the respective rights holders. User data remains the user's data.", "Contacts: {{Email}}, {{Phone}}, {{Website}}."],
        },
      },
    ],
  },
  {
    slug: "privacy-policy",
    title: { ru: "Политика конфиденциальности", en: "Privacy Policy" },
    summary: {
      ru: "Какие данные собираются, зачем они нужны, как хранятся и как пользователь может ими управлять.",
      en: "What data is collected, why it is needed, how it is stored, and how users can manage it.",
    },
    sections: [
      {
        title: { ru: "Какие данные собираются", en: "Data Collected" },
        body: {
          ru: ["Lemiri AI может обрабатывать данные аккаунта, контакты, платежную информацию через {{PaymentProvider}}, настройки, сообщения клиентов, загруженные документы, базу знаний, историю действий и технические данные."],
          en: ["Lemiri AI may process account data, contact details, payment information through {{PaymentProvider}}, settings, customer messages, uploaded documents, knowledge-base content, activity history, and technical data."],
        },
      },
      {
        title: { ru: "Зачем это нужно", en: "Purposes" },
        body: {
          ru: ["Данные используются для работы сервиса, ответов ИИ, интеграций, поддержки, оплаты, безопасности, улучшения качества и исполнения договорных обязательств."],
          en: ["Data is used to operate the service, power AI replies, support integrations, provide support, process payments, maintain security, improve quality, and fulfill contractual obligations."],
        },
      },
      {
        title: { ru: "Cookie и хранение", en: "Cookies and Storage" },
        body: {
          ru: ["Cookie могут использоваться для входа, аналитики и сохранения настроек. Срок хранения зависит от цели обработки и требований к работе сервиса."],
          en: ["Cookies may be used for login, analytics, and preferences. Storage duration depends on the processing purpose and service operation requirements."],
        },
      },
      {
        title: { ru: "Передача третьим лицам", en: "Third Parties" },
        body: {
          ru: ["Данные могут передаваться провайдерам хостинга, платежей, связи, аналитики, CRM и ИИ-инфраструктуры только в объеме, необходимом для работы Lemiri AI."],
          en: ["Data may be shared with hosting, payment, communication, analytics, CRM, and AI infrastructure providers only as needed to operate Lemiri AI."],
        },
      },
      {
        title: { ru: "Права пользователя", en: "User Rights" },
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
          ru: ["Пользователь дает {{CompanyName}} согласие на обработку персональных данных, указанных при регистрации, оплате, обращении в поддержку и использовании Lemiri AI."],
          en: ["The user gives {{CompanyName}} consent to process personal data provided during registration, payment, support requests, and use of Lemiri AI."],
        },
      },
      {
        title: { ru: "Какие данные", en: "Covered Data" },
        body: {
          ru: ["Согласие может включать имя, email, телефон, название компании, данные аккаунта, подписки, сообщения, загруженные документы и данные интеграций."],
          en: ["The consent may include name, email, phone, company name, account data, subscription data, messages, uploaded documents, and integration data."],
        },
      },
      {
        title: { ru: "Цель обработки", en: "Purpose" },
        body: {
          ru: ["Цели: создание аккаунта, предоставление доступа, обработка платежей, поддержка, безопасность, уведомления и работа подключенных функций сервиса."],
          en: ["Purposes: account creation, access provision, payment processing, support, security, notifications, and operation of connected service features."],
        },
      },
      {
        title: { ru: "Срок и отзыв", en: "Term and Withdrawal" },
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
        title: { ru: "Подписка и оплата", en: "Subscription and Payment" },
        body: {
          ru: ["Подписка оформляется через интерфейс сервиса. Стоимость зависит от выбранного тарифа и отображается до оплаты. Платежи обрабатываются через {{PaymentProvider}}."],
          en: ["The subscription is ordered through the service interface. Pricing depends on the selected plan and is shown before payment. Payments are processed through {{PaymentProvider}}."],
        },
      },
      {
        title: { ru: "Продление и прекращение", en: "Renewal and Termination" },
        body: {
          ru: ["Если включено автоматическое продление, подписка продлевается на следующий период до отмены. Пользователь может отменить подписку в аккаунте или через поддержку."],
          en: ["If automatic renewal is enabled, the subscription renews for the next period until cancelled. The user may cancel in the account or by contacting support."],
        },
      },
      {
        title: { ru: "Ответственность и споры", en: "Liability and Disputes" },
        body: {
          ru: ["Стороны отвечают за нарушение условий в пределах фактически оплаченной стоимости услуг за текущий период, если иное не требуется применимыми правилами. Споры сначала решаются переговорами через {{Email}}."],
          en: ["The parties are liable for breaches within the amount actually paid for the current service period, unless applicable rules require otherwise. Disputes should first be handled through negotiation via {{Email}}."],
        },
      },
      {
        title: { ru: "Возвраты", en: "Refunds" },
        body: {
          ru: ["Возвраты регулируются политикой возврата Lemiri AI на странице «Политика возврата средств»."],
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
        title: { ru: "Когда возможен возврат", en: "When Refunds Are Possible" },
        body: {
          ru: ["Возврат может быть рассмотрен, если пользователь ошибочно оплатил тариф, не получил доступ по технической причине или обратился вскоре после оплаты без существенного использования функций."],
          en: ["A refund may be considered if the user paid for a plan by mistake, did not receive access due to a technical issue, or contacted support shortly after payment without substantial feature use."],
        },
      },
      {
        title: { ru: "Когда возврат невозможен", en: "When Refunds Are Not Available" },
        body: {
          ru: ["Возврат обычно невозможен, если оплаченный период был существенно использован, лимиты тарифа израсходованы, аккаунт заблокирован за нарушение условий или запрос подан слишком поздно."],
          en: ["Refunds are generally unavailable if the paid period was substantially used, plan limits were consumed, the account was suspended for violations, or the request was submitted too late."],
        },
      },
      {
        title: { ru: "Сроки и способ возврата", en: "Timing and Method" },
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
