function solve(width,height,color) {
    return {
        width,
        height,
        color: color[0].toUpperCase()+color.substring(1),
        calcArea() {
            return this.width*this.height;
        },
    }
}
// let rect = solve(4, 5, 'red');
// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.color);
// console.log(rect.calcArea());