function calculate(){
    let re = /^\d+$/;
    let price = document.getElementById("price");
    let quantity = document.getElementById("quantity");
    let r = document.getElementById("result");
    if(re.test(price.value) && re.test(quantity.value)){
        alert(r.innerHTML = "Стоимость заказа: " + parseFloat(price.value) * parseFloat(quantity.value) + " руб.");
    } else{
        alert(r.innerHTML = "Введите корректные данные!");
    }
    return false;
  }
