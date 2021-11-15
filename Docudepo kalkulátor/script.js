function addElement() {
  document.getElementById("inputgroup2").style.display = "flex";
  document.getElementById("addbtn1").style.display = "none";
  document.getElementById("addbtn2").style.display = "flex";
}

function addElement2() {
  document.getElementById("inputgroup3").style.display = "flex";
  document.getElementById("addbtn2").style.display = "none";
  document.getElementById("addbtn3").style.display = "flex";
}
function addElement3() {
  document.getElementById("inputgroup4").style.display = "flex";
  document.getElementById("addbtn3").style.display = "none";
  document.getElementById("addbtn4").style.display = "flex";
}
function addElement4() {
  document.getElementById("inputgroup5").style.display = "flex";
  document.getElementById("addbtn4").style.display = "none";
  document.getElementById("addbtn5").style.display = "flex";
}
function addElement5() {
  document.getElementById("inputgroup6").style.display = "flex";
  document.getElementById("addbtn5").style.display = "none";
  document.getElementById("addbtn6").style.display = "flex";
}
function addElement6() {
  document.getElementById("inputgroup7").style.display = "flex";
  document.getElementById("addbtn6").style.display = "none";
  document.getElementById("addbtn7").style.display = "flex";
}
function addElement7() {
  document.getElementById("inputgroup8").style.display = "flex";
  document.getElementById("addbtn7").style.display = "none";
  document.getElementById("addbtn8").style.display = "flex";
}

let unit1 = document.getElementById("select1");
let unitqty1 = document.getElementById("selectqty1");

unitqty1.oninput = function () {
  let unitsum1 = this.value;

  switch (unit1.value) {
    case (unit1.value = "dm3"):
      selectvalueifm1.innerHTML = Math.floor(unitsum1 * 0.01 * 100) / 100;
      selectvaluekg1.innerHTML = Math.floor(unitsum1 * 0.27 * 100) / 100;
      break;

    case (unit1.value = "zsak"):
      selectvalueifm1.innerHTML = Math.floor(unitsum1 * 1 * 100) / 100;
      selectvaluekg1.innerHTML = Math.floor(unitsum1 * 27 * 100) / 100;

      break;

    case (unit1.value = "tokosiratrendezo"):
      selectvalueifm1.innerHTML = Math.floor(unitsum1 * 0.08 * 100) / 100;
      selectvaluekg1.innerHTML = Math.floor(unitsum1 * 2.16 * 100) / 100;

      break;

    case (unit1.value = "nagyemelokarosdosszie"):
      selectvalueifm1.innerHTML = Math.floor(unitsum1 * 0.08 * 100) / 100;
      selectvaluekg1.innerHTML = Math.floor(unitsum1 * 2.16 * 100) / 100;

      break;

    case (unit1.value = "kisemelokarosdosszie"):
      selectvalueifm1.innerHTML = Math.floor(unitsum1 * 0.05 * 100) / 100;
      selectvaluekg1.innerHTML = Math.floor(unitsum1 * 1.35 * 100) / 100;

      break;

    case (unit1.value = "leveltaridoboz"):
      selectvalueifm1.innerHTML = Math.floor(unitsum1 * 0.125 * 100) / 100;
      selectvaluekg1.innerHTML = Math.floor(unitsum1 * 3.38 * 100) / 100;

      break;

    case (unit1.value = "berkartondoboz"):
      selectvalueifm1.innerHTML = Math.floor(unitsum1 * 0.5 * 100) / 100;
      selectvaluekg1.innerHTML = Math.floor(unitsum1 * 13.5 * 100) / 100;

      break;

    case (unit1.value = "hdoboz"):
      selectvalueifm1.innerHTML = Math.floor(unitsum1 * 0.405 * 100) / 100;
      selectvaluekg1.innerHTML = Math.floor(unitsum1 * 10.94 * 100) / 100;

      break;

    case (unit1.value = "pdoboz"):
      selectvalueifm1.innerHTML = Math.floor(unitsum1 * 0.35 * 100) / 100;
      selectvaluekg1.innerHTML = Math.floor(unitsum1 * 9.45 * 100) / 100;

      break;

    case (unit1.value = "edoboz"):
      selectvalueifm1.innerHTML = Math.floor(unitsum1 * 0.36 * 100) / 100;
      selectvaluekg1.innerHTML = Math.floor(unitsum1 * 9.72 * 100) / 100;

      break;

    case (unit1.value = "ndoboz"):
      selectvalueifm1.innerHTML = Math.floor(unitsum1 * 0.35 * 100) / 100;
      selectvaluekg1.innerHTML = Math.floor(unitsum1 * 9.45 * 100) / 100;

      break;

    case (unit1.value = "egysalgo900"):
      selectvalueifm1.innerHTML = Math.floor(unitsum1 * 0.9 * 100) / 100;
      selectvaluekg1.innerHTML = Math.floor(unitsum1 * 24.3 * 100) / 100;

      break;

    case (unit1.value = "ketsalgo900"):
      selectvalueifm1.innerHTML = Math.floor(unitsum1 * 1.8 * 100) / 100;
      selectvaluekg1.innerHTML = Math.floor(unitsum1 * 48.6 * 100) / 100;

      break;

    case (unit1.value = "egysalgo1000"):
      selectvalueifm1.innerHTML = Math.floor(unitsum1 * 1 * 100) / 100;
      selectvaluekg1.innerHTML = Math.floor(unitsum1 * 27 * 100) / 100;

      break;

    case (unit1.value = "ketsalgo1000"):
      selectvalueifm1.innerHTML = Math.floor(unitsum1 * 2 * 100) / 100;
      selectvaluekg1.innerHTML = Math.floor(unitsum1 * 54 * 100) / 100;

      break;

    case (unit1.value = "egysalgo1200"):
      selectvalueifm1.innerHTML = Math.floor(unitsum1 * 1.2 * 100) / 100;
      selectvaluekg1.innerHTML = Math.floor(unitsum1 * 32.4 * 100) / 100;

      break;

    case (unit1.value = "ketsalgo1200"):
      selectvalueifm1.innerHTML = Math.floor(unitsum1 * 2.4 * 100) / 100;
      selectvaluekg1.innerHTML = Math.floor(unitsum1 * 64.8 * 100) / 100;

      break;

    case (unit1.value = "polc800"):
      selectvalueifm1.innerHTML = Math.floor(unitsum1 * 0.8 * 100) / 100;
      selectvaluekg1.innerHTML = Math.floor(unitsum1 * 21.6 * 100) / 100;

      break;

    case (unit1.value = "ifm"):
      selectvalueifm1.innerHTML = Math.floor(unitsum1 * 1 * 100) / 100;
      selectvaluekg1.innerHTML = Math.floor(unitsum1 * 27 * 100) / 100;

      break;
  }
  let summa1 = document.getElementById("selectvalueifm1");
  let summa1nr = Number(summa1.innerText);
  let summa2 = document.getElementById("selectvalueifm2");
  let summa2nr = Number(summa2.innerText);
  let summa3 = document.getElementById("selectvalueifm3");
  let summa3nr = Number(summa3.innerText);
  let summa4 = document.getElementById("selectvalueifm4");
  let summa4nr = Number(summa4.innerText);
  let summa5 = document.getElementById("selectvalueifm5");
  let summa5nr = Number(summa5.innerText);
  let summa6 = document.getElementById("selectvalueifm6");
  let summa6nr = Number(summa6.innerText);
  let summa7 = document.getElementById("selectvalueifm7");
  let summa7nr = Number(summa7.innerText);
  let summa8 = document.getElementById("selectvalueifm8");
  let summa8nr = Number(summa8.innerText);
  fullifm.innerHTML =
    Math.floor(
      (summa1nr +
        summa2nr +
        summa3nr +
        summa4nr +
        summa5nr +
        summa6nr +
        summa7nr +
        summa8nr) *
        100
    ) / 100;
  fullkg.innerHTML =
    Math.floor(
      (summa1nr +
        summa2nr +
        summa3nr +
        summa4nr +
        summa5nr +
        summa6nr +
        summa7nr +
        summa8nr) *
        27 *
        100
    ) / 100;
};

