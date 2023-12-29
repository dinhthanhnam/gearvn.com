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
    price: "34.600.000đ",
    type: "asus",
  },
  {
    id: 2,
    name: "ASUS TUF FX705DT-H7138T Gaming Laptop",
    price: "42.600.000",
    type: "asus",
  },
  {
    id: 3,
    name: "Acer Swift 7 SF714-52T-7134 Laptop Black",
    price: "49.600.000",
    type: "acer",
  },
  {
    id: 4,
    name: "ASUS ROG Strix SCAR III G531GN-VAZ160T Laptop",
    price: "44.600.000",
    type: "asus",
  },
  {
    id: 5,
    name: "ASUS ProArt StudioBook Pro 17 W700G1T-AV046T Laptop",
    price: "45.600.000",
    type: "asus",
  },
  {
    id: 6,
    name: "LG Gram 17Z90N-V.AH75A5 Laptop Silver",
    price: "39.600.000",
    type: "LG",
  },
  {
    id: 7,
    name: "HP Omen 15-dh0172TX Gaming Laptop",
    price: "44.600.000",
    type: "HP",
  },
  {
    id: 8,
    name: "ASUS VivoBook 15 A512FA-EJ1281T Laptop",
    price: "15.600.000",
    type: "asus",
  },
  {
    id: 9,
    name: "Acer Predator Helios 300 PH315-52-78HH Gaming Laptop",
    price: "35.600.000",
    type: "Acer",
  },
  {
    id: 10,
    name: "MSI Modern 15 A10M-068VN Laptop Space Gray",
    price: "18.600.000đ",
    type: "MSI",
  },
  {
    id: 11,
    name: "LG Gram 2023 16Z90R-G.AH76A5",
    price: "37.490.000đ",
    type: "LG",
  },
  {
    id: 12,
    name: "Laptop LG Gram 14Z90R-G.AH75A5",
    price: "33.990.000đ",
    type: "LG",
  },
  {
    id: 13,
    name: "Laptop LG Gram 14ZD90N-V.AX55A5 ",
    price: "26.590.000đ",
    type: "LG",
  },
  {
    id: 14,
    name: "Laptop MSI GL65 9SDK 054VN",
    price: "29.990.000đ",
    type: "MSI",
  },
  {
    id: 15,
    name: "Laptop MSI Katana 15 B13VGK-1211VN",
    price: "37.990.000đ ",
    type: "MSI",
  },
  {
    id: 16,
    name: "Laptop MSI Modern 15 B12MO-487VN ",
    price: "16.990.000",
    type: "MSI",
  },
  {
    id: 17,
    name: "Laptop Gaming Acer Nitro V ANV15-51-55CA NH.QN8SV.004",
    price: "26.990.000 ",
    type: "acer",
  },
  {
    id: 18,
    name: "Laptop Gaming Acer Aspire 7 A715-76G-5806 - NH.QMFSV.002",
    price: "18.590.000",
    type: "acer",
  },
  {
    id: 19,
    name: "Laptop Gaming Acer Nitro 5 Tiger AN515-58-52SP NH.QFHSV.001",
    price: "21.490.000",
    type: "acer",
  },
  {
    id: 20,
    name: "Laptop HP 14S-dq5100TU 7C0Q0PA",
    price: "13.490.000",
    type: "HP",
  },
  {
    id: 21,
    name: "Laptop HP Pavilion 15-eg3093TU 8C5L4PA",
    price: "17.990.000",
    type: "HP",
  },
  {
    id: 22,
    name: "Laptop HP ENVY X360 13-bf0090TU 76B13PA",
    price: "27.490.000",
    type: "HP",
  },
  {
    id: 23,
    name: "Laptop Asus TUF Gaming F15 FX507ZC4-HN074W",
    price: "19.490.000",
    type: "asus",
  },
];

