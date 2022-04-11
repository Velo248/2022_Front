let rectangles = [
    {width:4,height:3},
    {width:5,height:2},
    {width:2,height:3}
]

let sortWidth

sortWidth = rectangles.sort(function (a, b){
    return (a.width * a.height) - (b.width * b.height);
});
console.log(sortWidth);