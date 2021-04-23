function calculateQuantity(id, isAdd) {
  const inputData = document.getElementById(id);
  const inputValue = parseInt(inputData.value);

  // Macking Decision If I hadd to increment or decrement
  if (isAdd == false && inputValue > 0) {
    inputData.value = inputValue - 1;
  } else if (isAdd) {
    inputData.value = inputValue + 1;
  }

  calculatingTotalPrice();
}

function calculatingTotalPrice() {
  // Getting Cost of tickets through 'gettingThePrice' function
  const firstClassTicketCost = gettingThePrice("first-class");
  const economyClassTicketCost = gettingThePrice("economy-class");

  // Calculating and Updating Sub-total Price
  const subtotalValue = document.getElementById("subtotal-price");
  const totalTicketCost = firstClassTicketCost + economyClassTicketCost;
  subtotalValue.innerText = "$" + totalTicketCost;

  // Calculating and Updating Vat
  const vatPlaceholder = document.getElementById("ticket-vat");
  const totalVat = totalTicketCost * 0.1;
  vatPlaceholder.innerText = "$" + totalVat;

  // Calculating and Updating Total Value
  const totalValue = document.getElementById("total-price");
  totalValue.innerText = totalTicketCost - totalVat;
}

function gettingThePrice(idName) {
  // Assigning the Static Price of Ticket
  const firstClassTicketPrice = 150;
  const economicClassTicketPrice = 100;

  // Getting the Number of Tickets by 'idName'
  const valueOfInputField = document.getElementById(idName);
  const totalNumberOfTickets = parseInt(valueOfInputField.value);

  if (idName == "first-class") {
    return firstClassTicketPrice * totalNumberOfTickets;
  }

  if (idName == "economy-class") {
    return economicClassTicketPrice * totalNumberOfTickets;
  }
}

function bookNow() {
  const totalPrice = parseInt(document.getElementById("total-price").innerText);
  const alert = document.getElementById("alert");
  alert.style.display = "block";

  if (totalPrice == 0) {
    alert.className = "failed";
    alert.innerText = "You haven't selected yet";
  } else {
    alert.className = "success";
    alert.innerText = "You have to pay $" + totalPrice;
  }

  setTimeout(() => {
    alert.style.display = "none";
  }, 2400);
}
