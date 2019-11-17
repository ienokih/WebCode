/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function loop() {
    loopContent();
    window.requestAnimationFrame(loop);
}

function loopContent() {
    var text = document.querySelector('p');
    text.textContent = new Date().getTime();

    
    
}

