const height = document.getElementById("height")
const base = document.getElementById("base")
const calculate = document.getElementById("calculate")
const area = document.getElementById("area")


calculate.addEventListener("click",function () {

    console.log("calculate button clicked" , height.value , base.value)
    let totalArea = 0.5 * height.value * base.value ;
    console.log(totalArea)
    area.innerText = totalArea ;
})



//const Width = document.getElementById("Width")
//const Length = document.getElementById("Length")
//const calculate = document.getElementById("calculate")
//const area = document.getElementById("area")


//calculate.addEventListener("click",function () {

   // console.log("calculate button clicked" ,Width.value , Length.value)
   // let totalArea =Width.value * Length.value ;
   // console.log(totalArea)
   // area.innerText = totalArea ;
//})

//const height = document.getElementById("height")
//const base = document.getElementById("base")
//const calculate = document.getElementById("calculate")
///const area = document.getElementById("area")


//calculate.addEventListener("click",function () {

   // console.log("calculate button clicked" , height.value , base.value)
   // let totalArea = height.value * base.value ;
   // console.log(totalArea)
   /// area.innerText = totalArea ;
//})


