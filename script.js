let heading = document.createElement("h1")
heading.innerHTML = "Random Joke Generator"

let heading3 = document.createElement("h3")
heading3.innerHTML = "Click The Below Button to Generate a Randome Joke"

let container1 = document.createElement("div")
container1.classList.add("container1")

let div = document.createElement("div")

let container = document.createElement("div")
container.classList.add("conatiner")

let idContainer = document.createElement("div")
idContainer.setAttribute("id","container")
idContainer.setAttribute("class","container")

// let inputData = document.createElement("input")
// inputData.setAttribute("type","number")
// inputData.setAttribute("id","input")

let br = document.createElement("br")

let check = document.createElement("button")
check.setAttribute("type","button")
check.setAttribute("id","button")
check.innerHTML = "Click to Generate a Randome Joke"




// container.append(inputData)
container.append(br)
container.append(check)

container1.append(container)
div.append(idContainer)

document.body.append(heading)
document.body.append(heading3)
document.body.append(container1)
document.body.append(div)

//////////////////////////////////////////////////////////////////////////////////////////////////////

let container2 = document.getElementById("container")
console.log(container2)


//////////////////////////////////////////////////////////////////////////////////////////////////////
let input = document.getElementById("input")
let button = document.getElementById("button")
let resultGlobal;
let output = document.getElementById("container")
button.addEventListener("click",function(){
    async function getData(){
        try{
            let apiResponse = await fetch(`https://v2.jokeapi.dev/joke/Any`)
            let apiData = await apiResponse.json()
            // console.log(apiData)
            if(apiData.joke==undefined){
                output.innerHTML =  `<p class="p-style">${apiData.setup}</p><p class="p-style">${apiData.delivery}</p>`
                //  apiData.setup
                // output.innerHTML = apiData.delivery
                // console.log()
                // console.log(apiData.delivery)

            }else{
                // console.log(apiData.joke)
                output.innerHTML = `<p class="p-style">${apiData.joke}</p>`
            }
        }catch(err){
            console.log(err)
        }
    }
    getData()
})




console.log(output)