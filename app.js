//generate QR function for click buuton 
function generateQRCode(){
   //input fields connect with js, selector for text
const searchTextInput = document.querySelector("#searchInputText").value; 
//input fields connect with js, selector for width
const searchWidthInput = document.querySelector("#searchInputWidth").value;
//input fields connect with js, selector for height
const searchInputHeight = document.querySelector("#searchInputHeight").value;


    //clear input fields
    document.querySelector("#searchInputText").value = "";
    document.querySelector("#searchInputWidth").value = "";
    document.querySelector("#searchInputHeight").value = "";
    
//passing the api funtion and parameters from user inputs
    fetchQRapi(searchTextInput, searchWidthInput, searchInputHeight);
    

    
};
//fetch QR api from go qr api 
function fetchQRapi(inputText,inputWidth,inputHeight){
    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${inputWidth}x${inputHeight}&data=${inputText}`)

// fetching the url to img an perticular position

    .then((data) => document.querySelector("#generateImg").src = data.url);


  
};