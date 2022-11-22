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

> Random Forests address both [[decision-tree]] issues ([[overfitting]] and instability). The idea is to **construct multiple trees using different subsets of the training data and features** for each tree in the forest. Then, **aggregate** their predictions by outputting the majority vote or the average value

The rationale is that **an ensemble of models is likely more accurate than a single tree**. So, even if a tree overfits its subset, we expect other trees in the forest to compensate for it. That’s why we use different subsets for each tree, to force them to approach the problem from different angles.

## Disadvantages

- Training complexity can be high
- Not very interpretable

> **A single tree is interpretable, whereas a forest is not**

Humans can visualize and understand a tree, no matter if they’re machine learning experts or laypeople. That’s not the case with forests. They contain a lot of trees, so **explaining how they output the aggregated predictions is very hard,** if not impossible.

# Reference
- https://www.baeldung.com/cs/decision-trees-vs-random-forests