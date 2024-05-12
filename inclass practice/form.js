const productidInput = document.querySelector("#productid")
const nameInput = document.querySelector("#name")
const priceInput = document.querySelector("#price")
const h2 = document.querySelector(".express")
const buttonInput = document.querySelector(".btn")
buttonInput.addEventListener('click',
    (e) => {
        e.preventDefault()
        productidValue = productidInput.value 
        nameValue = nameInput.value
        priceValue = priceInput.value 
        // h2.innerHTML=
        // `productid la ${productidValue} <br>
        //  name la ${nameValue} <br>
        //  price la ${priceValue}`
        // productidInput.value = ''
        // nameInput.value = ''
        // priceInput.value = ''
        const add = {
            createdAT : priceValue,
            name : nameValue,
            id: productidValue,
        }
        fetch('https://65859ecf022766bcb8c90509.mockapi.io/Task', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            // Send your data in the request body as JSON
            body: JSON.stringify(add)
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(task => {
            // do something with the new task
        }).catch(error => {
            // handle error
        })
    }
)