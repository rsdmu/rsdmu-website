---
title: "Co-Producing AI for Evaluating Public Spaces"
date: "2024-06-15"
path: "co-producing-ai-evaluating-public-spaces"
type: "work"
thumbnail: "./images/points_60.png"  # Update with your thumbnail image path
author: "Rashid Mushkani, University of Montreal, Mila - Quebec AI Institute"
description: "A collaborative project utilizing AI to assess and design inclusive public spaces in Montreal, integrating community input and ethical AI practices."
---

## Problem

Public spaces in Canadian cities are often designed without adequate tools to measure and compare the risks of exclusion based on factors such as gender, age, and religiosity. As cities become increasingly diverse, marginalized communities—including elderly women, LGBTQ+ individuals, people with disabilities, and indigenous populations—experience differential access and utilization of these spaces. This lack of inclusivity can lead to socially fragmented urban environments and reduced social cohesion.

## Project Objectives

- **Assess Inclusivity:** Develop AI models to evaluate the inclusiveness of public spaces in Montreal.
- **Community Engagement:** Involve diverse citizen groups in the assessment and design process to ensure public spaces meet varied community needs.
- **Ethical AI Development:** Implement participatory and intersectoral AI production methods to address potential biases and ethical challenges.

## Methodology and Analyses

1. **Semi-Structured Interviews:**  
   Conducted with representatives of diverse groups in Montreal to gather insights into the utilization of street spaces by marginalized communities.

2. **Focus Group Exercises:**  
   Engaged 20 participants from varied backgrounds to evaluate aspects like safety and accessibility in urban spaces using curated Mapillary images.

3. **Pairwise Image Comparison:**  
   Pairwise comparisons and labeling of 15,000 Mapillary images, guided by criteria developed from interviews and focus groups.

4. **Algorithm Training and Evaluation:**  
   Fine-tuned a Multi-Layer Perceptron (MLP) pretrained on ImageNet to correlate image attributes with inclusivity scores, followed by workshop evaluations with participants.


## Results and Impact

The heatmap below illustrates the inclusivity of various public spaces in Montreal based on our AI model's analysis.

<iframe src="./images/montreal_folium_heatmap_group_inclusivity.html" width="100%" height="600px" style="border:none;"></iframe>


The heatmap generated from the AI model highlights areas in Montreal that are more or less inclusive. Key findings include:

- **Predictive Accuracy:** The AI model achieved approximately 90% accuracy in predicting the inclusivity of public spaces based on spatial elements like sidewalk construction and surrounding buildings.
- **Community Insights:** Engagement with diverse community groups provided valuable criteria that enhanced the model’s relevance and effectiveness.
- **Urban Planning:** The heatmap serves as a tool for urban planners to identify and address areas needing improvement, fostering more inclusive and cohesive urban environments.

## Future Directions

- **Platform Development:** Create a user-friendly platform to facilitate public consultations, allowing citizens to visualize and contribute to the design of their neighborhoods.

- **Data Expansion:** Increase the dataset with more images to improve AI model accuracy and reduce biases.

- **Partnerships and Funding:** Seek collaborations and funding to pilot the platform and expand the project’s reach.

## Related Links

- [University of Montreal](https://www.umontreal.ca/)
- [Mila - Quebec AI Institute](https://mila.quebec/en)

## Tags

<div class="tags">
  <span class="tag">Artificial Intelligence</span>
  <span class="tag">Urban Planning</span>
  <span class="tag">Inclusivity</span>
  <span class="tag">Community Engagement</span>
  <span class="tag">Public Spaces</span>
</div>
