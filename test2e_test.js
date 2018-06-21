/// <reference path="./steps.d.ts" />

Feature('test2');

Scenario('Email', (I) => {
I.amOnPage('https://secure.avangate.com/order/checkout.php?PRODS=4628572&SHORT_FORM=1&CART=1&CARD=1&ORDERSTYLE=nLWs5JapnH4%3D&__c=1');
//Completare camp fullname
I.fillField('fullname','catalin avram');

//Completare camp email fara extensia .com/ro
I.fillField('email', 'test2@gmail.123');

//Completare campuri plata
I.fillField('ccnumber', '5503952591260297');
I.selectOption('ccexpmonth', '01 (January)');
I.selectOption('ccexpyear', '2030');
I.fillField('cvv2','123');
I.fillField('nameoncard', 'Noaptea tarziu');

//Verificare date
I.click('Submit');
 
//Verificare daca s-a trecut la pagina checkout
I.amOnPage('https://secure.avangate.com/order/checkout.php?CART_ID=8f05e2f97e62051ba7f9b2bdd7ac193a');

});