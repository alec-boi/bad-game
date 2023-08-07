const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user-result img"),
machineResult = document.querySelector(".machine-result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option-image")

/* itera as imagens */
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active")
        result.textContent = "Aguarde..."

        userResult.src = machineResult.src = "./assets/rock.png"

        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active")
        })

        gameContainer.classList.add("start")

        let time = setTimeout(() => {
            gameContainer.classList.remove("start")

            let imageSrc = e.target.querySelector("img").src
            userResult.src = imageSrc
    
            let randomNumber = Math.floor(Math.random() * 3)
            let machineOptions = ["./assets/rock.png", "./assets/paper.png", "./assets/scissors.png"]
            machineResult.src = machineOptions[randomNumber]
    
            let machineValue = ["R", "P", "S"][randomNumber]
            let userValue = ["R", "P", "S"][index]
    
            let outcomes = {
                RR: "Draw",
                RP: "The machine",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "The machine",
                SS: "Draw",
                SR: "The machine",
                SP: "User",
            }
    
            let outcomeValue = outcomes[userValue + machineValue]
    
            result.textContent = userValue === machineValue ? "Match Draw" : `${outcomeValue} won.`
        },2500)
    })
})