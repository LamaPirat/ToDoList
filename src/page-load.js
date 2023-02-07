import dayFilterLoad from "./dayFilter-load";

function pageLoad() {
  let mainContain = document.createElement("div");
  mainContain.id = "mainContain";

  let header = document.createElement("div");
  header.classList = "header";
  let mainContent = document.createElement("div");
  mainContent.className = "mainContent";
  let footer = document.createElement("div");
  footer.classList = "footer";

  // Header
  let title = document.createElement("h1");
  title.classList = "title";
  title.textContent = "ToDo";
  header.appendChild(title);
  mainContain.appendChild(header);

  // MainContent

  //sideBar
  let sideBar = document.createElement("div");
  sideBar.classList = "sideBar";

  let dayFilters = [
    {
      icon: "clear_day",
      text: "My day",
    },
    {
      icon: "date_range",
      text: "This week",
    },
    {
      icon: "task",
      text: "All tasks",
    },
  ];

  let timeFrame = document.createElement("div");
  timeFrame.classList = "timeFrame";

  for (let i = 0; i < dayFilters.length; i++) {
    timeFrame.appendChild(
      dayFilterLoad(dayFilters[i].icon, dayFilters[i].text)
    );
  }
  sideBar.appendChild(timeFrame);
  mainContain.appendChild(sideBar);

  //display
  let display = document.createElement("div");
  display.classList = "display";

  return mainContain;
}

export default pageLoad();