let unit2 = document.getElementById("select2");
let unitqty2 = document.getElementById("selectqty2");

unitqty2.oninput = function () {
  let unitsum2 = this.value;

  switch (unit2.value) {
    case (unit2.value = "dm3"):
      selectvalueifm2.innerHTML = Math.floor(unitsum2 * 0.01 * 100) / 100;
      selectvaluekg2.innerHTML = Math.floor(unitsum2 * 0.27 * 100) / 100;
      break;

    case (unit2.value = "zsak"):
      selectvalueifm2.innerHTML = Math.floor(unitsum2 * 1 * 100) / 100;
      selectvaluekg2.innerHTML = Math.floor(unitsum2 * 27 * 100) / 100;

      break;

    case (unit2.value = "tokosiratrendezo"):
      selectvalueifm2.innerHTML = Math.floor(unitsum2 * 0.08 * 100) / 100;
      selectvaluekg2.innerHTML = Math.floor(unitsum2 * 2.16 * 100) / 100;

      break;

    case (unit2.value = "nagyemelokarosdosszie"):
      selectvalueifm2.innerHTML = Math.floor(unitsum2 * 0.08 * 100) / 100;
      selectvaluekg2.innerHTML = Math.floor(unitsum2 * 2.16 * 100) / 100;

      break;

    case (unit2.value = "kisemelokarosdosszie"):
      selectvalueifm2.innerHTML = Math.floor(unitsum2 * 0.05 * 100) / 100;
      selectvaluekg2.innerHTML = Math.floor(unitsum2 * 1.35 * 100) / 100;

      break;

    case (unit2.value = "leveltaridoboz"):
      selectvalueifm2.innerHTML = Math.floor(unitsum2 * 0.125 * 100) / 100;
      selectvaluekg2.innerHTML = Math.floor(unitsum2 * 3.38 * 100) / 100;

      break;

    case (unit2.value = "berkartondoboz"):
      selectvalueifm2.innerHTML = Math.floor(unitsum2 * 0.5 * 100) / 100;
      selectvaluekg2.innerHTML = Math.floor(unitsum2 * 13.5 * 100) / 100;

      break;

    case (unit2.value = "hdoboz"):
      selectvalueifm2.innerHTML = Math.floor(unitsum2 * 0.405 * 100) / 100;
      selectvaluekg2.innerHTML = Math.floor(unitsum2 * 10.94 * 100) / 100;

      break;

    case (unit2.value = "pdoboz"):
      selectvalueifm2.innerHTML = Math.floor(unitsum2 * 0.35 * 100) / 100;
      selectvaluekg2.innerHTML = Math.floor(unitsum2 * 9.45 * 100) / 100;

      break;

    case (unit2.value = "edoboz"):
      selectvalueifm2.innerHTML = Math.floor(unitsum2 * 0.36 * 100) / 100;
      selectvaluekg2.innerHTML = Math.floor(unitsum2 * 9.72 * 100) / 100;

      break;

    case (unit2.value = "ndoboz"):
      selectvalueifm2.innerHTML = Math.floor(unitsum2 * 0.35 * 100) / 100;
      selectvaluekg2.innerHTML = Math.floor(unitsum2 * 9.45 * 100) / 100;

      break;

    case (unit2.value = "egysalgo900"):
      selectvalueifm2.innerHTML = Math.floor(unitsum2 * 0.9 * 100) / 100;
      selectvaluekg2.innerHTML = Math.floor(unitsum2 * 24.3 * 100) / 100;

      break;

    case (unit2.value = "ketsalgo900"):
      selectvalueifm2.innerHTML = Math.floor(unitsum2 * 1.8 * 100) / 100;
      selectvaluekg2.innerHTML = Math.floor(unitsum2 * 48.6 * 100) / 100;

      break;

    case (unit2.value = "egysalgo1000"):
      selectvalueifm2.innerHTML = Math.floor(unitsum2 * 1 * 100) / 100;
      selectvaluekg2.innerHTML = Math.floor(unitsum2 * 27 * 100) / 100;

      break;

    case (unit2.value = "ketsalgo1000"):
      selectvalueifm2.innerHTML = Math.floor(unitsum2 * 2 * 100) / 100;
      selectvaluekg2.innerHTML = Math.floor(unitsum2 * 54 * 100) / 100;

      break;

    case (unit2.value = "egysalgo1200"):
      selectvalueifm2.innerHTML = Math.floor(unitsum2 * 1.2 * 100) / 100;
      selectvaluekg2.innerHTML = Math.floor(unitsum2 * 32.4 * 100) / 100;

      break;

    case (unit2.value = "ketsalgo1200"):
      selectvalueifm2.innerHTML = Math.floor(unitsum2 * 2.4 * 100) / 100;
      selectvaluekg2.innerHTML = Math.floor(unitsum2 * 64.8 * 100) / 100;

      break;

    case (unit2.value = "polc800"):
      selectvalueifm2.innerHTML = Math.floor(unitsum2 * 0.8 * 100) / 100;
      selectvaluekg2.innerHTML = Math.floor(unitsum2 * 21.6 * 100) / 100;

      break;

    case (unit2.value = "ifm"):
      selectvalueifm2.innerHTML = Math.floor(unitsum2 * 1 * 100) / 100;
      selectvaluekg2.innerHTML = Math.floor(unitsum2 * 27 * 100) / 100;

      break;
  }

  let summa1 = document.getElementById("selectvalueifm1");
  let summa1nr = Number(summa1.innerText);
  let summa2 = document.getElementById("selectvalueifm2");
  let summa2nr = Number(summa2.innerText);
  let summa3 = document.getElementById("selectvalueifm3");
  let summa3nr = Number(summa3.innerText);
  let summa4 = document.getElementById("selectvalueifm4");
  let summa4nr = Number(summa4.innerText);
  let summa5 = document.getElementById("selectvalueifm5");
  let summa5nr = Number(summa5.innerText);
  let summa6 = document.getElementById("selectvalueifm6");
  let summa6nr = Number(summa6.innerText);
  let summa7 = document.getElementById("selectvalueifm7");
  let summa7nr = Number(summa7.innerText);
  let summa8 = document.getElementById("selectvalueifm8");
  let summa8nr = Number(summa8.innerText);
  fullifm.innerHTML =
    Math.floor(
      (summa1nr +
        summa2nr +
        summa3nr +
        summa4nr +
        summa5nr +
        summa6nr +
        summa7nr +
        summa8nr) *
        100
    ) / 100;
  fullkg.innerHTML =
    Math.floor(
      (summa1nr +
        summa2nr +
        summa3nr +
        summa4nr +
        summa5nr +
        summa6nr +
        summa7nr +
        summa8nr) *
        27 *
        100
    ) / 100;
};

