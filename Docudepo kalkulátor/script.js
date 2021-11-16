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

// unit1.onchange = function () {
//   switch (unit1.value) {
//     case (unit1.value = "dm3"):
//       hint1.innerHTML = "Köbdeciméter";
//       break;

//     case (unit1.value = "zsak"):
//       hint1.innerHTML = "Zsák";

//       break;

//     case (unit1.value = "tokosiratrendezo"):
//       hint1.innerHTML = "Tokos iratrendező";

//       break;

//     case (unit1.value = "nagyemelokarosdosszie"):
//       hint1.innerHTML = "Nagyemelőkaros dosszié";

//       break;

//     case (unit1.value = "kisemelokarosdosszie"):
//       hint1.innerHTML = "Kisemelőkaros dosszié";

//       break;

//     case (unit1.value = "leveltaridoboz"):
//       hint1.innerHTML = "Levéltári doboz";

//       break;

//     case (unit1.value = "berkartondoboz"):
//       hint1.innerHTML = "Bérkarton doboz";

//       break;

//     case (unit1.value = "hdoboz"):
//       hint1.innerHTML = "H doboz";

//       break;

//     case (unit1.value = "pdoboz"):
//       hint1.innerHTML = "P doboz";

//       break;

//     case (unit1.value = "edoboz"):
//       hint1.innerHTML = "E doboz";

//       break;

//     case (unit1.value = "ndoboz"):
//       hint1.innerHTML = "ndoboz";

//       break;

//     case (unit1.value = "egysalgo900"):
//       hint1.innerHTML =
//         "Egysoros salgó polc 900mm széles valami valami valami valami";

//       break;

//     case (unit1.value = "ketsalgo900"):
//       hint1.innerHTML = "Lorem Ipsum dolor";

//       break;

//     case (unit1.value = "egysalgo1000"):
//       hint1.innerHTML = "Lorem Ipsum zwei";

//       break;

//     case (unit1.value = "ketsalgo1000"):
//       hint1.innerHTML = "Lipsum drei";

//       break;

//     case (unit1.value = "egysalgo1200"):
//       hint1.innerHTML = "Lipsum vier";

//       break;

//     case (unit1.value = "ketsalgo1200"):
//       hint1.innerHTML = "Lipsum four";

//       break;

//     case (unit1.value = "polc800"):
//       hint1.innerHTML = "Lipsum five";

//       break;

//     case (unit1.value = "ifm"):
//       hint1.innerHTML = "Lipsum zwölv";

//       break;
//   }
// };
