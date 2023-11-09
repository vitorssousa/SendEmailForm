const form = document.querySelector("form")
const statusTxt = document.querySelector(".button-area span")


form.onsubmit = (e) => {
    statusTxt.style.color = "#0D6EFD"
    
    e.preventDefault()
    

    let xhr = new XMLHttpRequest()

    xhr.open("POST", "message.php")
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.response)
            
            if(xhr.response.indexOf("Email and Message are required") != 1 || xhr.response.indexOf("Enter a valid email address!") != 1 || xhr.response.indexOf("Sorry, failed to send your message!") != 1){
                statusTxt.style.color = "red"
            } else {
                form.reset()
                setTimeout(() => {
                    statusTxt.style.display = "none"
                }, 3000);
            }
            statusTxt.innerText = xhr.response
        } else{
            statusTxt.style.display = "block" 
        } 
    }
    let formData = new FormData(form)
    xhr.send(formData)
}



