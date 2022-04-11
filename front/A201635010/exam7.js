let rectangles = [
    {width:4,height:3},
    {width:5,height:2},
    {width:2,height:3}
]

let max = rectangles.reduce((a, b) => (a.width*a.height)>(b.width*b.height)? a : b);
console.log(max);