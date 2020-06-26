const colors = ['white', 'red', 'green', 'blue'];
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
}

