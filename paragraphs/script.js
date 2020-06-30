/*const colors = ['white', 'red', 'green', 'blue'];
//                 0       1       2        3  

let currentColor = 0;
document.querySelectorAll('p').forEach(function(element) {
    element.addEventListener('click', function() {
        currentColor++;
        this.style['background-color'] = colors[currentColor % colors.length];
    });

})

function changeColor(param) {
    let currentColor = 0;
    return () => {
        currentColor++;
        return param.style['background-color'] = colors[currentColor % colors.length];
    }
}*/

/*let rNumbers = document.getElementsByTagName('button');
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
}*/


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
