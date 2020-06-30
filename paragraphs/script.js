/*const colors = ['white', 'red', 'green', 'blue'];
//                 0       1       2        3  


function createEventListener(i) {
    let currentColor = 0;
    return function() {
        currentColor++;
        console.log("Click on " + i + " paragraph, currentColor = " + currentColor);
        this.style['background-color'] = colors[currentColor % colors.length];
<<<<<<< HEAD
    });

})

function changeColor(param) {
    let currentColor = 0;
    return () => {
        currentColor++;
        return param.style['background-color'] = colors[currentColor % colors.length];
    }
}*/
// first solution, t works but show all elements
let rNumbers = document.getElementsByTagName('button');
for (let i = 0; i < rNumbers.length; i++) {
   rNumbers[i].addEventListener('click', function Random() {
      const max = 100;
      return function () {
         const uniqe = new Set();
         while (uniqe.size !== max) {
            uniqe.add(Math.floor(Math.random() * max) + 1);
         }
         console.log('Element # ' + x + ' with random number - ' + [...uniqe]);  
      }
   }(i));
}
// second solution
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
=======
    }
}

document.querySelectorAll('p').forEach(function(element, i) {
    //console.log(i);
    element.addEventListener('click', createEventListener(i));
})

var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
   nodes[i].addEventListener('click', function(x) {
        return function() {
        console.log('You clicked element #' + x);
        }
   }(i));
}
>>>>>>> befaec76e4d852c6171ebb69c86288f410b837ed
