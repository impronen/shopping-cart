export default function cartSetter(action, item, quantity) {
  if (action === "decrease") {
    decrease(item, quantity);
  } else if (action === "increase") {
    increase(item, quantity);
  }
}

function decrease(item, quantity) {
  console.log(`Decreasing ${item} by ${quantity}`);
}

function increase(item, quantity) {
  console.log(`Adding ${item} by ${quantity}`);
}
