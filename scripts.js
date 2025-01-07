const USD = 6.10;
const EUR = 6.33;
const GBP = 7.63;

const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const footer = document.querySelector("main footer")
const description = document.querySelector("#description")

amount.addEventListener("input", () => {
  
  const hasCharacterRegex = /\D+/g
  amount.value = amount.value.replace(hasCharacterRegex, "")
  
})

form.onsubmit = (event) => {
  event.preventDefault()

  switch(currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP": 
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

function convertCurrency(amount, price, symbol){
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
    footer.classList.add("show-result")
  } catch (error) {
    footer.classList.remove("show-result")
    console.log(error)
    alert("Não foi possível converter. Tente novamente")
  }

}

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
})
}