console.log("CARRITO");

const spiderman = [
  "Amazing Fantasy",
  "Numero 15",
  "Volumen 1",
  "Fecha de Publicacion: Agosto 1962",
];

const hulk = [
  "Hulk vs Wolverine",
  "Numero 181",
  "Volumen 1",
  "Fecha de publicacion: Julio 1974",
];

function interes(interes) {
  return (precio) => precio * interes;
}

let sinInteres = interes(1);
let segundoInteres = interes(0.03);

let comicSeleccionado = prompt("Elija su producto: \n Amazing Fantasy \n Hulk vs Wolverine").toLowerCase();
let pago;

console.log(comicSeleccionado);

spiderman.push(42000);
hulk.push(35000);

if (comicSeleccionado == "amazing fantasy") {
  comicSeleccionado = spiderman;
  alert(`Selecciono Amazing Fantasy \n Su precio es de $${spiderman.slice(4)}, y presenta \n la siguente ficha tecnica:`);
  spiderman.pop();
  spiderman.forEach((c) => {
    alert(c);
  });
  pago = prompt("¿Como realizara el pago?\n¿Contado o cuotas?").toLocaleLowerCase();
} else if (comicSeleccionado == "hulk vs wolverine") {
  comicSeleccionado = hulk;
  alert(`Selecciono Hulk vs Wolverine \n Su precio es $${hulk.slice(4)}, y presenta \n la siguiente ficha tecnica`);
  hulk.pop();
  hulk.forEach((c) => {
    alert(c);
  });
  pago = prompt("¿Como realizara el pago?\n¿Contado o cuotas?").toLocaleLowerCase();
} else {
  alert("Opcion invalida, recargue la pagina");
}

spiderman.push(42000);
hulk.push(35000);

console.log(comicSeleccionado);

let sininteres = sinInteres(comicSeleccionado.slice(4));
let interesDos = segundoInteres(comicSeleccionado.slice(4));

console.log(sininteres);
console.log(interesDos);

let cuotas;

if (pago == "contado") {
  alert(`Su precio final es de $${comicSeleccionado.slice(4)}`);
} else {
  calculoPF = (precio, interes) => precio + interes;
  cuotasInd = (precio, cuotas) => precio / cuotas;

  while (pago == "cuotas") {
    cuotas = prompt("Cuantas cuotas elegira? \n En 3 y 6 cuotas = Sin interes \n En 9 y 12 cuotas = 3% de interes");

    if (cuotas == 3) {
      let calculoPrecio = calculoPF(parseInt(comicSeleccionado.slice(4)),sininteres);
      let cuotasIndividuales = cuotasInd(calculoPrecio, cuotas);
      alert(`Su precio final es de $${calculoPrecio} en ${cuotas} de $${Math.trunc(cuotasIndividuales)}`);
      break;
    } else if (cuotas == 6) {
      let calculoPrecio = calculoPF(parseInt(comicSeleccionado.slice(4)),sininteres);
      let cuotasIndividuales = cuotasInd(calculoPrecio, cuotas);
      alert(`Su precio final es de $${calculoPrecio} en ${cuotas} de $${Math.trunc(cuotasIndividuales)}`);
      break;
    } else if (cuotas == 9) {
      let calculoPrecio = calculoPF(parseInt(comicSeleccionado.slice(4)),interesDos);
      let cuotasIndividuales = cuotasInd(calculoPrecio, cuotas);
      alert(`Su precio final es de $${calculoPrecio} en ${cuotas} de $${Math.trunc(cuotasIndividuales)}`);
      break;
    } else if (cuotas == 12) {
      let calculoPrecio = calculoPF(parseInt(comicSeleccionado.slice(4)),interesDos);
      let cuotasIndividuales = cuotasInd(calculoPrecio, cuotas);
      alert(`Su precio final es de $${calculoPrecio} en ${cuotas} de $${Math.trunc(cuotasIndividuales)}`);
      break;
    } else {
      alert("Error!");
      break;
    }
  }
}