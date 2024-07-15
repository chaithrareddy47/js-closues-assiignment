const shapes = {
    radius: 20,
    diameter() {
        return 2 * this.radius;
    },
    perimeter: () => {
        return 2 * Math.PI + this.radius;
    }
}

console.log(shapes.diameter());
console.log(shapes.perimeter()); // gives nan bcos this ponts to window obj