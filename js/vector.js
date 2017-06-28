function Vector(x, y){
    this.x = x;
    this.y = y;
}

// Normalize the vector to a length of 1
Vector.prototype.normalize = function() {
    const magnitude = this.mag();
    this.x = this.x / magnitude;
    this.y = this.y / magnitude;
}

// Calculate the magnitude of the vector
Vector.prototype.mag = function() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
}

// Add vector to a vector
Vector.prototype.add = function(vector) {
    this.x += vector.x;
    this.y += vector.y;
}

// Subtract vector
Vector.prototype.sub = function(vector){
    this.x -= vector.x;
    this.y -= vector.y;
}

// multiply vector
Vector.prototype.mult = function(scalar){
    this.x *= scalar;
    this.y *= scalar;
}

// limit vector
Vector.prototype.limit = function(limit){
    const magnitude = this.mag(this);
    const diff = magnitude / limit;
    if (diff > 1 ){
        this.mult(1/diff);
    }
}

// Copy vector
Vector.prototype.clone = function(){
    return new Vector(this.x, this.y);
}