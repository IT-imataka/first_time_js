document.addEventListener("DOMContentLoaded", () => {
  const present = document.getElementById("month-year");
  const previousbtn = document.getElementById("prebtn");
  const nextbtn = document.getElementById("nxtbtn");
  const calendarBody = document.getElementById("calendar-body");

  const current = new Date();

  const displaycalender = () => {
    calendarBody.innerHTML = "";
    const year = current.getFullYear();
    const month = current.getMonth();
    present.textContent =
      current.toLocaleString("default", { month: "long" }) + " " + year;

    const firstDayofMonth = new Date(year, month, 1).getDay();
    const lastDateofMonth = new Date(year, month + 1, 0).getDate();

    let date = 1;
    for (let i = 0; i < 6; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < 7; j++) {
        const cell = document.createElement("td");
        if (i === 0 && j < firstDayofMonth) {
          cell.textContent = "";
        } else if (date > lastDateofMonth) {
          break;
        } else {
          cell.textContent = date;
          date++;
          console.log(date);
        }
        row.appendChild(cell);
      }
      calendarBody.appendChild(row);
    }
  };

  previousbtn.addEventListener("click", () => {
    current.setMonth(current.getMonth() - 1);
    displaycalender();
  });

  nextbtn.addEventListener("click", () => {
    current.setMonth(current.getMonth() + 1);
    displaycalender();
  });

  displaycalender();
});
