document.addEventListener("DOMContentLoaded", () => {
  const previous = document.getElementById("prebtn");
  const next = document.getElementById("nextbtn");
  const present = document.getElementById("monthyear");
  const body = document.getElementById("Date");

  const current = new Date();

  const getcalendar = () => {
    body.innerHTML = "";
    const year = current.getFullYear();
    const month = current.getMonth();
    present.innerText =
      year + "年" + " " + current.toLocaleString("default", { month: "long" });
    const firstDayofMonth = new Date(year, month, 1).getDay();
    const lastDateofMonth = new Date(year, month + 1, 0).getDate();

    let date = 1;
    for (let i = 0; i < 6; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < 7; j++) {
        const cell = document.createElement("td");
        if (i === 0 && j < firstDayofMonth) {
          cell.innerText = "";
        } else if (lastDateofMonth < date) {
          break;
        } else {
          cell.innerText = date;
          date++;
        }
        row.appendChild(cell);
      }
      body.appendChild(row);
    }
    // const Sun = current.getDay();
    // const bodyweek = document.getElementById("Date").getElementsByTagName("tr");
    // console.log(bodyweek);
    // bodyweek.forEach((week,index) => {
    //   const suns = document.getElementsByTagName("td");
    //   console,log(suns); 
    // });
  };
  previous.addEventListener("click", () => {
    current.setMonth(current.getMonth() - 1);
    getcalendar();
  });
  next.addEventListener("click", () => {
    current.setMonth(current.getMonth() + 1);
    getcalendar();
  });
  getcalendar();
});
