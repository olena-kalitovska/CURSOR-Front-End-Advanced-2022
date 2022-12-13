

//Початкові дані
const price_of_oranges = 15.678;
const price_of_bananas = 123.965;
const price_of_apples = 90.2345;

// Використовуючи вбудований об'єкт Math – виведіть максимальне число
const the_bigest_price = Math.max(price_of_oranges, price_of_bananas, price_of_apples);
console.log("Максимальне число:", the_bigest_price);


//Використовуючи вбудований об'єкт Math – виведіть мінімальне число
const the_lowest_price = Math.min(price_of_oranges, price_of_bananas, price_of_apples);
console.log("Мінімальне число:", the_lowest_price);


//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
const the_cost_of_goods = price_of_oranges + price_of_bananas + price_of_apples;
console.log("Вартість всіх товарів:", the_cost_of_goods);


//Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
const floor_price = Math.floor (price_of_oranges) + Math.floor (price_of_bananas) + Math.floor (price_of_apples);
console.log("Загальна вартість товарів, заокруглення до меншого-кожен товар окремо:", floor_price);


//Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
console.log("Загальна вартість товарів, заокруглена до сотень:", Math.ceil(the_cost_of_goods));


//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
const the_cost_of_goods_floor = Math.floor(the_cost_of_goods);
console.log('Булеве значення суми вартості товарів(округлення в меншу сторну:', the_cost_of_goods_floor % 2 === 0);

//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500
const client_pay = 500;
console.log("Решта з 500 грн при оплаті за всі товари (без округлення):", client_pay - the_cost_of_goods);


//Виведіть середнє значення цін, округлене до другого знаку після коми
const average_price = the_cost_of_goods / 3;
average_price. toFixed(2);
console.log("Сереня ціна(округлення до двох знаків після коми)",average_price. toFixed(2));


//(Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random) 1-10грн.
const sale_randome = Math.random()*(10-1)+1;
console.log("Знижка", sale_randome);

//Зробіть клієнту випадкову знижку 1-10грн та виведіть суму до оплати округлену до 2 знаків після коми.
const price_after_sale_oranges = price_of_oranges - sale_randome;
const price_after_sale_bananas = price_of_bananas - sale_randome;
const price_after_sale_apples = price_of_apples - sale_randome;
console.log("Ціна після знижки апельсини:", price_after_sale_apples. toFixed(2));
console.log("Ціна після знижки банани:", price_after_sale_bananas. toFixed(2));
console.log("Ціна після знижки яблука:", price_after_sale_apples.toFixed(2));

//Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?
const cost_oranges = price_of_oranges / 2;
const cost_banenas = price_of_bananas / 2;
const cost_apples = price_of_apples / 2;
const net_profite_after_sale = (price_after_sale_oranges - cost_oranges) + (price_after_sale_bananas - cost_banenas) + (price_after_sale_apples - cost_apples);
console.log("Чистий прибуток:", net_profite_after_sale.toFixed(2));