let unit3 = document.getElementById("select3");
let unitqty3 = document.getElementById("selectqty3");

unitqty3.oninput = function () {
  let unitsum3 = this.value;

  switch (unit3.value) {
    case (unit3.value = "dm3"):
      selectvalueifm3.innerHTML = Math.floor(unitsum3 * 0.01 * 100) / 100;
      selectvaluekg3.innerHTML = Math.floor(unitsum3 * 0.27 * 100) / 100;
      break;

    case (unit3.value = "zsak"):
      selectvalueifm3.innerHTML = Math.floor(unitsum3 * 1 * 100) / 100;
      selectvaluekg3.innerHTML = Math.floor(unitsum3 * 27 * 100) / 100;

      break;

    case (unit3.value = "tokosiratrendezo"):
      selectvalueifm3.innerHTML = Math.floor(unitsum3 * 0.08 * 100) / 100;
      selectvaluekg3.innerHTML = Math.floor(unitsum3 * 2.16 * 100) / 100;

      break;

    case (unit3.value = "nagyemelokarosdosszie"):
      selectvalueifm3.innerHTML = Math.floor(unitsum3 * 0.08 * 100) / 100;
      selectvaluekg3.innerHTML = Math.floor(unitsum3 * 2.16 * 100) / 100;

      break;

    case (unit3.value = "kisemelokarosdosszie"):
      selectvalueifm3.innerHTML = Math.floor(unitsum3 * 0.05 * 100) / 100;
      selectvaluekg3.innerHTML = Math.floor(unitsum3 * 1.35 * 100) / 100;

      break;

    case (unit3.value = "leveltaridoboz"):
      selectvalueifm3.innerHTML = Math.floor(unitsum3 * 0.125 * 100) / 100;
      selectvaluekg3.innerHTML = Math.floor(unitsum3 * 3.38 * 100) / 100;

      break;

    case (unit3.value = "berkartondoboz"):
      selectvalueifm3.innerHTML = Math.floor(unitsum3 * 0.5 * 100) / 100;
      selectvaluekg3.innerHTML = Math.floor(unitsum3 * 13.5 * 100) / 100;

      break;

    case (unit3.value = "hdoboz"):
      selectvalueifm3.innerHTML = Math.floor(unitsum3 * 0.405 * 100) / 100;
      selectvaluekg3.innerHTML = Math.floor(unitsum3 * 10.94 * 100) / 100;

      break;

    case (unit3.value = "pdoboz"):
      selectvalueifm3.innerHTML = Math.floor(unitsum3 * 0.35 * 100) / 100;
      selectvaluekg3.innerHTML = Math.floor(unitsum3 * 9.45 * 100) / 100;

      break;

    case (unit3.value = "edoboz"):
      selectvalueifm3.innerHTML = Math.floor(unitsum3 * 0.36 * 100) / 100;
      selectvaluekg3.innerHTML = Math.floor(unitsum3 * 9.72 * 100) / 100;

      break;

    case (unit3.value = "ndoboz"):
      selectvalueifm3.innerHTML = Math.floor(unitsum3 * 0.35 * 100) / 100;
      selectvaluekg3.innerHTML = Math.floor(unitsum3 * 9.45 * 100) / 100;

      break;

    case (unit3.value = "egysalgo900"):
      selectvalueifm3.innerHTML = Math.floor(unitsum3 * 0.9 * 100) / 100;
      selectvaluekg3.innerHTML = Math.floor(unitsum3 * 24.3 * 100) / 100;

      break;

    case (unit3.value = "ketsalgo900"):
      selectvalueifm3.innerHTML = Math.floor(unitsum3 * 1.8 * 100) / 100;
      selectvaluekg3.innerHTML = Math.floor(unitsum3 * 48.6 * 100) / 100;

      break;

    case (unit3.value = "egysalgo1000"):
      selectvalueifm3.innerHTML = Math.floor(unitsum3 * 1 * 100) / 100;
      selectvaluekg3.innerHTML = Math.floor(unitsum3 * 27 * 100) / 100;

      break;

    case (unit3.value = "ketsalgo1000"):
      selectvalueifm3.innerHTML = Math.floor(unitsum3 * 2 * 100) / 100;
      selectvaluekg3.innerHTML = Math.floor(unitsum3 * 54 * 100) / 100;

      break;

    case (unit3.value = "egysalgo1200"):
      selectvalueifm3.innerHTML = Math.floor(unitsum3 * 1.2 * 100) / 100;
      selectvaluekg3.innerHTML = Math.floor(unitsum3 * 32.4 * 100) / 100;

      break;

    case (unit3.value = "ketsalgo1200"):
      selectvalueifm3.innerHTML = Math.floor(unitsum3 * 2.4 * 100) / 100;
      selectvaluekg3.innerHTML = Math.floor(unitsum3 * 64.8 * 100) / 100;

      break;

    case (unit3.value = "polc800"):
      selectvalueifm3.innerHTML = Math.floor(unitsum3 * 0.8 * 100) / 100;
      selectvaluekg3.innerHTML = Math.floor(unitsum3 * 21.6 * 100) / 100;

      break;

    case (unit3.value = "ifm"):
      selectvalueifm3.innerHTML = Math.floor(unitsum3 * 1 * 100) / 100;
      selectvaluekg3.innerHTML = Math.floor(unitsum3 * 27 * 100) / 100;

      break;
  }

  let summa1 = document.getElementById("selectvalueifm1");
  let summa1nr = Number(summa1.innerText);
  let summa2 = document.getElementById("selectvalueifm2");
  let summa2nr = Number(summa2.innerText);
  let summa3 = document.getElementById("selectvalueifm3");
  let summa3nr = Number(summa3.innerText);
  let summa4 = document.getElementById("selectvalueifm4");
  let summa4nr = Number(summa4.innerText);
  let summa5 = document.getElementById("selectvalueifm5");
  let summa5nr = Number(summa5.innerText);
  let summa6 = document.getElementById("selectvalueifm6");
  let summa6nr = Number(summa6.innerText);
  let summa7 = document.getElementById("selectvalueifm7");
  let summa7nr = Number(summa7.innerText);
  let summa8 = document.getElementById("selectvalueifm8");
  let summa8nr = Number(summa8.innerText);
  fullifm.innerHTML =
    Math.floor(
      (summa1nr +
        summa2nr +
        summa3nr +
        summa4nr +
        summa5nr +
        summa6nr +
        summa7nr +
        summa8nr) *
        100
    ) / 100;
  fullkg.innerHTML =
    Math.floor(
      (summa1nr +
        summa2nr +
        summa3nr +
        summa4nr +
        summa5nr +
        summa6nr +
        summa7nr +
        summa8nr) *
        27 *
        100
    ) / 100;
};

