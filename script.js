let inputFolder = document.getElementById("myFolder");
let path = "";
let resourceArray = [];
let selectedArray = [];
let pathInput = document.querySelector("#path-input");
let resourceContainer = document.querySelector("#resource");
let selectedContainer = document.querySelector("#selected-file");

function browse() {
  inputFolder.click();
}

function handlePathChange() {
  try {
    let pathArray = inputFolder.files[0].path.split("\\");
    pathArray.splice(-1, 1);
    path = pathArray.join("\\");
    pathInput.value = path;
  } catch {
    pathInput.value = "Please select folder with file";
    return;
  }
  getAllFile();
  renderFileList();
}

function getAllFile() {
  resourceArray = [];
  Object.keys(inputFolder.files).forEach((key) => {
    resourceArray.push({
      name: inputFolder.files[key].name,
      path: inputFolder.files[key].path,
    });
  });
}

function renderFileList() {
  let ulListContainer = document.querySelector("#resource-ul");
  if (ulListContainer != null) {
    ulListContainer.remove();
  }
  let ulComponent = document.createElement("ul");
  ulComponent.setAttribute("id", "resource-ul");

  resourceArray.map((file, index) => {
    let list = document.createElement("li");
    list.classList.add("list");
    list.addEventListener("click", function () {
      selectFile(index);
    });
    list.innerText = file.name;
    ulComponent.append(list);
  });
  resourceContainer.append(ulComponent);
}

function selectFile(index) {
  selectedArray.push(resourceArray[index]);
  renderSelectedList();
}

function renderSelectedList() {
  let ulListContainer = document.querySelector("#selected-ul");
  if (ulListContainer != null) {
    ulListContainer.remove();
  }

  let selectedUlComponent = document.createElement("ul");
  selectedUlComponent.setAttribute("id", "selected-ul");
  selectedArray.map((file) => {
    let selectedList = document.createElement("li");
    selectedList.classList.add("list");
    selectedList.innerText = file.name;
    selectedUlComponent.append(selectedList);
  });

  selectedContainer.append(selectedUlComponent);
}

function clearSelection() {
  selectedArray = [];
  renderSelectedList();
}

function handlePrint() {
  if (selectedArray.length == 0) {
    alert("No file available for print!");
    return;
  }

  selectedArray.map((file) => {
    console.log(file.name);
  });
}
