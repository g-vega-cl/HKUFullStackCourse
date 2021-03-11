var rect = require('./rectangle.tsx');

function solveRect(l,b){
    console.log("Solving for rectangle with l = " + l + " and b = " + b);
    
    rect(l,b, (err,rectangle) => {
        if(err){
            console.log("Error ", err.message)
        } else{
            console.log("The area of the rectangle of dimensions l = " + l + " and b = " + b + " is " + rectangle.area())

            console.log("The perimeter of the rectangle of dimensions l = " + l + " and b = " + b + " is " + rectangle.perimeter())
        }

        console.log("We called rect already")
        
    })

}

solveRect(2,4)
// solveRect(4,1)
// solveRect(4,-1)
