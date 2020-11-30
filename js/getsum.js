


let rollButt = document.querySelectorAll('.subButt')

let dieNum = document.querySelectorAll('.dieNum')

let rollTray = document.querySelector('.rollTray')

let rollHist = document.querySelector('.rollHistory')

let charName = document.querySelector(`#charInp`)



for (let z = 0; z < rollButt.length; z++){
    rollButt[z].addEventListener('click', function (){
        console.log(dieNum[z].value + " " + rollButt[z].name)
        console.log(charName.value)
        if (rollButt[z].name === rollButt[0].name){
            let dice = document.querySelectorAll('.die')
            for (let d = 0; d < dice.length; d++){
                rollTray.removeChild(dice[d])
            }
            let newLi = document.createElement('li')
            let titleDiv = document.createElement('div')
            let title = document.createElement('h3')
            let dreadRolls = document.createElement('p')
            let rollTotal = document.createElement('span')

            titleDiv.setAttribute('class', 'prevRolls')

            title.innerHTML = charName.value + ' rolled'

            rollHist.appendChild(newLi)
            newLi.appendChild(titleDiv)
            newLi.appendChild(rollTotal)
            titleDiv.appendChild(title)
            titleDiv.appendChild(dreadRolls)
            for (let x = 0; x < dieNum[0].value; x++){
                let newDie = document.createElement('div')
                let d4Roll = function() {
                    let d4Value = Math.floor(Math.random() * 4 + 1)
                    console.log(d4Value)
                    newDie.innerHTML = d4Value
                    dreadRolls.textContent += d4Value + ' ';
                    newDie.style.backgroundImage = `URL(img/d4.png)`
                    newDie.style.backgroundSize = `cover`
                    newDie.style.paddingTop = `.75em`
                    newDie.style.fontSize = '3.2em'
                    newDie.style.fontWeight = '700'
                    newDie.style.color = `#fff`
                    newDie.style.width = '2.3em'
                    newDie.style.height = '1.5em'
                    newDie.style.textAlign = `center`
                    newDie.setAttribute(`class`, `die die` + x)
                    rollTray.appendChild(newDie)
                    newDie.style.position = 'relative'
                    gsap.to('.die' + x, { 
                        duration: 2.5,
                        rotation: Math.random() * 420 + 1000,
                        ease: "bounce.easeIn",
                        y: 170,
                        x: Math.random() * 350 + 50,
                    });
                }
                d4Roll()
            }
        } else if (rollButt[z].name === rollButt[1].name){
            let dice = document.querySelectorAll('.die')
            for (let d = 0; d < dice.length; d++){
                rollTray.removeChild(dice[d])
            }
            let newLi = document.createElement('li')
            let titleDiv = document.createElement('div')
            let title = document.createElement('h3')
            let dreadRolls = document.createElement('p')
            let rollTotal = document.createElement('span')

            titleDiv.setAttribute('class', 'prevRolls')

            title.innerHTML = charName.value + ' rolled'

            rollHist.appendChild(newLi)
            newLi.appendChild(titleDiv)
            newLi.appendChild(rollTotal)
            titleDiv.appendChild(title)
            titleDiv.appendChild(dreadRolls)
            for (let x = 0; x < dieNum[1].value; x++){
                let newDie = document.createElement('div')
                let d6Roll = function() {
                    let d6Value = Math.floor(Math.random() * 6 + 1)
                    console.log(d6Value)
                    newDie.innerHTML = d6Value
                    dreadRolls.textContent += d6Value + ' ';
                    newDie.style.backgroundImage =`URL(img/d6.png)`
                    newDie.style.backgroundSize = `cover`
                    newDie.style.paddingTop = '.75em'
                    newDie.style.fontSize = '3.2em'
                    newDie.style.fontWeight = '700'
                    newDie.style.color = `#fff`
                    newDie.style.width = '2.3em'
                    newDie.style.height = '1.5em'
                    newDie.style.textAlign = `center`
                    newDie.setAttribute(`class`, `die die` + x)
                    rollTray.appendChild(newDie)
                    newDie.style.position = 'relative'
                    gsap.to('.die' + x, { 
                        duration: 2.5,
                        rotation: Math.random() * 420 + 1000,
                        ease: "bounce.easeIn",
                        y: 170,
                        x: Math.random() * 350 + 50,
                    });
                }
                d6Roll()
            }
        } else if (rollButt[z].name === rollButt[2].name){
            let dice = document.querySelectorAll('.die')
            for (let d = 0; d < dice.length; d++){
                rollTray.removeChild(dice[d])
            }
            let newLi = document.createElement('li')
            let titleDiv = document.createElement('div')
            let title = document.createElement('h3')
            let dreadRolls = document.createElement('p')
            let rollTotal = document.createElement('span')

            titleDiv.setAttribute('class', 'prevRolls')

            title.innerHTML = charName.value + ' rolled'

            rollHist.appendChild(newLi)
            newLi.appendChild(titleDiv)
            newLi.appendChild(rollTotal)
            titleDiv.appendChild(title)
            titleDiv.appendChild(dreadRolls)
            for (let x = 0; x < dieNum[2].value; x++){
                let newDie = document.createElement('div')
                let d8Roll = function() {
                    let d8Value = Math.floor(Math.random() * 8 + 1)
                    console.log(d8Value)
                    newDie.innerHTML = d8Value
                    dreadRolls.textContent += d8Value + " ";
                    newDie.style.backgroundImage =`URL(img/d8.png)`
                    newDie.style.backgroundSize = `cover`
                    newDie.style.paddingTop = '.75em'
                    newDie.style.fontSize = '3.2em'
                    newDie.style.fontWeight = '700'
                    newDie.style.color = `#fff`
                    newDie.style.width = '2.3em'
                    newDie.style.height = '1.5em'
                    newDie.style.textAlign = `center`
                    newDie.setAttribute(`class`, `die die` + x)
                    rollTray.appendChild(newDie)
                    newDie.style.position = 'relative'
                    gsap.to('.die' + x, { 
                        duration: 2.5,
                        rotation: Math.random() * 420 + 1000,
                        ease: "bounce.easeIn",
                        y: 170,
                        x: Math.random() * 350 + 50,
                    });
                }
                d8Roll()
            }
        } else if (rollButt[z].name === rollButt[3].name){
            let dice = document.querySelectorAll('.die')
            for (let d = 0; d < dice.length; d++){
                rollTray.removeChild(dice[d])
            }
            let newLi = document.createElement('li')
            let titleDiv = document.createElement('div')
            let title = document.createElement('h3')
            let dreadRolls = document.createElement('p')
            let rollTotal = document.createElement('span')

            titleDiv.setAttribute('class', 'prevRolls')

            title.innerHTML = charName.value + ' rolled'

            rollHist.appendChild(newLi)
            newLi.appendChild(titleDiv)
            newLi.appendChild(rollTotal)
            titleDiv.appendChild(title)
            titleDiv.appendChild(dreadRolls)
            for (let x = 0; x < dieNum[3].value; x++){
                let newDie = document.createElement('div')
                let d10Roll = function() {
                    let d10Value = Math.floor(Math.random() * 10 + 1)
                    console.log(d10Value)
                    newDie.innerHTML = d10Value
                    dreadRolls.textContent += d10Value + " ";
                    newDie.style.backgroundImage = `URL(img/d10.png)`
                    newDie.style.backgroundSize = `cover`
                    newDie.style.paddingTop = '.75em'
                    newDie.style.fontSize = '3.2em'
                    newDie.style.fontWeight = '700'
                    newDie.style.color = `#fff`
                    newDie.style.width = '2.3em'
                    newDie.style.height = '2em'
                    newDie.style.textAlign = `center`
                    newDie.setAttribute(`class`, `die die` + x)
                    rollTray.appendChild(newDie)
                    newDie.style.position = 'relative'
                    gsap.to('.die' + x, { 
                        duration: 2.5,
                        rotation: Math.random() * 420 + 1000,
                        ease: "bounce.easeIn",
                        y: 170,
                        x: Math.random() * 350 + 50,
                    });
                }
                d10Roll()
            }
        } else if (rollButt[z].name === rollButt[4].name){
            let dice = document.querySelectorAll('.die')
            for (let d = 0; d < dice.length; d++){
                rollTray.removeChild(dice[d])
            }
            let newLi = document.createElement('li')
            let titleDiv = document.createElement('div')
            let title = document.createElement('h3')
            let dreadRolls = document.createElement('p')
            let rollTotal = document.createElement('span')

            titleDiv.setAttribute('class', 'prevRolls')

            title.innerHTML = charName.value + ' rolled'

            rollHist.appendChild(newLi)
            newLi.appendChild(titleDiv)
            newLi.appendChild(rollTotal)
            titleDiv.appendChild(title)
            titleDiv.appendChild(dreadRolls)
            for (let x = 0; x < dieNum[4].value; x++){
                let newDie = document.createElement('div')
                let d12Roll = function() {
                    let d12Value = Math.floor(Math.random() * 12 + 1)
                    console.log(d12Value)
                    newDie.innerHTML = d12Value
                    dreadRolls.textContent += d12Value + " ";
                    newDie.style.backgroundImage = `URL(img/d12.png)`
                    newDie.style.backgroundSize = `cover`
                    newDie.style.paddingTop = '.75em'
                    newDie.style.fontSize = '3.2em'
                    newDie.style.fontWeight = '700'
                    newDie.style.color = `#fff`
                    newDie.style.width = '2.4em'
                    newDie.style.height = '1.5em'
                    newDie.style.textAlign = `center`
                    newDie.setAttribute(`class`, `die die` + x)
                    rollTray.appendChild(newDie)
                    newDie.style.position = 'relative'
                    gsap.to('.die' + x, { 
                        duration: 2.5,
                        rotation: Math.random() * 420 + 1000,
                        ease: "bounce.easeIn",
                        y: 170,
                        x: Math.random() * 350 + 50,
                    });
                }
                d12Roll()
            }
        } else if (rollButt[z].name === rollButt[5].name){
            let dice = document.querySelectorAll('.die')
            for (let d = 0; d < dice.length; d++){
                rollTray.removeChild(dice[d])
            }
            let newLi = document.createElement('li')
            let titleDiv = document.createElement('div')
            let title = document.createElement('h3')
            let dreadRolls = document.createElement('p')
            let rollTotal = document.createElement('span')

            titleDiv.setAttribute('class', 'prevRolls')

            title.innerHTML = charName.value + ' rolled'

            rollHist.appendChild(newLi)
            newLi.appendChild(titleDiv)
            newLi.appendChild(rollTotal)
            titleDiv.appendChild(title)
            titleDiv.appendChild(dreadRolls)
            for (let x = 0; x < dieNum[5].value; x++){
                let newDie = document.createElement('div')
                let d20Roll = function() {
                    let d20Value = Math.floor(Math.random() * 20 + 1)
                    console.log(d20Value)
                    newDie.innerHTML = d20Value
                    dreadRolls.textContent += d20Value + " ";
                    newDie.style.backgroundImage = `URL(img/d20.png)`
                    newDie.style.backgroundSize = `cover`
                    newDie.style.paddingTop = '.75em'
                    newDie.style.fontSize = '3.2em'
                    newDie.style.fontWeight = '700'
                    newDie.style.color = `#fff`
                    newDie.style.width = '2.3em'
                    newDie.style.height = '1.5em'
                    newDie.style.textAlign = `center`
                    newDie.setAttribute(`class`, `die die` + x)
                    rollTray.appendChild(newDie)
                    newDie.style.position = 'relative'
                    gsap.to('.die' + x, { 
                        duration: 2.5,
                        rotation: Math.random() * 420 + 1000,
                        ease: "bounce.easeIn",
                        y: 170,
                        x: Math.random() * 350 + 50,
                    });
                }
                d20Roll()
            }
        } else if (rollButt[z].name === rollButt[6].name){
            let dice = document.querySelectorAll('.die')
            for (let d = 0; d < dice.length; d++){
                rollTray.removeChild(dice[d])
            }
            let newLi = document.createElement('li')
            let titleDiv = document.createElement('div')
            let title = document.createElement('h3')
            let dreadRolls = document.createElement('p')
            let rollTotal = document.createElement('span')

            titleDiv.setAttribute('class', 'prevRolls')

            title.innerHTML = charName.value + ' rolled'

            rollHist.appendChild(newLi)
            newLi.appendChild(titleDiv)
            newLi.appendChild(rollTotal)
            titleDiv.appendChild(title)
            titleDiv.appendChild(dreadRolls)
            for (let x = 0; x < dieNum[6].value; x++){
                let newDie = document.createElement('div')
                let d100Roll = function() {
                    let d100Value = Math.floor(Math.random() * 100 + 1)
                    console.log(d100Value)
                    newDie.innerHTML = d100Value
                    dreadRolls.textContent += d100Value + " ";
                    newDie.style.backgroundImage = `URL(img/d8.png)`
                    newDie.style.backgroundSize = `cover`
                    newDie.style.paddingTop = '.75em'
                    newDie.style.fontSize = '3.2em'
                    newDie.style.fontWeight = '700'
                    newDie.style.color = `#fff`
                    newDie.style.width = '2.3em'
                    newDie.style.height = '1.5em'
                    newDie.style.textAlign = `center`
                    newDie.setAttribute(`class`, `die die` + x)
                    rollTray.appendChild(newDie)
                    newDie.style.position = 'relative'
                    gsap.to('.die' + x, { 
                        duration: 2.5,
                        rotation: Math.random() * 420 + 1000,
                        ease: "bounce.easeIn",
                        y: 170,
                        x: Math.random() * 350 + 50,
                    });
                }
                d100Roll()
            }
        }
    })
}


// rollButt[0].addEventListener('click', function(e){
// })