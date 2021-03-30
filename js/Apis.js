const myForm = document.querySelector("#contactForm");

const submitBtn = document.querySelector("#submitBtn");

const documentErrorMessages = document.querySelector(".errorMessage");

const successMessage = document.querySelector(".succesMessage");

let errorArray = [];

submitBtn.addEventListener('click', (e) => {

     e.preventDefault();

     submitBtn.innerHTML = "sending...";

     const nameRegex = /^[a-z]+/gi;

     const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;
 
    
     successMessage.innerHTML = "";

     documentErrorMessages.classList.remove("errorMessage2");

     documentErrorMessages.classList.add("errorMessage");

     successMessage.classList.add("successMessage");

     successMessage.classList.remove("succesMessage2");

    while (documentErrorMessages.firstChild) {
      documentErrorMessages.removeChild(documentErrorMessages.lastChild);
    }

    errorArray = [];

    let fullName =  myForm.elements[0].value;

    let  email = myForm.elements[1].value;

    let  message = myForm.elements[2].value;

    if(!fullName || !email || !message) {
      
      errorArray.push("please fill all fields")

      errorArray.forEach(error => {
        let nodeList = document.createElement("p");
        var textnode = document.createTextNode(error);
        nodeList.appendChild(textnode);
        documentErrorMessages.appendChild(nodeList);
          });
          documentErrorMessages.classList.remove("errorMessage");
          documentErrorMessages.classList.add("errorMessage2");
          submitBtn.innerHTML = "Message Us!";
    }
    else {
        
        if (fullName.length < 2 ) {
            errorArray.push('name should be greater than one character');
          }
      
          if (!nameRegex.test(fullName)) {
      
            errorArray.push('name should be only alphabeths');
          }
      
          if (!emailRegex.test(email)) {
            errorArray.push('please input a valid email');
          }
      
          if (errorArray.length > 0) {

              errorArray.forEach(error => {
            let nodeList = document.createElement("p");
            var textnode = document.createTextNode(error);
            nodeList.appendChild(textnode);
            documentErrorMessages.appendChild(nodeList);
              });

              documentErrorMessages.classList.remove("errorMessage");
             documentErrorMessages.classList.add("errorMessage2");
             submitBtn.innerHTML = "Message Us!";
              return;         
          }

          let data = {
            fullName,
            email,
            message
        }
    
        console.log(data);
    
        axios.post('http://localhost:5000/apis/review', data)
            .then(response => {
                console.log(response)
                successMessage.innerHTML = response.data;
                successMessage.classList.remove("successMessage");
                successMessage.classList.add("succesMessage2");
                submitBtn.innerHTML="Message Us!";
                
            })
            .catch(error => alert(error));

    }

});
