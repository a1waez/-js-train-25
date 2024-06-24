//Завдання 1

// Оригінальна функція, яка повертає Promise.
function fetchFakeData() {
  const fakeData = {
    name: "John",
    age: 30,
  };
  return Promise.resolve(fakeData);
}

// Створюємо асинхронну функцію getData, яка використовує await для обробки Promise.
async function getData() {
  await Promise;
  // Використовуємо try для обробки помилок
  try {
    // Використовуємо await для очікування виконання Promise.
    const result = await fetchFakeData(Promise);
    // Дані виводимо в консоль після отримання їх з Promise.
    console.log(result);
    // Використовуємо catch для обробки будь-яких помилок, що виникли під час виконання Promise, та виводимо їх в консоль.
  } catch {
    (err) => alert(err);
  }
}
// Розкоментуйте після виконання завданння
console.log("Завдання: 1 ==============================");
// // Викликаємо нашу асинхронну функцію.
getData();

//Завдання 2
// Функція getRandomNumberAfterSeconds, яка приймає один параметр - число секунд.
function getRandomNumberAfterSeconds(seconds) {
  // Повертаємо новий Promise
  return new Promise((resolve) => {
    // Використовуємо setTimeout для симуляції асинхронної операції.
    // Після "seconds" секунд, Promise буде виконано з результатом виконання функціх Math.random
    setTimeout(() => {
      resolve(Math.random());
    }, seconds * 1000);
  });
}

// Асинхронна функція logRandomNumberAfterSeconds, яка приймає один параметр - число секунд
async function logRandomNumberAfterSeconds(seconds) {
  // Використовуємо try для обробки помилок
  try {
    // Використовуємо await, щоб "почекати", поки Promise від getRandomNumberAfterSeconds буде виконано.
    await getRandomNumberAfterSeconds(Promise);
    // В функцію потрібно передати в seconds в якості аргументу
    // Результат виконання функції присвоюється константі randomNumber.
    const randomNumber = await getRandomNumberAfterSeconds(seconds);
    // Виводимо отримане випадкове число в консоль
    console.log(randomNumber);
    // Якщо сталася помилка під час виконання Promise, виводимо її в консоль.
  } catch {
    (err) => alert(err);
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 2 ==============================");
logRandomNumberAfterSeconds();

//Завдання 3
// Асинхронна функція getDataFromUrl, яка приймає один параметр - URL
async function getDataFromUrl(URL) {
  // Використовуємо try для обробки помилок
  try {
    // Використовуємо fetch для відправки GET-запиту на вказаний URL
    let responce = await fetch(URL);
    // Перевіряємо через властивість ok, чи є відповідь вдалою якщо ні виводимо помилку в консоль
    if (!responce.ok) {
      throw new Error(responce.status);
    }
    // Конвертуємо відповідь у формат JSON
    const result = await responce.json();
    // Виводимо дані в консоль
    console.log(result);
    // Виводимо помилки в консоль якщо вони є
  } catch (error) {
    console.error(error);
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 3 ==============================");
getDataFromUrl("https://swapi.dev/api/people/1");

//Завдання 4
// Асинхронна функція, яка приймає три параметри - URL, дані для відправки та токен авторизації, маємо аргумент url, data, authToken
// async function URL(url, data, authToken) {
//   // Використовуємо try для обробки помилок
//   try {
//     // Використовуємо fetch для відправки POST-запиту на вказаний URL
//     let responce = await fetch(url);
//     // Вказуємо метод запиту POST в конфігурацію параметрів запиту
//     POST;
//     // Вказуємо заголовок (header) "Content-Type" зі значенням "application/json"
//     Content - Type(application / json);
//     // Вказуємо заголовок Authorization в який передаємо authToken
//     Authorization(authToken);
//     // Передаємо дані data в body, які перед цим перетворились в JSON
//     await data.json(body);
//     // Перевіряємо через властивість ok, чи є відповідь вдалою
//     if (!responce.ok) {
//       throw new Error(responce.status);
//     }
//     // Конвертуємо відповідь у формат JSON
//     const result = await responce.json();
//     // Виводимо відповідь в консоль
//     console.log(result);
//     // Виводимо помилки в консоль якщо вони є
//   } catch (error) {
//     console.error(error);
//   }
// }

// // Розкоментуйте після виконання завданння
// console.log("Завдання: 4 ==============================");
// postDataWithAuth(
//   "https://petstore.swagger.io/v2/store/order",
//   {
//     id: 0,
//     petId: 0,
//     quantity: 0,
//     shipDate: "2023-07-23T19:28:06.229Z",
//     status: "placed",
//     complete: true,
//   },
//   "fsdodfa8sdg76adtf687ya8rufia8d7fasy6g"
// );

//Завдання 5
// Створюємо асинхронний генератор asyncGenerator, який виробляє числа з паузою в одну секунду.
// "async function*" означає, що це асинхронний генератор.
async function* asyncGenerator() {
  // Змінна "i" ініціалізована значенням 0 і буде збільшуватися на 1 при кожній ітерації.
  for (let i = 0; ; i++) {
    // Цикл "while (true)" - це безкінечний цикл, який продовжуватиме виконуватися, поки його не зупинять зовні.
    while (true) {
      // Чекаємо поки виконається проміс якому встановимо затримку 1 секунду за допомогою setTimeout
      await new Promise((resolve) => setTimeout(resolve, 1));
      yield i++;
    }
  }
}
// Віддаємо значення лічильника та збільшуємо його на один
// Використовуємо асинхронний генератор та записуємо його значення в константу gen
const gen = asyncGenerator();

// Створюємо асинхрону функцію printFiveItems
async function printFiveItems() {
  // Ключові слова "for await" використовуються для ітерації по асинхронним ітерабельним об'єктам.
  // Перебираємо значення gen
  for await (let value of gen) {
    // Виводимо в консоль поточне значення
    console.log(value);
    // Умова "if (value === 4) break" зупиняє цикл після виведення п'яти чисел (від 0 до 4).
    if (value === 4) break;
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 5 ==============================");
printFiveItems();

//Завдання 6

// Функція, яка симулює витягування даних з бази даних
async function getDataFromDB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з бази даних");
    }, 1000);
  });
}

// Функція, яка симулює отримання даних з API
async function getDataFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з API");
    }, 800);
  });
}

