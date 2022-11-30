---
title: weights in deep learning
tags:
- all-post
---

Weights are usually initialised randomly. The initialization takes a fair amount of repetitions to converge to the least loss and reach the ideal weight matrix.

The problem is that kind of initialization is prone to vanishing or [[exploding-gradient]] problesms

General ways to make it initialize better weight:
Using [[relu]] activation function in the deep nets
- generate random sample of weights from a [[gaussian-distribution]] having mean 0 and standard deviation 1
- multiply the sample with the square root of (2/num of input unit for that layer)

Using [[tanh]] activation function
- generate random sample of weights from a [[gaussian-distribution]] having mean 0 and standard deviation 1
- multiply the sample with the square root of (1/several input unit for that layer)
