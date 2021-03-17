(function () {
    const url_string = window.location.href
    const url = new URL(url_string)
    const id = url.searchParams.get("id")
    const name = document.getElementById('name')
    const adress = document.getElementById('adress')
    const epost = document.getElementById('epost')
    const phone = document.getElementById('phone')
    const form = document.getElementById('form')
    const nameValidation = document.getElementById('nameValidation')
    const epostValidation = document.getElementById('epostValidation')
    const adressValidation = document.getElementById('adressValidation')
    const phoneValidation = document.getElementById('phoneValidation')

    fetch(`https://fakestoreapi.com/products/${id}`)    //Get a product by Id

        .then(res => res.json())
        .then((product) => {
            return `
              <div>${product.title}</div>

              <div>
                <img src="${product.image}" width="120" height="120" />
              </div>

              <div>${product.price} kr</div>

              <div>${product.description}</div>
            `
        })
        //Here is a description of all the products in the app element
        .then((products) => {
            document.getElementById('app').insertAdjacentHTML('afterbegin', products)
        })

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        //Here is a delete/clear of all errors
        nameValidation.innerHTML = "";
        phoneValidation.innerHTML = "";
        emailValidation.innerHTML = "";
        adressValidation.innerHTML = "";

        //Here if validation of users input
        if (name.value === '' || name.value == null) {
            document.getElementById("nameValidation").innerHTML = "Ogilgit namn!! var vänlig och skriv korekt namn";
            return false;
        }
        if (phone.value.length < 10) {
            document.getElementById("phoneValidation").innerHTML = "Ogilig telefonnummer!! var vänligt och skriv korrekt telefonnummer";
            return false;
        }
        if (epost.value.length <= 0 && EmailValidation(epost.value) === false) {
            document.getElementById("epostValidation").innerHTML = "Ogilig e-post! var vänligt och skriv korrekt e-post";
            return false;
        }
        if (adress.value.length <= 0) {
            document.getElementById("adressValidation").innerHTML = "ogilig adress! var vänlig och skriv korrekt adress";
            return false;
        }

        alert('Tack för din beställning!!! Välkommen åter :D')
    })

    //Here is a validation of users email
    function EmailValidation(epost) {
        const emailValid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailValid.test(epost);
    }
})();