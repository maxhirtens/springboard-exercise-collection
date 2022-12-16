let num = 5;

1;
$.getJSON(`http://numbersapi.com/${num}?json`).then((data) =>
  $("body").append(data.text)
);

2;
let favNums = [4, 7, 9];
$.getJSON(`http://numbersapi.com/${favNums}?json`).then((data) =>
  console.log(data)
);

// 3
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`http://numbersapi.com/${num}?json`);
  })
).then((info) => {
  info.forEach((data) => $("body").append(`<li>${data.text}</li>`));
});
