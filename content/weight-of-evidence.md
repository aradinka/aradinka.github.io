---
title: "weight-of-evidence"
tags:
- all-post
enableToc: false
---


### Weight of Evidence

Weight of Evidence(WoE):

  

$$wo{e_i} = \ln {{{P_{yi}}} \over {{P_{ni}}}} = \ln {{{y_i}/{y_s}} \over {{n_i}/{n_s}}}$$

$wo{e_i}$ is the I category's WOE value. ${{P_{yi}}}$ is the proportion of the positive samples in this category to all positive samples. ${{P_{ni}}}$ is the ratio of negative samples (${{n_i}}$) in this class to all negative samples (${{n_s}}$).

  

Information Value (IV):

$$I{V_i} = ({P_{yi}} - {P_{ni}}) \times wo{e_i}$$

The IV values of the various types are the difference between the conditional positive rate and the conditional negative rate multiplied by the WOE value of the variable. The total IV value of the variable can be understood as the weighted sum of the conditional positive rate and the conditional negative rate difference:

$$IV = \sum\limits_i^n {I{V_i}} $$

  

The IV value measures the variable's ability to predict.

--- 

Relationship between IV value and predictive power

  

| IV| Ability to predict |

|------|------|

| <0.02 | Almost no predictive power |

|0.02~0.1 |weak predictive power|

|0.1~0.3|Moderate predictive power|

|0.3~0.5|Strong predictive power|

|>0.5|Predictive power is too strong, need to check variables|