---
title: "Co-Producing AI for Evaluating Public Spaces"
date: "2024-11-11"
path: "co-producing-ai-evaluating-public-spaces"
type: "work"
thumbnail: "./images/points_60.png"
author: "Rashid Mushkani, University of Montreal, Mila - Quebec AI Institute"
description: "A collaborative project utilizing AI to assess and design inclusive public spaces in Montreal, integrating community input and ethical AI practices."
---

*This pilot asked whether AI could help map how public space feels to different people without pretending the model should settle that question on its own (Gowaikar et al., 2024; Koseki et al., 2024).*

[Explore the Montréal heatmap](https://mid-spaces.github.io/landing-page/montreal_folium_heatmap_group_inclusivity.html)

## Why This Work Started

This work began from a basic problem: cities have many ways to measure traffic, land use, and maintenance, but far fewer ways to examine whether a street or square feels accessible, inclusive, and usable across different lived realities. That made public-space evaluation look less like a classification task and more like a question of whose judgment counts in the first place.

## What The Pilot Did

This early phase combined participatory workshops, street-view imagery, and model development to build an evaluation pipeline grounded in equity, diversity, and inclusion principles rather than generic urban design assumptions. Participants helped define what the system should notice before the system was asked to score anything at all.

In practice, that meant treating public judgment as part of the method, not as decoration around it. The Montréal heatmap linked above belongs to that stage: an attempt to visualize spatial patterns while keeping the underlying criteria tied to co-designed values and open to revision (Koseki et al., 2024).

## What It Showed

The pilot did not produce a universal definition of an inclusive public space. It showed that AI evaluation becomes more credible when the categories themselves are co-produced and when disagreement is treated as evidence instead of noise to be averaged away. That logic later carried into the Street Review work, where participatory judgment remained central at both the street and city scale (Mushkani & Koseki, 2025, 2026).

## Why It Still Matters

For planning, the contribution is practical: participatory AI can help reveal patterns that often remain anecdotal until exclusion has already hardened into routine (Mushkani & Koseki, 2026). For AI research, the contribution is procedural: people should help define what counts as a good outcome before optimization begins, not merely react after a system is already built (Gowaikar et al., 2024).

![Sampled Montréal street locations.](./images/points_60.png)
*Sampled street locations from the Montréal pilot.*

## References

Gowaikar, S., Berard, H., Mushkani, R., Beaudry Marchand, E., Ammar, T., & Koseki, S. (2024). *AI-EDI-SPACE: A co-designed dataset for evaluating the quality of public spaces*. arXiv. https://doi.org/10.48550/arXiv.2411.00956

Koseki, S., Ammar, T., Mushkani, R., Berard, H., & Tannir, S. (2024). *Evaluation algorithmique inclusive de la qualité des espaces publics / Inclusive algorithmic assessment of the quality of public spaces*. SHS Web of Conferences, 203, 01005. https://doi.org/10.1051/shsconf/202420301005

Mushkani, R., & Koseki, S. (2025). *Intersecting perspectives: A participatory street review framework for urban inclusivity*. Habitat International, 164, 103536. https://doi.org/10.1016/j.habitatint.2025.103536

Mushkani, R., & Koseki, S. (2026). *Street review: A participatory AI-based framework for assessing streetscape inclusivity*. Cities, 170, 106602. https://doi.org/10.1016/j.cities.2025.106602
