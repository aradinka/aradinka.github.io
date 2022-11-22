---
title: "gini-impurity-index"
tags:
- all-post
enableToc: false
---

> Gini Index is related to the **misclassification probability** of a random sample

Gini Index may result in values inside the interval [0, 0.5]
- The minimum value of zero corresponds to **a node containing the elements of the same class**. In case this occurs, the node is called **pure**
- The maximum value of 0.5 corresponds to the highest impurity of a node. Called **impure**

# Example

In this example, we’ll compute the Gini Indices for 3 different cases of a set with 4 balls of two different colors, red and blue

- 4 red, 0 blue
	- ![](https://www.baeldung.com/wp-content/ql-cache/quicklatex.com-03178ed050fa7f5ac3d42af8f8535842_l3.svg)
- 2 red, 2 blue
	- ![](https://www.baeldung.com/wp-content/ql-cache/quicklatex.com-feb5ec6ce739f898c6c6ff05c2a9b904_l3.svg)
- 3 red, 1 blue
	- ![](https://www.baeldung.com/wp-content/ql-cache/quicklatex.com-26774e1805b1b0048d64045c59ca7593_l3.svg)

# Reference
- https://www.baeldung.com/cs/impurity-entropy-gini-index