---
title: code-screen
tags:
- all-post
---

# outside session

```
# create screen session
screen -S session_name

# kill complete session
screen -S [session_name] -X quit

# detatch running session
screen -d [session_name}]
```

# inside session

```
# create new window
ctrl a, c

# list all window
ctrl a, "

# split horizontally
ctrl a, s

# change between tab
ctrl a, tab

# exit window
ctrl a, d
```
