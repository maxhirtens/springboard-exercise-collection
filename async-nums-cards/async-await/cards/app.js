let baseURL = "https://deckofcardsapi.com/api/deck";

// 1
// async function getCard() {
//   let res = await $.getJSON(`${baseURL}/new/draw`);
//   let { suit, value } = res.cards[0];
//   console.log(`${value} of ${suit}`);
// }

// 2
// async function getTwoCards() {
//   let cards = [];
//   let res = await $.getJSON(`${baseURL}/new/draw`);
//   let card1 = res.cards[0];
//   cards.push(card1);
//   let deckID = res.deck_id;

//   let res2 = await $.getJSON(`${baseURL}/${deckID}/draw/`);
//   let card2 = res2.cards[0];
//   cards.push(card2);
//   cards.forEach((info) => console.log(`${info.value} of ${info.suit}`));
// }

// 3
async function cardsOnPage() {
  let $btn = $("button");
  let $cards = $(".cards");

  let deck = await $.getJSON(`${baseURL}/new/shuffle/`);

  $btn.on("click", async function () {
    let res = await $.getJSON(`${baseURL}/${deck.deck_id}/draw`);
    let cardIMG = res.cards[0].image;
    $cards.append(`<img width=50px src=${cardIMG}></img>`);
    console.log(`Cards Remaining: ${res.remaining}`);
    if (res.remaining === 0) $btn.remove();
  });
}

cardsOnPage();
