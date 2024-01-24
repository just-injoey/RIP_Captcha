// var applicationNumber = document.getElementById("UserName").value;

// document.getElementById("ccode").value = "A782";
// document.getElementById("UserName").value = "AP21110010978";
// extractCaptchaText();

document.querySelector('[ng-model="accused.rc_no"]').value = "2343";

// Assuming the image is on the same domain
var captchaImage = document.getElementById('captchaimg');
var captchaInput = document.getElementById('captcha');

// Create a canvas element
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

// Set the canvas dimensions to match the image
canvas.width = captchaImage.width;
canvas.height = captchaImage.height;

// Draw the image onto the canvas
ctx.drawImage(captchaImage, 0, 0, captchaImage.width, captchaImage.height);

// Get the image data
var imageData = ctx.getImageData(0, 0, captchaImage.width, captchaImage.height);

// Use Tesseract.js to extract text from the image
Tesseract.recognize(
    imageData.data,
    {
        lang: 'eng',
    }
).then(({ data: { text } }) => {
    // Set the value of the captcha input
    captchaInput.value = text.trim();
});





// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById("UserName").value = "AP21110010978";
//     extractCaptchaText();
// });

// function extractCaptchaText() {
//     var captchaImage = document.querySelector('.form-group.textbox-wrap img');
    
//     // Convert image source to data URL
//     var canvas = document.createElement('canvas');
//     var context = canvas.getContext('2d');
//     var img = new Image();
//     img.crossOrigin = 'Anonymous';

//     img.onload = function() {
//         canvas.width = img.width;
//         canvas.height = img.height;
//         context.drawImage(img, 0, 0, img.width, img.height);
//         var dataURL = canvas.toDataURL('image/png');

//         // Use Tesseract.js to recognize text
//         Tesseract.recognize(
//             'https://i.ibb.co/L97ShyB/download.jpg',
//             'eng', // Language code (e.g., 'eng' for English)
//             { logger: info => console.log(info) }
//         ).then(({ data: { text } }) => {
//             // Assuming 'text' contains the extracted captcha text
//             console.log('Extracted Captcha Text:', text);

//             // Now you can use the 'text' variable as needed (e.g., set it as the value of the input field)
//             document.getElementById('ccode').value = text;
//         });
//     };

//     img.src = captchaImage.src;
// }
    
// function extractCaptchaText() {
//     var captchaImage = document.querySelector('.form-group.textbox-wrap img');
    
//     Tesseract.recognize(
//         captchaImage.src,
//         'eng', // Language code (e.g., 'eng' for English)
//         { logger: info => console.log(info) }
//     ).then(({ data: { text } }) => {
//         // Assuming 'text' contains the extracted captcha text
//         console.log('Extracted Captcha Text:', text);

//         // Now you can use the 'text' variable as needed (e.g., set it as the value of the input field)
//         document.getElementById('ccode').value = text;
//     });
// }


// //var value = ${intValue}

// //you may not need cors
// //fetch('https://yourapi').then(function (response) {
//     fetch("https://localhost:44320/sampleformdata/book", {mode: 'cors'}).then(function (response) {
//         //fetch(`https://localhost:44320/sampleformdata/?value=${value}`, {mode: 'cors'}).then(function (response) {
//             // The API call was successful!
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 return Promise.reject(response);
//             }
//         }).then(function (data) {
//             // This is the JSON from our response
//             fillforms(data);
//             console.log(data);
//         }).catch(function (err) {
//             // There was an error
//             console.warn('Something went wrong.', err);
//         });
        
//         function fillforms(data){
        
//             fillField(document.querySelector('input[name="fullname"]'), data.title);
//             fillField(document.querySelector('input[name="email"]'), data.author);
//             fillField(document.querySelector('input[name="city"]'), data.pages);
        
//             //form2
//             fillField(document.getElementById('field1'), data.title);
//             fillField(document.querySelector('input[aria-label="field2"]'), data.author);
//             fillField(document.querySelector('input[class="field3"]'), data.pages);
//         }
        
//         function fillField(selector, value)
//         {
//             var field = selector();
//             fillField(field, value);
//         }
        
        
//         function fillField(field, value){
//             if(field){
//                 field.value = value;
//             }  
//         }
        
//         // function fillforms1(data){
//         //     //form1
//         //     var fullname = document.querySelector('input[name="fullname"]');
//         //     fillField(fullname, data[0]);
        
//         //     var email = document.querySelector('input[name="email"]');
//         //     fillField(email, data[1]);
        
//         //     //city
//         //     var city = document.querySelector('input[name="city"]');
//         //     fillField(city, data[2]);
        
//         //     //form2
//         //     var field1 = document.getElementById('field1');
//         //     fillField(field1, data[0]);
        
//         //     var field2 = document.querySelector('input[aria-label="field2"]');
//         //     fillField(field2, data[1]);
        
//         //     //probably terrible to look for a class like this.. 
//         //     var field3 = document.querySelector('input[class="field3"]');
//         //     fillField(field3, data[2]);
//         // }
        
        
        
        
//         // {
//         //     "title":"The Cat in the Hat",
//         //     "author":"Dr. Seuss",
//         //     "pages":"48"
//         // }
//         // function fillforms2(data){
//         //     //form1
//         //     var title = document.querySelector('input[name="fullname"]');
//         //     fillField(title, data.title);
        
//         //     var author = document.querySelector('input[name="email"]');
//         //     fillField(author, data.author);
        
//         //     //form2
//         //     var field1 = document.getElementById('field1');
//         //     fillField(field1, data.title);
        
//         //     //probably terrible to look for a class like this.. 
//         //     var field3 = document.querySelector('input[class="field3"]');
//         //     fillField(field3, data.pages)
//         // }
        
        
        
        
        
        
        
        
        
        