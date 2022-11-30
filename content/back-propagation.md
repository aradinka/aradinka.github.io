---
title: back propagation
tags:
- all-post
---

Backpropagation:
- Is a short form of "backward propagation of errors"
- It's the standard method of training [[artificial-neural-network]]
- It helps to calculate the [[gradient]] of a [[loss-function]] with respects to all the weights in the network
- This method of fine-tuning the weights of a neural net based on the errors rate obtained in the previous epoch.
- Proper tuning of the weights -> Allow us to reduct error rates -> make the model reliable by increasing it's generalisation

Advantages:
- Fast, simple, and easy to program
- It has no parameters to tune apart from the num of input
- It doesn't need any special mentions of the features of the function to be learned

Algorithm:
For each sample in the training set...
- compute the output signal
- compute the error corresponding to the output level
- propagate the error back into the network and store the corresponding delta values for each layer
- adjust each weight by using the error signal and input signal for each layer
