---
title: openai function calling
tags:
- all-post
---

Kita bisa mendeskripsikan sebuah function dalam prompt, model akan secara cerdas membuat output berupa JSON yang berisi argument-argument yang dibutuhkan oleh function yang dibentuk

Model terbaru sudah di fine-tuned untuk dapat mendeteksi otomatis data-data yang dibutuhkan untuk menjalankan sebuah function yang dibentuk, dan mengetahui kapan sebuah prompt akan memanggil function tersebut atau tidak. 

Direkomendasikan untuk membuat semacam user confirmation flows sebelum memanggil sebuah function

Function akan dimasukkan kedalam system messages. Artinya, function akan ikut terhitung pada context limit dan dimasukkan kedalam bill jumlah tokens yang digunakan

Steps:
1. Send the conversation and list of available functions to GPT
2. Check the first response, is the GPT wanted to call a function. By check if there's any "function_call?" in response_message
3. Call the function by using the JSON from the first response
4. Append the messages with the new "function" role, the function name and the function_response as the content
5. Second call to chat completion model with the new message


Supported model: `gpt-3.5-turbo-0613` & `gpt-4-0613`

 
