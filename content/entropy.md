---
title: "entropy"
tags:
- all-post
enableToc: false
---

> In statistics, entropy is a measure of information

![](entropy-1.png)

- varies from 0 to 1
	- 0: all the data belong to a single class
	- 1: the class distribution is equal
- a measure of the amount of uncertainity in the data set
- when $H(S)=0$, the set is perfectly classified (all element in $S$ are of the same class)

---

Let’s assume that a dataset T associated with a node contains examples from n classes. Then, its entropy is:

![](https://www.baeldung.com/wp-content/ql-cache/quicklatex.com-004399bf736b5463087bdd15d256e30e_l3.svg)

where $p_j$ is the relative frequency of class $j$ in $T$. 

As is the case with the [[gini-impurity-index]], a node is pure when $entropy(T)$ takes its minimum value, zero, and impure when it takes its highest value, 1.

## Example

- 4 red, 0 blue
	- ![](https://www.baeldung.com/wp-content/ql-cache/quicklatex.com-ba59773932c9932bd2af5ee6be657e67_l3.svg)
- 2 red, 2 blue
	- ![](https://www.baeldung.com/wp-content/ql-cache/quicklatex.com-f8f46c401aa3e27c2e16351823618aa8_l3.svg)
- 3 red, 1 blue
	- ![](https://www.baeldung.com/wp-content/ql-cache/quicklatex.com-6a910318c70392856b99697b48b0ecec_l3.svg)

## Information Gain

> The information gain is the difference between a **parent node’s entropy** and **the weighted sum of its child node entropies**.

Let’s assume a dataset $T$ with $N$ objects is partitioned into two datasets: $T_1$ and $T_2$ of sizes $N_1$ and $N_2$. **Then, the split’s Information Gain ($Gain_{split}$) is**:

![](https://www.baeldung.com/wp-content/ql-cache/quicklatex.com-652f1dd07771006ca61719507ae7784a_l3.svg)

In general, if splitting $T$ into m subsets $T_1, T_2, \ldots, T_m$ with $N_1, N_2, \ldots, N_m$ objects, respectively, the split’s Information Gain ($Gain_{split}$) is:

![](https://www.baeldung.com/wp-content/ql-cache/quicklatex.com-1c53327d676f878366ba10c245666a00_l3.svg)

### Example Splitting by Information Gain

https://www.baeldung.com/cs/impurity-entropy-gini-index#2-example-splitting-by-information-gain

steps:
- determine the attribute that offers the highest Information Gain


## References
- https://www.baeldung.com/cs/impurity-entropy-gini-index