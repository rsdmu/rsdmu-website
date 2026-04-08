---
title: "AI Maps of Streetscape Inclusivity"
date: "2026-03-01"
path: "street-review-ai-maps-of-streetscape-inclusivity"
type: "work"
thumbnail: "./images/montreal-heatmap.png"
author: "Rashid Mushkani"
description: "A mixed-methods Street Review framework that combines community evaluations with 45,000 street-view images to map how different groups experience Montréal streets."
---

*A participatory AI framework that turns street-level perception into heatmaps, indicators, and practical guidance for more inclusive streets.*

[Read in Cities / ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0264275125009059) · [View Dataset on Hugging Face](https://huggingface.co/datasets/rsdmu/streetreview)

## Why This Matters

Streets are used by people with very different histories, mobilities, identities, and expectations. Yet many street assessments still flatten those differences into a single technical score or a narrow design checklist.

With **Street Review**, I took a different approach. I combined participatory evaluation with AI-based image analysis so planners can ask not only whether a street functions, but also who feels included, who does not, and which physical features seem to shape those differences.

## What This Framework Adds

This version of Street Review moves beyond small-group deliberation alone. It pairs community knowledge with large-scale visual analysis, making it possible to connect lived experience to recurring streetscape patterns across a city.

In Montréal, I combined **28 residents**, semi-directed interviews, image-based evaluations, and approximately **45,000 street-view images from Mapillary**. That combination made it possible to move from individual impressions to structured, comparable urban evidence.

## How It Works

The method combines three layers.

First, participants evaluate street images and discuss how they perceive inclusivity, accessibility, and comfort across different settings.

Second, those judgments are connected to streetscape attributes such as sidewalks, maintenance, greenery, seating, and building conditions.

Third, AI-supported analysis turns those relationships into visual outputs such as heatmaps and model comparisons, helping reveal where perceptions converge, where they split across demographic groups, and which features seem to matter most.

## What I Found

The paper shows that perceptions of inclusivity and accessibility vary meaningfully across participant groups. Those differences are not noise. They are part of what inclusive planning has to understand.

The framework also suggests that **sidewalk and building quality can matter more than greenery alone** when people judge whether a street feels inclusive. Group-based evaluation remains important because it helps calibrate judgments, surface disagreement, and make demographic differences visible instead of averaging them away.

## Why This Is Useful

For planners, the framework offers a more systematic way to compare streets without losing the social complexity of urban life.

For policy teams, it creates evidence that can support maintenance priorities, accessibility interventions, and more context-sensitive public realm decisions.

For researchers, it demonstrates how participatory methods and machine learning can work together without treating community input as an afterthought.

## Visuals

![Street Review method overview.](./images/street-revew-method-overview.png)
*Overview of the Street Review workflow, from participatory evaluation to AI-supported analysis.*

![Street Review model architecture.](./images/streetreview-model-architecture.png)
*Model architecture used to connect street imagery with community-defined indicators.*

![Participant identities in the Montréal study.](./images/participants-identities.png)
*Participant identity breakdown highlighting the importance of intersectional perspectives.*

![Model performance across Street Review indicators.](./images/model-performance.png)
*Comparative model performance across the indicators used in the Street Review framework.*

![Montréal inclusivity heatmap.](./images/montreal-heatmap.png)
*Heatmap showing how perceived streetscape inclusivity varies across sampled Montréal locations.*

## Where This Can Be Used

This approach is especially useful for inclusive street design, municipal diagnostics, and public-space policy where subjective experience matters as much as formal standards.

It also suits cities that need a practical way to connect community input, visual data, and repeatable analysis when evaluating safety, accessibility, and belonging in everyday streetscapes.

**More:** [Cities / ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0264275125009059) · [DOI](https://doi.org/10.1016/j.cities.2025.106602) · [Street Review dataset](https://huggingface.co/datasets/rsdmu/streetreview)

*Tags: Participatory AI · Streetscapes · Inclusive Urbanism · Urban Analytics · Montréal · Public Space*
