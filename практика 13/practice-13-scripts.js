function centerImage() {
    var img = document.getElementById('image');
    var container = document.getElementById('container');
    
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;
  
    img.style.position = 'absolute';
    img.style.left = (viewportWidth/2) - (img.width/2) + 'px';
    img.style.top = (viewportHeight/2) - (img.height/2) + 'px';
    
    container.style.position = 'absolute';
    container.style.left = (viewportWidth/2) - (container.offsetWidth/2) + 'px';
    container.style.top = (viewportHeight/2) - (container.offsetHeight/2) + 'px';
  }

  window.onload = function() {
    centerImage();
  };

  document.addEventListener('click', function(e) {
    console.log('X: ', e.clientX, 'Y: ', e.clientY);
  });
  






/*let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  var x1 = document.getElementsByTagName("p");
  x1
}

window.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});*/

/*let elements = document.querySelectorAll("div p");
elements.style.opacity = "0";

window.addEventListener('scroll', function() {
  let elements = document.querySelectorAll('div p');
  elements.forEach(function(element) {
    let opacity = window.scrollY / window.innerHeight;
    element.style.opacity = opacity > 1 ? 1 : opacity;
  });
});*/


/*var pElement = document.querySelector("#par");

function changeOpacity() {
   var scrollPosition = window.scrollY;
   var opacity = 0 + scrollPosition ;
   pElement.style.opacity = opacity;
}

window.onscroll = changeOpacity;

//var backgroundElement = document.querySelector("#myBackground");

function changeBackgroundPosition() {
  var scrollPosition = window.scrollY;
  var newPosition = scrollPosition * 0.5; // Change 0.5 to your desired speed factor
  backgroundElement.style.backgroundPosition = "0 " + newPosition + "px";
}

//window.onscroll = changeBackgroundPosition;
//window.addEventListener("scroll", function(){
 // changeOpacity;
  //changeBackgroundPosition();
//})
*/

var pElement = document.querySelector("#par");
var backgroundElement = document.getElementById("backg");

function changeOpacityAndBackgroundPosition() {
 var scrollPosition = window.scrollY;
 var newOpacity = 0 + scrollPosition;
 var newPosition = scrollPosition * 0.5; // Change 0.5 to your desired speed factor
 pElement.style.opacity = newOpacity;
 backgroundElement.style.backgroundPosition = "0 " + newPosition + "px";
}

window.onscroll = changeOpacityAndBackgroundPosition;


/*window.addEventListener("scroll", function() {
    const distance = window.scrollY;
    const layers = document.querySelectorAll('.parallax-layer');
    layers.forEach(layer => {
        const computedStyle = window.getComputedStyle(layer);
        const depth = parseFloat(computedStyle.transform.match(/translateZ\((-?\d+(\.\d+)?)px\)/)[1]);
        const translateY = distance * (1 - 1 / (depth + 1));
        layer.style.transform = `translateY(${translateY}px)`;
    });
 });
 */

 