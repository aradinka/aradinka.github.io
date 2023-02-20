---
title: "optical-character-recognition"
tags:
- all-post
enableToc: false
---

### Computer Vision Research Papers Popularity

- Image classification: 2881 papers with code
- Object detection: 2671 papers with code
- Semantic segmentation: 3562 papers with code
- Face recognition: 450 papers with code
- Optical character recognition: 216 papers with code

---

### Anatomi OCR

- Text Detection model
- Text Recognition model
- Key Information Extraction

---

### Mendapatkan Model

Using pre-trained model only

or 

Using pre-trained model, then finetune with our data


---

### Model Backbone

- Pytorch
	- Loved by researcher
	- Lots of paper using pytorch
- TensorFlow
	- TF Lite deployment friendly (android)

---

### Previous Work

Done by mas Anshar back in September 2022
- Comparing 3 popular library (**EasyOCR**, tesseract, keras-OCR)
- Run **in python** to extract KTP image data


---

### Current Progress

- Text detection model (Done using EasyOCR)
- Text recognition model (Done using EasyOCR)
- Key Information Extraction (Done using traditional programming approach)
	- indexing
	- text matching
	- text similarity
	- regular expression
	- 700 lines of code logic
	- This process can be replaced using object detection model

---

### Current Progress

- Deployment to mobile
	- **Done**: Convert EasyOCR PyTorch model to ONNX format
	- **In progress**: Breakdown model input and output, reduce model size
	- **Todo**: Run key extraction on android

---

### EasyOCR Process Breakdown

- reformat_input()
- detect()
	- get_textbox()
		- test_net() # torch
	- group_text_box()
- recognize()
	- get_text()
		- recognizer_predict() # torch
	- get_paragraph()
- extraction() # key information

---

### OCR Option

- EasyOCR
	- Most reliable, deployment ONNX
- Tesseract
	- Written in C++, not reliable
- Keras OCR
	- TFLite ready, not reliable
- Paddle OCR
	- Deployment ok, but some documentation only available in chinese
- Google ML Kit (offline and free)
	- Plug and play langsung di android (kotlin/java)
	- Size model cuma 4mb
- AWS Rekognition (cloud based service)
	- free 5k image per month for the first 12 months. 


---

## EasyOCR 

(+)
- Most reliable without any finetuning (plug and play in python)
- Pytorch model convertable to ONNX format
- Run inference ONNX format in python (done)

(-)
- ONNX to TFlite? Possible?
- Blm ada yg convert to TorchScript (Pytorch mobile runtime)
- Size model besar

---


### Deployment EasyOCR Option 1: Using ONNX Runtime

ONNX can be run on mobile devices. Model size: 14mb

Export the model from python
``` python
torch.onnx.export()
```

ONNX package on andorid
```
onnxruntime-android package
```

---

### Deployment EasyOCR Option 1: Using ONNX Runtime

GitHub Issues:
- Not officially support convert the model to TFlite. Looks likely it's possible to export to ONNX format (Nov 2020)
- There is already working guide to export the detection and recognition model to ONNX format and use ONNX runtime (Jun 2022) [link](https://github.com/JaidedAI/EasyOCR/issues/746)
- All models in ONNX format [link](https://github.com/JaidedAI/EasyOCR/issues/786)
- Fork [link](https://github.com/Kromtar/EasyOCR-ONNX/tree/easyocr_onnx)

---

### Deployment EasyOCR Option 1: Using ONNX Runtime

Todo:
- How to run ONNX model format on android
- Can we add information extraction (now written in python) and run in android

---

#### Option 2: Using PyTorch runtime

Convert the model to TorchScript

GitHub issue:
- We need to modify model classes [link](https://github.com/JaidedAI/EasyOCR/pull/801)

---

## Google ML Kit Vision

[Guide run in python](https://cloud.google.com/vision/docs/ocr#vision_text_detection-python)

(-)
Cloud
[Pricing list](https://cloud.google.com/vision/pricing)

---

## PaddleOCR

(+)
- Practical Ultra Lightweight OCR 
- Deployment sudah cukup mature
- Banyak implement research paper dan model
- Paddle to ONNX
- Compression ready Prune, Quantization & Distillation
- Key infromation extraction


(-)
- Blm menyelami, sepertinya beberapa opsi masih available only in chinese

---

## Other Library

- mmocr (OpenMMLab Computer Vision Community) 3k stars: pytorch
- docTR (Document Text Recognition): pytorch & tensorflow
- Davar-LAB OCR: pytorch

---

### Deploy on the Cloud

- Idea (write in python)
	- Add blur detection
	- Add corner detection
	- Fix image input brightness
	- Add super resolution
	- Add key information extraction using object detection model


---

#### Downstream task

- Document OCR 
	- [clovaai/donut](https://github.com/clovaai/donut) (research 2022)


---

### Usefull repo

- Compress ONNX Model: [nabarunbaruaAIML/onnx_model_size_compression](https://github.com/nabarunbaruaAIML/onnx_model_size_compression)
- torch to tf lite [omerferhatt/torch2tflite](https://github.com/omerferhatt/torch2tflite)
- run python on andriod [python for android](https://pypi.org/project/python-for-android/)
- kivy
- [Belval/TextRecognitionDataGenerator](https://github.com/Belval/TextRecognitionDataGenerator)


---

### Question

- ONNX model detection 81Mb, extraction 14Mb. Apakah ini akan ditaro di mobile langsung?
- Kalo make ML kit vision, app size impactnya cuma 260Kb

---

### Notes

- Deploy di android challenging (melibatkan 2 model, detection dan recognition)
- Kalau deploy di cloud akan jauh lebih mudah + bisa nambah banyak fitur lain

Kriteria library:
- Punya banyak contributors (berkelanjutan jika ada update)
- Kalopun hasil reserach paper bisa dicoba buat dicombine ke OCR yg sudah ada biasanya performanya lebih bagus tetapi blm tau urusan deployment

---

### Opsi deployment Online

- Deploy as API
- Sewa cloud CPU/GPU
- Image input call dari android dalam bentuk ByteArray tidak perlu upload image agar tidak berat
- Bisa menambahkan banyak fitur lain ; blur detection, corner detection, object detection untuk key value pair, fix brightness, super resolution

---

### Opsi Deployment Offline

1. **EasyOCR in ONNX format** 
	- Perlu reduce model size, process model output
	- create key information extraction native di dalem android
1. **ML Kit Vision** 
	- Perlu tambahan bikin code key information extraction native di dalem android

---

### Todo

- Breakdown OCR model input output
- Run extraction py script on android
- Compress ONNX model 
- Cobain sample app android dari TensorFlow dan Google. Liat performance nya di image KTP