// New Products
products.forEach((product, index) => {
  if (index <= 3) {
    newProducts
      ? (newProducts.innerHTML += `
        <li class="new-product">
            <a href="https://gearvn.com/products/laptop-asus-vivobook-14x-oled-s3405va-km071w">
                <div class="product-img">
                    <img src="/img/product/${index + 1}.jpg" alt="" />
                </div>
                <div class="product-info">
                    <h3 style="margin-bottom: 15px; text-overflow: ellipsis;">${
                      product.name
                    }</h3>
                    <p 
                    style= "color: #e40000 !important; font-weight: bold;font-size: 15px">
                    ${product.price}
                    </p>
                </div>
            </a>
        </li>
    `)
      : "";
  }
});
// Hot Products
products.forEach((product, index) => {
  if (index <= 9) {
    hotProducts
      ? (hotProducts.innerHTML += `
      <li class="product">
        <a href="https://gearvn.com/products/laptop-asus-vivobook-14x-oled-s3405va-km071w">
          <div class="product-img">
              <img src="/img/product/${index + 1}.jpg" alt="" />
          </div>
          <div class="product-info">
              <h3 style="margin-bottom: 15px; text-overflow: ellipsis;">${
                product.name
              }</h3>
              <p 
              style= "color: #e40000 !important; font-weight: bold;font-size: 15px">
              ${product.price}
              </p>
          </div>
        </a>
      </li>
      `)
      : "";
  }
});
// Asus Products
products.forEach((product, index) => {
  if (index <= 25 && product.type === "asus") {
    console.log(product);
    asusProducts
      ? (asusProducts.innerHTML += `
      <li class="product">
      <a href="https://gearvn.com/products/laptop-asus-vivobook-14x-oled-s3405va-km071w">
        <div class="product-img">
            <img src="/img/product/${index + 1}.jpg" alt="" />
        </div>
        <div class="product-info">
            <h3 style="margin-bottom: 15px; text-overflow: ellipsis;">${
              product.name
            }</h3>
            <p 
            style= "color: #e40000 !important; font-weight: bold;font-size: 15px">
            ${product.price}
            </p>
        </div>
      </a>
    </li>
    `)
      : "";
  }
});
// Acer Products
products.forEach((product, index) => {
  if (index <= 20 && product.type === "acer") {
    console.log(product);
    acerProducts
      ? (acerProducts.innerHTML += `
      <li class="product">
      <a href="https://gearvn.com/products/laptop-asus-vivobook-14x-oled-s3405va-km071w">
        <div class="product-img">
            <img src="/img/product/${index + 1}.jpg" alt="" />
        </div>
        <div class="product-info">
            <h3 style="margin-bottom: 15px; text-overflow: ellipsis;">${
              product.name
            }</h3>
            <p 
            style= "color: #e40000 !important; font-weight: bold;font-size: 15px">
            ${product.price}
            </p>
        </div>
      </a>
    </li>
    `)
      : "";
  }
});
// HP Products
products.forEach((product, index) => {
  if (index <= 25 && product.type === "HP") {
    console.log(product);
    hpProducts
      ? (hpProducts.innerHTML += `
      <li class="product">
      <a href="https://gearvn.com/products/laptop-asus-vivobook-14x-oled-s3405va-km071w">
        <div class="product-img">
            <img src="/img/product/${index + 1}.jpg" alt="" />
        </div>
        <div class="product-info">
            <h3 style="margin-bottom: 15px; text-overflow: ellipsis;">${
              product.name
            }</h3>
            <p 
            style= "color: #e40000 !important; font-weight: bold;font-size: 15px">
            ${product.price}
            </p>
        </div>
      </a>
    </li>
    `)
      : "";
  }
});
// LG Products
products.forEach((product, index) => {
  if (index <= 12 && product.type === "LG") {
    console.log(product);
    lgProducts
      ? (lgProducts.innerHTML += `
      <li class="product">
      <a href="https://gearvn.com/products/laptop-asus-vivobook-14x-oled-s3405va-km071w">
        <div class="product-img">
            <img src="/img/product/${index + 1}.jpg" alt="" />
        </div>
        <div class="product-info">
            <h3 style="margin-bottom: 15px; text-overflow: ellipsis;">${
              product.name
            }</h3>
            <p 
            style= "color: #e40000 !important; font-weight: bold;font-size: 15px">
            ${product.price}
            </p>
        </div>
      </a>
    </li>
    `)
      : "";
  }
});
// MSI Products
products.forEach((product, index) => {
  if (index <= 20 && product.type === "MSI") {
    console.log(product);
    msiProducts
      ? (msiProducts.innerHTML += `
      <li class="product">
      <a href="https://gearvn.com/products/laptop-asus-vivobook-14x-oled-s3405va-km071w">
        <div class="product-img">
            <img src="/img/product/${index + 1}.jpg" alt="" />
        </div>
        <div class="product-info">
            <h3 style="margin-bottom: 15px; text-overflow: ellipsis;">${
              product.name
            }</h3>
            <p 
            style= "color: #e40000 !important; font-weight: bold;font-size: 15px">
            ${product.price}
            </p>
        </div>
      </a>
    </li>
    `)
      : "";
  }
});
