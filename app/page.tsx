"use client";

import { useEffect, useState } from "react";
import logoUrl from "./lemiri-logo.png?url";

type Lang = "ru" | "en";

const pricing = {
  ru: {
    kicker: "Прайс",
    title: ["Выберите тариф", "под ваш объём"],
    text: "Начните с теста, а когда ИИ-сотрудник покажет результат — перейдите на подходящий тариф.",
    plans: [
      ["Free", "$0/14 дней", "Один раз, затем только по подписке.", "Тест ИИ-сотрудника, чат на сайте, ограниченный объём сообщений."],
      ["Starter", "$19/мес", "Для первого запуска.", "1 ИИ-сотрудник, сайт + Telegram, база знаний, лиды и базовая аналитика."],
      ["Pro", "$49/мес", "Для активных продаж и записи.", "WhatsApp, Telegram, сайт, CRM, календарь, автоматические действия, больше лимитов."],
      ["Business", "$99/мес", "Для команды и нескольких процессов.", "Несколько ИИ-сотрудников, повышенные лимиты, расширенная аналитика, интеграции и приоритетная поддержка."],
      ["Enterprise", "Индивидуально", "Для больших объёмов.", "Кастомные интеграции, SLA и отдельные условия."],
    ],
  },
  en: {
    kicker: "Pricing",
    title: ["Choose a plan", "for your scale"],
    text: "Start with a trial, then move to the plan that matches your AI employee workload.",
    plans: [
      ["Free", "$0/14 days", "One time, then subscription only.", "Test the AI employee, website chat, limited message volume."],
      ["Starter", "$19/mo", "For the first launch.", "1 AI employee, website + Telegram, knowledge base, leads, and basic analytics."],
      ["Pro", "$49/mo", "For active sales and bookings.", "WhatsApp, Telegram, website, CRM, calendar, automated actions, and higher limits."],
      ["Business", "$99/mo", "For teams and multiple workflows.", "Several AI employees, higher limits, advanced analytics, integrations, and priority support."],
      ["Enterprise", "Custom", "For high-volume usage.", "Custom integrations, SLA, and individual terms."],
    ],
  },
} as const;

