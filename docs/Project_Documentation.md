# Lemiri AI Project Documentation

## Overview

Lemiri AI is a subscription-based SaaS platform that provides an intelligent AI employee for businesses. The service helps automate customer communication, answer common questions, use the company's knowledge base, work with CRM records, calendars, and connected communication channels such as WhatsApp, Telegram, and website chat.

The product is focused on practical business results: faster replies, qualified leads, bookings, and smooth handoff to a human manager when needed.

## Project Goal

The goal of Lemiri AI is to give small and medium-sized businesses a ready-to-use digital employee that can be launched without technical knowledge. The user should be able to choose a role, add business knowledge, connect a channel, test the employee, and start using it in a short setup flow.

## Target Audience

Lemiri AI is designed for:

- service businesses that receive many customer questions;
- clinics, salons, educational centers, agencies, and local services;
- sales teams that need lead qualification before a human manager joins;
- support teams that want to reduce repetitive requests;
- founders and operators who need automation without building custom workflows.

## Core Features

- AI employee roles for administration, sales, and support.
- Website chat and messenger-based communication.
- Knowledge base from website content, documents, and FAQ.
- Lead capture and qualification.
- Booking and calendar support.
- Human handoff with conversation summary.
- CRM and external system integrations.
- Test mode before publishing.
- Basic analytics for conversations, leads, bookings, handoffs, and errors.

## How It Works

1. The user selects the AI employee role.
2. The user adds company knowledge: website, documents, service rules, prices, and FAQ.
3. The user connects customer communication channels.
4. Lemiri AI answers customer messages using connected sources.
5. If a conversation requires human attention, Lemiri AI hands it off with a short summary.
6. Actions such as creating a lead, booking a slot, or notifying the team can be performed through integrations.

## Architecture

At a high level, Lemiri AI consists of:

- web application for user setup and management;
- AI conversation layer for customer communication;
- knowledge base layer for storing and retrieving company information;
- integration layer for CRM, calendars, messengers, and automation tools;
- analytics layer for activity, errors, and business outcomes;
- administrative and billing layer for subscriptions and account management.

The architecture should keep customer data separated by account and should allow integrations to be enabled or disabled per workspace.

## Integrations

Planned and supported integration categories:

- website chat widget;
- WhatsApp;
- Telegram;
- CRM systems;
- calendar and booking tools;
- email notifications;
- webhooks and automation services.

Integration availability may depend on the subscription plan and technical setup.

## Security

Lemiri AI should follow practical SaaS security principles:

- account-based access control;
- protected storage of customer data and uploaded documents;
- limited access to integration credentials;
- activity logging for important AI actions;
- test mode before public launch;
- human handoff for sensitive or uncertain conversations;
- ability to delete account data upon request where technically and legally possible.

## Business Model

Lemiri AI uses a subscription model. Pricing may depend on:

- number of AI employees;
- connected channels;
- volume of messages or actions;
- available integrations;
- analytics and advanced control features;
- support level.

## Development Roadmap

### MVP

- AI employee setup wizard.
- Role templates.
- Website chat.
- WhatsApp and Telegram connection.
- Knowledge base from documents and FAQ.
- Lead capture.
- Human handoff.
- Calendar booking.
- Simple actions and notifications.
- Test mode.
- Conversation log.
- Basic analytics.

### Further Development

- Email and social media channels.
- Deeper CRM integrations.
- Analysis of failed or low-quality conversations.
- Voice AI after demand is validated.
- Multiple AI employees per workspace.
- Advanced approval and escalation rules.


