const drone = (function(){
    let location;
    let acceleration;
    const topSpeed = 10;
    let element;
    let target = {
        x: window.innerWidth/2,
        y: window.innerHeight/2
    }

    function random(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function appendDroneElement(){
        element = document.createElement("div");
        element.className = "drone";
        document.body.appendChild(element);
    }

    function create(){
        location = new Vector(random(0, window.innerWidth), random(0, window.innerHeight));
        velocity = new Vector(0, 0);
        acceleration = new Vector(-0.001, 0.01);
        appendDroneElement();
    }

    function update(){
        const mouseVector = new Vector(target.x, target.y);

        // Step 1: direction
        mouseVector.sub(location);
        // Step 2: normalize
        mouseVector.normalize();
        // Step 3: scale
        mouseVector.mult(0.2);

        // Step 4: accelerate
        const acceleration = mouseVector.clone();
        velocity.add(acceleration);
        velocity.limit(topSpeed);
        location.add(velocity);

        display();

        window.requestAnimationFrame(update);
    }

    function display(){
        element.style.transform = "translate3d(" + location.x + "px," + location.y + "px" +",0)";
    }

    return {
        init: function(){
           if(!element){
                create();

                window.addEventListener("mousemove", function(e) {
                    target.x = e.clientX;
                    target.y = e.clientY;
                });

                update();
           }
        }
    }
}());