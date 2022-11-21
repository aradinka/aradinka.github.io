---
title: "What is l2 regularization?"
tags:
- all-post
- what-is
- areas-ds-interview
---

Overfitting happens when the model learns signal as well as noise in the training data and wouldn't perform well on new/unseen data on which model wasn't trained on. To avoid overfitting, we do cross-validation sampling, reducing the number of features, pruning, regularization, etc.

The regressioin model that uses L2 regularization is called ridge regression. Regularization adds the penalty as model complexity increases. The regularization parameter ($\lambda$) penalizes all the parameters except intercept so that the model generalized the data and won't overfit.

Ridge regression add "squared magnitude of the coefficient" as penalty term to the loss function. If the $\lambda$ is zero, then it is equivalent to [OLS](ordinary-least-square-model.md). But if the lambda is very large, then it will add too much weight, and it will lead to underfitting.

Ridge regularization forces the weights to be small but doesn't not make them zero, and doesn't give the sparse solution. Ridge is not robust to outliers as square terms blow up the error differences of the outliers, and the regularization term tries to fix it by penalizing the weights.

Ridge regression performs better when all the input features influence the output, and all with weights are of roughly equal size. L2 regularization can learn complex data patterns.

> Source: [iNeuronai](https://github.com/iNeuronai/interview-question-data-science-)