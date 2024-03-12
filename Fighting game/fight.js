
class NPC {
    constructor(name, age, quote) {
        this.name = name;
        this.age = age;
        this.quote = quote;
        this.alive = true;
    }

    kill() {
        this.alive = false;
    }

    res() {
        this.alive = true;
    }
}


let josh = new NPC("Joshua", 51, "sup");

console.log(josh);


let jamal = new NPC("Jamal", 19, "Hello, traveler");

console.log(jamal);

let jayza = new NPC("JAYZA", 28, "My name is JAYZA but you can call me JAY Z!");

console.log(jayza);

var canvas = document.querySelector("canvas");

var c = canvas.getContext("2d");

canvas.width = 1024;

canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);

var gravity = 0.2

class Sprite {
    constructor({ position, velocity }) {
        this.position = position
        this.velocity = velocity
        this.height = 150
        this.attackBox = {

            position: this.position ,
            width: 100 ,
            height: 50 ,
        }

    }

    draw(color) {
        c.fillStyle = color;
        c.fillRect(this.position.x, this.position.y, 50, this.height)

        //attackBox
        c.fillStyle = 'yellow'  
        c.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
    }

    update(color) {
        this.draw(color)

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        }
        else this.velocity.y += gravity
    }

}


var player = new Sprite({
    position: {

        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    }
});



var enemy = new Sprite({
    position: {

        x: 400,
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    }
});



console.log(player);


function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update('blue')
    enemy.update('red')

  //detect for collision

 

};

animate();

window.addEventListener('keydown', function (event) {

    console.log(event.key);

    if (event.key == 'd') {

        player.velocity.x = 1
    }

    if (event.key == 'a') {

        player.velocity.x = -1
    }

    if (event.key == ' ' || event.key == 'w') {

        player.velocity.y = -10

      
    }



    console.log(event.key);

    if (event.key == 'ArrowRight') {

        enemy.velocity.x = 1
    }

    if (event.key == 'ArrowLeft') {

        enemy.velocity.x = -1
    }

    if (event.key == 'ArrowUp') {

        enemy.velocity.y = -10
    }
})

window.addEventListener('keyup', function (event) {

    console.log(event.key);

    if (event.key == 'd') {

        player.velocity.x = 0
    }

    if (event.key == 'a') {

        player.velocity.x = 0
    }

    if (event.key == 'ArrowRight') {

        enemy.velocity.x = 0
    }

    if (event.key == 'ArrowLeft') {

        enemy.velocity.x = 0
    }



})



