let baseURL = "https://deckofcardsapi.com/api/deck";

// // 1
// $.getJSON(`${baseURL}/new/draw`).then((data) => {
//   let { suit, value } = data.cards[0];
//   console.log(`${value} of ${suit}`);
// });

// 2
// let cards = [];
// $.getJSON(`${baseURL}/new/draw`)
//   .then((data) => {
//     let card1 = data.cards[0];
//     cards.push(card1);
//     let deckID = data.deck_id;
//     return $.getJSON(`${baseURL}/${deckID}/draw/`);
//   })
//   .then((data) => {
//     let card2 = data.cards[0];
//     cards.push(card2);
//     cards.forEach((info) => console.log(`${info.value} of ${info.suit}`));
//   });

// 3
let deckID = null;
let $btn = $("button");
let $cards = $(".cards");

$.getJSON(`${baseURL}/new/shuffle`).then((data) => {
  deckID = data.deck_id;
});

$btn.on("click", function () {
  $.getJSON(`${baseURL}/${deckID}/draw`).then((data) => {
    let cardIMG = data.cards[0].image;
    $cards.append(`<img width=50px src=${cardIMG}></img>`);
    if (data.remaining === 0) $btn.remove();
  });
});
