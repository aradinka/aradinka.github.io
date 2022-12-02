---
title: "uji-rata-rata-1-populasi"
tags:
- all-post
enableToc: false
---

Bagaimana melakukan Uji Rata-rata 1 Populasi dengan nilai varians diketahui?
- Diasumsikan bahwa $X \sim N(\mu, \sigma^2) ; \sigma^2>0$
- Hipotesis uji satu arah 
    - $H_0:\mu=\mu_0$
    - $H_1:\mu>\mu_0$ atau $H_1:\mu<\mu_0$ (uji sisi kanan dan sisi kiri)
- Hipotesis uji dua arah 
    - $H_0:\mu=\mu_0$
     - $H_1:\mu \neq \mu_0$
- Statistik uji
	- $Z_{hit} = \frac{\bar X - \mu_0}{\sigma / \sqrt{n}}$
- Daerah kritis / penolakan $H_0$ uji satu arah 
	- Tolak $H_0$  jika $Z_{hit} > Z_{\alpha}$ (sisi kanan)
	- Tolak $H_0$  jika $Z_{hit} < -Z_{\alpha}$ (sisi kiri)
    Daerah kritis / penolakan H_0 uji dua arah 
        Tolak $Z_{hit} > Z_{\alpha/2}$ jika $Z_{hit}$ < $-Z_{\alpha/2}$ atau jika $Z_{hit} < -Z_{\alpha}$ 

Bagaimana melakukan Uji Rata-rata 1 Populasi dengan nilai varians tidak diketahui?↓↓
- Diasumsikan bahwa $X \sim N(\mu, \sigma^2) ; \sigma^2>0$
- Hipotesis uji satu arah
	- $H_0:\mu=\mu_0$ 
	- $H_1:\mu>\mu_0$ atau $H_1:\mu<\mu_0$ (uji sisi kanan dan sisi kiri)
- Hipotesis uji dua arah
	- $H_0:\mu=\mu_0$
	- $H_1:\mu \neq \mu_0$
- Statistik uji
	- $T_{hit} = \frac{\bar X - \mu_0}{s / \sqrt{n}}$
- Daerah kritis / penolakan $H_0$ uji satu arah
	- Tolak $H_0$ jika $Z_{hit} > Z_{\alpha}$ (sisi kanan)
	- Tolak $H_0$ jika $Z_{hit} < -Z_{\alpha}$ (sisi kiri)
- Daerah kritis / penolakan $H_0$ uji dua arah
	- Tolak $Z_{hit} > Z_{\alpha/2}$ jika $Z_{hit} < -Z_{\alpha/2}$ atau jika $Z_{hit} < -Z_{\alpha}$