let unit4 = document.getElementById("select4");
let unitqty4 = document.getElementById("selectqty4");

unitqty4.oninput = function () {
  let unitsum4 = this.value;

  switch (unit4.value) {
    case (unit4.value = "dm3"):
      selectvalueifm4.innerHTML = Math.floor(unitsum4 * 0.01 * 100) / 100;
      selectvaluekg4.innerHTML = Math.floor(unitsum4 * 0.27 * 100) / 100;
      break;

    case (unit4.value = "zsak"):
      selectvalueifm4.innerHTML = Math.floor(unitsum4 * 1 * 100) / 100;
      selectvaluekg4.innerHTML = Math.floor(unitsum4 * 27 * 100) / 100;

      break;

    case (unit4.value = "tokosiratrendezo"):
      selectvalueifm4.innerHTML = Math.floor(unitsum4 * 0.08 * 100) / 100;
      selectvaluekg4.innerHTML = Math.floor(unitsum4 * 2.16 * 100) / 100;

      break;

    case (unit4.value = "nagyemelokarosdosszie"):
      selectvalueifm4.innerHTML = Math.floor(unitsum4 * 0.08 * 100) / 100;
      selectvaluekg4.innerHTML = Math.floor(unitsum4 * 2.16 * 100) / 100;

      break;

    case (unit4.value = "kisemelokarosdosszie"):
      selectvalueifm4.innerHTML = Math.floor(unitsum4 * 0.05 * 100) / 100;
      selectvaluekg4.innerHTML = Math.floor(unitsum4 * 1.35 * 100) / 100;

      break;

    case (unit4.value = "leveltaridoboz"):
      selectvalueifm4.innerHTML = Math.floor(unitsum4 * 0.125 * 100) / 100;
      selectvaluekg4.innerHTML = Math.floor(unitsum4 * 3.38 * 100) / 100;

      break;

    case (unit4.value = "berkartondoboz"):
      selectvalueifm4.innerHTML = Math.floor(unitsum4 * 0.5 * 100) / 100;
      selectvaluekg4.innerHTML = Math.floor(unitsum4 * 13.5 * 100) / 100;

      break;

    case (unit4.value = "hdoboz"):
      selectvalueifm4.innerHTML = Math.floor(unitsum4 * 0.405 * 100) / 100;
      selectvaluekg4.innerHTML = Math.floor(unitsum4 * 10.94 * 100) / 100;

      break;

    case (unit4.value = "pdoboz"):
      selectvalueifm4.innerHTML = Math.floor(unitsum4 * 0.35 * 100) / 100;
      selectvaluekg4.innerHTML = Math.floor(unitsum4 * 9.45 * 100) / 100;

      break;

    case (unit4.value = "edoboz"):
      selectvalueifm4.innerHTML = Math.floor(unitsum4 * 0.36 * 100) / 100;
      selectvaluekg4.innerHTML = Math.floor(unitsum4 * 9.72 * 100) / 100;

      break;

    case (unit4.value = "ndoboz"):
      selectvalueifm4.innerHTML = Math.floor(unitsum4 * 0.35 * 100) / 100;
      selectvaluekg4.innerHTML = Math.floor(unitsum4 * 9.45 * 100) / 100;

      break;

    case (unit4.value = "egysalgo900"):
      selectvalueifm4.innerHTML = Math.floor(unitsum4 * 0.9 * 100) / 100;
      selectvaluekg4.innerHTML = Math.floor(unitsum4 * 24.3 * 100) / 100;

      break;

    case (unit4.value = "ketsalgo900"):
      selectvalueifm4.innerHTML = Math.floor(unitsum4 * 1.8 * 100) / 100;
      selectvaluekg4.innerHTML = Math.floor(unitsum4 * 48.6 * 100) / 100;

      break;

    case (unit4.value = "egysalgo1000"):
      selectvalueifm4.innerHTML = Math.floor(unitsum4 * 1 * 100) / 100;
      selectvaluekg4.innerHTML = Math.floor(unitsum4 * 27 * 100) / 100;

      break;

    case (unit4.value = "ketsalgo1000"):
      selectvalueifm4.innerHTML = Math.floor(unitsum4 * 2 * 100) / 100;
      selectvaluekg4.innerHTML = Math.floor(unitsum4 * 54 * 100) / 100;

      break;

    case (unit4.value = "egysalgo1200"):
      selectvalueifm4.innerHTML = Math.floor(unitsum4 * 1.2 * 100) / 100;
      selectvaluekg4.innerHTML = Math.floor(unitsum4 * 32.4 * 100) / 100;

      break;

    case (unit4.value = "ketsalgo1200"):
      selectvalueifm4.innerHTML = Math.floor(unitsum4 * 2.4 * 100) / 100;
      selectvaluekg4.innerHTML = Math.floor(unitsum4 * 64.8 * 100) / 100;

      break;

    case (unit4.value = "polc800"):
      selectvalueifm4.innerHTML = Math.floor(unitsum4 * 0.8 * 100) / 100;
      selectvaluekg4.innerHTML = Math.floor(unitsum4 * 21.6 * 100) / 100;

      break;

    case (unit4.value = "ifm"):
      selectvalueifm4.innerHTML = Math.floor(unitsum4 * 1 * 100) / 100;
      selectvaluekg4.innerHTML = Math.floor(unitsum4 * 27 * 100) / 100;

      break;
  }

  let summa1 = document.getElementById("selectvalueifm1");
  let summa1nr = Number(summa1.innerText);
  let summa2 = document.getElementById("selectvalueifm2");
  let summa2nr = Number(summa2.innerText);
  let summa3 = document.getElementById("selectvalueifm3");
  let summa3nr = Number(summa3.innerText);
  let summa4 = document.getElementById("selectvalueifm4");
  let summa4nr = Number(summa4.innerText);
  let summa5 = document.getElementById("selectvalueifm5");
  let summa5nr = Number(summa5.innerText);
  let summa6 = document.getElementById("selectvalueifm6");
  let summa6nr = Number(summa6.innerText);
  let summa7 = document.getElementById("selectvalueifm7");
  let summa7nr = Number(summa7.innerText);
  let summa8 = document.getElementById("selectvalueifm8");
  let summa8nr = Number(summa8.innerText);
  fullifm.innerHTML =
    Math.floor(
      (summa1nr +
        summa2nr +
        summa3nr +
        summa4nr +
        summa5nr +
        summa6nr +
        summa7nr +
        summa8nr) *
        100
    ) / 100;
  fullkg.innerHTML =
    Math.floor(
      (summa1nr +
        summa2nr +
        summa3nr +
        summa4nr +
        summa5nr +
        summa6nr +
        summa7nr +
        summa8nr) *
        27 *
        100
    ) / 100;
};

let unit5 = document.getElementById("select5");
let unitqty5 = document.getElementById("selectqty5");

