---
title: "What is l1 regularization?"
tags:
- what-is
- areas-ds-interview
---

The main objective of creating a model (training data) is making sure it fits the data properly and reduce the loss. Sometimes the model that is trained may fail and give a poor performance during analyzing the test data. This leads to overfittng. Regularization came to overcome overfitting.

Lasso regression (Least Absolute Shrinkage and Selection Operator) adds "Absoule value of magnitude" of coefficient, as penalty term to the loss function. Lasso shrinks the less important features coefficient to zero, thus removing some feature altogether. So this works well for feature selection in case we have a huge number of features.


Methods like cross-validation, stepwise regression are there to handle overfitting and perform feature selection work well with a small set of features. There techniques are good when we are dealing with a large set of features.

Along with shrinking coefficients, the lasso performs feature selection as well. Because some of the coefficients become exactly zero, which is equivalent to the particular feature being excluded from the model.

> Source: [iNeuronai](https://github.com/iNeuronai/interview-question-data-science-)