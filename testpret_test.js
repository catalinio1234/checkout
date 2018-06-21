/// <reference path="./steps.d.ts" />

Feature('testpret');

Scenario('TestPret', (I) => {
I.amOnPage('https://secure.avangate.com/order/checkout.php?PRODS=4628572&SHORT_FORM=1&CART=1&CARD=1&ORDERSTYLE=nLWs5JapnH4%3D&__c=1');
I.wait(2);
var a= I.grabValueFrom('div.products-total-row:nth-child(3)');
I.click('.order__product__options__text > a:nth-child(1)')
I.amOnPage('https://secure.avangate.com/order/product.php?PRODS=4628572&QTY=1&CURRENCY=RON&CART_ID=8f05e2f97e62051ba7f9b2bdd7ac193a&ORDERSTYLE=nLWs5JapnH4=');
I.click('#order__product__pricingoption__4628572_2750 > option:nth-child(1)');
I.click('AddToCart');
I.wait(3);
I.amOnPage('https://secure.avangate.com/order/checkout.php?PRODS=4628572&SHORT_FORM=1&CART=1&CARD=1&ORDERSTYLE=nLWs5JapnH4%3D&__c=1');
var b= I.grabValueFrom('div.products-total-row:nth-child(3)');

if(a != b){ 
I.click('div.sprite');
}

pause();
});
