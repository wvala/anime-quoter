function handleClick(event) {
  event.preventDefault();

  const url = "https://animechan.vercel.app/api/random";

  function addQuote(quote) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `
      <p>"${quote.quote}" - ${quote.character}, <em>${quote.anime}</em></p>
    `
    ul.appendChild(li);
  }

  fetch(url)
    .then((response) => response.json())
    .then((quote) => addQuote(quote));
}

function handleCharClick(event) {
  event.preventDefault();

  let query = document.getElementById('charname').value;
  let url = `https://animechan.vercel.app/api/quotes/character?name=${query}`;

  fetch(url)
    .then((response) => response.json())
    .then((quotes) => addQuote(quotes));

  function addQuote(quotes) {
    let queryValue = document.getElementById('charname');
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    quotes.forEach((quote) => {
      li.innerHTML = `
        <p>"${quote.quote}" - ${quote.character}, <em>${quote.anime}</em></p>
      `
      ul.appendChild(li);
    });
    queryValue.value = ''
  }

}

function handleClearClick(event) {
  event.preventDefault();
  let ul = document.querySelector('ul');
  ul.innerHTML = ''
}
