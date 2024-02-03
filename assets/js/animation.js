function couter() {
  let valueDisplays = document.querySelectorAll(".about__info-title");
  let interval = 1000; // 1 second

  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
      startValue += 1;
      valueDisplay.textContent = startValue + "+";
      if (startValue == endValue) {
        clearInterval(counter);
      }
    }, duration);
  });
}
// couter()

const animationDivs = document.querySelectorAll(".anime");

// All animation class
function addAnimation(classList, attr) {
  if (attr) {
    classList.add(attr);
  }
}

window.addEventListener("scroll", function () {
  let allanimationElement = null;
  // let skillsAnimationElement = null;
  animationDivs.forEach((animationDiv) => {
    // console.log(ani{index});
    const list = animationDiv.classList;
    const attr = animationDiv.getAttribute("target");
    allanimationElement = animationDiv.offsetTop;
    if (this.window.pageYOffset > allanimationElement - 500) {
      couter();
      addAnimation(list, attr);
    }
    //   else{
    //     // document.body.style.background = "green"
    //     list.remove("anime2")
    //   }
  });
});









const skills = document.getElementById("skills");
const skillsNumber = document.querySelectorAll(".skills__number");
const skills__percentage = document.querySelectorAll(".skills__percentage");

function dynamicSkillsWidth() {
  skillsNumber.forEach((item, index) => {
    const getWidth = item.childNodes[0].nodeValue;

    const convertInt = parseInt(getWidth);
    for (let i = 0; i <= convertInt; i++) {
      skills__percentage[index].style.width = i + "%";
    }
  });
}
window.addEventListener("scroll", function () {
  const skillsAnimationElement = skills.offsetTop;
  if (this.window.pageYOffset > skillsAnimationElement - 500) {
    console.log("I'll Can do it.");
    dynamicSkillsWidth();
  }
});
