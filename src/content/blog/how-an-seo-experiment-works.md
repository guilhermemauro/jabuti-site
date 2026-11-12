---
title: "How a Jabuti agent runs an SEO experiment"
description: "Milestones you approve, a baseline before every change, checks at day 3, 14 and 28, control pages and routine runs: how autonomy works without losing control."
date: 2026-11-12
tags: [SEO, Experiments, Autonomy]
---

Most changes made for SEO are never measured. A title is rewritten, traffic moves a few weeks
later, and nobody can say whether the change did it, or the season, or an update to Google.

Jabuti treats every change an agent publishes as an experiment. The rules below are written in
code, not in the agent's prompt, so the model cannot talk its way around them.

## 1. You approve the milestones

An agent with a plan works toward milestones: a goal, a success criterion and a due date. The
agent can propose them, but it only sees and works on the ones you approved. It never sets a
milestone's goal, and it marks one done only on evidence, with no experiment still open.

The plan is a file Jabuti writes through a `plan` tool. The model never edits it directly, so ids,
dates and statuses stay consistent.

## 2. Every change has a hypothesis and a baseline

Before a change ships, the agent records:

- **the page** it changes,
- **the hypothesis**, such as "a title that names the price will raise CTR on mobile",
- **the metric** it expects to move,
- **the baseline**: the metric's value before the change.

CTR and position are measured by device, over periods of the same length, next to control pages.
Desktop and mobile results move differently for reasons outside any site, so a change measured on
all devices together could be credited or blamed for something it did not do.

## 3. You review, Jabuti ships

The agent commits the change on a branch of your site's repository. You review it on GitHub. When
you approve, Jabuti merges it, and that day is day zero of the measurement. If you reject it, the
branch is deleted.

The agent never holds the key to push: a deploy key lives in the shell runner, in a folder only
root can read, so neither the agent nor a script it writes can push to your repository.

## 4. Checks at fixed days

The experiment is checked at fixed days after it goes live: 3, 14 and 28 by default. A check is
recorded only once it is due, so an early bump cannot be reported as a result.

## 5. Guardrails

- **Control pages never change.** They are what the experiment is compared against.
- **A page under test is locked.** A page with an open proposal or under measurement cannot get
  another change; the agent amends the proposal instead.
- **Open proposals are capped** at 3 by default, so you are never buried in reviews.
- **A rejected change waits.** The same page cannot get a new proposal for 30 days, and the agent
  sees why you rejected it.

The defaults can be changed per agent.

## 6. Routine runs keep it going

You do not have to start each step. Routine runs start at the agent's time, in its time zone. Every
day they measure; on act days they may also propose the next change, on the first approved
milestone whose dependencies are done.

Routine runs are unattended, so they never get an approval: anything that needs you is refused and
listed in your inbox. Their spend stops at a monthly cap (US$ 15 by default), each run keeps its
final answer as a report, and the next run reads the last two. The routine starts off; you turn it
on when the plan looks right.

## Why it works this way

The design follows long-running agents that already work: state in files the harness owns, one
small step per run, a fixed metric and a person approving what goes live. Every decision, with its
reason and the alternatives rejected, is in Jabuti's
[DECISIONS.md](https://github.com/guilhermemauro/jabuti/blob/main/docs/DECISIONS.md).
