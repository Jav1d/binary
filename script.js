const headerLink = document.getElementById("link-to-nav");
function scrollFromIconToNav() {
  const linkTarget = document.getElementById('bookmark');
  linkTarget.scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
}
headerLink.addEventListener("click" , scrollFromIconToNav);