function fullsumma() {
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
}

function localsumma(unitSum, unitValue, selectValueIfm, selectValueKg) {
  let unitsum = document.getElementById(unitSum).value;
  let unit = document.getElementById(unitValue);
  let selectvalueifm = document.getElementById(selectValueIfm);
  let selectvaluekg = document.getElementById(selectValueKg);

  switch (unit.value) {
    case (unit.value = "dm3"):
      selectvalueifm.innerHTML = Math.floor(unitsum * 0.01 * 100) / 100;
      selectvaluekg.innerHTML = Math.floor(unitsum * 0.27 * 100) / 100;
      break;

    case (unit.value = "zsak"):
      selectvalueifm.innerHTML = Math.floor(unitsum * 1 * 100) / 100;
      selectvaluekg.innerHTML = Math.floor(unitsum * 27 * 100) / 100;

      break;

    case (unit.value = "tokosiratrendezo"):
      selectvalueifm.innerHTML = Math.floor(unitsum * 0.08 * 100) / 100;
      selectvaluekg.innerHTML = Math.floor(unitsum * 2.16 * 100) / 100;

      break;

    case (unit.value = "nagyemelokarosdosszie"):
      selectvalueifm.innerHTML = Math.floor(unitsum * 0.08 * 100) / 100;
      selectvaluekg.innerHTML = Math.floor(unitsum * 2.16 * 100) / 100;

      break;

    case (unit.value = "kisemelokarosdosszie"):
      selectvalueifm.innerHTML = Math.floor(unitsum * 0.05 * 100) / 100;
      selectvaluekg.innerHTML = Math.floor(unitsum * 1.35 * 100) / 100;

      break;

    case (unit.value = "leveltaridoboz"):
      selectvalueifm.innerHTML = Math.floor(unitsum * 0.125 * 100) / 100;
      selectvaluekg.innerHTML = Math.floor(unitsum * 3.38 * 100) / 100;

      break;

    case (unit.value = "berkartondoboz"):
      selectvalueifm.innerHTML = Math.floor(unitsum * 0.5 * 100) / 100;
      selectvaluekg.innerHTML = Math.floor(unitsum * 13.5 * 100) / 100;

      break;

    case (unit.value = "hdoboz"):
      selectvalueifm.innerHTML = Math.floor(unitsum * 0.405 * 100) / 100;
      selectvaluekg.innerHTML = Math.floor(unitsum * 10.94 * 100) / 100;

      break;

    case (unit.value = "pdoboz"):
      selectvalueifm.innerHTML = Math.floor(unitsum * 0.35 * 100) / 100;
      selectvaluekg.innerHTML = Math.floor(unitsum * 9.45 * 100) / 100;

      break;

    case (unit.value = "edoboz"):
      selectvalueifm.innerHTML = Math.floor(unitsum * 0.36 * 100) / 100;
      selectvaluekg.innerHTML = Math.floor(unitsum * 9.72 * 100) / 100;

      break;

    case (unit.value = "ndoboz"):
      selectvalueifm.innerHTML = Math.floor(unitsum * 0.35 * 100) / 100;
      selectvaluekg.innerHTML = Math.floor(unitsum * 9.45 * 100) / 100;

      break;

    case (unit.value = "egysalgo900"):
      selectvalueifm.innerHTML = Math.floor(unitsum * 0.9 * 100) / 100;
      selectvaluekg.innerHTML = Math.floor(unitsum * 24.3 * 100) / 100;

      break;

    case (unit.value = "ketsalgo900"):
      selectvalueifm.innerHTML = Math.floor(unitsum * 1.8 * 100) / 100;
      selectvaluekg.innerHTML = Math.floor(unitsum * 48.6 * 100) / 100;

      break;

    case (unit.value = "egysalgo1000"):
      selectvalueifm.innerHTML = Math.floor(unitsum * 1 * 100) / 100;
      selectvaluekg.innerHTML = Math.floor(unitsum * 27 * 100) / 100;

      break;

    case (unit.value = "ketsalgo1000"):
      selectvalueifm.innerHTML = Math.floor(unitsum * 2 * 100) / 100;
      selectvaluekg.innerHTML = Math.floor(unitsum * 54 * 100) / 100;

      break;

    case (unit.value = "egysalgo1200"):
      selectvalueifm.innerHTML = Math.floor(unitsum * 1.2 * 100) / 100;
      selectvaluekg.innerHTML = Math.floor(unitsum * 32.4 * 100) / 100;

      break;

    case (unit.value = "ketsalgo1200"):
      selectvalueifm.innerHTML = Math.floor(unitsum * 2.4 * 100) / 100;
      selectvaluekg.innerHTML = Math.floor(unitsum * 64.8 * 100) / 100;

      break;

    case (unit.value = "polc800"):
      selectvalueifm.innerHTML = Math.floor(unitsum * 0.8 * 100) / 100;
      selectvaluekg.innerHTML = Math.floor(unitsum * 21.6 * 100) / 100;

      break;

    case (unit.value = "ifm"):
      selectvalueifm.innerHTML = Math.floor(unitsum * 1 * 100) / 100;
      selectvaluekg.innerHTML = Math.floor(unitsum * 27 * 100) / 100;

      break;
  }
}

