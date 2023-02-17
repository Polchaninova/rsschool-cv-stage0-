const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const changeQuote = document.querySelector(".change-quote");
let dataQuotes;
// let randomNum = getRandomNum(2, "0").toString();

export async function getQuotes() {
  const quotes = "../package-data.json";

  return fetch(quotes)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}
getQuotes();
function getRandomNumQuotes(min, max) {
  return Math.floor(Math.random() * (max - 1)) + 1 + min;
}

export function showQuotes() {
  getQuotes().then((data) => {
    let randomNum = getRandomNumQuotes(2, data.length).toString();
    quote.textContent = `"${data[randomNum].text}"`;
    author.textContent = `${data[randomNum].author}`;
  });
}

changeQuote.addEventListener("click", () => {
  changeQuote.classList.toggle("changeQuoteActive");
  showQuotes();
});
