/*
Iven Mendoza
Mendoza_a10.js
INFO 2124
Thoendel
11/9/2020
*/


document.getElementById('action').addEventListener('click', function() {
    //WRITE YOUR SOLUTION BETWEEN THIS COMMENT
    let image = document.getElementById('photo');
    let text = document.getElementsByTagName('H1')[0];
    if (image.src.match('01.jpg')){
      image.src = '02.jpg';
      text.setAttribute('class','greenText');
    } else {
      image.src = '01.jpg';
      text.setAttribute('class','blueText');
    }
    //AND THIS COMMENT
});
