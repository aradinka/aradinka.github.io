---
title: "overfitting"
tags:
- all-post
---

> An overfitting model is the one that fits well with the training data, _i.e._ little or no error, however it does not generalized well to the unseen data

> a model matches the training data almost perfectly, but does poorly in validation and other new data

> overfitting capturing spurious (false) patterns that won't recur in the future, leading to less accurate predictions

How to avoid overfitting?
- try out another algorithm that could **generate a simpler model** from the training data set
- adds a [[regularization]] term to the algorithm, _i.e._ penalizing the model that is over-complicated so that the algorithm is steered to generate a less complicated model while fitting the data
