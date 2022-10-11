let texto_salida = "";
let comprovar_mayusculas = true;

function encriptar() {
  document.getElementById("mostrar_encriptador_mesaje").value = "";
  texto = document.getElementById("obtener_encriptador_input").value;
  console.log(texto);
  console.log(texto.length);
  for (let i = 0; i < texto.length; i++) {
    if (
      texto.charAt(i) == texto.charAt(i).toUpperCase() &&
      texto.charAt(i) != " "
    ) {
      comprovar_mayusculas = false;
      console.log("entro");
      alert("No se permiten letras MAYUSCULAS");
      break;
    }
  }
  if (comprovar_mayusculas == true) {
    for (let i = 0; i < texto.length; i++) {
      if (texto.charAt(i) == "e") {
        texto_salida += "enter";
      } else if (texto.charAt(i) == "i") {
        texto_salida += "imes";
      } else if (texto.charAt(i) == "a") {
        texto_salida += "ai";
      } else if (texto.charAt(i) == "o") {
        texto_salida += "ober";
      } else if (texto.charAt(i) == "u") {
        texto_salida += "ufat";
      } else if (texto.charAt(i) == " ") {
        texto_salida += " ";
      } else {
        texto_salida += texto.charAt(i);
      }
    }
    document.getElementById("mostrar_encriptador_mesaje").value = texto_salida;
  }
  comprovar_mayusculas = true;
  document.getElementById("obtener_encriptador_input").value = "";
  texto_salida = "";
}

function desencriptar(texto) {
  document.getElementById("mostrar_encriptador_mesaje").value = "";
  texto = document.getElementById("obtener_encriptador_input").value;
  for (let i = 0; i < texto.length; i++) {
    if (
      texto.charAt(i) == texto.charAt(i).toUpperCase() &&
      texto.charAt(i) != " "
    ) {
      comprovar_mayusculas = false;
      alert("No se permiten letras MAYUSCULAS");
      break;
    }
  }
  if (comprovar_mayusculas == true) {
    for (let i = 0; i < texto.length; i++) {
      if (texto.charAt(i) == "e") {
        texto_salida += "e";
        i += 4;
      } else if (texto.charAt(i) == "i") {
        texto_salida += "i";
        i += 3;
      } else if (texto.charAt(i) == "a") {
        texto_salida += "a";
        i += 1;
      } else if (texto.charAt(i) == "o") {
        texto_salida += "o";
        i += 3;
      } else if (texto.charAt(i) == "u") {
        texto_salida += "u";
        i += 3;
      } else {
        texto_salida += texto.charAt(i);
      }
    }
    document.getElementById("mostrar_encriptador_mesaje").value = texto_salida;
  }
  comprovar_mayusculas = true;
  document.getElementById("obtener_encriptador_input").value = "";
  texto_salida = "";
}

function copy() {
  let copyText = document.querySelector("#mostrar_encriptador_mesaje");
  copyText.select();
  document.execCommand("copy");
}

button_encriptar = document.getElementById(
  "obtener_encriptador_boton_encriptar"
);
button_encriptar.onclick = encriptar;

button_desencriptar = document.getElementById(
  "obtener_encriptador_boton_desencriptar"
);
button_desencriptar.onclick = desencriptar;

document
  .querySelector("#mostrar_encriptador_boton_copiar")
  .addEventListener("click", copy);
