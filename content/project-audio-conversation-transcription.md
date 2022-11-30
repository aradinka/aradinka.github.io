---
title: "project-audio-conversation-transcription"
tags:
- all-post
enableToc: false
---

## Details

Packages:
- TensorFlow: Model
- SoundFile:
- Pydub
- webrtcvad
- pyannote.audio
- scikit-learn: hierarchical, spectral, silhouette_score
- scipy: read and write audio files, create laplacian matrix spectral clustering

## Questions

Bagaimana model deep learningnya?
- Shared CNN + VLAD layer
- [[vgg-speaker-recognition]]

Bagaimana cara kerja voice activity detectionnya?
- https://github.com/wiseman/py-webrtcvad
- WebRTC: write in C

Metrics apa yang digunakan?
- [[diarization-error-rate]]
- ketepatan clustering

Bagaimana membuat datasetnya?
- dataset percakapan yang dibentuk dari potongan-potongan suara voxceleb1

Apa perbedaan hierarchical clustering dan spectral clustering?
- 