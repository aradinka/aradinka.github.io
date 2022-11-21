---
title: "underfitting-overfitting"
tags:
- all-post
---

> When we say a model is underfitting or overfitting, it implies that the model does not generalized well to the unseen data.

why a model that fits well with the training data does not necessarily imply that it would generalize well to the unseen data? because...
- **the training data are just samples we collect from the real world**, which represents only a proportion of reality. It could be the case that the training data is simply not representative, thus even the model fits perfectly the training data, it would not fit well with the unseen data
- **the data that we collect contains noises and errors inevitably**. The model that fits perfectly with the data, would also capture the undesired noises and errors by mistake, which would eventually lead to bias and errors in the prediction for the unseen data

![](https://assets.leetcode.com/uploads/2019/01/01/underfitting.png)

> Read also: [[underfitting]]