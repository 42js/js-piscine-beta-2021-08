const makeReceipt = function () {
  data = new FormData(document.querySelector("form"));

  const menu = data.get("menu");
  const priceInt = parseInt(data.get("price"));
  const membership = data.get("membership");
  const level = data.get("level");

  if (membership == 'on') {
    document.querySelector("select").removeAttribute("disabled")
  }

  if (menu !== undefined && priceInt !== undefined && !isNaN(priceInt)) {
    const time = document.querySelector('time');
    const date = new Date();

    time.dateTime = Date();
    time.innerText =
      date.getFullYear() + '. ' + (date.getMonth() + 1) + '. ' + (date.getDay()) + '. '
      + date.toLocaleTimeString(window.navigator.language);

    const price = priceInt.toLocaleString('en-US', {maximumFractionDigits: 0});
    const discount = ((1 - parseFloat(level, 10)) * priceInt).toLocaleString('en-US', {maximumFractionDigits: 0});
    ul = document.querySelector('ul');
    ul.innerHTML = `
    <li>상품명: ${menu}</ul>
    <li>원가: ${price}</ul>
    `
    if (membership === 'on' && level !== null) {
      ul.innerHTML += `
      <li>할인가: ${discount}</ul>
      `
    }
  }
}