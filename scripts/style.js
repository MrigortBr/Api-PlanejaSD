let order = 1;

if (
  localStorage.getItem("idPage") !== null &&
  localStorage.getItem("idPage") !== undefined
) {
  order = parseInt(localStorage.getItem("idPage"));
}

function changeOrder(orderChanged) {
  const nav = document.getElementById("nav");

  if (orderChanged == 0) {
    if (order !== parseInt(localStorage.getItem("idPage"))) {
      order = parseInt(localStorage.getItem("idPage"));
    } else {
      nav.setAttribute("order", order);
    }
  } else {
    nav.setAttribute("order", orderChanged);
  }
}

changeOrder(order);
