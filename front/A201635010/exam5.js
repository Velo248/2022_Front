let rectangles = [
    {width:4,height:3},
    {width:5,height:2},
    {width:2,height:3}
]

let sortWidth

sortWidth = rectangles.sort(function (a, b){
    return b.width - a.width;
});
console.log(sortWidth);