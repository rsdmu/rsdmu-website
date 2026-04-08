---
title: "Aligning Diverse Communities’ Needs to Inclusive Public Spaces"
date: "2024-12-15"
path: "mid-space-dataset"
type: "work"
thumbnail: "./images/dpo.png"
author: "Rashid Mushkani"
description: "Introducing the MID-Space dataset, designed to align AI-generated visualizations of public spaces with diverse community needs, focusing on inclusivity, accessibility, and comfort."
---


*A dataset for public-space images built from local preferences rather than generic aesthetic defaults.*

**Project Team:** Shravan Nayak, Rashid Mushkani, Hugo Berard, Allison Cohen, Shin Koseki, Hadrien Bertrand, Emmanuel Beaudry Marchand, Toumadher Ammar, Jerome Solis.

[Watch the Lecture on NeurIPS](https://neurips.cc/virtual/2024/109216) · [View the Dataset on Hugging Face](https://huggingface.co/datasets/CUPUM/mid-space)

[![Watch the Lecture on NeurIPS](./images/ai_inclusive_midspace.png)](https://neurips.cc/virtual/2024/109216)

## Why MID-Space Exists

The **MID-Space** dataset grew out of a straightforward problem: image-generation tools are good at making cities look polished, but they are not naturally good at making them look inclusive.

I helped build MID-Space to narrow that gap. The dataset connects AI-generated visualizations to six criteria that emerged from participatory work around public space:

- **Accessibility**
- **Safety**
- **Diversity**
- **Inclusivity**
- **Invitingness**
- **Comfort**

The point was not to produce one ideal image of the city. It was to make room for the fact that different people look for different things in public space, and that those differences should shape the model rather than be erased by it.

## What the Dataset Contains

- **Textual prompts:** 3,350 prompts representing varied public-space typologies
- **AI-generated images:** 13,465 visualizations created with Stable Diffusion XL
- **Annotations:** More than 42,000 raw and roughly 35,000 distinct annotations evaluating image pairs on a -1 to +1 scale for up to three criteria at a time

## How I Built It

I began with three workshops involving diverse Montréal communities to identify the criteria that should matter most. From there, the team generated 440 base prompts, expanded them into 2,910 synthetic prompts, and used Stable Diffusion XL to produce multiple candidate images for each one.

Those images were then refined using CLIP similarity scoring and evaluated by sixteen annotators through an accessible interface. The result was not just a pile of outputs, but a dataset that encoded preference, disagreement, and trade-off.


## Visual Documentation

![Fine-tuned visualization emphasizing accessibility.](./images/exp3.png)
*A fine-tuned visualization emphasizing safety and legibility in public space.*

![Visualization promoting diversity and inclusivity.](./images/exp1.png)
*A comparison showing how inclusivity shifts against other criteria.*

## What It Makes Possible

MID-Space is useful for **AI alignment research**, where local and plural values matter; for **urban design**, where residents need better ways to influence what future public spaces might look like; and for **generative AI tools**, where equity cannot be treated as an afterthought.


## Explore Further

[MID-Space Viewer](https://cupum-mid-space-viewer.hf.space)

## Related Links

- [UNESCO Chair in Urban Landscape](https://unesco-studio.umontreal.ca/)
- [Mila – Quebec AI Institute](https://mila.quebec/)

*Tags: Generative AI · Urban Planning · Inclusivity · Community Engagement · Public Spaces*
