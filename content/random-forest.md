---
title: "random-forest"
tags:
- all-post
- algorithm
enableToc: false
---

# Advantages & Disadvantages

## Advantages

- Reduces [[overfitting]]
- Higher accuracy compared to other models

The rationale is that **an ensemble of models is likely more accurate than a single tree**. So, even if a tree overfits its subset, we expect other trees in the forest to compensate for it. That’s why we use different subsets for each tree, to force them to approach the problem from different angles.

The random forest uses many trees, and it makes a prediction by averaging the predictions of each component tree.

## Disadvantages

- Training complexity can be high
- Not very interpretable

> **A single tree is interpretable, whereas a forest is not**

Humans can visualize and understand a tree, no matter if they’re machine learning experts or laypeople. That’s not the case with forests. They contain a lot of trees, so **explaining how they output the aggregated predictions is very hard,** if not impossible.

# Reference
- https://www.baeldung.com/cs/decision-trees-vs-random-forests
- https://www.kaggle.com/code/dansbecker/random-forests/tutorial
