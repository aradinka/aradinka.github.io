---
title: "batch-size"
tags:
- all-post
---

Baca tentang [[batch-nomalization]]

Batch size salah satu yang bisa kita tuning. Tuning batch sizenya sampai kita mendapatkan performa yang maksimum 

Pengaruh batch size pada performa model:
- Terlalu kecil: Distribusi hasil batch normalization kurang bagus. Kadang skew ke kiri kadang ke kanan
- Terlalu besar: Hessian matrix tidak mencerminkan local minima

- Apabila menggunakan batch size besar, gunakan [[learning-rate]] yang kecil


[Innovation Day: MultiGPU Infrastructure & Implementation](https://youtu.be/IayDLHyHqlE?t=3574)