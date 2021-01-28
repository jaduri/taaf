var sections = document.querySelectorAll(".project-details");
var currentId = 0;

viewer();
function viewer(){
  var imageArray = document.querySelectorAll(".gallery .image");
  for (var i = 0; i<imageArray.length; i++){
    imageArray[i].addEventListener('click', openImage)
  }
};

function openImage(){
  var projectImages = this.parentNode.querySelectorAll(".image");
  console.log(projectImages);
  var section = document.querySelector('nav');
  section.innerHTML += `<div class="frame">
  <div class="bar" id="left-bar"><img class="mini-img" src="./images/left-arrow.svg"></div>
  <div class="image-holder">
  <img class ="full-image" src="${this.src}">
  </div>
  <div class="bar" id="right-bar"><img class="mini-img" src="./images/right-arrow.svg"></div>
  </div>`
  var frame = document.querySelector('.frame');
  var x = window.matchMedia("(max-width: 950px)");
  mediaQuery(x);
  changeImage(projectImages);
  frame.addEventListener('click', function(){
    if(!event.target.matches('.full-image, .bar, .mini-img')){
      document.querySelector('.frame').parentNode.removeChild(this);
    }
  });
};

function changeImage(arr){
  var bar = document.querySelectorAll(".bar");
  var currentImg = document.querySelector(".image-holder > img");
  var currentIndex;
  console.log(currentImg);

  for(var j=0; j<arr.length; j++){
    if(arr[j].src == currentImg.src){
      currentIndex = j;
    }
  }
  for(var i = 0; i<bar.length; i++){
    bar[i].addEventListener('click', switchImage);
  }

  function switchImage(){
    if(this.id == "left-bar"){
      if(currentIndex == 0){
        currentIndex = arr.length;
      }
        currentImg.src = arr[--currentIndex].src;
      console.log(currentImg);
    }else if (this.id == "right-bar") {
      if(currentIndex == arr.length-1){
        currentIndex = -1;
      }
        currentImg.src = arr[++currentIndex].src;
    }
  }
}

//

function mediaQuery(x){
  if (x.matches){
    var currentImg = document.querySelector(".image-holder");

    currentImg.style.width = "85vw";
  }
}
