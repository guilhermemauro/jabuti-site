// Shown on the page and emitted as FAQPage JSON-LD. Answers are plain text (no HTML), and every
// claim must be backed by the product's README, AGENTS.md, docs/DECISIONS.md or agent templates.
export const faq: { q: string; a: string }[] = [
  {
    q: "Is Jabuti free?",
    a: "Yes. Jabuti is open source under the MIT license and has no paid plan. You pay for what it runs on: your server and your model provider's API usage. Some connectors, such as Serper and DataForSEO, need their own accounts.",
  },
  {
    q: "How is this different from connecting Search Console to ChatGPT or Claude?",
    a: "A connected chat answers the question you ask, when you ask it. A Jabuti agent keeps a brief and notes for each site, combines Search Console, Analytics, your site and the results page, works toward milestones you approve, proposes each change as an experiment with a baseline, and runs on a schedule. And it runs on your server.",
  },
  {
    q: "What are AEO and GEO?",
    a: "AEO, answer engine optimization, is about being the answer search engines show before the links: AI overviews, featured answers and People Also Ask. GEO, generative engine optimization, is about being cited when an AI assistant such as ChatGPT or Google's AI overviews writes the answer. Jabuti agents read the full results page, AI overview included, and can list which AI answers cite your domain and who they cite instead.",
  },
  {
    q: "Can Jabuti tell whether ChatGPT cites my site?",
    a: "Yes, through the DataForSEO connector and your DataForSEO account: it lists questions answered by Google's AI overviews or ChatGPT that cite a domain or mention a topic, with each answer's sources. ChatGPT data covers the United States in English only; Google's covers more places.",
  },
  {
    q: "How does Jabuti help build authority?",
    a: "With the data-study skill. The agent picks a question your niche asks that nobody answered with a number, analyzes your own data or public data with a script that reruns, and publishes a page made to be cited: the main finding first, a methodology, a ready citation line, the CSV and structured data. It drafts outreach e-mails to journalists and blogs for you to send, and updates the study on the same URL every year. Only aggregates are published, and you approve every figure.",
  },
  {
    q: "Which metric does the agent optimize for?",
    a: "The one you choose. An agent sees impressions and clicks from Search Console and conversions from Google Analytics 4 key events. You tell it what counts as a conversion and which metric is the north star; it goes into the agent's brief, and the milestones you approve carry it as their success criterion.",
  },
  {
    q: "Does the agent work on its own?",
    a: "Yes, within limits you set. An agent with a plan works on milestones you approve and runs routines on a schedule: it measures every day and, on its act days, proposes a change. Unattended runs never approve anything; what they need waits in your inbox, and their spend stops at a monthly cap.",
  },
  {
    q: "How does Jabuti know a change worked?",
    a: "Every published change is an experiment with a hypothesis, a metric and a baseline, checked at fixed days after it goes live (3, 14 and 28 by default). CTR and position are measured by device, over periods of equal length, next to control pages that never change.",
  },
  {
    q: "Can the agent change my site?",
    a: "Only with your approval. The agent proposes a change on a branch of your site's repository; you review it on GitHub and Jabuti merges it when you approve. A page with a proposal or under measurement is locked, and open proposals are capped.",
  },
  {
    q: "Where do my data and API keys go?",
    a: "Jabuti runs on your server. API keys and tokens are encrypted at rest and reach only the connectors of the agents allowed to use them; the model and the shell never see them. What the agent reads is sent to your model provider as part of the conversation. Traces stay on your machine.",
  },
  {
    q: "Can I use it for several sites or clients?",
    a: "Yes, that is the intended setup: one agent per site or project. Each agent has its own brief, notes, workspace and credentials scope, so the agent for one site never sees the files or keys of another.",
  },
  {
    q: "Which AI models does it use?",
    a: "Claude models (Opus, Sonnet, Haiku and Fable) with your own Anthropic API key. The loop is provider-neutral, but Anthropic is the only provider for now.",
  },
  {
    q: "Is it ready for production?",
    a: "Jabuti is early and built in public. It runs real SEO work for its author, but expect rough edges and breaking changes in the data format, handled by numbered migrations.",
  },
];
