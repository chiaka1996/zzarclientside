const hireForm = document.querySelector("#hireUsForm");

const hireSubmitBtn = document.querySelector("#submitBtn");

const hireUsErrorMessage = document.querySelector('.hireErrorMessage');

const successMessage = document.querySelector('.successMessage');

let errorArray = [];

hireSubmitBtn.addEventListener('click', (e) => {
    
    e.preventDefault();

    errorArray = [];

    const nameRegex = /^[a-z]+/gi;

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;

    let fullName =  hireForm.elements[0].value;

    let  email = hireForm.elements[1].value;

    let  phone = hireForm.elements[2].value;

    let eventType = hireForm.elements[3].value;

    let eventLocation = hireForm.elements[4].value;

    while (hireUsErrorMessage.firstChild) {
      hireUsErrorMessage.removeChild(hireUsErrorMessage.lastChild);
    }

    hireUsErrorMessage.classList.add("hireErrorMessage");
    hireUsErrorMessage.classList.remove("hireErrorMessage2");
    hireSubmitBtn.innerHTML = "sending...";
    successMessage.innerHTML = "";
    successMessage.classList.add("successMessage");
    successMessage.classList.remove("successMessage2");

    if (!fullName || !email || !phone || !eventType || !eventLocation) {
        errorArray.push("please fill all fields");
        errorArray.forEach(error => {
          let nodeList = document.createElement("p");
          var textnode = document.createTextNode(error);
          nodeList.appendChild(textnode);
          hireUsErrorMessage.appendChild(nodeList);
            });

            hireUsErrorMessage.classList.remove("hireErrorMessage");
            hireUsErrorMessage.classList.add("hireErrorMessage2");
            hireSubmitBtn.innerHTML = "send!";

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

          if(phone.length < 11) {
              errorArray.push("phone number should be eleven digits")
          }

          if (errorArray.length > 0) {

                errorArray.forEach(error => {
                let nodeList = document.createElement("p");
                var textnode = document.createTextNode(error);
                nodeList.appendChild(textnode);
                hireUsErrorMessage.appendChild(nodeList);
                  });
    
                  hireUsErrorMessage.classList.remove("hireErrorMessage");
                  hireUsErrorMessage.classList.add("hireErrorMessage2");
                  hireSubmitBtn.innerHTML = "send!";
                 return;
          }

          let data = {
            fullName,
            email,
            phone,
            eventType,
            eventLocation
        }
    
        console.log(data);
    
        axios.post('http://localhost:5000/apis/hireus', data)
            .then(response => {
                console.log(response)
                successMessage.innerHTML = response.data;
                successMessage.classList.remove("successMessage");
                successMessage.classList.add("successMessage2");
                submitBtn.innerHTML="send";
                
            })
            .catch(error => alert(error));

    }
});