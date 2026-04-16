---
title: "Plural Cities: Modeling Diverse Public Space Preferences at Scale"
date: "2025-08-10"
path: "livs-pluralistic-alignment"
type: "work"
thumbnail: "./images/icml-livs.png"
author: "Rashid Mushkani"
description: "LIVS encodes 37k+ community comparisons to align text-to-image models with local, intersectional priorities for inclusive public spaces."
---

*LIVS begins from a basic point: no single image of a "good" city can stand in for everyone who lives in one (Mushkani et al., 2025; Nayak et al., 2024).*

[Read on arXiv](https://arxiv.org/abs/2503.01894) · [OpenReview (ICML 2025)](https://openreview.net/forum?id=Spoe53kbj9) · [Project & Dataset](https://mid-space.one)

## Why This Dataset Exists

Most alignment work in generative AI still assumes that preference can be compressed into one clean signal. That assumption is especially brittle in urban design, where accessibility, safety, comfort, culture, diversity, and belonging are often felt differently by different groups. LIVS was designed to keep that plurality visible rather than hiding it inside an average.

The project also builds on lessons from **MID-Space**, which demonstrated the value of aligning image-generation tools with localized, community-defined criteria instead of generic design defaults (Nayak et al., 2024). LIVS pushes that logic further by focusing explicitly on pluralistic, intersectional preference modeling.

## What LIVS Contains

The dataset was developed through a two-year participatory process with 30 community organizations in Montréal and translates 634 community-defined concepts into six working criteria: **Accessibility**, **Safety**, **Comfort**, **Invitingness**, **Inclusivity**, and **Diversity** (Mushkani et al., 2025). It includes 13,462 images and 37,710 pairwise comparisons, creating a benchmark for asking how different publics want public spaces to look and feel rather than how a model assumes they should look.

To test that premise, the study used Direct Preference Optimization to fine-tune Stable Diffusion XL and then evaluated the tuned model on new comparisons. The result was not a perfect pluralistic model. It showed where alignment improves, where it remains unstable, and where disagreement itself carries information.

## What The Findings Suggest

One of the most revealing findings is the persistence of neutral ratings in the evaluation data. I do not read that as failure. I read it as evidence that public values are often heterogeneous, visually subtle, and resistant to single-objective optimization. That is precisely why pluralistic alignment matters.

The study also shows that identity matters, that human-authored prompts produce more distinctive outputs than generic prompt generation, and that improvements vary by criterion rather than arriving all at once. In short, the work points toward a form of alignment that treats difference as a design condition rather than a problem to be averaged away.

## Where This Can Be Used

For public engagement, LIVS offers a way to generate options that mirror local priorities and expose trade-offs in workshops. For urban design, it offers faster iteration without severing design from community judgment. For AI research, it offers a benchmark that treats plural values as first-class rather than secondary constraints.

## Visuals

![Participatory workflow behind LIVS.](./images/participatory-approach-livs.png)
*From community outreach to model tuning.*

![From 634 community concepts to six criteria.](./images/0_634-critiera.png)
*How hundreds of concepts became six working criteria.*

![Where models still miss for marginalized users.](./images/challenges_marginalized_users.png)
*Intersectional variation remains central to the problem.*

**More:** [arXiv](https://arxiv.org/abs/2503.01894) · [OpenReview / ICML 2025](https://openreview.net/forum?id=Spoe53kbj9) · [Project & Dataset (mid-space.one)](https://mid-space.one)

## References

Mushkani, R., Nayak, S., Berard, H., Cohen, A., Koseki, S., & Bertrand, H. (2025). *LIVS: A pluralistic alignment dataset for inclusive public spaces*. Proceedings of the 42nd International Conference on Machine Learning. https://arxiv.org/abs/2503.01894

Nayak, S., Mushkani, R., Berard, H., Cohen, A., Koseki, S., & Bertrand, H. (2024). *MID-Space: Aligning diverse communities' needs to inclusive public spaces*. OpenReview. https://openreview.net/forum?id=kyfkMRT4Ao
