const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")

amount.addEventListener("input", () => {
  
  const hasCharacterRegex = /\D+/g
  amount.value = amount.value.replace(hasCharacterRegex, "")
  
})

form.onsubmit = (event) => {
  event.preventDefault()
  console.log(currency.value)
}