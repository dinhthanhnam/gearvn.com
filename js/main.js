const newProducts = document.querySelector(".new-products");
const hotProducts = document.querySelector(".hot-products");
const asusProducts = document.querySelector(".asus-products");
const acerProducts = document.querySelector(".acer-products");
const hpProducts = document.querySelector(".HP-products");
const lgProducts = document.querySelector(".LG-products");
const msiProducts = document.querySelector(".MSI-products");
const products = [
  {
    id: 1,
    name: "ASUS ROG Zephyrus M GU502GU-AZ090T Gaming",
    price: "34.600.000",
    type:'asus',
  },
  {
    id: 2,
    name: "ASUS TUF Gaming FX705DT-H7138T Gaming Laptop",
    price: "42.600.000",
    type:'asus',
  },
  {
    id: 3,
    name: "Acer Swift 7 SF714-52T-7134 Laptop Black",
    price: "49.600.000",
    type:'acer',
  },
  {
    id: 4,
    name: "ASUS ROG Strix SCAR III G531GN-VAZ160T Laptop",
    price: "44.600.000",
    type:'asus',
  },
  {
    id: 5,
    name: "ASUS ProArt StudioBook Pro 17 W700G1T-AV046T Laptop",
    price: "45.600.000",
    type:'asus',
  },
  {
    id: 6,
    name: "LG Gram 17Z90N-V.AH75A5 Laptop Silver",
    price: "39.600.000",
    type:'LG',
  },
  {
    id: 7,
    name: "HP Omen 15-dh0172TX Gaming Laptop",
    price: "44.600.000",
    type:'HP',
  },
  {
    id: 8,
    name: "ASUS VivoBook 15 A512FA-EJ1281T Laptop",
    price: "15.600.000",
    type:'asus',
  },
  {
    id: 9,
    name: "Acer Predator Helios 300 PH315-52-78HH Gaming Laptop",
    price: "35.600.000",
    type:'Acer',
  },
  {
    id: 10,
    name: "MSI Modern 15 A10M-068VN Laptop Space Gray",
    price: "18.600.000",
    type:'MSI',
  },
];

// New Products
products.forEach((product, index) => {
  if (index <= 3) {
    newProducts ? (newProducts.innerHTML += `
        <li class="product">
            <a href="">
                <div class="product-img">
                    <img src="/img/product/${index + 1}.jpg" alt="" />
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                </div>
            </a>
        </li>
    `) : ""
  }
});
// Hot Products
products.forEach((product, index) => {
    if (index <= 9) {
      hotProducts ? (hotProducts.innerHTML += `
          <li class="product">
              <a href="">
                  <div class="product-img">
                      <img src="/img/product/${index + 1}.jpg" alt="" />
                  </div>
                  <div class="product-info">
                      <h3>${product.name}</h3>
                      <p>${product.price}</p>
                  </div>
              </a>
          </li>
      `): ""
    }
  });
// Asus Products
products.forEach((product, index) => {
  if ((index <= 9) && (product.type === 'asus')) {
    console.log(product)
    asusProducts ? (asusProducts.innerHTML += `
        <li class="product">
            <a href="">
                <div class="product-img">
                    <img src="/img/product/${index + 1}.jpg" alt="" />
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                </div>
            </a>
        </li>
    `): ""
  }
});
// Acer Products
products.forEach((product, index) => {
  if ((index <= 9) && (product.type === 'acer')) {
    console.log(product)
    acerProducts ? (acerProducts.innerHTML += `
        <li class="product">
            <a href="">
                <div class="product-img">
                    <img src="/img/product/${index + 1}.jpg" alt="" />
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                </div>
            </a>
        </li>
    `): ""
  }
});
// HP Products
products.forEach((product, index) => {
  if ((index <= 9) && (product.type === 'HP')) {
    console.log(product)
    hpProducts ? (hpProducts.innerHTML += `
        <li class="product">
            <a href="">
                <div class="product-img">
                    <img src="/img/product/${index + 1}.jpg" alt="" />
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                </div>
            </a>
        </li>
    `): ""
  }
});
// LG Products
products.forEach((product, index) => {
  if ((index <= 9) && (product.type === 'LG')) {
    console.log(product)
    lgProducts ? (lgProducts.innerHTML += `
        <li class="product">
            <a href="">
                <div class="product-img">
                    <img src="/img/product/${index + 1}.jpg" alt="" />
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                </div>
            </a>
        </li>
    `): ""
  }
});
// MSI Products
products.forEach((product, index) => {
  if ((index <= 9) && (product.type === 'MSI')) {
    console.log(product)
    msiProducts ? (msiProducts.innerHTML += `
        <li class="product">
            <a href="">
                <div class="product-img">
                    <img src="/img/product/${index + 1}.jpg" alt="" />
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                </div>
            </a>
        </li>
    `): ""
  }
});