currentYear = new Date().getFullYear();
passedYear = 2019.5;
finalYear = currentYear - passedYear;
document.getElementById("first-year").innerHTML = finalYear;
document.getElementById("second-year").innerHTML = finalYear;
document.getElementById("current-year").innerHTML = currentYear;
$(document).on("ready", function () {
  $(".vertical-center-4").slick({
    dots: true,
    vertical: true,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 2,
  });
  $(".vertical-center-3").slick({
    dots: true,
    vertical: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });
  $(".vertical-center-2").slick({
    dots: true,
    vertical: true,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 2,
  });
  $(".vertical-center").slick({
    dots: true,
    vertical: true,
    centerMode: true,
  });
  $(".vertical").slick({
    dots: true,
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });
  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });
  $(".center").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $(".variable").slick({
    dots: true,
    infinite: true,
    variableWidth: true,
  });
  $(".lazy").slick({
    lazyLoad: "ondemand", // ondemand progressive anticipated
    infinite: true,
  });
});

const images = [
  { img: "react", name: "ReactJS" },
  { img: "rn", name: "React Native" },
  { img: "redux", name: "Redux" },
  { img: "html", name: "HTML5" },
  { img: "css", name: "CSS3" },
  { img: "javascript", name: "JavaScript" },
  { img: "jquery", name: "JQuery" },
  { img: "typescript", name: "TypeScript" },
  { img: "team", name: "Team Lead" },
  { img: "premier-pro", name: "Premier Pro" },
  { img: "photoshop", name: "Photoshop" },
  { img: "bootstrap", name: "Bootstrap" },
  { img: "sass", name: "Sass" },
  { img: "git", name: "GIT" },
  { img: "npm", name: "NPM" },
  { img: "social-logins", name: "Social APIs" },
];
let smallScreenCarousal = "";
let bigScreenCarousal = "";
for (let i in images) {
  content = `<div class="carousel-item ${i == 0 ? "active" : ""}">
  <img
    src="./assets/images/${images[i]["img"]}.png"
    class="d-block w-100"
    alt="..."
  />
  <div class="carousel-caption">
    <div class="d-flex justify-content-center">
      <h5 class="gradient_text fw-bold text-center">${images[i].name}</h5>
    </div>
  </div>
</div>`;
  content2 = `<div class="d-flex align-items-center flex-column">
  <img src="./assets/images/${images[i]["img"]}.png" alt="" />
  <h6 class="gradient_text fw-bold my-2 text-center">${images[i]["name"]}</h6>
</div>`;
  bigScreenCarousal += content2;
  smallScreenCarousal += content;
}

if (document.getElementById("carousel-images")) {
  document.getElementById("carousel-images").innerHTML = smallScreenCarousal;
}
if (document.getElementById("slick_carousal")) {
  document.getElementById("slick_carousal").innerHTML = bigScreenCarousal;
}