unitqty5.oninput = function () {
  let unitsum5 = this.value;

  switch (unit5.value) {
    case (unit5.value = "dm3"):
      selectvalueifm5.innerHTML = Math.floor(unitsum5 * 0.01 * 100) / 100;
      selectvaluekg5.innerHTML = Math.floor(unitsum5 * 0.27 * 100) / 100;
      break;

    case (unit5.value = "zsak"):
      selectvalueifm5.innerHTML = Math.floor(unitsum5 * 1 * 100) / 100;
      selectvaluekg5.innerHTML = Math.floor(unitsum5 * 27 * 100) / 100;

      break;

    case (unit5.value = "tokosiratrendezo"):
      selectvalueifm5.innerHTML = Math.floor(unitsum5 * 0.08 * 100) / 100;
      selectvaluekg5.innerHTML = Math.floor(unitsum5 * 2.16 * 100) / 100;

      break;

    case (unit5.value = "nagyemelokarosdosszie"):
      selectvalueifm5.innerHTML = Math.floor(unitsum5 * 0.08 * 100) / 100;
      selectvaluekg5.innerHTML = Math.floor(unitsum5 * 2.16 * 100) / 100;

      break;

    case (unit5.value = "kisemelokarosdosszie"):
      selectvalueifm5.innerHTML = Math.floor(unitsum5 * 0.05 * 100) / 100;
      selectvaluekg5.innerHTML = Math.floor(unitsum5 * 1.35 * 100) / 100;

      break;

    case (unit5.value = "leveltaridoboz"):
      selectvalueifm5.innerHTML = Math.floor(unitsum5 * 0.125 * 100) / 100;
      selectvaluekg5.innerHTML = Math.floor(unitsum5 * 3.38 * 100) / 100;

      break;

    case (unit5.value = "berkartondoboz"):
      selectvalueifm5.innerHTML = Math.floor(unitsum5 * 0.5 * 100) / 100;
      selectvaluekg5.innerHTML = Math.floor(unitsum5 * 13.5 * 100) / 100;

      break;

    case (unit5.value = "hdoboz"):
      selectvalueifm5.innerHTML = Math.floor(unitsum5 * 0.405 * 100) / 100;
      selectvaluekg5.innerHTML = Math.floor(unitsum5 * 10.94 * 100) / 100;

      break;

    case (unit5.value = "pdoboz"):
      selectvalueifm5.innerHTML = Math.floor(unitsum5 * 0.35 * 100) / 100;
      selectvaluekg5.innerHTML = Math.floor(unitsum5 * 9.45 * 100) / 100;

      break;

    case (unit5.value = "edoboz"):
      selectvalueifm5.innerHTML = Math.floor(unitsum5 * 0.36 * 100) / 100;
      selectvaluekg5.innerHTML = Math.floor(unitsum5 * 9.72 * 100) / 100;

      break;

    case (unit5.value = "ndoboz"):
      selectvalueifm5.innerHTML = Math.floor(unitsum5 * 0.35 * 100) / 100;
      selectvaluekg5.innerHTML = Math.floor(unitsum5 * 9.45 * 100) / 100;

      break;

    case (unit5.value = "egysalgo900"):
      selectvalueifm5.innerHTML = Math.floor(unitsum5 * 0.9 * 100) / 100;
      selectvaluekg5.innerHTML = Math.floor(unitsum5 * 24.3 * 100) / 100;

      break;

    case (unit5.value = "ketsalgo900"):
      selectvalueifm5.innerHTML = Math.floor(unitsum5 * 1.8 * 100) / 100;
      selectvaluekg5.innerHTML = Math.floor(unitsum5 * 48.6 * 100) / 100;

      break;

    case (unit5.value = "egysalgo1000"):
      selectvalueifm5.innerHTML = Math.floor(unitsum5 * 1 * 100) / 100;
      selectvaluekg5.innerHTML = Math.floor(unitsum5 * 27 * 100) / 100;

      break;

    case (unit5.value = "ketsalgo1000"):
      selectvalueifm5.innerHTML = Math.floor(unitsum5 * 2 * 100) / 100;
      selectvaluekg5.innerHTML = Math.floor(unitsum5 * 54 * 100) / 100;

      break;

    case (unit5.value = "egysalgo1200"):
      selectvalueifm5.innerHTML = Math.floor(unitsum5 * 1.2 * 100) / 100;
      selectvaluekg5.innerHTML = Math.floor(unitsum5 * 32.4 * 100) / 100;

      break;

    case (unit5.value = "ketsalgo1200"):
      selectvalueifm5.innerHTML = Math.floor(unitsum5 * 2.4 * 100) / 100;
      selectvaluekg5.innerHTML = Math.floor(unitsum5 * 64.8 * 100) / 100;

      break;

    case (unit5.value = "polc800"):
      selectvalueifm5.innerHTML = Math.floor(unitsum5 * 0.8 * 100) / 100;
      selectvaluekg5.innerHTML = Math.floor(unitsum5 * 21.6 * 100) / 100;

      break;

    case (unit5.value = "ifm"):
      selectvalueifm5.innerHTML = Math.floor(unitsum5 * 1 * 100) / 100;
      selectvaluekg5.innerHTML = Math.floor(unitsum5 * 27 * 100) / 100;

      break;
  }

  let summa1 = document.getElementById("selectvalueifm1");
  let summa1nr = Number(summa1.innerText);
  let summa2 = document.getElementById("selectvalueifm2");
  let summa2nr = Number(summa2.innerText);
  let summa3 = document.getElementById("selectvalueifm3");
  let summa3nr = Number(summa3.innerText);
  let summa4 = document.getElementById("selectvalueifm4");
  let summa4nr = Number(summa4.innerText);
  let summa5 = document.getElementById("selectvalueifm5");
  let summa5nr = Number(summa5.innerText);
  let summa6 = document.getElementById("selectvalueifm6");
  let summa6nr = Number(summa6.innerText);
  let summa7 = document.getElementById("selectvalueifm7");
  let summa7nr = Number(summa7.innerText);
  let summa8 = document.getElementById("selectvalueifm8");
  let summa8nr = Number(summa8.innerText);
  fullifm.innerHTML =
    Math.floor(
      (summa1nr +
        summa2nr +
        summa3nr +
        summa4nr +
        summa5nr +
        summa6nr +
        summa7nr +
        summa8nr) *
        100
    ) / 100;
  fullkg.innerHTML =
    Math.floor(
      (summa1nr +
        summa2nr +
        summa3nr +
        summa4nr +
        summa5nr +
        summa6nr +
        summa7nr +
        summa8nr) *
        27 *
        100
    ) / 100;
};

let unit6 = document.getElementById("select6");
let unitqty6 = document.getElementById("selectqty6");