// Функція, яка симулює отримання даних з кешу
async function getDataFromCache() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з кешу");
    }, 600);
  });
}

// Оголошуємо асинхронну функцію-генератор з ім'ям gatherData
// Використовуємо try для обробки помилок
// Викликаємо асинхронну функцію getDataFromDB() і чекаємо, поки вона завершиться
// Результат роботи функції зберігаємо у змінну dbData

// yield використовується для того, щоб повернути значення dbData

// Те саме робимо для асинхронної функції getDataFromAPI(), результат зберігаємо в apiData

// І знову для асинхронної функції getDataFromCache(), результат зберігаємо в cacheData
// Виводимо помилки в консоль якщо вони є

// Створюємо асинхрону функцію displayData
// Створюємо екземпляр генератора gatherData
// Три рази виводимо виводимо поточне значення генератора в консоль

// Розкоментуйте після виконання завданння
// console.log("Завдання: 6 ==============================");

// displayData();

//Завдання 7
// Створюємо генератор countdownGenerator, який створює послідовність чисел від вказаного значення до 0, має параметр start
// function* countdownGenerator(start) {
//   // Ініціюємо лічильник змінну count зі стартовим значенням параметра start
//   // Цикл, що триває доки лічильник більший або рівний 0
//   for (let count = start; count >= 0; count++) {
//     // Використовуємо ключове слово yield, щоб повернути поточне значення лічильника
//     yield count--;
//     // Зменшуємо лічильник на 1
//   }
// }

// console.log("Завдання: 7 ==============================");
// // Створюємо екземпляр генератора countdown з лічильниковм 5
// function* countdown(count = 5) {
//   // Запускаємо генератор та отримуємо перше значення яку записуємо в змінну nextValue
//   let nextValue = count;
//   // Цикл while, що виводить значення з генератора, та працює поки не є генератор вичерпаним.
//   while (true) {
//     // Якщо властивість done == false, генератор ще має значення для повернення.
//     if (done == false)
//       // Виводимо поточне значення
//       return nextValue;
//     // Отримуємо наступне значення з генератора
//   }
//}
