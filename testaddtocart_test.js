/// <reference path="./steps.d.ts" />
Feature('addtocart');

Scenario('ADD to cart', (I) => {
    I.amOnPage('https://secure.avangate.com/order/checkout.php?PRODS=4628572&SHORT_FORM=1&CART=1&CARD=1&ORDERSTYLE=nLWs5JapnH4%3D&__c=1');
   //Adaug produsul in cos
    I.click('.order__buy__button');   

    //Verificare rand nou/produs in shopping cart
    I.seeElement('#order__listing__row__4689628');

    //Verificare daca mai exista produse in cross
    I.dontSeeElement('.order__buy__button');
    
});
