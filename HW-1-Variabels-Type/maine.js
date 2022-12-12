//Початкові дані
const price_of_oranges = 15.678;
const price_of_bananas = 123.965;
const price_of_apples = 90.2345;
//Використовуючи вбудований об'єкт Math – виведіть максимальне число
const the_bigest_price = Math.max(price_of_oranges, price_of_bananas, price_of_apples);
console.log("Максимальне число:",the_bigest_price);
//Використовуючи вбудований об'єкт Math – виведіть мінімальне число
const the_lowest_price = Math.min(price_of_oranges, price_of_bananas, price_of_apples);
console.log("Мінімальне число:", the_lowest_price);
//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
const the_cost_of_goods = price_of_oranges + price_of_bananas + price_of_apples;
console.log("Вартість всіх товарів:", the_cost_of_goods);
//Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару
//між собою. Округлення використовувати в МЕНЬШУ сторону.
const floor_price = Math.floor (price_of_oranges) + Math.floor (price_of_bananas) + Math.floor (price_of_apples);
console.log("Загальна вартість товарів, заокруглення до меншого-кожен товар окремо:", floor_price);
//Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть
//300)

console.log("Загальна вартість товарів, заокруглена до сотень:", Math.ceil(the_cost_of_goods));
//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним
//чи непарним числом?
