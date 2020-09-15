let uploadButton = document.getElementById('upload-btn');

uploadButton.addEventListener('click', () => {
    let input = document.querySelector('input')
    console.log(typeof input.value);
    console.log("Making http post request.")
        if(input.value.length === 0){
        alert('Please upload a file');
}

});