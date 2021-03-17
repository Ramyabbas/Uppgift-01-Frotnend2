(function ()
     {

    fetch('https://webacademy.se/fakestore/') //Get all products by fetch

        .then(res => res.json())
        .then((data) => {
            const products = data.map((product) => { // Here the products are saved in an array with name "products"

            // Here a product is returned of all products     
            return  `
                  <div>${product.title}</div>

                  <div>
                        <img src="${product.image}" width="120" height="120" />
                  </div>

                  <div>${product.price}:-</div>

                  <div>${product.description}</div>
                  
                  <a id="Köp" class="button" role="button" href="/buyIndex.html?id=${product.id}">Välj produkten</a>
                `
            });
            //Here is a description of all the products in the app element
            document.getElementById('app').insertAdjacentHTML('afterbegin', products)
        })
})();
