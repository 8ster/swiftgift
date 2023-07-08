const search = () => {
  const searchBox = document.getElementById("search-item").value.toUpperCase();
  const productItems = document.querySelectorAll(".product");

  for (let i = 0; i < productItems.length; i++) {
    const productName = productItems[i].querySelector(".des");

    if (productName) {
      let textValue = productName.textContent || productName.innerText;

      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        productItems[i].style.display = "";
      } else {
        productItems[i].style.display = "none";
      }
    }
  }
};
