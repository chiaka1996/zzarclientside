window.addEventListener("load",  () => { 

    const galleryGrid = document.querySelector(".galleryGrid");

    axios.get("http://localhost:5000/apis/getimage")
    .then(
        (response) => {

            let imageResult = response.data;

            imageResult.map((result) => {

            const imgDiv = document.createElement("div")

            const imgAnchor = document.createElement("a");

            let img = document.createElement("img");

            img.src = result.image;

            imgAnchor.href = result.image;

            imgAnchor.target = "_blank";

            imgAnchor.appendChild(img)

            imgDiv.appendChild(imgAnchor);

            galleryGrid.appendChild(imgDiv);
                
            })
        
        }
        )
    .catch((error) => alert(error))

});