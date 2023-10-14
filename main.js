const toggle = document.querySelector(".toggle");
const priceBasic = document.querySelector(".price-basic");
const pricePro = document.querySelector(".price-professional");
const priceMaster = document.querySelector(".price-master");

// set default mode to monthly

toggle.click();

function changePrice(){
    if(toggle.classList.contains("price-toggle")){
        priceBasic.innerHTML = "199.99";
        pricePro.innerHTML = "249.99";
        priceMaster.innerHTML = "399.99";
    } else {
        priceBasic.innerHTML = "19.99";
        pricePro.innerHTML = "24.99";
        priceMaster.innerHTML = "39.99";
    }
}

toggle.addEventListener("click",()=>{
    toggle.classList.toggle("price-toggle");
    changePrice();
})