unitqty6.oninput = function () {
  let unitsum6 = this.value;

  switch (unit6.value) {
    case (unit6.value = "dm3"):
      selectvalueifm6.innerHTML = Math.floor(unitsum6 * 0.01 * 100) / 100;
      selectvaluekg6.innerHTML = Math.floor(unitsum6 * 0.27 * 100) / 100;
      break;

    case (unit6.value = "zsak"):
      selectvalueifm6.innerHTML = Math.floor(unitsum6 * 1 * 100) / 100;
      selectvaluekg6.innerHTML = Math.floor(unitsum6 * 27 * 100) / 100;

      break;

    case (unit6.value = "tokosiratrendezo"):
      selectvalueifm6.innerHTML = Math.floor(unitsum6 * 0.08 * 100) / 100;
      selectvaluekg6.innerHTML = Math.floor(unitsum6 * 2.16 * 100) / 100;

      break;

    case (unit6.value = "nagyemelokarosdosszie"):
      selectvalueifm6.innerHTML = Math.floor(unitsum6 * 0.08 * 100) / 100;
      selectvaluekg6.innerHTML = Math.floor(unitsum6 * 2.16 * 100) / 100;

      break;

    case (unit6.value = "kisemelokarosdosszie"):
      selectvalueifm6.innerHTML = Math.floor(unitsum6 * 0.05 * 100) / 100;
      selectvaluekg6.innerHTML = Math.floor(unitsum6 * 1.35 * 100) / 100;

      break;

    case (unit6.value = "leveltaridoboz"):
      selectvalueifm6.innerHTML = Math.floor(unitsum6 * 0.125 * 100) / 100;
      selectvaluekg6.innerHTML = Math.floor(unitsum6 * 3.38 * 100) / 100;

      break;

    case (unit6.value = "berkartondoboz"):
      selectvalueifm6.innerHTML = Math.floor(unitsum6 * 0.5 * 100) / 100;
      selectvaluekg6.innerHTML = Math.floor(unitsum6 * 13.5 * 100) / 100;

      break;

    case (unit6.value = "hdoboz"):
      selectvalueifm6.innerHTML = Math.floor(unitsum6 * 0.405 * 100) / 100;
      selectvaluekg6.innerHTML = Math.floor(unitsum6 * 10.94 * 100) / 100;

      break;

    case (unit6.value = "pdoboz"):
      selectvalueifm6.innerHTML = Math.floor(unitsum6 * 0.35 * 100) / 100;
      selectvaluekg6.innerHTML = Math.floor(unitsum6 * 9.45 * 100) / 100;

      break;

    case (unit6.value = "edoboz"):
      selectvalueifm6.innerHTML = Math.floor(unitsum6 * 0.36 * 100) / 100;
      selectvaluekg6.innerHTML = Math.floor(unitsum6 * 9.72 * 100) / 100;

      break;

    case (unit6.value = "ndoboz"):
      selectvalueifm6.innerHTML = Math.floor(unitsum6 * 0.35 * 100) / 100;
      selectvaluekg6.innerHTML = Math.floor(unitsum6 * 9.45 * 100) / 100;

      break;

    case (unit6.value = "egysalgo900"):
      selectvalueifm6.innerHTML = Math.floor(unitsum6 * 0.9 * 100) / 100;
      selectvaluekg6.innerHTML = Math.floor(unitsum6 * 24.3 * 100) / 100;

      break;

    case (unit6.value = "ketsalgo900"):
      selectvalueifm6.innerHTML = Math.floor(unitsum6 * 1.8 * 100) / 100;
      selectvaluekg6.innerHTML = Math.floor(unitsum6 * 48.6 * 100) / 100;

      break;

    case (unit6.value = "egysalgo1000"):
      selectvalueifm6.innerHTML = Math.floor(unitsum6 * 1 * 100) / 100;
      selectvaluekg6.innerHTML = Math.floor(unitsum6 * 27 * 100) / 100;

      break;

    case (unit6.value = "ketsalgo1000"):
      selectvalueifm6.innerHTML = Math.floor(unitsum6 * 2 * 100) / 100;
      selectvaluekg6.innerHTML = Math.floor(unitsum6 * 54 * 100) / 100;

      break;

    case (unit6.value = "egysalgo1200"):
      selectvalueifm6.innerHTML = Math.floor(unitsum6 * 1.2 * 100) / 100;
      selectvaluekg6.innerHTML = Math.floor(unitsum6 * 32.4 * 100) / 100;

      break;

    case (unit6.value = "ketsalgo1200"):
      selectvalueifm6.innerHTML = Math.floor(unitsum6 * 2.4 * 100) / 100;
      selectvaluekg6.innerHTML = Math.floor(unitsum6 * 64.8 * 100) / 100;

      break;

    case (unit6.value = "polc800"):
      selectvalueifm6.innerHTML = Math.floor(unitsum6 * 0.8 * 100) / 100;
      selectvaluekg6.innerHTML = Math.floor(unitsum6 * 21.6 * 100) / 100;

      break;

    case (unit6.value = "ifm"):
      selectvalueifm6.innerHTML = Math.floor(unitsum6 * 1 * 100) / 100;
      selectvaluekg6.innerHTML = Math.floor(unitsum6 * 27 * 100) / 100;

      break;
  }

  let summa1 = document.getElementById("selectvalueifm1");
  let summa1nr = Number(summa1.innerText);
  let summa2 = document.getElementById("selectvalueifm2");
  let summa2nr = Number(summa2.innerText);
  let summa3 = document.getElementById("selectvalueifm3");
  let summa3nr = Number(summa3.innerText);
  let summa4 = document.getElementById("selectvalueifm4");
  let summa4nr = Number(summa4.innerText);
  let summa5 = document.getElementById("selectvalueifm5");
  let summa5nr = Number(summa5.innerText);
  let summa6 = document.getElementById("selectvalueifm6");
  let summa6nr = Number(summa6.innerText);
  let summa7 = document.getElementById("selectvalueifm7");
  let summa7nr = Number(summa7.innerText);
  let summa8 = document.getElementById("selectvalueifm8");
  let summa8nr = Number(summa8.innerText);
  fullifm.innerHTML =
    Math.floor(
      (summa1nr +
        summa2nr +
        summa3nr +
        summa4nr +
        summa5nr +
        summa6nr +
        summa7nr +
        summa8nr) *
        100
    ) / 100;
  fullkg.innerHTML =
    Math.floor(
      (summa1nr +
        summa2nr +
        summa3nr +
        summa4nr +
        summa5nr +
        summa6nr +
        summa7nr +
        summa8nr) *
        27 *
        100
    ) / 100;
};

let unit7 = document.getElementById("select7");
let unitqty7 = document.getElementById("selectqty7");

