let projectName = [
  "工程名稱",
  "大同莊園",
  "衛生福利部台北醫院",
  "台中市社會住宅",
  "順天風聆樹一期",
  "順天風聆樹二期",
];
let projectSelect = document.getElementById("projectName");

let inner = "";
for (let i = 0; i < projectName.length; i++) {
  inner = inner + "<option value=i>" + projectName[i] + "</option>";
}

projectSelect.innerHTML = inner;

let projectAdes = new Array();
projectAdes[0] = ["工程地址"];
projectAdes[1] = [
  "新北市土城區員和路123-1",
  "新北市土城區員和路123-3",
  "新北市土城區員和路123-5",
  "新北市土城區員和路123-7",
  "新北市土城區員和路123-9",
];
projectAdes[2] = ["新北市新莊區思源路127號"];
projectAdes[3] = [
  "臺中市西屯區國安路585號-1",
  "臺中市西屯區國安路585號-3",
  "臺中市西屯區國安路585號-5",
];
projectAdes[4] = ["臺中市北屯區大仁路48號"];
projectAdes[5] = [
  "臺中市北屯區大仁路48號-22",
  "臺中市北屯區大仁路48號-26",
  "臺中市北屯區大仁路48號-28",
];

function changePlace(index) {
  let sinner = "";
  for (let x = 0; x < projectAdes[index].length; x++) {
    sinner =
      sinner + "<option value = x>" + projectAdes[index][x] + "</option>";
  }
  let addSelect = document.getElementById("projectAdes");
  addSelect.innerHTML = sinner;
}

changePlace(document.getElementById("projectName").selectedIndex);

function curTime() {
  let curTime = new Date();
  let time = document.querySelector(".time");
  time.innerHTML = curTime;
}

setInterval(curTime, 1000);

console.log(projectName[1]);

let section = document.querySelector("section");
let submitBom = document.querySelector("button");

submitBom.addEventListener("click", () => {
  //    e.preventDefault();

  let proName = projectName[4];
  let proAdd = projectAdes[4];
  let staffname = document.querySelector(".staffName").value;
  let staffnum = document.querySelector(".staffNum").value;
  let electric = document.querySelector(".electric .choice").children[0].value;
  let cement = document.querySelector(".cement .choice").children[0].value;
  let carpentry =
    document.querySelector(".carpentry .choice").children[0].value;
  let paint = document.querySelector(".paint .choice").children[0].value;
  let updateTime = new Date();

  if (staffname == "") {
    alert("please enter the staff name");
    return;
  } else if (staffnum == "") {
    alert("please enter the staff number");
    return;
  }

  let list = document.createElement("div");
  list.classList.add("checkCheckList");
  let proNamed = document.createElement("p");
  proNamed.classList.add("proNamed");
  proNamed.innerHTML = proName;
  let proAdds = document.createElement("p");
  proAdds.classList.add("proAdds");
  proAdds.innerHTML = proAdd;
  let staffNames = document.createElement("p");
  staffNames.classList.add("staffNames");
  staffNames.innerHTML = "施工人員:" + staffname;
  let staffNums = document.createElement("p");
  staffNums.classList.add("staffNums");
  staffNums.innerHTML = "員工編號:" + staffnum;
  let electrics = document.createElement("p");
  electrics.classList.add("electrics");
  electrics.innerHTML = "水電管線:" + electric;
  let cements = document.createElement("p");
  cements.classList.add("cements");
  cements.innerHTML = "泥水施作" + cement;
  let carpentries = document.createElement("p");
  carpentries.classList.add("carpentries");
  carpentries.innerHTML = "木工施作" + carpentry;
  let paints = document.createElement("p");
  paints.classList.add("paints");
  paints.innerHTML = "油漆施作" + paint;
  let updateTimes = document.createElement("p");
  updateTimes.classList.add("updateTimes");
  updateTimes.innerHTML = "提交時間:" + updateTime;

  list.appendChild(proNamed);
  list.appendChild(proAdds);
  list.appendChild(staffNames);
  list.appendChild(staffNums);
  list.appendChild(electrics);
  list.appendChild(cements);
  list.appendChild(carpentries);
  list.appendChild(paints);
  list.appendChild(updateTimes);

  section.appendChild(list);
});
