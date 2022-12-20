let num = 5;

// 1
async function getSingleNum() {
  let res = await $.getJSON(`http://numbersapi.com/${num}?json`);
  console.log(res);
}

// 2
let favNums = [4, 7, 9];
async function allFactsOnPage() {
  for (let num of favNums) {
    let res = await $.getJSON(`http://numbersapi.com/${num}?json`);
    $("body").append(`<li>${res.text}</li>`);
  }
}

// 3
async function allSameFactsOnPage() {
  let res = await Promise.all(
    Array.from({ length: 4 }, () =>
      $.getJSON(`http://numbersapi.com/${num}?json`)
    )
  );
  res.forEach((data) => $("body").append(`<li>${data.text}</li>`));
}
