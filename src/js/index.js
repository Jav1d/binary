const headerLink = document.getElementById("link-to-nav");
function scrollFromIconToNav() {
  const linkTarget = document.getElementById('bookmark');
  linkTarget.scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
}
headerLink.addEventListener("click" , scrollFromIconToNav);

// Filter
const menu = document.querySelector(".list")
const exampleItems = document.querySelectorAll(".example")
const menuItems = document.querySelectorAll(".menu__item")
function filter() {
  menu.addEventListener('click', event => {
    const targetId = event.target.dataset.id;
    const target = event.target;

    if(target.classList.contains("menu__item")) {
    menuItems.forEach(menuItem => {
      menuItem.classList.remove("menu__item_active");
      target.classList.add("menu__item_active");
    })
  }

    switch(targetId) {
      case "all":
        getItems("example");
        break;
        case "web":case "apps": case "other":
        getItems(targetId);
        break;
    }
  })
}
filter()

function getItems(className) {
  exampleItems.forEach(item => {
    if (item.classList.contains(className)) {
      item.style.display = "block"; 
    } else {
      item.style.display = "none";
    }
  })
}