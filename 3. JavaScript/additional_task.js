/*  Задание 1
*
*   Дан массив чисел. Нужно написать функцию, которая найдет непрерывный подмассив
* (содержащий как минимум одно число) с наибольшей суммой элементов и вернет эту сумму.
*/

console.log('----------------------------');
let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let start_index_subarray = 0, length = 1, length_subarray = 1, max_sum, new_sum;

max_sum = new_sum = array[0];

do {
    for (let i = 0; i < array.length - length_subarray + 1; i++) {
        for (let j = i; j < i + length_subarray; j++) {
            new_sum += array[j];
        }
        if (max_sum <= new_sum) {                                    // Можно выводить самый короткий подмассив или саммый длинный: < иначе <=. Суть нулевой подмассив [1, 2, -3].
            max_sum = new_sum;
            start_index_subarray = i;
            length = length_subarray;
        }
        new_sum = 0;
    }
} while (++length_subarray <= array.length);

console.log('Max = ', max_sum, '!');
console.log('Start index = ', start_index_subarray, ';');

console.log('Output subarray: ');
for (let i = start_index_subarray; i < start_index_subarray + length; i++)
    console.log(array[i]);
console.log('----------------------------');

/*  Задание 2
*
*   Дан массив чисел (prices), в котором i-ый элемент это цена данной акции в i-ый день.
* Нужно написать функцию, которая вычисляет максимальную возможную прибыль брокера,
* если он может купить или продать одну акцию в любой день сколько угодно раз, но он обязан
* продать акцию до того, как купит следующую (в любой момент времени у него не более одной акции).
*/

console.log('----------------------------');
let array1 = [7, 1, 5, 3, 6, 4];
let array2 = [1, 2, 3, 4, 5];
let array3 = [7, 6, 4, 3, 1];

let sum = 0, index1 = 0, index2 = 0, flag = 0;

for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < array[i + 1]) {
        index1 = i;
        for (i; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                index2 = i;
                flag = 1;
                break;
            }
        }
        if (flag) {
            flag = 0;
            sum += array[index2] - array[index1];
            //console.log('array[index1]=', array[index1]);
            //console.log('array[index2]=', array[index2]);
        } else {
            sum += array[array.length - 1] - array[index1];
            //console.log('array[index1]=', array[index1]);
            //console.log('array[array.length - 1]=', array[array.length - 1]);
        }
    }
}
console.log('Maximum profit = ',sum);
console.log('----------------------------');
//let k = 0, k1 = 0; - нужны для посчета ниже
/*for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < array[i + 1])
        k++;
}
console.log('Подъемы = ', k);*/
/*for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1])
        k1++;
}
console.log('Спуски  = ', k1);*/
