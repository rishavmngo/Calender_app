var date = new Date();
const Calender = document.getElementById("calender-container");
const CalenderHeaderText = document.querySelector(".calender-date");
const YearBtn = document.getElementById("btn-list");
const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("overlay");
const btnClose = document.getElementById("btn-close");
const dropdown = document.getElementById("myDropdown");
const aArray = document.querySelectorAll(".a-tag");
//event Listener

YearBtn.addEventListener("click", toggleDropdown);
CalenderHeaderText.addEventListener("click", toggleModal);
btnClose.addEventListener("click", toggleModal);
aArray.forEach(function (item) {
  item.addEventListener("click", toggleDropdown);
});

function toggleModal() {
  modal.classList.toggle("display");
  modalOverlay.classList.toggle("display");
}
function toggleDropdown(e) {
  e.preventDefault();
  console.log(dropdown.classList);
  dropdown.classList.toggle("display");
  console.log(dropdown.classList);
}

function loadCalender() {
  var currentMonth = new Date();
  const currentDaysInMonth = currentMonth.getMonth();
  const FullYear = currentMonth.getFullYear();
  var TotalNumberOfDays = new Date(
    FullYear,
    currentDaysInMonth + 1,
    0
  ).getDate();
  var paddingDays = new Date(FullYear, currentDaysInMonth, 1).getDay();
  const formattedDate = currentMonth.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
  CalenderHeaderText.innerText = formattedDate;
  for (var i = 0; i < paddingDays; i++) {
    Calender.appendChild(CreatePadding());
  }

  for (var i = 1; i <= TotalNumberOfDays; i++) {
    Calender.appendChild(CreateDate(i));
  }
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
loadCalender();
