const nameInput = document.querySelector("#name")
const buttonInput = document.querySelector("button")
const h1= document.querySelector(".content")
buttonInput.addEventListener('click',
    (e) =>{
        e.preventDefault()
        //step 1: nhap du lieu, lay du lieu
        const nameValue = nameInput.value 
        //step 2: an click
        //step 3: hien thi name value thong qua the h1
        h1.innerHTML =
        ` Xin chào ${nameValue}`
        //step 4 : xoa thong tin trong the input
        nameInput.value = ''
        //them class red cho h1
        h1.classList.add("red")
    }
)