function hideEgyebField1() {
  document.getElementById("inputegyeb1").style.display = "none";
  document.getElementById("inputgroup1").style.display = "flex";
}
function hideEgyebField2() {
  document.getElementById("inputegyeb2").style.display = "none";
  document.getElementById("inputgroup2").style.display = "flex";
}
function hideEgyebField3() {
  document.getElementById("inputegyeb3").style.display = "none";
  document.getElementById("inputgroup3").style.display = "flex";
}
function hideEgyebField4() {
  document.getElementById("inputegyeb4").style.display = "none";
  document.getElementById("inputgroup4").style.display = "flex";
}
function hideEgyebField5() {
  document.getElementById("inputegyeb5").style.display = "none";
  document.getElementById("inputgroup5").style.display = "flex";
}
function hideEgyebField6() {
  document.getElementById("inputegyeb6").style.display = "none";
  document.getElementById("inputgroup6").style.display = "flex";
}
function hideEgyebField7() {
  document.getElementById("inputegyeb7").style.display = "none";
  document.getElementById("inputgroup7").style.display = "flex";
}
function hideEgyebField8() {
  document.getElementById("inputegyeb8").style.display = "none";
  document.getElementById("inputgroup8").style.display = "flex";
}

function showEgyebField1() {
  document.getElementById("inputegyeb1").style.display = "flex";
  document.getElementById("inputgroup1").style.display = "none";
}
function showEgyebField2() {
  document.getElementById("inputegyeb2").style.display = "flex";
  document.getElementById("inputgroup2").style.display = "none";
}
function showEgyebField3() {
  document.getElementById("inputegyeb3").style.display = "flex";
  document.getElementById("inputgroup3").style.display = "none";
}
function showEgyebField4() {
  document.getElementById("inputegyeb4").style.display = "flex";
  document.getElementById("inputgroup4").style.display = "none";
}
function showEgyebField5() {
  document.getElementById("inputegyeb5").style.display = "flex";
  document.getElementById("inputgroup5").style.display = "none";
}
function showEgyebField6() {
  document.getElementById("inputegyeb6").style.display = "flex";
  document.getElementById("inputgroup6").style.display = "none";
}
function showEgyebField7() {
  document.getElementById("inputegyeb7").style.display = "flex";
  document.getElementById("inputgroup7").style.display = "none";
}
function showEgyebField8() {
  document.getElementById("inputegyeb8").style.display = "flex";
  document.getElementById("inputgroup8").style.display = "none";
}

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

const unitchoose = [];
for (let i = 1; i < 9; i++) {
  unitchoose.push(document.getElementById("select" + i));
  unitchoose[i - 1].oninput = () => {
    localsumma(
      "selectqty" + i,
      "select" + i,
      "selectvalueifm" + i,
      "selectvaluekg" + i
    );
    fullsumma();
  };
}

const unitqts = [];

for (let i = 1; i < 9; i++) {
  unitqts.push(document.getElementById("selectqty" + i));
  unitqts[i - 1].oninput = () => {
    localsumma(
      "selectqty" + i,
      "select" + i,
      "selectvalueifm" + i,
      "selectvaluekg" + i
    );
    fullsumma();
  };
}

const date = new Date();
document.getElementById("date").innerHTML = date.getFullYear();
