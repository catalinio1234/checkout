/// <reference path="./steps.d.ts" />

Feature('testpret');

Scenario('TestPret', (I) => {
I.amOnPage('https://secure.avangate.com/order/checkout.php?PRODS=4628572&SHORT_FORM=1&CART=1&CARD=1&ORDERSTYLE=nLWs5JapnH4%3D&__c=1');
I.wait(2);
//Memoram prima valoare a pretului
var a= I.grabValueFrom('div.products-total-row:nth-child(3)');

//Se modifica cantitatea
I.click('.order__product__options__text > a:nth-child(1)')

//Se verifica daca suntem pe pagina
I.amOnPage('https://secure.avangate.com/order/product.php?PRODS=4628572&QTY=1&CURRENCY=RON&CART_ID=8f05e2f97e62051ba7f9b2bdd7ac193a&ORDERSTYLE=nLWs5JapnH4=');

//Se modifica cantitatea
I.click('#order__product__pricingoption__4628572_2750 > option:nth-child(2)');

//Se adauga in cos
I.click('AddToCart');
I.wait(3);

//Se verifica daca suntem pe pagina de comanda
I.amOnPage('https://secure.avangate.com/order/checkout.php?PRODS=4628572&SHORT_FORM=1&CART=1&CARD=1&ORDERSTYLE=nLWs5JapnH4%3D&__c=1');

//Se memoreaza noua valoare
var b= I.grabValueFrom('div.products-total-row:nth-child(3)');

//Se verifica daca pretul s-a modificat
if(a != b){ 

    //Se sterg produsele din cos
I.click('div.sprite');
}
});
