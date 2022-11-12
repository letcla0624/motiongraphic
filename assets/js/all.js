"use strict";

var sideMenu = document.querySelector(".sideMenu");
var sideMenuBtn = document.querySelector(".sideMenu", ":after");
var overlay = document.querySelector(".overlay");
sideMenuBtn.addEventListener("click", function (e) {
  sideMenu.classList.toggle("lg:-translate-x-36");
  sideMenu.classList.toggle("-translate-x-40");
  sideMenu.classList.toggle("open");
  if (window.innerWidth < 992) {
    sideMenu.className.indexOf("open") > -1 ? disableScroll() : enableScroll();
  } else {
    overlay.classList.add("hidden");
  }
});
function disableScroll() {
  document.body.classList.add("stop-scrolling");
  overlay.classList.remove("hidden");
}
function enableScroll() {
  document.body.classList.remove("stop-scrolling");
  overlay.classList.add("hidden");
}
sideMenuBtn.addEventListener("mouseenter", function (e) {
  e.target.classList.add("hover");
});
sideMenuBtn.addEventListener("mouseout", function (e) {
  e.target.classList.remove("hover");
});
sideMenuBtn.addEventListener("mousedown", function (e) {
  e.target.classList.add("down");
});
sideMenuBtn.addEventListener("mouseup", function (e) {
  e.target.classList.remove("down");
});
var sideMenuList1 = document.querySelector(".sideMenuList1");
var sideMenuList2 = document.querySelector(".sideMenuList2");
var sideMenuList3 = document.querySelector(".sideMenuList3");
var sideMenuList4 = document.querySelector(".sideMenuList4");
sideMenuList1.addEventListener("mouseenter", function (e) {
  e.preventDefault();
  e.target.setAttribute("src", "./assets/images/ic/ic_menu_info_h.png");
});
sideMenuList1.addEventListener("mouseout", function (e) {
  e.target.setAttribute("src", "./assets/images/ic/ic_menu_info.png");
});
sideMenuList2.addEventListener("mouseenter", function (e) {
  e.preventDefault();
  e.target.setAttribute("src", "./assets/images/ic/ic_menu_list_h.png");
});
sideMenuList2.addEventListener("mouseout", function (e) {
  e.target.setAttribute("src", "./assets/images/ic/ic_menu_list.png");
});
sideMenuList3.addEventListener("mouseenter", function (e) {
  e.preventDefault();
  e.target.setAttribute("src", "./assets/images/ic/ic_menu_strategy_h.png");
});
sideMenuList3.addEventListener("mouseout", function (e) {
  e.target.setAttribute("src", "./assets/images/ic/ic_menu_strategy.png");
});
sideMenuList4.addEventListener("mouseenter", function (e) {
  e.preventDefault();
  e.target.setAttribute("src", "./assets/images/ic/ic_menu_job_h.png");
});
sideMenuList4.addEventListener("mouseout", function (e) {
  e.target.setAttribute("src", "./assets/images/ic/ic_menu_job.png");
});
var user = document.querySelector(".user");
user.addEventListener("mouseenter", function (e) {
  e.target.setAttribute("src", "./assets/images/btn/btn_user_h.png");
});
user.addEventListener("mouseout", function (e) {
  e.target.setAttribute("src", "./assets/images/btn/btn_user.png");
});
function onJoinBtn(e) {
  e.target.setAttribute("src", "./assets/images/btn/btn_join_h.png");
}
function outJoinBtn(e) {
  e.target.setAttribute("src", "./assets/images/btn/btn_join.png");
}
var footerJoinBtn = document.querySelector(".footerJoinBtn");
var endJoinBtn = document.querySelector(".endJoinBtn");
footerJoinBtn.addEventListener("mouseenter", function (e) {
  onJoinBtn(e);
});
footerJoinBtn.addEventListener("mouseout", function (e) {
  outJoinBtn(e);
});
endJoinBtn.addEventListener("mouseenter", function (e) {
  onJoinBtn(e);
});
endJoinBtn.addEventListener("mouseout", function (e) {
  outJoinBtn(e);
});
var joinBtn = document.querySelectorAll(".joinBtn");
var joinHand = document.querySelectorAll(".joinHand");
joinBtn.forEach(function (item) {
  item.addEventListener("mouseenter", function (e) {
    onJoinBtn(e);
    e.target.previousElementSibling.classList.remove("lg:invisible");
  });
  item.addEventListener("mouseout", function (e) {
    outJoinBtn(e);
    e.target.previousElementSibling.classList.add("lg:invisible");
  });
});
var bgSponsor = document.querySelectorAll(".bgSponsor img");
bgSponsor.forEach(function (item) {
  item.addEventListener("mouseenter", function (e) {
    var url = "./assets/images/btn/btn_sponsor_h.png";
    e.target.parentElement.style.background = "url(\"".concat(url, "\") center center / contain no-repeat");
  });
  item.addEventListener("mouseout", function (e) {
    var url = "./assets/images/btn/btn_sponsor.png";
    e.target.parentElement.style.background = "url(\"".concat(url, "\") center center / contain no-repeat");
  });
});
gsap.timeline({
  scrollTrigger: {
    trigger: ".cloud",
    start: "center 50%",
    end: "center 0%",
    scrub: true,
    pin: true
  }
}).to(".cloud", {
  scale: 0.5,
  opacity: 0,
  duration: 10
}, 0);
var section1 = document.querySelector(".section1");
var section2 = document.querySelector(".section2");
var section3 = document.querySelector(".section3");
var section4 = document.querySelector(".section4");
var section5 = document.querySelector(".section5");
var section6 = document.querySelector(".section6");
var section7 = document.querySelector(".section7");
var section8 = document.querySelector(".section8");
var section9 = document.querySelector(".section9");
var section10 = document.querySelector(".section10");
var section2Title = document.querySelector(".section2Title");
var section3Title = document.querySelector(".section3Title");
var section4Title = document.querySelector(".section4Title");
var section8Title = document.querySelector(".section8Title");
var section3Group = document.querySelector(".section3Group");
var trafficText = document.querySelector(".trafficText");
var trafficAll = document.querySelector(".trafficAll");
var redLight = document.querySelector(".redLight");
var yellowLight = document.querySelector(".yellowLight");
var greenLight = document.querySelector(".greenLight");
var groupAll = document.querySelector(".groupAll");
var startPole = document.querySelector(".startPole");
var logo = document.querySelector(".logo");
var logoText = document.querySelector(".logoText");
var h1Text = document.querySelector(".h1Text");
var pets = document.querySelector(".pets");
var littleTree = document.querySelector(".littleTree");
var nowPosition = document.querySelector(".nowPosition");
var joinBlock = document.querySelector(".joinBlock");
if (window.innerWidth >= 992) {
  window.addEventListener("scroll", animate);
  overlay.classList.add("hidden");
} else {
  window.addEventListener("scroll", mobilePetsMove);
  sideMenu.className.indexOf("open") > -1 ? disableScroll() : enableScroll();
}
window.addEventListener("resize", function () {
  if (this.innerWidth >= 992) {
    window.addEventListener("scroll", animate);
    overlay.classList.add("hidden");
  } else {
    window.addEventListener("scroll", mobilePetsMove);
    sideMenu.className.indexOf("open") > -1 ? disableScroll() : enableScroll();
  }
});
function mobilePetsMove() {
  if (this.scrollY > 0 && this.scrollY <= 8600) {
    pets.classList.add("small");
    joinBlock.classList.remove("opacity-0");
  } else {
    pets.classList.remove("small");
    joinBlock.classList.add("opacity-0");
  }
}
function animate() {
  // console.log(this.scrollY);
  if (this.scrollY > 0 && this.scrollY < 900) {
    pets.style.transform = "scale(1) translate(-50%, 0)";
    pets.style.bottom = 0;
    nowPosition.style.left = "42px";
    nowPosition.style.top = "52px";
  }
  if (this.scrollY > 10 && this.scrollY < 300) {
    trafficText.classList.add("lg:invisible");
    redLight.style.opacity = 1;
    yellowLight.style.opacity = 0;
    greenLight.style.opacity = 0;
  } else if (this.scrollY < 50) {
    trafficText.classList.remove("lg:invisible");
    trafficText.textContent = "ready?";
  }
  if (this.scrollY >= 150 && this.scrollY < 300) {
    redLight.style.opacity = 0;
    yellowLight.style.opacity = 1;
    greenLight.style.opacity = 0;
  } else if (this.scrollY >= 300 && this.scrollY < 450) {
    trafficText.classList.remove("lg:invisible");
    trafficText.textContent = "GO!";
    redLight.style.opacity = 0;
    yellowLight.style.opacity = 0;
    greenLight.style.opacity = 1;
  }
  if (this.scrollY < 600) {
    trafficAll.classList.remove("lg:invisible");
    groupAll.classList.remove("lg:invisible");
  } else if (this.scrollY >= 600) {
    trafficAll.classList.add("lg:invisible");
    groupAll.classList.add("lg:invisible");
  }
  if (this.scrollY < 800) {
    startPole.classList.remove("lg:invisible");
    logoText.classList.remove("lg:invisible");
    h1Text.classList.remove("lg:invisible");
    logo.classList.add("lg:invisible");
    section1.classList.remove("lg:invisible");
  } else if (this.scrollY >= 800) {
    startPole.classList.add("lg:invisible");
    logoText.classList.add("lg:invisible");
    h1Text.classList.add("lg:invisible");
    logo.classList.remove("lg:invisible");
    section1.classList.add("lg:invisible");
  }
  if (this.scrollY >= 800 && this.scrollY < 900) {
    pets.style.transform = "scale(1) translate(-50%, 0)";
    pets.style.bottom = 0;
    littleTree.style.bottom = "-224px";
    nowPosition.style.left = "42px";
    nowPosition.style.top = "52px";
    section2Title.classList.add("lg:invisible");
  } else if (this.scrollY >= 900) {
    pets.style.transform = "scale(0.7) translate(-71%, 0)";
    pets.style.bottom = "-2%";
    littleTree.style.transform = "scale(1)";
    littleTree.style.bottom = "-5%";
    nowPosition.style.left = "84px";
    nowPosition.style.top = "2px";
    section2Title.classList.remove("lg:invisible");
  }
  var section2Block1 = document.querySelector(".section2Block1");
  var section2Block2 = document.querySelector(".section2Block2");
  var section2Block3 = document.querySelector(".section2Block3");
  if (this.scrollY < 1100) {
    littleTree.style.transform = "scale(1)";
    section2Block1.classList.add("lg:opacity-0");
  } else if (this.scrollY >= 1100) {
    littleTree.style.transform = "scale(0.8)";
    section2Block1.classList.remove("lg:opacity-0");
  }
  if (this.scrollY < 1300) {
    section2Block2.classList.add("lg:opacity-0");
  } else if (this.scrollY >= 1300) {
    littleTree.style.transform = "scale(0.65)";
    section2Block2.classList.remove("lg:opacity-0");
  }
  if (this.scrollY < 1500) {
    section2Block3.classList.add("lg:opacity-0");
    littleTree.classList.remove("lg:invisible");
  } else if (this.scrollY >= 1500) {
    littleTree.style.transform = "scale(0.3)";
    littleTree.classList.add("lg:invisible");
    section2Block3.classList.remove("lg:opacity-0");
  }
  if (this.scrollY >= 1500 && this.scrollY < 1700) {
    section2.classList.remove("lg:invisible");
    pets.style.transform = "scale(0.7) translate(-71%, 0)";
    pets.style.bottom = "-2%";
    nowPosition.style.left = "84px";
    nowPosition.style.top = "2px";
  } else if (this.scrollY >= 1700) {
    section2.classList.add("lg:invisible");
    pets.style.transform = "scale(1) translate(-50%, 0)";
    pets.style.bottom = 0;
    nowPosition.style.left = "154px";
    nowPosition.style.top = "11px";
  }
  if (this.scrollY < 1800) {
    section3Title.classList.add("lg:invisible");
  } else if (this.scrollY >= 1800) {
    section3Title.classList.remove("lg:invisible");
  }
  if (this.scrollY < 1900) {
    section3Group.classList.add("lg:invisible");
  } else if (this.scrollY >= 1900) {
    section3Group.classList.remove("lg:invisible");
  }
  if (this.scrollY >= 1900 && this.scrollY < 2400) {
    section3Group.classList.remove("lg:invisible");
    section3Title.classList.remove("lg:invisible");
  } else if (this.scrollY >= 2400) {
    section3Group.classList.add("lg:invisible");
    section3Title.classList.add("lg:invisible");
  }
  var pet1 = document.querySelector(".pet1");
  var pet2 = document.querySelector(".pet2");
  var pet3 = document.querySelector(".pet3");
  var section4List1 = this.document.querySelector(".section4List1");
  var section4List2 = this.document.querySelector(".section4List2");
  var section4List3 = this.document.querySelector(".section4List3");
  if (this.scrollY >= 2400 && this.scrollY < 2600) {
    section3.classList.remove("lg:invisible");
    pets.style.transform = "scale(1) translate(-50%, 0)";
    pets.style.bottom = 0;
    pet1.style.transform = "scale(1)";
    pet2.style.transform = "scale(1)";
    pet3.style.transform = "scale(1)";
    pet1.style.marginBottom = 0;
    pet2.style.marginBottom = 0;
    pet3.style.marginBottom = 0;
    nowPosition.style.left = "154px";
    nowPosition.style.top = "11px";
    section4Title.classList.add("lg:invisible");
  } else if (this.scrollY >= 2600) {
    section3.classList.add("lg:invisible");
    pets.style.transform = "scale(0.7) translate(-71%, 0)";
    pets.style.bottom = "-2%";
    pet1.style.transform = "scale(0.85)";
    pet2.style.transform = "scale(0.65)";
    pet3.style.transform = "scale(0.85)";
    pet1.style.marginBottom = "-10%";
    pet2.style.marginBottom = "-10%";
    pet3.style.marginBottom = "-10%";
    nowPosition.style.left = "234px";
    nowPosition.style.top = "12px";
    section4Title.classList.remove("lg:invisible");
  }
  if (this.scrollY > 2700 && this.scrollY <= 2800) {
    section4List1.classList.add("fadeInHalf");
  } else if (this.scrollY < 2700) {
    section4List1.classList.remove("fadeInHalf");
    section4List1.classList.remove("fadeIn");
  }
  if (this.scrollY > 2800) {
    section4List1.classList.remove("fadeInHalf");
    section4List1.classList.add("fadeIn");
  }
  if (this.scrollY > 3240) {
    section4List1.classList.remove("fadeIn");
    section4List1.classList.add("fadeInHalf");
    section4List2.classList.add("fadeIn");
    section4List2.classList.remove("fadeInHalf");
    section4List3.classList.remove("fadeIn");
    section4List3.classList.remove("fadeInHalf");
  } else if (this.scrollY > 2800 && this.scrollY <= 3240) {
    section4List2.classList.remove("fadeIn");
    section4List2.classList.add("fadeInHalf");
  }
  if (this.scrollY > 3400) {
    section4List1.classList.remove("fadeInHalf");
  } else if (this.scrollY > 3300 && this.scrollY <= 3400) {
    section4List2.classList.add("fadeIn");
    section4List2.classList.remove("fadeInHalf");
    section4List3.classList.add("fadeInHalf");
  }
  if (this.scrollY > 3600) {
    section4List2.classList.remove("fadeIn");
    section4List2.classList.add("fadeInHalf");
    section4List3.classList.add("fadeIn");
  } else if (this.scrollY > 3400 && this.scrollY <= 3600) {
    section4List3.classList.add("fadeInHalf");
  }
  if (this.scrollY > 4050) {
    section4List2.classList.remove("fadeInHalf");
    section4List3.classList.add("fadeInHalf");
    section4List3.classList.remove("fadeIn");
  }
  if (this.scrollY >= 4200) {
    section4.classList.add("lg:invisible");
    pets.style.transform = "scale(1) translate(-50%, 0)";
    pets.style.bottom = 0;
    pet1.style.transform = "scale(0.8)";
    pet2.style.transform = "scale(0.65)";
    pet3.style.transform = "scale(0.8)";
    pet1.style.marginBottom = "-15%";
    pet2.style.marginBottom = "-15%";
    pet3.style.marginBottom = "-15%";
  } else if (this.scrollY >= 2600 && this.scrollY < 4200) {
    section4.classList.remove("lg:invisible");
    pets.style.transform = "scale(0.7) translate(-71%, 0)";
    pets.style.bottom = "-2%";
    pet1.style.transform = "scale(0.85)";
    pet2.style.transform = "scale(0.65)";
    pet3.style.transform = "scale(0.85)";
    pet1.style.marginBottom = "-10%";
    pet2.style.marginBottom = "-10%";
    pet3.style.marginBottom = "-10%";
  }
  if (this.scrollY >= 2600 && this.scrollY < 4300) {
    nowPosition.style.left = "234px";
    nowPosition.style.top = "12px";
  } else if (this.scrollY >= 4300) {
    nowPosition.style.left = "223px";
    nowPosition.style.top = "62px";
  }
  var dateLine = this.document.querySelector(".dateLine");
  if (this.scrollY < 4400) {
    dateLine.classList.remove("dateLineAnimate");
  } else if (this.scrollY >= 4400) {
    dateLine.classList.add("dateLineAnimate");
  }
  var section5List1 = this.document.querySelector(".section5List1");
  var section5List2 = this.document.querySelector(".section5List2");
  var section5List3 = this.document.querySelector(".section5List3");
  var section5ListBlock1 = this.document.querySelector(".section5ListBlock1");
  var section5ListBlock2 = this.document.querySelector(".section5ListBlock2");
  var section5ListBlock3 = this.document.querySelector(".section5ListBlock3");
  if (this.scrollY < 4700) {
    section5List1.classList.add("lg:invisible");
    section5ListBlock1.classList.remove("active");
  } else if (this.scrollY >= 4700) {
    section5List1.classList.remove("lg:invisible");
    section5ListBlock1.classList.add("active");
  }
  if (this.scrollY < 4900) {
    section5List2.classList.add("lg:invisible");
    section5ListBlock2.classList.remove("active");
  } else if (this.scrollY >= 4900) {
    section5List2.classList.remove("lg:invisible");
    section5ListBlock2.classList.add("active");
  }
  if (this.scrollY < 5100) {
    section5List3.classList.add("lg:invisible");
    section5ListBlock3.classList.remove("active");
  } else if (this.scrollY >= 5100) {
    section5List3.classList.remove("lg:invisible");
    section5ListBlock3.classList.add("active");
  }
  if (this.scrollY < 5400) {
    section5List1.classList.remove("activeLeave");
    section5List2.classList.remove("activeLeave");
    section5List3.classList.remove("activeLeave");
    dateLine.classList.remove("lg:opacity-0");
  } else if (this.scrollY >= 5400) {
    section5List1.classList.add("activeLeave");
    section5List2.classList.add("activeLeave");
    section5List3.classList.add("activeLeave");
    dateLine.classList.add("lg:opacity-0");
  }
  var bgMove1 = this.document.querySelector(".bgMove1");
  var bgMove2 = this.document.querySelector(".bgMove2");
  if (this.scrollY >= 5400 && this.scrollY < 5500) {
    section5.classList.remove("lg:invisible");
    bgMove1.classList.remove("zoomIn");
    bgMove2.classList.remove("zoomIn");
  } else if (this.scrollY >= 5500) {
    section5.classList.add("lg:invisible");
    pet1.style.transform = "scale(1)";
    pet2.style.transform = "scale(1)";
    pet3.style.transform = "scale(1)";
    pet1.style.marginBottom = 0;
    pet2.style.marginBottom = 0;
    pet3.style.marginBottom = 0;
    bgMove1.classList.add("zoomIn");
    bgMove2.classList.add("zoomIn");
  }
  var section6Title = this.document.querySelector(".section6Title");
  if (this.scrollY >= 4300 && this.scrollY < 5600) {
    bgMove1.classList.remove("move");
    bgMove2.classList.remove("move");
    section6Title.classList.add("active");
    nowPosition.style.left = "223px";
    nowPosition.style.top = "62px";
  } else if (this.scrollY >= 5600) {
    bgMove1.classList.add("move");
    bgMove2.classList.add("move");
    section6Title.classList.remove("active");
    nowPosition.style.left = "168px";
    nowPosition.style.top = "86px";
  }
  if (this.scrollY < 5800) {
    bgMove1.classList.remove("lg:opacity-0");
    bgMove2.classList.remove("lg:opacity-0");
  } else if (this.scrollY >= 5800) {
    section6Title.classList.add("active");
    bgMove1.classList.add("lg:opacity-0");
    bgMove2.classList.add("lg:opacity-0");
  }
  if (this.scrollY < 5850) {
    section6.classList.remove("lg:invisible");
  } else if (this.scrollY >= 5850) {
    section6.classList.add("lg:invisible");
  }
  var awardBlock = this.document.querySelector(".awardBlock");
  var section7Title = this.document.querySelector(".section7Title");
  if (this.scrollY >= 5500 && this.scrollY < 5900) {
    section7Title.classList.add("lg:invisible");
    pets.style.transform = "scale(1) translate(-50%, 0)";
    pets.style.bottom = 0;
    pet2.style.transform = "scale(1)";
  } else if (this.scrollY >= 5900) {
    section7Title.classList.remove("lg:invisible");
    pets.style.transform = "scale(0.7) translate(-71%, 0)";
    pets.style.bottom = "-2%";
    pet2.style.transform = "scale(0.75)";
  }
  if (this.scrollY < 6000) {
    awardBlock.classList.remove("move");
  } else if (this.scrollY >= 6000) {
    awardBlock.classList.add("move");
  }
  if (this.scrollY >= 6000 && this.scrollY < 6400) {
    awardBlock.classList.add("move");
    awardBlock.classList.remove("leave");
    section7Title.classList.remove("lg:invisible");
  } else if (this.scrollY >= 6400) {
    awardBlock.classList.remove("move");
    awardBlock.classList.add("leave");
    section7Title.classList.add("lg:invisible");
  }
  var bgTree = this.document.querySelector(".bgTree");
  var section8List1 = this.document.querySelector(".section8List1");
  var section8List2 = this.document.querySelector(".section8List2");
  var section8List3 = this.document.querySelector(".section8List3");
  if (this.scrollY >= 5900 && this.scrollY < 6500) {
    section7.classList.remove("lg:invisible");
    bgTree.classList.remove("move");
    pets.style.transform = "scale(0.7) translate(-71%, 0)";
    pets.style.bottom = "-2%";
    pet2.style.transform = "scale(0.75)";
    pet2.style.transform = "scale(1)";
    pet2.style.marginBottom = 0;
    pet3.style.marginBottom = 0;
    nowPosition.style.left = "168px";
    nowPosition.style.top = "86px";
  } else if (this.scrollY >= 6500) {
    section7.classList.add("lg:invisible");
    bgTree.classList.add("move");
    pets.style.transform = "scale(0.85) translate(-60%, 0)";
    pets.style.bottom = "-2%";
    pet2.style.transform = "scale(0.7)";
    pet3.style.transform = "scale(0.75)";
    pet2.style.marginBottom = "-10%";
    pet3.style.marginBottom = "-10%";
    nowPosition.style.left = "123px";
    nowPosition.style.top = "122px";
  }
  if (this.scrollY >= 6500 && this.scrollY < 6600) {
    bgTree.classList.add("move");
    bgTree.classList.remove("move2");
    section8List1.classList.remove("active");
    section8List2.classList.remove("active");
    section8List3.classList.remove("active");
  } else if (this.scrollY >= 6600) {
    bgTree.classList.remove("move");
    bgTree.classList.add("move2");
    section8List1.classList.add("active");
    section8List2.classList.add("active");
    section8List3.classList.add("active");
  }
  if (this.scrollY >= 6600 && this.scrollY < 6800) {
    bgTree.classList.add("move2");
    bgTree.classList.remove("move3");
    section8List1.classList.add("active");
    section8List2.classList.add("active");
    section8List3.classList.add("active");
    section8Title.classList.remove("lg:invisible");
    section8.classList.remove("lg:invisible");
  } else if (this.scrollY >= 6800) {
    bgTree.classList.remove("move2");
    bgTree.classList.add("move3");
    section8List1.classList.remove("active");
    section8List2.classList.remove("active");
    section8List3.classList.remove("active");
    section8Title.classList.add("lg:invisible");
    section8.classList.add("lg:invisible");
  }
  var cloud2LeftCloud = document.querySelector(".cloud2 .leftCloud");
  var cloud2RightCloud = document.querySelector(".cloud2 .rightCloud");
  var finishPole = document.querySelector(".finishPole");
  var finishLine = document.querySelector(".finishLine");
  var finishLine_l = document.querySelector(".finishLine_l");
  var finishLine_r = document.querySelector(".finishLine_r");
  var petsUL = this.document.querySelector(".petsUL");
  if (this.scrollY < 6900) {
    cloud2LeftCloud.classList.remove("move");
    cloud2RightCloud.classList.remove("move");
  } else if (this.scrollY >= 6900) {
    cloud2LeftCloud.classList.add("move");
    cloud2RightCloud.classList.add("move");
  }
  if (this.scrollY >= 6900 && this.scrollY < 7100) {
    cloud2LeftCloud.classList.add("move");
    cloud2RightCloud.classList.add("move");
    cloud2LeftCloud.classList.remove("move2");
    cloud2RightCloud.classList.remove("move2");
    finishPole.style.opacity = 0;
    finishPole.parentElement.classList.add("lg:invisible");
    finishPole.classList.remove("zoomIn");
    finishLine.classList.remove("zoomIn");
    pets.style.transform = "scale(0.85) translate(-60%, 0)";
    pets.style.bottom = "-2%";
    pet2.style.transform = "scale(0.7)";
    pet3.style.transform = "scale(0.75)";
    pet2.style.marginBottom = "-10%";
    pet3.style.marginBottom = "-10%";
    nowPosition.style.left = "123px";
    nowPosition.style.top = "122px";
  } else if (this.scrollY >= 7100) {
    cloud2LeftCloud.classList.remove("move");
    cloud2RightCloud.classList.remove("move");
    cloud2LeftCloud.classList.add("move2");
    cloud2RightCloud.classList.add("move2");
    finishPole.classList.add("zoomIn");
    finishLine.classList.add("zoomIn");
    pets.style.transform = "scale(1) translate(-50%, 0)";
    pets.style.bottom = 0;
    pet1.style.transform = "scale(1)";
    pet2.style.transform = "scale(1)";
    pet3.style.transform = "scale(1)";
    pet1.style.marginBottom = 0;
    pet2.style.marginBottom = 0;
    pet3.style.marginBottom = 0;
    nowPosition.style.left = "69px";
    nowPosition.style.top = "107px";
  }
  if (this.scrollY >= 7100 && this.scrollY < 7200) {
    cloud2LeftCloud.classList.remove("move3");
    cloud2RightCloud.classList.remove("move3");
    cloud2LeftCloud.classList.add("move2");
    cloud2RightCloud.classList.add("move2");
    finishLine_l.classList.remove("broken");
    finishLine_r.classList.remove("broken");
    pet1.style.transform = "scale(1)";
    pet2.style.transform = "scale(1)";
    pet3.style.transform = "scale(1)";
    pet1.style.marginBottom = 0;
    pet2.style.marginBottom = 0;
    pet3.style.marginBottom = 0;
  } else if (this.scrollY >= 7200) {
    cloud2LeftCloud.classList.remove("move2");
    cloud2RightCloud.classList.remove("move2");
    cloud2LeftCloud.classList.add("move3");
    cloud2RightCloud.classList.add("move3");
    finishLine_l.classList.add("broken");
    finishLine_r.classList.add("broken");
    pet1.style.transform = "scale(1.2)";
    pet2.style.transform = "scale(1.2)";
    pet3.style.transform = "scale(1.2)";
    pet1.style.marginBottom = "10%";
    pet2.style.marginBottom = "10%";
    pet3.style.marginBottom = "10%";
  }
  if (this.scrollY >= 7200 && this.scrollY < 7400) {
    pet1.style.transform = "scale(1.2)";
    pet2.style.transform = "scale(1.2)";
    pet3.style.transform = "scale(1.2)";
    cloud2LeftCloud.classList.remove("lg:invisible");
    cloud2RightCloud.classList.remove("lg:invisible");
    finishLine_l.classList.add("broken");
    finishLine_r.classList.add("broken");
    finishLine_l.classList.remove("leave");
    finishLine_r.classList.remove("leave");
  } else if (this.scrollY >= 7400) {
    pet1.style.transform = "scale(1.5)";
    pet2.style.transform = "scale(1.5)";
    pet3.style.transform = "scale(1.5)";
    cloud2LeftCloud.classList.add("lg:invisible");
    cloud2RightCloud.classList.add("lg:invisible");
    finishLine_l.classList.remove("broken");
    finishLine_r.classList.remove("broken");
    finishLine_l.classList.add("leave");
    finishLine_r.classList.add("leave");
  }
  if (this.scrollY < 7600) {
    pet1.classList.remove("zoomOut");
    pet2.classList.remove("zoomOut");
    pet3.classList.remove("zoomOut");
    petsUL.classList.remove("lg:invisible");
  } else if (this.scrollY >= 7600) {
    pet1.classList.add("zoomOut");
    pet2.classList.add("zoomOut");
    pet3.classList.add("zoomOut");
    petsUL.classList.add("lg:invisible");
  }
  var footer = this.document.querySelector("footer");
  var section10Block = this.document.querySelector(".section10Block");
  if (this.scrollY >= 7100 && this.scrollY < 7700) {
    finishPole.style.opacity = 1;
    finishPole.parentElement.classList.remove("lg:invisible");
  } else if (this.scrollY >= 7700) {
    finishPole.classList.remove("zoomIn");
    finishPole.style.opacity = 0;
    finishPole.parentElement.classList.add("lg:invisible");
  }
  if (this.scrollY < 7700) {
    section9.classList.remove("lg:invisible");
    footer.classList.remove("lg:invisible");
    section10Block.classList.remove("zoomIn");
  } else if (this.scrollY >= 7700) {
    section9.classList.add("lg:invisible");
    footer.classList.add("lg:invisible");
    logo.classList.add("lg:invisible");
    section10Block.classList.add("zoomIn");
  }
}
//# sourceMappingURL=all.js.map
