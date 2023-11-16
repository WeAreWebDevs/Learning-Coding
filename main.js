function explodeButton() {
    var explosion = document.createElement("div");
    explosion.classList.add("explosion");
    explosion.style.top = event.clientY + "px";
    explosion.style.left = event.clientX + "px";
    document.body.appendChild(explosion);
 
    setTimeout(function() {
        explosion.remove();
    }, 500);
}