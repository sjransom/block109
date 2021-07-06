function toggleNav(status, scope) {
  document.documentElement.classList.toggle("has-open-menu");

  if (status == "open") {
    scope.addEventListener("transitionend", () => {
      scope.querySelector(".js-close").focus();
    });
  }
  if (status == "close") {
    scope.querySelector(".js-open").focus();
  }
}

const menu = document.querySelector(".menu");

menu.addEventListener(
  "click",
  (event) => {
    const openButton = menu.querySelector(".js-open");
    const closeButton = menu.querySelector(".js-close");

    if (event.target == openButton) {
      toggleNav("open", menu);
    } else if (
      event.target == closeButton ||
      !event.target.closest(".menu_list")
    ) {
      toggleNav("close", menu);
    }
  },
  true
);
