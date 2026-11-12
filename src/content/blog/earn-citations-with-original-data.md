---
title: "Earn citations with original data: how the data-study skill works"
description: "Journalists, blogs and AI answers cite whoever publishes a figure first and clearly. How a Jabuti agent turns your data into a study made to be cited."
date: 2026-11-12
tags: [Authority, GEO, Content]
---

Most content written for search repeats what already ranks. It can win a position, but it rarely
earns a link, and an AI answer has no reason to cite a page that says what ten others say.

What gets cited is a number nobody else has. Journalists, bloggers and AI answers need a figure to
support a sentence, and they cite whoever published it first and clearly. That is the idea behind
Jabuti's `data-study` skill: turn data into an original study the site publishes, a page others
cite and link to.

## 1. One question, answered with a number

The study starts with a single question the site's readers or the press of its niche ask, one
that can be answered with the data at hand. The agent looks for it in the site's Search Console
queries, in People Also Ask, in the niche's news and in what the owner hears from customers.

Before touching any data, it searches for the same figure. If someone published it recently, it
looks for an angle they missed, such as another period, region or segment, or picks another
question. Then it writes down the question and the figure it expects to publish, so the analysis
answers that and nothing vaguer.

## 2. Data only you have

Company data is the strongest source because nobody else has it: PDFs, Word documents,
spreadsheets, slides or exports from your systems. Public data works too, from official statistics,
open-data portals, regulators, courts and public APIs, with the URL, the date and the license
recorded. A survey of your audience is a third option.

## 3. Privacy is a hard rule

- Only aggregates are published. Nothing that points to one person or one customer.
- Any group with fewer than 10 people or records is left out, and the methodology says so.
- No confidential business figures, such as revenue or prices, unless the owner says they are
  public.
- Before anything is published, the owner sees every figure and the CSV exactly as they will
  appear, and says yes. Raw files never go into the site's repository.

## 4. An analysis that reruns

The analysis lives in a script that runs again from the raw files and gives the same numbers, so
next year's update is a rerun. Every figure comes with its base and period, medians or ranges
where a few large values would pull an average, and a correlation is written as an association,
never a cause.

## 5. A page made to be cited

The page, not a PDF, is what people cite and what search engines and AI answers read. It has:

- a title with the question or the main number, and the main finding in the first paragraph;
- key findings that each make sense quoted alone;
- charts followed by their data as HTML tables, so no number lives only inside an image;
- a methodology, the date published and updated, and a named author;
- a ready "how to cite" line, the CSV to download, and `Article` and `Dataset` structured data;
- internal links between the study and the site's posts on the same topic.

It ships like any other change: proposed by the agent and published only with the owner's
approval.

## 6. Getting it cited

The agent lists who would cite the study (journalists covering the niche, blogs, newsletters,
associations, and sites that link to older figures on the topic) and drafts a short e-mail for
each kind. The owner sends them; the agent never sends anything itself.

Then the study is updated every year on the same URL, with new data and the date updated, so the
links it earned keep counting.

## Why this matters for GEO

AI answers quote sources. A page with a clear, dated, well-sourced figure is the kind of source
they quote, and the DataForSEO connector lets the agent check afterwards which AI answers cite the
site and who they cite instead. More on that in
[SEO, AEO and GEO: one agent, the same data](/blog/seo-aeo-geo-with-your-own-data/).
