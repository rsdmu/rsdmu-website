---
title: "Plural Cities: Modeling Diverse Public Space Preferences at Scale"
date: "2025-08-10"
path: "livs-pluralistic-alignment"
type: "work"
thumbnail: "./images/icml-livs.png"
author: "Rashid Mushkani"
description: "LIVS encodes 37k+ community comparisons to align text-to-image models with local, intersectional priorities for inclusive public spaces."
---

*A benchmark for public-space images that refuses to pretend one point of view can stand in for everyone.*

[Read on arXiv](https://arxiv.org/abs/2503.01894) · [OpenReview (ICML 2025)](https://openreview.net/forum?id=Spoe53kbj9) · [Project & Dataset](https://mid-space.one)

## The Big Idea

**LIVS (Local Intersectional Visual Spaces)** is a people-in-the-loop benchmark for multi-criteria alignment of text-to-image models in urban planning. It asks:  
> How do different communities *actually* want public spaces to look and feel—and can models reflect that?

Over two years, I worked with 30 community organizations in Montréal to gather local ideas of inclusive design and turn them into structured preferences that can steer generative models toward context-aware outputs.

## Why This Matters

Global, single-objective alignment often flattens local norms. **Pluralistic alignment** keeps multiple, sometimes conflicting, values in play, including **Accessibility, Safety, Comfort, Invitingness, Inclusivity,** and **Diversity**. That makes room for a more honest question: not just what a place contains, but who it appears to welcome.

## How I Built It

**Participants & Process:** Two years with **30 orgs**; workshops, interviews, and participatory prompt design.  
**From concepts to criteria:** **634** community-defined ideas distilled into **six** criteria.  
**Images & Annotations:** **13,462** images, **37,710** pairwise comparisons (multi-criteria sliders).  
**Modeling:** Fine-tuned **Stable Diffusion XL** with **Direct Preference Optimization (DPO)** using multi-criteria signals.  
**Evaluation:** In 2,200 new comparisons, annotators preferred the DPO-aligned model more often where annotation volume was higher; about half of judgments were neutral—evidence that values are heterogeneous and sometimes visually subtle.

## What I Found

- **No single “best” image:** Improvements varied by criterion; **Comfort/Invitingness** benefited most from data volume; **Inclusivity/Diversity** remained harder to judge and to render consistently.  
- **Identity matters:** Preference patterns differed across participant identities—supporting intersectional data over an “average user.”  
- **Prompts matter, too:** Human-authored prompts produced more distinctive outputs—and more decisive annotations—than LLM-generated ones.  
- **Neutral is a signal:** High neutrality often meant subtle trade-offs or ambiguous visuals, not noise—pointing to richer objective formulations beyond single binary labels.

## Where This Can Be Used

- **Public engagement:** Generate options that mirror local priorities and surface trade-offs in workshops.  
- **Design iteration:** Rapidly visualize accessibility, comfort, or safety tweaks grounded in multi-criteria feedback.  
- **Policy & research:** Compare criteria across groups; explore steerable or personalized alignment strategies for different communities.

## Visuals

![Participatory workflow behind LIVS.](./images/participatory-approach-livs.png)
*A two-year co-creation process, from outreach and criteria-building to prompt design, comparison, and model tuning.*

![From 634 community concepts to six criteria.](./images/0_634-critiera.png)
*The distillation pipeline that reduced hundreds of community concepts into six working criteria.*

![Where models still miss for marginalized users.](./images/challenges_marginalized_users.png)
*A reminder that intersectional groups often continue to evaluate generated spaces differently from majority groups.*

---

**More:** [arXiv](https://arxiv.org/abs/2503.01894) · [OpenReview / ICML 2025](https://openreview.net/forum?id=Spoe53kbj9) · [Project & Dataset (mid-space.one)](https://mid-space.one)

*Tags: Pluralistic Alignment · Text-to-Image · Inclusive Urbanism · Multi-Criteria Preferences · Accessibility · Montréal*
