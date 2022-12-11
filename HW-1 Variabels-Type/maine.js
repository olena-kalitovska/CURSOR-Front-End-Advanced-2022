'use strict'
//1. Виведення максимального числа
const TANDERINES = 15.678;
const HUARMA = 123.965;
const GARNET = 90.2345;
const MAX_PRICE = Math.max(TANDERINES, HUARMA, GARNET); 
console.log('1.Максимальна ціна:', MAX_PRICE ) ;

//2. Виведення мінімального числа
const MIN_PRICE = Math.min(TANDERINES, HUARMA, GARNET);
console.log('2.Мінімальна ціна:', MIN_PRICE ) ;

//3.Скласти вартість всіх товарів, помістити їх в змінну та виведіть цю суму.
const THE_AMOUNT_OF_FOOD_SUM = TANDERINES + HUARMA + GARNET;
console.log('3.Сума всіх товарів:', THE_AMOUNT_OF_FOOD_SUM );


//4.Відкиньте копійки у всіх товарів, потім-складіть цілу частину вартості кожного товару між собою. Округлення використовувати в меншу сторону.
console.log('4.Сума цілих частин вартості товарів(округлення до меншого):', Math.floor(TANDERINES) + Math.floor(HUARMA) + Math.floor(GARNET) );


//5.Вивести суму товарів округлену до сотень.
console.log('5.Сума вартості товарів(округлення до сотень):', THE_AMOUNT_OF_FOOD_SUM.toFixed(3));


//Вивести булеве значення: Чи є сума всіх товарів(округлена в меншу сторону) паргим чи не парним числом?
const theAmountOfFoodAll = Math.floor(THE_AMOUNT_OF_FOOD_SUM);
console.log('6.Булеве значення суми вартості товарів(округлення в меншу сторну:', theAmountOfFoodAll % 2 === 0);


//Вивести суму решти, при оплаті всіх товарі( без округлень), якщо клієнт платить 500 грн.
const CLIENTS_PAY = 500;
console.log('7.Решта клієнта, від 500 грн, при оплаті за всі товари:', CLIENTS_PAY - THE_AMOUNT_OF_FOOD_SUM);


//Вивести середнє значення цін, округлене до другого знаку після коми.
console.log('8.Середнє значення цін:', THE_AMOUNT_OF_FOOD_SUM.toFixed(2)/3 );


//Створити змінну в якій зберегти випадкову знижку(використовуючи функцію Math.random)
                             //discount = from 10% to 100%;
Math.random() * (100 - 10) + 10;
const CLIENT_RECEIVE_DISCOUNT = Math.random() * (100 - 10) + 10;
console.log('9.Рандомна знижка 10-100%:', CLIENT_RECEIVE_DISCOUNT);

//Зробити клієнту випадкову знижку та виввести суму до оплати округлену до 2 знаків після коми.
const CLIENT_BUY_TANDERINES = 15.678;
const AMOUNT_DUE = CLIENT_BUY_TANDERINES * (CLIENT_RECEIVE_DISCOUNT / 100);
console.log('10.Сума до оплати(округлення до 2 знаків) після рандомної знижки:', AMOUNT_DUE.toFixed(2));


//Вивести чистий прибуток, якщо клієнт заплатить зі знижкою та собівартість товарів рівно в два рази нижче їх цін.

//TANDERINES
const AMOUNT_DUE_TANDERINES = TANDERINES * (CLIENT_RECEIVE_DISCOUNT / 100);
const COST_OF_TANDERINCE = TANDERINES / 2;
const NET_PROFIT_TANDERINES = COST_OF_TANDERINCE - AMOUNT_DUE_TANDERINES;
console.log('11.Чистий дохід мандарини (знижка рандомна):', NET_PROFIT_TANDERINES);

//HUARMA
const AMOUNT_DUE_HUARMA = HUARMA * (CLIENT_RECEIVE_DISCOUNT / 100);
const COST_OF_HUARMA = HUARMA / 2;
console.log('12.Чистий дохід хурма (знижка рандомна):', COST_OF_HUARMA - AMOUNT_DUE_HUARMA);

//GARNET
const AMOUT_DUE_GARNET = GARNET * (CLIENT_RECEIVE_DISCOUNT / 100);
const COST_OF_GRANET = GARNET / 2;
console.log('13.Чистий дохід гранат (знижка рандомна):', COST_OF_GRANET - AMOUT_DUE_GARNET)


