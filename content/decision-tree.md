---
title: "decision-tree"
tags:
- all-post
- algorithm
---

## Summary

It's a tree-shaped supervised learning algorithm, works on if-then statement, that can be used in classification and regression problems. The input can be both continuous and categorical. Feature values are preferred to be categorical, if continuous they are discretized.

Advantages:
- can handle missing values
- explainable and interpretable

Disadvantages:
- prone to [[overfitting]]
- sensitive to [[outlier]]

Use Cases:
- [[customer-churn-prediction]]
- [[credit-scoring]]
- [[disease-prediction]]


### Overfitting and Instability of Decision Trees


Overfitting:
- Decision trees prone to [[overfitting]] the data. Since **accuracy improves with each internal node**, **training will tend to grow a tree to its maximum** to improve the performance metrics.
- That deteriorates the tree’s generalization capability and usefulness on unseen data since it will start modeling the noise

Instability:
- We can limit the tree’s depth beforehand, but there’s still the problem of instability
- even **small changes to the training data**, such as excluding a few instances, **can result in a completely different tree**

## Depth of the tree

When we divide the houses amongst many leaves, we also have fewer houses in each leaf. Leaves with very few houses will make predictions that are quite close to those homes' actual values, but they may make very unreliable predictions for new data (because each prediction is based on only a few houses).

On the flip side, if we make our tree very shallow, it doesn't divide up the houses into very distinct groups. 

At an extreme, if a tree divides houses into only 2 or 4, each group still has a wide variety of houses. Resulting predictions may be far off for most houses, even in the training data (and it will be bad in validation too for the same reason)

 A deep tree with lots of leaves will overfit because each prediction is coming from historical data from only the few houses at its leaf. But a shallow tree with few leaves will perform poorly because it fails to capture as many distinctions in the raw data.


## Splitting the Data

> When splitting, we choose to partition the data by the attribute that results in the **smallest impurity** of the new nodes


## Control overfitting in decision tree

_max_leaf_nodes_ argument provides a very sensible way to control overfitting vs underfitting. The more leaves we allow the model to make, the more we move from the underfitting area to the overfitting area.

## Algorithm

> A decision tree uses different algorithms to decide whether to split a node into two or more sub-nodes. **The algorithm chooses the partition maximizing the purity of the split (i.e., minimizing the [[impurity]])**

impurity is a measure of **homogeneity** of the labels at the node at hand

### ID3 (Iterative Dichotomiser)

- Uses [[entropy]] and [[information-gain]] as metrics to form a better decision tree
- The attribute with the highest information gain is used as a root node, and a similar approach is followed after that 
- Entropy is the measure that characterizes the [[impurity]] of an arbitrary collection of examples
- when entropy $H(S)=0$, the set is perfectly classified (all element in $S$ are of the same class)
- when entropy $H(S)=1$, the class distribution is equal
- entropy is calculated for each remaining attribute, the attribute with the smallest entropy is used to split the set $S$ on this iteration
- the higher the entropy, the higher potential to improve the classification here

![](entropy-1.png)


## Reference

- https://www.baeldung.com/cs/decision-trees-vs-random-forests
