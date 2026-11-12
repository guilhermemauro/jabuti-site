// Shown on the page and emitted as FAQPage JSON-LD. Answers are plain text (no HTML),
// and every claim must be backed by the product's README, AGENTS.md or agent templates.
export const faq: { q: string; a: string }[] = [
  {
    q: "Is Jabuti free?",
    a: "Yes. Jabuti is open source under the MIT license and has no paid plan. You pay for what it runs on: your server and your model provider's API usage. Some connectors, such as Serper and DataForSEO, need their own API keys.",
  },
  {
    q: "How is this different from asking ChatGPT or Claude about my SEO?",
    a: "A chat assistant has not seen your Search Console, so it answers with general advice. A Jabuti SEO agent pulls your data through a connector, saves the rows as a CSV file in its workspace and analyzes the whole file with a script it writes and runs. Its recommendations name the page, the change, the evidence and the expected effect.",
  },
  {
    q: "Which AI models does it use?",
    a: "Claude models (Opus, Sonnet, Haiku and Fable) with your own Anthropic API key. The loop is provider-neutral, but Anthropic is the only provider for now.",
  },
  {
    q: "Can the agent change my site on its own?",
    a: "Not without you. Changes ship as pull requests you merge. An agent with a plan works on milestones you approve and proposes each change as an experiment with a measured baseline. Risky shell commands, package installs and profile changes wait for your approval, and runs on a schedule never get one: what they need waits in your inbox.",
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
    q: "Do I need to know how to code?",
    a: "You need to be comfortable running a server: installing takes one command on a VPS, or a deploy button on Hostinger. Once it runs, you work through a web interface. The agents write the analysis scripts; reading them helps but is not required.",
  },
  {
    q: "Is it only for SEO?",
    a: "No. SEO is the case Jabuti is built and tested against, but it is a general agent harness: any agent with a model, a prompt, a sandboxed shell, MCP connectors and skills can work on any project.",
  },
  {
    q: "Is it ready for production?",
    a: "Jabuti is early and built in public. It runs real SEO work for its author, but expect rough edges and breaking changes in the data format, handled by numbered migrations.",
  },
];
