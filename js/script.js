function dissmissbtn() {
    var cookie_element =document.querySelector('.cookie_policy');
    cookie_element.remove();//para eliminarlo
}

function click_carro(){
    alert("Your Cart is empy!");
}

function over(){
    var imagen= document.querySelector('.cambio');
    imagen.src="images/succulents-2.jpg";
}
function out(){
    var imagen= document.querySelector('.cambio');
    imagen.src="images/succulents-1.jpg";
}
