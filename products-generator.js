import products from "./products.js";

let productsContainer = document.querySelector(".products");
let pagination = document.querySelector(".pagination");
let productsPerPage = 10;
let productsCount = products.length;
let pagesCount = Math.floor(productsCount / productsPerPage + 1);
//generating pagination
for (let i = 1; i <= pagesCount; i++) {
  let pageBtn = `<div
    class="page-counter relative cursor-pointer w-8 h-8 p-4 border-2 rounded-full border-blue-600 flex justify-center items-center text-white bg-blue-600 hover:bg-white hover:text-blue-600 transition-all"
  >
    ${i}
  </div>`;
  pagination.insertAdjacentHTML("beforeend", pageBtn);
}

//products generation function
function productsGenerator(start, end) {
  for (let i = start; i < end; i++) {
    if (i > productsCount - 1) {
      break;
    }
    let productElement = `<article class="article">
      <img
        src="${products[i].img}"
        alt="prod"
        class="w-full object-cover h-72"
      />
  
      <div class="p-4">
        <div class="capitalize text-lg font-bold">${products[i].productName}</div>
        <div class="capitalize text-sm font-medium text-gray-600">
          ${products[i].subInfo}
        </div>
        <div class="font-bold">$ ${products[i].price}</div>
      </div>
    </article>`;

    productsContainer.insertAdjacentHTML("beforeend", productElement);
  }
}

//initial products
productsGenerator(0, productsPerPage);

let pagesBtns = document.querySelectorAll(".page-counter");

pagesBtns.forEach((btn) => {
  let index = Number.parseInt(btn.textContent) * productsPerPage;
  btn.addEventListener("click", () => {
    productsContainer.innerHTML = "";
    productsGenerator(index - productsPerPage, index);
  });
});