const copy = {
  ru: {
    nav: ["Р’РѕР·РјРѕР¶РЅРѕСЃС‚Рё", "РљР°Рє СЂР°Р±РѕС‚Р°РµС‚", "Р РѕР»Рё", "Р’РѕРїСЂРѕСЃС‹"],
    product: "РџРѕСЃРјРѕС‚СЂРµС‚СЊ РїСЂРѕРґСѓРєС‚",
    try: "РџРѕРїСЂРѕР±РѕРІР°С‚СЊ",
    lang: "РџРµСЂРµРєР»СЋС‡РёС‚СЊ СЏР·С‹Рє",
    eyebrow: "РР-СЃРѕС‚СЂСѓРґРЅРёРє СѓР¶Рµ РЅР° СЃРІСЏР·Рё",
    heroStart: "РќР°Р№РјРёС‚Рµ СЃРѕС‚СЂСѓРґРЅРёРєР°,",
    heroMid: "РєРѕС‚РѕСЂС‹Р№",
    heroEnd: "РЅРё РѕРґРЅРѕРіРѕ РєР»РёРµРЅС‚Р°",
    phrases: ["РЅРµ РїСЂРѕРїСѓСЃРєР°РµС‚", "РЅРµ СѓРїСѓСЃРєР°РµС‚", "РЅРµ Р·Р°Р±С‹РІР°РµС‚"],
    heroText: "Lemiri AI РѕС‚РІРµС‡Р°РµС‚ РєР»РёРµРЅС‚Р°Рј, СЃРѕР±РёСЂР°РµС‚ Р·Р°СЏРІРєРё, Р·Р°РїРёСЃС‹РІР°РµС‚ РЅР° СѓСЃР»СѓРіРё Рё РїРµСЂРµРґР°РµС‚ СЃР»РѕР¶РЅС‹Рµ РґРёР°Р»РѕРіРё РјРµРЅРµРґР¶РµСЂСѓ РїРѕ РїСЂР°РІРёР»Р°Рј РІР°С€РµРіРѕ Р±РёР·РЅРµСЃР°.",
    primary: "РЎРѕР·РґР°С‚СЊ РР-СЃРѕС‚СЂСѓРґРЅРёРєР°",
    secondary: "РљР°Рє СЌС‚Рѕ СЂР°Р±РѕС‚Р°РµС‚",
    trust: ["Р Р°Р±РѕС‚Р°РµС‚ С‚Р°Рј, РіРґРµ РїРёС€СѓС‚ РєР»РёРµРЅС‚С‹", "РЎР°Р№С‚", "WhatsApp", "Telegram", "РљР°Р»РµРЅРґР°СЂСЊ", "CRM"],
    capabilities: {
      kicker: "РћРґРёРЅ СЃРѕС‚СЂСѓРґРЅРёРє. Р’РµСЃСЊ РїСѓС‚СЊ РєР»РёРµРЅС‚Р°.",
      title: ["РќРµ РїСЂРѕСЃС‚Рѕ РѕС‚РІРµС‡Р°РµС‚.", "Р”РѕРІРѕРґРёС‚ РґРѕ СЂРµР·СѓР»СЊС‚Р°С‚Р°."],
      text: "РР РёСЃРїРѕР»СЊР·СѓРµС‚ Р±Р°Р·Сѓ Р·РЅР°РЅРёР№ РєРѕРјРїР°РЅРёРё, РїРѕРјРЅРёС‚ РєРѕРЅС‚РµРєСЃС‚ РґРёР°Р»РѕРіР° Рё РїРѕРЅРёРјР°РµС‚, РєРѕРіРґР° РЅСѓР¶РЅРѕ РїРµСЂРµРґР°С‚СЊ СЂР°Р·РіРѕРІРѕСЂ С‡РµР»РѕРІРµРєСѓ.",
      cards: [
        ["РћР±С‰РµРЅРёРµ", "РћС‚РІРµС‡Р°РµС‚ СЃСЂР°Р·Сѓ Рё РїРѕ РґРµР»Сѓ", "Р’РµРґРµС‚ РµСЃС‚РµСЃС‚РІРµРЅРЅС‹Р№ РґРёР°Р»РѕРі РІ С‡Р°С‚Рµ Рё РјРµСЃСЃРµРЅРґР¶РµСЂР°С…, СЃРѕС…СЂР°РЅСЏСЏ С‚РѕРЅ Р±СЂРµРЅРґР°."],
        ["Р—РЅР°РЅРёСЏ", "РќРµ РІС‹РґСѓРјС‹РІР°РµС‚ С„Р°РєС‚С‹", "РћС‚РІРµС‡Р°РµС‚ РїРѕ СЃР°Р№С‚Сѓ, РґРѕРєСѓРјРµРЅС‚Р°Рј, FAQ Рё РїСЂР°РІРёР»Р°Рј РєРѕРјРїР°РЅРёРё."],
        ["РљРѕРЅС‚СЂРѕР»СЊ", "РџРµСЂРµРґР°РµС‚ С‡РµР»РѕРІРµРєСѓ РІРѕРІСЂРµРјСЏ", "РћРїСЂРµРґРµР»СЏРµС‚ СЃР»РѕР¶РЅС‹Рµ РІРѕРїСЂРѕСЃС‹ Рё РїСЂРёРєР»Р°РґС‹РІР°РµС‚ РєСЂР°С‚РєРѕРµ СЂРµР·СЋРјРµ РґРёР°Р»РѕРіР°."],
        ["Р”РµР№СЃС‚РІРёСЏ", "Р”РµР»Р°РµС‚ СЃР»РµРґСѓСЋС‰РёР№ С€Р°Рі", "РЎРѕР·РґР°РµС‚ Р·Р°СЏРІРєСѓ, РїРѕРєР°Р·С‹РІР°РµС‚ СЃРІРѕР±РѕРґРЅС‹Рµ РѕРєРЅР°, РјРµРЅСЏРµС‚ СЃС‚Р°С‚СѓСЃ Рё СѓРІРµРґРѕРјР»СЏРµС‚ РєРѕРјР°РЅРґСѓ."],
      ],
      miniChat: ["РљР»РёРµРЅС‚", "РџРѕРґСЃРєР°Р¶РёС‚Рµ, РµСЃС‚СЊ РґРѕСЃС‚Р°РІРєР° СЃРµРіРѕРґРЅСЏ?", "Lemiri В· РёСЃС‚РѕС‡РЅРёРє: FAQ", "Р”Р°, Р·Р°РєР°Р·С‹ РґРѕ 17:00 РґРѕСЃС‚Р°РІРёРј СЃРµРіРѕРґРЅСЏ."],
      sources: ["РЎР°Р№С‚", "РЈСЃР»СѓРіРё Рё С†РµРЅС‹.pdf", "FAQ"],
      flow: ["Р”РёР°Р»РѕРі Р·Р°РІРµСЂС€РµРЅ", "Р›РёРґ СЃРѕР·РґР°РЅ", "РљРѕРјР°РЅРґР° СѓРІРµРґРѕРјР»РµРЅР°"],
    },
    how: {
      kicker: "Р—Р°РїСѓСЃРє Р±РµР· С‚РµС…РЅРёС‡РµСЃРєРёС… Р·РЅР°РЅРёР№",
      title: ["РћС‚ РёРґРµРё РґРѕ РїРµСЂРІРѕРіРѕ", "РґРёР°Р»РѕРіР° Р·Р° 15 РјРёРЅСѓС‚"],
      text: "Р’С‹ РІС‹Р±РёСЂР°РµС‚Рµ СЂРѕР»СЊ, РґРѕР±Р°РІР»СЏРµС‚Рµ Р·РЅР°РЅРёСЏ, РїРѕРґРєР»СЋС‡Р°РµС‚Рµ РєР°РЅР°Р» СЃРІСЏР·Рё Рё РїСЂРѕРІРµСЂСЏРµС‚Рµ РѕС‚РІРµС‚С‹ РІ С‚РµСЃС‚РѕРІРѕРј СЂРµР¶РёРјРµ.",
      steps: [
        ["01", "Р’С‹Р±РµСЂРёС‚Рµ СЂРѕР»СЊ", "РђРґРјРёРЅРёСЃС‚СЂР°С‚РѕСЂ, РїСЂРѕРґР°Р¶Рё РёР»Рё РїРѕРґРґРµСЂР¶РєР°. Lemiri РїСЂРµРґР»РѕР¶РёС‚ СЃС†РµРЅР°СЂРёРё РїРѕРґ Р·Р°РґР°С‡Сѓ."],
        ["02", "Р”РѕР±Р°РІСЊС‚Рµ Р·РЅР°РЅРёСЏ", "РџРѕРґРєР»СЋС‡РёС‚Рµ СЃР°Р№С‚, РґРѕРєСѓРјРµРЅС‚С‹ Рё FAQ, С‡С‚РѕР±С‹ РѕС‚РІРµС‚С‹ Р±С‹Р»Рё РїСЂРёРІСЏР·Р°РЅС‹ Рє РёСЃС‚РѕС‡РЅРёРєР°Рј."],
        ["03", "РџРѕРґРєР»СЋС‡РёС‚Рµ РєР°РЅР°Р»", "РЎР°Р№С‚, WhatsApp, Telegram, CRM РёР»Рё РєР°Р»РµРЅРґР°СЂСЊ СЃРѕР±РёСЂР°СЋС‚СЃСЏ РІ РѕРґРёРЅ РїСЂРѕС†РµСЃСЃ."],
        ["04", "РџСЂРѕРІРµСЂСЊС‚Рµ Рё Р·Р°РїСѓСЃС‚РёС‚Рµ", "РџСЂРѕС‚РµСЃС‚РёСЂСѓР№С‚Рµ РґРёР°Р»РѕРіРё Рё РІРєР»СЋС‡РёС‚Рµ РР-СЃРѕС‚СЂСѓРґРЅРёРєР° РґР»СЏ РєР»РёРµРЅС‚РѕРІ."],
      ],
    },
    roles: {
      kicker: "РџРѕРЅСЏС‚РЅС‹Рµ СЂРѕР»Рё",
      title: ["РќР°С‡РЅРёС‚Рµ СЃ С‚РѕРіРѕ,", "РєС‚Рѕ РЅСѓР¶РµРЅ СЃРµРіРѕРґРЅСЏ"],
      text: "РљР°Р¶РґР°СЏ СЂРѕР»СЊ РѕС‚РІРµС‡Р°РµС‚ Р·Р° РєРѕРЅРєСЂРµС‚РЅС‹Р№ Р±РёР·РЅРµСЃ-СЂРµР·СѓР»СЊС‚Р°С‚.",
      items: [
        ["01", "РђРґРјРёРЅРёСЃС‚СЂР°С‚РѕСЂ", "РћС‚РІРµС‡Р°РµС‚ РЅР° РІРѕРїСЂРѕСЃС‹, Р·Р°РїРёСЃС‹РІР°РµС‚ Рё РЅР°РїРѕРјРёРЅР°РµС‚ Рѕ РІРёР·РёС‚Рµ."],
        ["02", "РњРµРЅРµРґР¶РµСЂ РїСЂРѕРґР°Р¶", "РЈС‚РѕС‡РЅСЏРµС‚ РїРѕС‚СЂРµР±РЅРѕСЃС‚СЊ, Р±СЋРґР¶РµС‚ Рё РїРµСЂРµРґР°РµС‚ С‚РµРїР»РѕРіРѕ Р»РёРґР° РєРѕРјР°РЅРґРµ."],
        ["03", "РџРѕРґРґРµСЂР¶РєР°", "Р РµС€Р°РµС‚ С‚РёРїРѕРІС‹Рµ РІРѕРїСЂРѕСЃС‹ РїРѕ Р±Р°Р·Рµ Р·РЅР°РЅРёР№ Рё Р·РѕРІРµС‚ С‡РµР»РѕРІРµРєР° РІРѕРІСЂРµРјСЏ."],
      ],
      action: "Р’С‹Р±СЂР°С‚СЊ СЂРѕР»СЊ",
    },
    proof: {
      kicker: "Р’СЃРµ РїРѕРґ РєРѕРЅС‚СЂРѕР»РµРј",
      title: ["Р’С‹ РІРёРґРёС‚Рµ РЅРµ С‚РѕР»СЊРєРѕ РѕС‚РІРµС‚С‹,", "РЅРѕ Рё СЂРµР·СѓР»СЊС‚Р°С‚"],
      text: "Р”РёР°Р»РѕРіРё, Р»РёРґС‹, Р·Р°РїРёСЃРё, РїРµСЂРµРґР°С‡Рё С‡РµР»РѕРІРµРєСѓ Рё РѕС€РёР±РєРё СЃРѕР±СЂР°РЅС‹ РІ РїРѕРЅСЏС‚РЅРѕРј РѕС‚С‡РµС‚Рµ.",
      list: ["РСЃС‚РѕС‡РЅРёРє РєР°Р¶РґРѕРіРѕ РѕС‚РІРµС‚Р°", "РСЃС‚РѕСЂРёСЏ РІС‹РїРѕР»РЅРµРЅРЅС‹С… РґРµР№СЃС‚РІРёР№", "РўРµСЃС‚РѕРІС‹Р№ СЂРµР¶РёРј РґРѕ РїСѓР±Р»РёРєР°С†РёРё"],
      dashboard: ["РћР±Р·РѕСЂ РЅРµРґРµР»Рё", "1вЂ“7 Р°РІРіСѓСЃС‚Р°", "РЎРѕРѕР±С‰РµРЅРёСЏ", "Р›РёРґС‹", "Р—Р°РїРёСЃРё", "РџРЅ", "Р’С‚", "РЎСЂ", "Р§С‚", "РџС‚", "РЎР±", "Р’СЃ"],
    },
    faq: {
      kicker: "Р§Р°СЃС‚С‹Рµ РІРѕРїСЂРѕСЃС‹",
      title: ["РљРѕСЂРѕС‚РєРѕ", "Рѕ РІР°Р¶РЅРѕРј"],
      items: [
        ["РР РјРѕР¶РµС‚ РѕС€РёР±РёС‚СЊСЃСЏ?", "Lemiri РѕС‚РІРµС‡Р°РµС‚ РїРѕ РїРѕРґРєР»СЋС‡РµРЅРЅС‹Рј РёСЃС‚РѕС‡РЅРёРєР°Рј, РїРѕРєР°Р·С‹РІР°РµС‚ РёС… РІ Р¶СѓСЂРЅР°Р»Рµ Рё РїРµСЂРµРґР°РµС‚ СЃРѕРјРЅРёС‚РµР»СЊРЅС‹Рµ РІРѕРїСЂРѕСЃС‹ С‡РµР»РѕРІРµРєСѓ."],
        ["РќСѓР¶РЅРѕ СѓРјРµС‚СЊ РїСЂРѕРіСЂР°РјРјРёСЂРѕРІР°С‚СЊ?", "РќРµС‚. РќР°СЃС‚СЂРѕР№РєР° СЃРґРµР»Р°РЅР° РєР°Рє РїРѕС€Р°РіРѕРІС‹Р№ Р·Р°РїСѓСЃРє СЃРѕС‚СЂСѓРґРЅРёРєР°: СЂРѕР»СЊ, Р·РЅР°РЅРёСЏ, РєР°РЅР°Р» Рё С‚РµСЃС‚."],
        ["РњРѕР¶РЅРѕ РїРѕРґРєР»СЋС‡РёС‚СЊ CRM?", "Р”Р°. РћСЃРЅРѕРІРЅС‹Рµ CRM РїРѕРґРєР»СЋС‡Р°СЋС‚СЃСЏ РЅР°РїСЂСЏРјСѓСЋ, РѕСЃС‚Р°Р»СЊРЅС‹Рµ СЃРёСЃС‚РµРјС‹ РјРѕР¶РЅРѕ СЃРІСЏР·Р°С‚СЊ С‡РµСЂРµР· РІРµР±С…СѓРєРё Рё СЃРµСЂРІРёСЃС‹ Р°РІС‚РѕРјР°С‚РёР·Р°С†РёРё."],
        ["Р§С‚Рѕ РїСЂРѕРёСЃС…РѕРґРёС‚, РєРѕРіРґР° РЅСѓР¶РµРЅ С‡РµР»РѕРІРµРє?", "РР-СЃРѕС‚СЂСѓРґРЅРёРє РїРµСЂРµРґР°РµС‚ РґРёР°Р»РѕРі РїРѕ Р·Р°РґР°РЅРЅС‹Рј РїСЂР°РІРёР»Р°Рј Рё РґРѕР±Р°РІР»СЏРµС‚ СЂРµР·СЋРјРµ, С‡С‚РѕР±С‹ РјРµРЅРµРґР¶РµСЂ Р±С‹СЃС‚СЂРѕ РїСЂРѕРґРѕР»Р¶РёР» СЂР°Р·РіРѕРІРѕСЂ."],
      ],
    },
    cta: ["Р’Р°С€ СЃР»РµРґСѓСЋС‰РёР№ СЃРѕС‚СЂСѓРґРЅРёРє СѓР¶Рµ РіРѕС‚РѕРІ", "РџСѓСЃС‚СЊ РєР»РёРµРЅС‚С‹ РїРѕР»СѓС‡Р°СЋС‚", "РѕС‚РІРµС‚, РїРѕРєР° РІС‹ Р·Р°РЅСЏС‚С‹ Р±РёР·РЅРµСЃРѕРј", "РЎРѕР·РґР°Р№С‚Рµ РїРµСЂРІРѕРіРѕ РР-СЃРѕС‚СЂСѓРґРЅРёРєР° Рё РїСЂРѕРІРµРґРёС‚Рµ С‚РµСЃС‚РѕРІС‹Р№ РґРёР°Р»РѕРі.", "РќР°С‡Р°С‚СЊ Р±РµСЃРїР»Р°С‚РЅРѕ", "Р—Р°РїСЂРѕСЃРёС‚СЊ РґРµРјРѕ"],
    footer: ["Р“РѕС‚РѕРІС‹Р№ С†РёС„СЂРѕРІРѕР№ СЃРѕС‚СЂСѓРґРЅРёРє РґР»СЏ РІР°С€РµРіРѕ Р±РёР·РЅРµСЃР°.", "Р”РѕРєСѓРјРµРЅС‚Р°С†РёСЏ", "В© 2026 Lemiri AI"],
    mock: ["РќРѕРІР°СЏ Р·Р°СЏРІРєР°", "РєРІР°Р»РёС„РёС†РёСЂРѕРІР°РЅР°", "РђРЅРЅР° Рљ.", "РҐРѕС‡РµС‚ Р·Р°РїРёСЃР°С‚СЊСЃСЏ РЅР° РєРѕРЅСЃСѓР»СЊС‚Р°С†РёСЋ", "Р”РёР°Р»РѕРіРё СЃРµРіРѕРґРЅСЏ", "РћС‚РІРµС‚РёС‚СЊ РєР»РёРµРЅС‚Сѓ...", "Р›РёРґ", "РљР°Р»РµРЅРґР°СЂСЊ", "РР", "РћС‚РІРµС‡Р°РµС‚ СЃРµР№С‡Р°СЃ", "РќР° Р·Р°РІС‚СЂР° РµСЃС‚СЊ РґРІР° СЃРІРѕР±РѕРґРЅС‹С… РѕРєРЅР°: 12:30 Рё 16:00. РљР°РєРѕРµ РІР°Рј СѓРґРѕР±РЅРµРµ?", "РџРµСЂРµРґР°С‡Р° РјРµРЅРµРґР¶РµСЂСѓ", "РљР»РёРµРЅС‚ РіРѕС‚РѕРІ РѕР±СЃСѓРґРёС‚СЊ РґРµС‚Р°Р»Рё", "Р РµР·СЋРјРµ РїРѕРґРіРѕС‚РѕРІР»РµРЅРѕ"],
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
      miniChat: ["Customer", "Do you deliver today?", "Lemiri В· source: FAQ", "Yes, orders placed before 5 PM can be delivered today."],
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
      dashboard: ["Weekly overview", "August 1вЂ“7", "Messages", "Leads", "Bookings", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
    footer: ["A ready-to-launch digital employee for your business.", "Documentation", "В© 2026 Lemiri AI"],
    mock: ["New lead", "qualified", "Anna K.", "Wants to book a consultation", "Conversations today", "Write a reply...", "Lead", "Calendar", "AI", "Replying now", "Tomorrow has two available slots: 12:30 and 16:00. Which one works better?", "Human handoff", "Customer is ready to discuss details", "Summary prepared"],
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<Lang>("ru");
  const t = copy[lang];
  const price = pricing[lang];
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
    const elements = document.querySelectorAll(".sectionHead, .splitHead, .feature, .steps article, .roles article, .proofText, .dashboard, .pricingCard, .faq > div, .cta, footer, .artifact, .trustInner > *, .buttonRow");
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
        <nav aria-label={lang === "ru" ? "РћСЃРЅРѕРІРЅР°СЏ РЅР°РІРёРіР°С†РёСЏ" : "Main navigation"}>
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
        <div className="buttonRow"><a className="pill dark" href="#cta">{t.primary} <b>в†—</b></a><a className="pill ghost" href="#how">{t.secondary}</a></div>

        <div className="artifact leadCard"><div className="artifactTop"><span>{t.mock[0]}</span><span className="live">в—Џ {t.mock[1]}</span></div><strong>{t.mock[2]}</strong><small>{t.mock[3]}</small><div className="leadMeta"><span>CRM<br /><b>{t.mock[6]}</b></span><span>{t.mock[7]}<br /><b>16:00</b></span></div></div>
        <div className="artifact statCard"><small>{t.mock[4]}</small><strong>128</strong><span>в†‘ 24%</span><div className="bars"><i/><i/><i/><i/><i/><i/><i/></div></div>
        <div className="artifact chatCard"><div className="avatar">{t.mock[8]}</div><div><b>Lemiri</b><small>{t.mock[9]}</small></div><p>{t.mock[10]}</p><div className="reply">{t.mock[5]} <span>в†‘</span></div></div>
        <div className="artifact handoffCard"><small>{t.mock[11]}</small><b>{t.mock[12]}</b><span>{t.mock[13]} в†’</span></div>
      </section>

      <section className="trust"><div className="shell trustInner">{t.trust.map((item, index) => index === 0 ? <span key={item}>{item}</span> : <b key={item}>{item}</b>)}</div></section>

      <section className="section shell" id="capabilities">
        <div className="sectionHead"><span className="kicker">{t.capabilities.kicker}</span><h2>{t.capabilities.title[0]}<br /><em>{t.capabilities.title[1]}</em></h2><p>{t.capabilities.text}</p></div>
        <div className="featureGrid">{t.capabilities.cards.map(([tag, title, text], index) => <article className={`feature ${index === 0 ? "large" : ""} ${index === 2 ? "accentPanel" : ""} ${index === 3 ? "wide" : ""}`} key={title}><span className="tag">{tag}</span><h3>{title}</h3><p>{text}</p>{index === 0 && <div className="miniChat"><span>{t.capabilities.miniChat[0]}</span><p>{t.capabilities.miniChat[1]}</p><span>{t.capabilities.miniChat[2]}</span><p>{t.capabilities.miniChat[3]}</p></div>}{index === 1 && <div className="sourceRows">{t.capabilities.sources.map((source) => <span key={source}>вњ“ {source}</span>)}</div>}{index === 3 && <div className="actionFlow">{t.capabilities.flow.map((item, flowIndex) => <span key={item}>{item}{flowIndex < t.capabilities.flow.length - 1 ? <b> в†’</b> : null}</span>)}</div>}</article>)}</div>
      </section>

      <section className="fog" id="how"><div className="section shell"><div className="splitHead"><div><span className="kicker">{t.how.kicker}</span><h2>{t.how.title[0]}<br /><em>{t.how.title[1]}</em></h2></div><p>{t.how.text}</p></div><div className="steps">{t.how.steps.map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="section shell" id="roles"><div className="splitHead"><div><span className="kicker">{t.roles.kicker}</span><h2>{t.roles.title[0]}<br /><em>{t.roles.title[1]}</em></h2></div><p>{t.roles.text}</p></div><div className="roles">{t.roles.items.map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p><a href="#cta">{t.roles.action} в†’</a></article>)}</div></section>

      <section className="section shell proof"><div className="proofText"><span className="kicker">{t.proof.kicker}</span><h2>{t.proof.title[0]} <em>{t.proof.title[1]}</em></h2><p>{t.proof.text}</p><ul>{t.proof.list.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="dashboard"><div className="dashTop"><b>{t.proof.dashboard[0]}</b><span>{t.proof.dashboard[1]}</span></div><div className="metrics"><span><small>{t.proof.dashboard[2]}</small><b>846</b><i>в†‘ 18%</i></span><span><small>{t.proof.dashboard[3]}</small><b>127</b><i>в†‘ 31%</i></span><span><small>{t.proof.dashboard[4]}</small><b>64</b><i>в†‘ 12%</i></span></div><div className="chart"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div><div className="dashFoot">{t.proof.dashboard.slice(5).map((day) => <span key={day}>{day}</span>)}</div></div></section>

      <section className="section shell faq" id="faq"><div><span className="kicker">{t.faq.kicker}</span><h2>{t.faq.title[0]}<br /><em>{t.faq.title[1]}</em></h2></div><div className="questions">{t.faq.items.map(([question, answer], index) => <div className={`faqItem ${openFaq === index ? "isOpen" : ""}`} key={question}><button className="faqQuestion" type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><i aria-hidden="true" /></button><div className="faqAnswer"><div><p>{answer}</p></div></div></div>)}</div></section>

      <section className="section shell pricing" id="pricing">
        <div className="sectionHead">
          <span className="kicker">{price.kicker}</span>
          <h2>{price.title[0]}<br /><em>{price.title[1]}</em></h2>
          <p>{price.text}</p>
        </div>
        <div className="pricingGrid">
          {price.plans.map(([name, cost, note, description]) => (
            <article className={`pricingCard ${name === "Pro" ? "featured" : ""}`} data-badge={name === "Pro" ? (lang === "ru" ? "Популярно" : "Popular") : undefined} key={name}>
              <span>{name}</span>
              <strong>{cost}</strong>
              <small>{note}</small>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta shell" id="cta"><span className="kicker">{t.cta[0]}</span><h2>{t.cta[1]}<br /><em>{t.cta[2]}</em></h2><p>{t.cta[3]}</p><div className="buttonRow"><a className="pill dark" href="mailto:hello@lemiri.ai?subject=Lemiri AI">{t.cta[4]} <b>в†—</b></a><a className="pill ghost" href="mailto:hello@lemiri.ai?subject=Lemiri AI demo">{t.cta[5]}</a></div></section>

      <footer className="shell"><a className="logo footerLogo" href="#top"><img src={logoUrl} alt="Lemiri AI" /></a><p>{t.footer[0]}</p><div><a href="#capabilities">{t.nav[0]}</a><a href="#how">{t.nav[1]}</a><a href="#faq">{t.nav[3]}</a><a href="/documentation">{t.footer[1]}</a></div><small>{t.footer[2]}</small></footer>
    </main>
  );
}

