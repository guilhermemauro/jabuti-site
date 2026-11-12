---
title: "SEO, AEO and GEO: one agent, the same data"
description: "Ranking, being the answer and being cited by AI are three jobs. How a Jabuti agent works on all three from your Search Console and the results page."
date: 2026-11-12
tags: [SEO, AEO, GEO]
---

Search used to mean one job: rank a page and earn the click. Today a query can be answered before
anyone clicks, by an AI overview at the top of Google, a People Also Ask box, or a chat assistant
that writes the answer and cites a few sources. That splits the work into three:

- **SEO, search engine optimization:** rank and get the click.
- **AEO, answer engine optimization:** be the answer the engine shows before the links.
- **GEO, generative engine optimization:** be one of the sources an AI cites when it writes the
  answer.

They share most of their inputs. This post shows how one Jabuti agent covers the three from the
same data, and what it cannot do.

## SEO: start from your own numbers

An agent built from Jabuti's SEO template works from data, not from general advice. It pulls
Search Console through the built-in connector, which saves the rows as a CSV file in the agent's
workspace, and analyzes the whole file with a Python script it writes and runs in a sandbox.

Typical first questions:

- Which queries and pages gained or lost clicks, comparing the last 28 days against the 28 before?
- Which pages that matter are not indexed, and why? (URL inspection answers this per page.)
- Which pages rank but get few clicks for their impressions?

Google Analytics 4 adds what happens after the click, PageSpeed adds Lighthouse scores and LCP,
INP and CLS, and a crawl of your site adds what each page says and links to. Each recommendation
names the page, the change, the evidence and the expected effect.

## AEO: look at the whole results page

A click-through rate is often explained by what sits above your result, not by your title. If a
query shows an AI overview, videos or a People Also Ask box, fewer people reach the links.

That is why the DataForSEO connector reads the results page block by block. For a query, the
agent sees the blocks in order, the AI overview's text with every source it cites, and who answers
each People Also Ask question. With that, "our CTR dropped" becomes "an AI overview now answers
this query, and it cites a competitor's comparison page".

## GEO: find out who the AI cites

Generative answers cite sources, and those citations can be measured. The `ai_mentions` tool lists
questions answered by Google's AI overviews or ChatGPT that cite a domain or mention a topic, with
each answer's sources. Ask it about your domain to see where you are cited, or about a topic to see
who is cited instead of you.

Being cited usually takes something worth citing. Jabuti ships a `data-study` skill for that: it
turns your own data, or public data, into an original study with a clear figure, published as a
page and a CSV, so journalists, blogs and AI answers have a number to cite. Company data is
published only as aggregates, and nothing goes out before you approve every figure.

## What it does not do

- AEO and GEO data come from DataForSEO, with your own account; each call reports its cost.
  ChatGPT citation data covers the United States in English only. Google's covers more places.
- The agent does not guarantee rankings or citations. It finds where you stand, proposes changes
  with evidence and measures whether they worked.
- Nothing ships on its own. Changes are proposed as experiments you approve, which is the subject
  of [how a Jabuti agent runs an SEO experiment](/blog/how-an-seo-experiment-works/).