unitqty7.oninput = function () {
  let unitsum7 = this.value;

  switch (unit7.value) {
    case (unit7.value = "dm3"):
      selectvalueifm7.innerHTML = Math.floor(unitsum7 * 0.01 * 100) / 100;
      selectvaluekg7.innerHTML = Math.floor(unitsum7 * 0.27 * 100) / 100;
      break;

    case (unit7.value = "zsak"):
      selectvalueifm7.innerHTML = Math.floor(unitsum7 * 1 * 100) / 100;
      selectvaluekg7.innerHTML = Math.floor(unitsum7 * 27 * 100) / 100;

      break;

    case (unit7.value = "tokosiratrendezo"):
      selectvalueifm7.innerHTML = Math.floor(unitsum7 * 0.08 * 100) / 100;
      selectvaluekg7.innerHTML = Math.floor(unitsum7 * 2.16 * 100) / 100;

      break;

    case (unit7.value = "nagyemelokarosdosszie"):
      selectvalueifm7.innerHTML = Math.floor(unitsum7 * 0.08 * 100) / 100;
      selectvaluekg7.innerHTML = Math.floor(unitsum7 * 2.16 * 100) / 100;

      break;

    case (unit7.value = "kisemelokarosdosszie"):
      selectvalueifm7.innerHTML = Math.floor(unitsum7 * 0.05 * 100) / 100;
      selectvaluekg7.innerHTML = Math.floor(unitsum7 * 1.35 * 100) / 100;

      break;

    case (unit7.value = "leveltaridoboz"):
      selectvalueifm7.innerHTML = Math.floor(unitsum7 * 0.125 * 100) / 100;
      selectvaluekg7.innerHTML = Math.floor(unitsum7 * 3.38 * 100) / 100;

      break;

    case (unit7.value = "berkartondoboz"):
      selectvalueifm7.innerHTML = Math.floor(unitsum7 * 0.5 * 100) / 100;
      selectvaluekg7.innerHTML = Math.floor(unitsum7 * 13.5 * 100) / 100;

      break;

    case (unit7.value = "hdoboz"):
      selectvalueifm7.innerHTML = Math.floor(unitsum7 * 0.405 * 100) / 100;
      selectvaluekg7.innerHTML = Math.floor(unitsum7 * 10.94 * 100) / 100;

      break;

    case (unit7.value = "pdoboz"):
      selectvalueifm7.innerHTML = Math.floor(unitsum7 * 0.35 * 100) / 100;
      selectvaluekg7.innerHTML = Math.floor(unitsum7 * 9.45 * 100) / 100;

      break;

    case (unit7.value = "edoboz"):
      selectvalueifm7.innerHTML = Math.floor(unitsum7 * 0.36 * 100) / 100;
      selectvaluekg7.innerHTML = Math.floor(unitsum7 * 9.72 * 100) / 100;

      break;

    case (unit7.value = "ndoboz"):
      selectvalueifm7.innerHTML = Math.floor(unitsum7 * 0.35 * 100) / 100;
      selectvaluekg7.innerHTML = Math.floor(unitsum7 * 9.45 * 100) / 100;

      break;

    case (unit7.value = "egysalgo900"):
      selectvalueifm7.innerHTML = Math.floor(unitsum7 * 0.9 * 100) / 100;
      selectvaluekg7.innerHTML = Math.floor(unitsum7 * 24.3 * 100) / 100;

      break;

    case (unit7.value = "ketsalgo900"):
      selectvalueifm7.innerHTML = Math.floor(unitsum7 * 1.8 * 100) / 100;
      selectvaluekg7.innerHTML = Math.floor(unitsum7 * 48.6 * 100) / 100;

      break;

    case (unit7.value = "egysalgo1000"):
      selectvalueifm7.innerHTML = Math.floor(unitsum7 * 1 * 100) / 100;
      selectvaluekg7.innerHTML = Math.floor(unitsum7 * 27 * 100) / 100;

      break;

    case (unit7.value = "ketsalgo1000"):
      selectvalueifm7.innerHTML = Math.floor(unitsum7 * 2 * 100) / 100;
      selectvaluekg7.innerHTML = Math.floor(unitsum7 * 54 * 100) / 100;

      break;

    case (unit7.value = "egysalgo1200"):
      selectvalueifm7.innerHTML = Math.floor(unitsum7 * 1.2 * 100) / 100;
      selectvaluekg7.innerHTML = Math.floor(unitsum7 * 32.4 * 100) / 100;

      break;

    case (unit7.value = "ketsalgo1200"):
      selectvalueifm7.innerHTML = Math.floor(unitsum7 * 2.4 * 100) / 100;
      selectvaluekg7.innerHTML = Math.floor(unitsum7 * 64.8 * 100) / 100;

      break;

    case (unit7.value = "polc800"):
      selectvalueifm7.innerHTML = Math.floor(unitsum7 * 0.8 * 100) / 100;
      selectvaluekg7.innerHTML = Math.floor(unitsum7 * 21.6 * 100) / 100;

      break;

    case (unit7.value = "ifm"):
      selectvalueifm7.innerHTML = Math.floor(unitsum7 * 1 * 100) / 100;
      selectvaluekg7.innerHTML = Math.floor(unitsum7 * 27 * 100) / 100;

      break;
  }

  let summa1 = document.getElementById("selectvalueifm1");
  let summa1nr = Number(summa1.innerText);
  let summa2 = document.getElementById("selectvalueifm2");
  let summa2nr = Number(summa2.innerText);
  let summa3 = document.getElementById("selectvalueifm3");
  let summa3nr = Number(summa3.innerText);
  let summa4 = document.getElementById("selectvalueifm4");
  let summa4nr = Number(summa4.innerText);
  let summa5 = document.getElementById("selectvalueifm5");
  let summa5nr = Number(summa5.innerText);
  let summa6 = document.getElementById("selectvalueifm6");
  let summa6nr = Number(summa6.innerText);
  let summa7 = document.getElementById("selectvalueifm7");
  let summa7nr = Number(summa7.innerText);
  let summa8 = document.getElementById("selectvalueifm8");
  let summa8nr = Number(summa8.innerText);
  fullifm.innerHTML =
    Math.floor(
      (summa1nr +
        summa2nr +
        summa3nr +
        summa4nr +
        summa5nr +
        summa6nr +
        summa7nr +
        summa8nr) *
        100
    ) / 100;
  fullkg.innerHTML =
    Math.floor(
      (summa1nr +
        summa2nr +
        summa3nr +
        summa4nr +
        summa5nr +
        summa6nr +
        summa7nr +
        summa8nr) *
        27 *
        100
    ) / 100;
};

let unit8 = document.getElementById("select8");
let unitqty8 = document.getElementById("selectqty8");

