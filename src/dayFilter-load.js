let dayFilterLoad = function (ico, txt) {
  let dayFilter = document.createElement("div");
  dayFilter.classList = "dayFilter";

  let icon = document.createElement("span");
  icon.classList = "material-symbols-outlined";
  icon.textContent = ico;
  dayFilter.appendChild(icon);

  let text = document.createElement("p");
  text.classList = "sideBarP";
  text.textContent = txt;
  dayFilter.appendChild(text);

  return dayFilter;
};

export default dayFilterLoad();
