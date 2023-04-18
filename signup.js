document.querySelector("#signup").addEventListener("click", function () {
  const arr = [];
  let check = true;
  const idade = Number(prompt("digite sua idade:"));
  const email = prompt("Digite seu e-mail:");

  arr.push(email);

  for (let i = 0; i < arr.length; i++) {
    const arr2 = [];
    arr2.push([arr[i]]);
    for (let y = 0; y < arr2[i].length; y++) {
      if (arr2[i][y].includes("@")) {
        continue;
      } else {
        alert("Digite um email valido");
        prompt("Digite seu email");
      }
    }
  }
  const senha = String(prompt("crie uma senha:"));
  alert("Cadastro feito com sucesso");
});
