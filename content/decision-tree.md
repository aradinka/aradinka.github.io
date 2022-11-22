---
title: "decision-tree"
tags:
- all-post
- algorithm
---

# What is decision tree?

> a type of supervised learning algorithm that **can be used in classification as well as regressor problems**

> works on an if-then statement, tries to solve a problem by using tree representation (node and leaf)

Input: can be both continuous as well as categorical

Assumptions while creating a decision tree:
1. Initially all the training set is considered as a root
2. **Feature values are preferred to be categorical**, if continuous then they are discretized
3. Records are distributed recursively on the basis of attribute values
4. Which attributes are considered to be in root node or internal node is done by using a statistical approach

![](decision-tree-1.png)

# Use Cases

- [[customer-churn-prediction]]
- [[credit-score-modelling]]
- [[disease-prediction]]

# Advantages & Disadvantages

Advantages:
- explainable and interpretable
- can handle missing values

Disadvantages:
- Prone to [[overfitting]]
- Sensitive to [[outlier]]


# Algorithm

> A decision tree uses different algorithms to decide whether to split a node into two or more sub-nodes. **The algorithm chooses the partition maximizing the purity of the split (i.e., minimizing the [[impurity]])**

impurity is a measure of **homogeneity** of the labels at the node at hand

## ID3 (Iterative Dichotomiser)

- Uses [[entropy]] and [[information-gain]] as metrics to form a better decision tree
- The attribute with the highest information gain is used as a root node, and a similar approach is followed after that 
- Entropy is the measure that characterizes the [[impurity]] of an arbitrary collection of examples
- when entropy $H(S)=0$, the set is perfectly classified (all element in $S$ are of the same class)
- when entropy $H(S)=1$, the class distribution is equal
- entropy is calculated for each remaining attribute, the attribute with the smallest entropy is used to split the set $S$ on this iteration
- the higher the entropy, the higher potential to improve the classification here

![](entropy-1.png)