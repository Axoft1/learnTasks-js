// 1 Перепишите, используя async/await

async function loadJson(url) {
  const response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new Error(response.status);
  }
}

loadJson("no-such-user.json")
  .catch(console.log);

// 2 Перепишите, используя async/await

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  const response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {

//   let name = prompt("Введите логин?", "iliakan");

//   return loadJson(`https://api.github.com/users/${name}`)
//     .then((user) => {
//       alert(`Полное имя: ${user.name}.`);
//       return user;
//     })
//     .catch((err) => {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//         return demoGithubUser();
//       } else {
//         throw err;
//       }
//     });

  let user;
  while (true) {
    let name = prompt("Введите логин?", "iliakan");
    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break; // ошибок не было, выходим из цикла
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        // после alert начнётся новая итерация цикла
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
      } else {
        // неизвестная ошибка, пробрасываем её
        throw err;
      }
    }
  }
}

demoGithubUser();

// 3 Вызовите async–функцию из "обычной"

async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // ...что здесь написать?
  // чтобы вызвать wait() и дождаться результата "10" от async–функции
  // не забывайте, здесь нельзя использовать "await"
  wait().then(result => console.log(result))
}

