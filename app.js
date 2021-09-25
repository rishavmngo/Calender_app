var date = new Date();
const Calender = document.getElementById("calender-container");
const CalenderHeaderText = document.querySelector(".calender-date");
const YearBtn = document.getElementById("btn-list");
const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("overlay");
const btnClose = document.getElementById("btn-close");
const dropdown = document.getElementById("myDropdown");
const aArray = document.querySelectorAll(".a-tag");
const submitBtn = document.getElementById("submitBtn");
const YearInput = document.getElementById("year");
const dropdownInput = document.getElementById("btn-list");

const months = [
  "Janurary",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//event Listener

YearBtn.addEventListener("click", toggleDropdown);
CalenderHeaderText.addEventListener("click", toggleModal);
btnClose.addEventListener("click", toggleModal);
aArray.forEach(function (item) {
  item.addEventListener("click", toggleDropdown);
});
submitBtn.addEventListener("click", applyCalender);

//Functions
function applyCalender(e) {
  e.preventDefault();
  const year = YearInput.value;
  const month = months.indexOf(dropdownInput.textContent);
  loadCalender(year, month);
}
function toggleModal() {
  modal.classList.toggle("display");
  modalOverlay.classList.toggle("display");
  dropdown.classList.remove("display");
}
function toggleDropdown(e) {
  e.preventDefault();
  dropdown.classList.toggle("display");
  dropdownInput.innerText = e.target.textContent;
}

function loadCalender(year, month) {
  Calender.innerHTML = "";
  const date_obj = Custom_date(year, month);
  CalenderHeaderText.innerText =
    date_obj.formattedDate.split(",")[0].split(" ")[1] +
    " " +
    date_obj.formattedDate.split(",")[0].split(" ")[2];
  for (var i = 0; i < date_obj.StartOfTheMonth; i++) {
    Calender.appendChild(CreatePadding());
  }

  for (var i = 1; i <= date_obj.NumberOfDays; i++) {
    Calender.appendChild(CreateDate(i));
  }
}

function Custom_date(year, month) {
  const custom_date_obj = {
    StartOfTheMonth: new Date(year, month, 1).getDay(),
    NumberOfDays: new Date(year, month + 1, 0).getDate(),
    formattedDate: new Date(year, month, 1).toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }),
  };

  return custom_date_obj;
}

function CreatePadding() {
  const padding = document.createElement("div");
  padding.classList.add("box-padding");
  padding.classList.add("day-box");
  return padding;
}

function CreateDate(day) {
  var DateDiv = document.createElement("div");
  DateDiv.classList.add("day-box");
  var DatePara = document.createElement("p");
  DatePara.classList.add("day-text");
  DatePara.innerText = day;

  DateDiv.appendChild(DatePara);
  return DateDiv;
}
window.addEventListener("load", function () {
  const current = new Date();
  loadCalender(current.getFullYear(), current.getMonth());
});
