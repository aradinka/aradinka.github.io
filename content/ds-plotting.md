---
title: "ds-plotting"
tags:
- all-post
enableToc: false
---

## Read csv

- parse_dates
- index_col

## Plotting in notebook setup

```python
import pandas as pd
pd.plotting.register_matplotlib_converters()
import matplotlib.pyplot as plt
%matplotlib inline
import seaborn as sns
```

## Define Your Viz Goals

- Trends: lineplot
- Relationship: scatterplot, lmplot,  regplot, heatmap, swarmplot 
- Distribution: histogram, kde, 2d kde
- Compare values: barplot

## Plot Option Based on Data Types

- date time + multiple variable: line plot
- 1 numeric: histogram, kde
- 1 numeric multiple categorical: histogram
- 2 numeric: scatterplot, 2d kde
- 2 numeric + 1 categorical: scatterplot, lm regression plot
- 1 categorical + 1 numeric: barplot, swarmplot
- 2 categorical + 1 numeric: histogram, kde, barplot, heatmaps


## Line Plot

```python
plt.figure(figsize=(14,6))

plt.title("Daily Global Streams of Popular Songs in 2017-2018")

sns.lineplot(data=spotify_data['Shape of You'], label="Shape of You")
sns.lineplot(data=spotify_data['Despacito'], label="Despacito")

plt.xlabel("Date")
```

## Bar Plot

```python
plt.figure(figsize=(14,7))

sns.barplot(x=flight_data.index, y=flight_data['NK'])
plt.ylabel("Arrival delay (in minutes)")
```

## Heatmaps

```python
sns.heatmap(data=flight_data, annot=True)
```

## Scatter Plot

```python
# color by smoker categorical data
sns.scatterplot(x=insurance_data['bmi'], y=insurance_data['charges'], hue=insurance_data['smoker'])

# add regression line
sns.regplot(x=insurance_data['bmi'], y=insurance_data['charges'])
# colored by smoker categorical data, create 2 regression line
sns.lmplot(x="bmi", y="charges", hue="smoker", data=insurance_data)
```

### Categorical Scatter Plot

```python

# smoker=category, charges=numeric
sns.swarmplot(x=insurance_data['smoker'],
              y=insurance_data['charges'])
```

## Histogram

```python
sns.histplot(data=iris_data, x='Petal Length (cm)', hue='Species')
```

### KDE (Kernel Density Estimation) Plot

> smoothed histogram

```python
sns.kdeplot(data=iris_data, x='Petal Length (cm)', hue='Species', shade=True)
```

### 2D KDE (Kernel Density Estimation) Plot

```python
sns.jointplot(x=iris_data['Petal Length (cm)'], y=iris_data['Sepal Width (cm)'], kind="kde")
```