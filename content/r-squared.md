---
title: "What is R squared?"
tags:
- what-is
- areas-ds-interview
---

R-squared is a statistical measure of how close the data are to the fitted regression line. It is also known as the coefficient of determination, or the coefficient of multiple determination for multiple regression. 

R-squared explained `variation / total variation`. R-squared is always between 0% and 100%. 0% indicates that the model explains none of the variability of the response data around it's mean. 100% indicates that the model explains all the variability of the response data around it's mean. In general, the higher the R-squared, the better the model fits your data.

$$
R^2 = 1 - \frac{SS_{Regression}}{SS_{Total}} = \frac{\sum_i{(y_i - \hat{y_i})^2}}{\sum_i{(y_i - \bar{y_i})^2}}
$$

There is a problem with the R-squared. The problem araises when we ask this question to ourselves. "Is it good to help as many independent variable as possible?" The answer is No, because we understood that each independent variable should have a meaningful impact. 

But, even if we add independent variables which are not meaningfully. will it improve R-squared value? Yes, this is the basic problem with R-squared. How many junk independent variables or important independent variable or impactful independent variable you add to your model, **the R-squared value will always increase**. It will never decrease with the addition of a newly independent variable, whether it could be an impactful, non-impactful, or bad variable. So we need another way to measure equivalent R-squared, which panilizes our model with any junk independent variable.

So, we calculate the Adjusted R-squared with a better adjustment in the formula of generic R-squared.

$$
R^2 adjusted = 1 - \frac{(1-R^2)(N-1)}{N-p-1}
$$

where, $R^2$ is the sample R-square, $p$ is the number of predictors, and $N$ is the total sample size.