unitqty8.oninput = function () {
  let unitsum8 = this.value;

  switch (unit8.value) {
    case (unit8.value = "dm3"):
      selectvalueifm8.innerHTML = Math.floor(unitsum8 * 0.01 * 100) / 100;
      selectvaluekg8.innerHTML = Math.floor(unitsum8 * 0.27 * 100) / 100;
      break;

    case (unit8.value = "zsak"):
      selectvalueifm8.innerHTML = Math.floor(unitsum8 * 1 * 100) / 100;
      selectvaluekg8.innerHTML = Math.floor(unitsum8 * 27 * 100) / 100;

      break;

    case (unit8.value = "tokosiratrendezo"):
      selectvalueifm8.innerHTML = Math.floor(unitsum8 * 0.08 * 100) / 100;
      selectvaluekg8.innerHTML = Math.floor(unitsum8 * 2.16 * 100) / 100;

      break;

    case (unit8.value = "nagyemelokarosdosszie"):
      selectvalueifm8.innerHTML = Math.floor(unitsum8 * 0.08 * 100) / 100;
      selectvaluekg8.innerHTML = Math.floor(unitsum8 * 2.16 * 100) / 100;

      break;

    case (unit8.value = "kisemelokarosdosszie"):
      selectvalueifm8.innerHTML = Math.floor(unitsum8 * 0.05 * 100) / 100;
      selectvaluekg8.innerHTML = Math.floor(unitsum8 * 1.35 * 100) / 100;

      break;

    case (unit8.value = "leveltaridoboz"):
      selectvalueifm8.innerHTML = Math.floor(unitsum8 * 0.125 * 100) / 100;
      selectvaluekg8.innerHTML = Math.floor(unitsum8 * 3.38 * 100) / 100;

      break;

    case (unit8.value = "berkartondoboz"):
      selectvalueifm8.innerHTML = Math.floor(unitsum8 * 0.5 * 100) / 100;
      selectvaluekg8.innerHTML = Math.floor(unitsum8 * 13.5 * 100) / 100;

      break;

    case (unit8.value = "hdoboz"):
      selectvalueifm8.innerHTML = Math.floor(unitsum8 * 0.405 * 100) / 100;
      selectvaluekg8.innerHTML = Math.floor(unitsum8 * 10.94 * 100) / 100;

      break;

    case (unit8.value = "pdoboz"):
      selectvalueifm8.innerHTML = Math.floor(unitsum8 * 0.35 * 100) / 100;
      selectvaluekg8.innerHTML = Math.floor(unitsum8 * 9.45 * 100) / 100;

      break;

    case (unit8.value = "edoboz"):
      selectvalueifm8.innerHTML = Math.floor(unitsum8 * 0.36 * 100) / 100;
      selectvaluekg8.innerHTML = Math.floor(unitsum8 * 9.72 * 100) / 100;

      break;

    case (unit8.value = "ndoboz"):
      selectvalueifm8.innerHTML = Math.floor(unitsum8 * 0.35 * 100) / 100;
      selectvaluekg8.innerHTML = Math.floor(unitsum8 * 9.45 * 100) / 100;

      break;

    case (unit8.value = "egysalgo900"):
      selectvalueifm8.innerHTML = Math.floor(unitsum8 * 0.9 * 100) / 100;
      selectvaluekg8.innerHTML = Math.floor(unitsum8 * 24.3 * 100) / 100;

      break;

    case (unit8.value = "ketsalgo900"):
      selectvalueifm8.innerHTML = Math.floor(unitsum8 * 1.8 * 100) / 100;
      selectvaluekg8.innerHTML = Math.floor(unitsum8 * 48.6 * 100) / 100;

      break;

    case (unit8.value = "egysalgo1000"):
      selectvalueifm8.innerHTML = Math.floor(unitsum8 * 1 * 100) / 100;
      selectvaluekg8.innerHTML = Math.floor(unitsum8 * 27 * 100) / 100;

      break;

    case (unit8.value = "ketsalgo1000"):
      selectvalueifm8.innerHTML = Math.floor(unitsum8 * 2 * 100) / 100;
      selectvaluekg8.innerHTML = Math.floor(unitsum8 * 54 * 100) / 100;

      break;

    case (unit8.value = "egysalgo1200"):
      selectvalueifm8.innerHTML = Math.floor(unitsum8 * 1.2 * 100) / 100;
      selectvaluekg8.innerHTML = Math.floor(unitsum8 * 32.4 * 100) / 100;

      break;

    case (unit8.value = "ketsalgo1200"):
      selectvalueifm8.innerHTML = Math.floor(unitsum8 * 2.4 * 100) / 100;
      selectvaluekg8.innerHTML = Math.floor(unitsum8 * 64.8 * 100) / 100;

      break;

    case (unit8.value = "polc800"):
      selectvalueifm8.innerHTML = Math.floor(unitsum8 * 0.8 * 100) / 100;
      selectvaluekg8.innerHTML = Math.floor(unitsum8 * 21.6 * 100) / 100;

      break;

    case (unit8.value = "ifm"):
      selectvalueifm8.innerHTML = Math.floor(unitsum8 * 1 * 100) / 100;
      selectvaluekg8.innerHTML = Math.floor(unitsum8 * 27 * 100) / 100;

      break;
  }

  let summa1 = document.getElementById("selectvalueifm1");
  let summa1nr = Number(summa1.innerText);
  let summa2 = document.getElementById("selectvalueifm2");
  let summa2nr = Number(summa2.innerText);
  let summa3 = document.getElementById("selectvalueifm3");
  let summa3nr = Number(summa3.innerText);
  let summa4 = document.getElementById("selectvalueifm4");
  let summa4nr = Number(summa4.innerText);
  let summa5 = document.getElementById("selectvalueifm5");
  let summa5nr = Number(summa5.innerText);
  let summa6 = document.getElementById("selectvalueifm6");
  let summa6nr = Number(summa6.innerText);
  let summa7 = document.getElementById("selectvalueifm7");
  let summa7nr = Number(summa7.innerText);
  let summa8 = document.getElementById("selectvalueifm8");
  let summa8nr = Number(summa8.innerText);
  fullifm.innerHTML =
    Math.floor(
      (summa1nr +
        summa2nr +
        summa3nr +
        summa4nr +
        summa5nr +
        summa6nr +
        summa7nr +
        summa8nr) *
        100
    ) / 100;
  fullkg.innerHTML =
    Math.floor(
      (summa1nr +
        summa2nr +
        summa3nr +
        summa4nr +
        summa5nr +
        summa6nr +
        summa7nr +
        summa8nr) *
        27 *
        100
    ) / 100;
};

unit1.onchange = function () {
  switch (unit1.value) {
    case (unit1.value = "dm3"):
      hint1.innerHTML = "Köbdeciméter";
      break;

    case (unit1.value = "zsak"):
      hint1.innerHTML = "Zsák";

      break;

    case (unit1.value = "tokosiratrendezo"):
      hint1.innerHTML = "Tokos iratrendező";

      break;

    case (unit1.value = "nagyemelokarosdosszie"):
      hint1.innerHTML = "Nagyemelőkaros dosszié";

      break;

    case (unit1.value = "kisemelokarosdosszie"):
      hint1.innerHTML = "Kisemelőkaros dosszié";

      break;

    case (unit1.value = "leveltaridoboz"):
      hint1.innerHTML = "Levéltári doboz";

      break;

    case (unit1.value = "berkartondoboz"):
      hint1.innerHTML = "Bérkarton doboz";

      break;

    case (unit1.value = "hdoboz"):
      hint1.innerHTML = "H doboz";

      break;

    case (unit1.value = "pdoboz"):
      hint1.innerHTML = "P doboz";

      break;

    case (unit1.value = "edoboz"):
      hint1.innerHTML = "E doboz";

      break;

    case (unit1.value = "ndoboz"):
      hint1.innerHTML = "ndoboz";

      break;

    case (unit1.value = "egysalgo900"):
      hint1.innerHTML =
        "Egysoros salgó polc 900mm széles valami valami valami valami";

      break;

    case (unit1.value = "ketsalgo900"):
      hint1.innerHTML = "Lorem Ipsum dolor";

      break;

    case (unit1.value = "egysalgo1000"):
      hint1.innerHTML = "Lorem Ipsum zwei";

      break;

    case (unit1.value = "ketsalgo1000"):
      hint1.innerHTML = "Lipsum drei";

      break;

    case (unit1.value = "egysalgo1200"):
      hint1.innerHTML = "Lipsum vier";

      break;

    case (unit1.value = "ketsalgo1200"):
      hint1.innerHTML = "Lipsum four";

      break;

    case (unit1.value = "polc800"):
      hint1.innerHTML = "Lipsum five";

      break;

    case (unit1.value = "ifm"):
      hint1.innerHTML = "Lipsum zwölv";

      break;
  }
};
