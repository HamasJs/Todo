

const active_status = function (active) {
  const active_tile = document.querySelector(".active");
  active_tile.classList.remove("active");
  active.classList.add("active");
};


export { active_status };


