/*  Задание 1
*
*   Дан массив чисел. Нужно написать функцию, которая найдет непрерывный подмассив
* (содержащий как минимум одно число) с наибольшей суммой элементов и вернет эту сумму.
*/

function getMaxSubSum(array) {
    if (array.length === 0) {
        console.log('Error');
        return 0;
    }
    let startIndexSubarray = 0, length = 1, lengthSubarray = 1, maxSum = newSum = 0;

    do {
        for (let i = 0; i < array.length - lengthSubarray + 1; i++) {
            for (let j = i; j < i + lengthSubarray; j++) {
                newSum += array[j];
            }
            if (maxSum < newSum) {
                maxSum = newSum;
                startIndexSubarray = i;
                length = lengthSubarray;
            }
            newSum = 0;
        }
        lengthSubarray++;
    } while (lengthSubarray <= array.length);
    return maxSum;
}

let array = [100, -9, 2, -3, 5];
getMaxSubSum(array);

console.log('----------------------------');
console.log('Max = ', getMaxSubSum(array), '!');
console.log('----------------------------');

/*  Задание 2
*
*   Дан массив чисел (prices), в котором i-ый элемент это цена данной акции в i-ый день.
* Нужно написать функцию, которая вычисляет максимальную возможную прибыль брокера,
* если он может купить или продать одну акцию в любой день сколько угодно раз, но он обязан
* продать акцию до того, как купит следующую (в любой момент времени у него не более одной акции).
*/

function getMaxSubArraySum(array) {
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
    return sum;
}

let array1 = [-1, -2, -3, -4];
let array2 = [-3, 2, 3, 2, 3];
let array3 = [-4, -3, -2, -1];

console.log('Maximum profit array1 = ', getMaxSubArraySum(array1));
console.log('----------------------------');
console.log('Maximum profit array2 = ', getMaxSubArraySum(array2));
console.log('----------------------------');
console.log('Maximum profit array3 = ', getMaxSubArraySum(array3));
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
