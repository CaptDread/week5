let rollButt = document.querySelectorAll('.subButt')

let dNum = document.querySelectorAll('.dieNum')

let rollTray = document.querySelector('.rollTray')

let rollHist = document.querySelector('.rollHistory')

let charName = document.querySelector(`#charInp`)

let socket = io('http://circuslabs.net:20202');

for (let z = 0; z < rollButt.length; z++){
    rollButt[z].addEventListener('click', function (){
        if (rollButt[z].name === rollButt[0].name) {
            let dface = 4
            socket.emit('request roll', {
                count: dNum[0].value,
                faces: dface,
                name: charName.value,
            })
        } else if (rollButt[z].name === rollButt[1].name) {
            let dface = 6
            socket.emit('request roll', {
                count: dNum[1].value,
                faces: dface,
                name: charName.value,
            })
        } else if (rollButt[z].name === rollButt[2].name) {
            let dface = 8
            socket.emit('request roll', {
                count: dNum[2].value,
                faces: dface,
                name: charName.value,
            })
        }  else if (rollButt[z].name === rollButt[3].name) {
            let dface = 10
            socket.emit('request roll', {
                count: dNum[3].value,
                faces: dface,
                name: charName.value,
            })
        }  else if (rollButt[z].name === rollButt[4].name) {
            let dface = 12
            socket.emit('request roll', {
                count: dNum[4].value,
                faces: dface,
                name: charName.value,
            })
        }  else if (rollButt[z].name === rollButt[5].name) {
            let dface = 20
            socket.emit('request roll', {
                count: dNum[5].value,
                faces: dface,
                name: charName.value,
            })
        }  else if (rollButt[z].name === rollButt[6].name) {
            let dface = 100
            socket.emit('request roll', {
                count: dNum[6].value,
                faces: dface,
                name: charName.value,
            })
        }
    })
}

socket.on('rolled', function (data) {
    console.log(data);
    let dice = document.querySelectorAll('.die')
    for (let d = 0; d < dice.length; d++){
        rollTray.removeChild(dice[d])
    }
    if (data.faces === 4){
        let newLi = document.createElement('li')
        let titleDiv = document.createElement('div')
        let title = document.createElement('h3')
        let dreadRolls = document.createElement('p')
        let rollTotal = document.createElement('span')

        titleDiv.setAttribute('class', 'prevRolls')

        title.innerHTML = data.name + ' rolled'

        rollHist.appendChild(newLi)
        newLi.appendChild(titleDiv)
        newLi.appendChild(rollTotal)
        titleDiv.appendChild(title)
        titleDiv.appendChild(dreadRolls)
        for (let x = 0; x < data.count; x++){
            let newDie = document.createElement('div')
            let d4Roll = function() {
                let d4Value = data.rolls[x]
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
    } else if (data.faces === 6){
        let newLi = document.createElement('li')
        let titleDiv = document.createElement('div')
        let title = document.createElement('h3')
        let dreadRolls = document.createElement('p')
        let rollTotal = document.createElement('span')

        titleDiv.setAttribute('class', 'prevRolls')

        title.innerHTML = data.name + ' rolled'

        rollHist.appendChild(newLi)
        newLi.appendChild(titleDiv)
        newLi.appendChild(rollTotal)
        titleDiv.appendChild(title)
        titleDiv.appendChild(dreadRolls)
        for (let x = 0; x < data.count; x++){
            let newDie = document.createElement('div')
            let d6Roll = function() {
                let d6Value = data.rolls[x]
                console.log(d6Value)
                newDie.innerHTML = d6Value
                dreadRolls.textContent += d6Value + ' ';
                newDie.style.backgroundImage = `URL(img/d6.png)`
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
            d6Roll()
        } 
    } else if (data.faces === 8){
        let newLi = document.createElement('li')
        let titleDiv = document.createElement('div')
        let title = document.createElement('h3')
        let dreadRolls = document.createElement('p')
        let rollTotal = document.createElement('span')

        titleDiv.setAttribute('class', 'prevRolls')

        title.innerHTML = data.name + ' rolled'

        rollHist.appendChild(newLi)
        newLi.appendChild(titleDiv)
        newLi.appendChild(rollTotal)
        titleDiv.appendChild(title)
        titleDiv.appendChild(dreadRolls)
        for (let x = 0; x < data.count; x++){
            let newDie = document.createElement('div')
            let d8Roll = function() {
                let d8Value = data.rolls[x]
                console.log(d8Value)
                newDie.innerHTML = d8Value
                dreadRolls.textContent += d8Value + ' ';
                newDie.style.backgroundImage = `URL(img/d8.png)`
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
            d8Roll()
        }
    } else if (data.faces === 10){
        let newLi = document.createElement('li')
        let titleDiv = document.createElement('div')
        let title = document.createElement('h3')
        let dreadRolls = document.createElement('p')
        let rollTotal = document.createElement('span')

        titleDiv.setAttribute('class', 'prevRolls')

        title.innerHTML = data.name + ' rolled'

        rollHist.appendChild(newLi)
        newLi.appendChild(titleDiv)
        newLi.appendChild(rollTotal)
        titleDiv.appendChild(title)
        titleDiv.appendChild(dreadRolls)
        for (let x = 0; x < data.count; x++){
            let newDie = document.createElement('div')
            let d10Roll = function() {
                let d10Value = data.rolls[x]
                console.log(d10Value)
                newDie.innerHTML = d10Value
                dreadRolls.textContent += d10Value + ' ';
                newDie.style.backgroundImage = `URL(img/d10.png)`
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
            d10Roll()
        }
    } else if (data.faces === 12){
        let newLi = document.createElement('li')
        let titleDiv = document.createElement('div')
        let title = document.createElement('h3')
        let dreadRolls = document.createElement('p')
        let rollTotal = document.createElement('span')

        titleDiv.setAttribute('class', 'prevRolls')

        title.innerHTML = data.name + ' rolled'

        rollHist.appendChild(newLi)
        newLi.appendChild(titleDiv)
        newLi.appendChild(rollTotal)
        titleDiv.appendChild(title)
        titleDiv.appendChild(dreadRolls)
        for (let x = 0; x < data.count; x++){
            let newDie = document.createElement('div')
            let d12Roll = function() {
                let d12Value = data.rolls[x]
                console.log(d12Value)
                newDie.innerHTML = d12Value
                dreadRolls.textContent += d12Value + ' ';
                newDie.style.backgroundImage = `URL(img/d12.png)`
                newDie.style.backgroundSize = `cover`
                newDie.style.paddingTop = `.75em`
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
    } else if (data.faces === 20){
        let newLi = document.createElement('li')
        let titleDiv = document.createElement('div')
        let title = document.createElement('h3')
        let dreadRolls = document.createElement('p')
        let rollTotal = document.createElement('span')

        titleDiv.setAttribute('class', 'prevRolls')

        title.innerHTML = data.name + ' rolled'

        rollHist.appendChild(newLi)
        newLi.appendChild(titleDiv)
        newLi.appendChild(rollTotal)
        titleDiv.appendChild(title)
        titleDiv.appendChild(dreadRolls)
        for (let x = 0; x < data.count; x++){
            let newDie = document.createElement('div')
            let d20Roll = function() {
                let d20Value = data.rolls[x]
                console.log(d20Value)
                newDie.innerHTML = d20Value
                dreadRolls.textContent += d20Value + ' ';
                newDie.style.backgroundImage = `URL(img/d20.png)`
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
            d20Roll()
        }
    } else if (data.faces === 100){
        let newLi = document.createElement('li')
        let titleDiv = document.createElement('div')
        let title = document.createElement('h3')
        let dreadRolls = document.createElement('p')
        let rollTotal = document.createElement('span')

        titleDiv.setAttribute('class', 'prevRolls')

        title.innerHTML = data.name + ' rolled'

        rollHist.appendChild(newLi)
        newLi.appendChild(titleDiv)
        newLi.appendChild(rollTotal)
        titleDiv.appendChild(title)
        titleDiv.appendChild(dreadRolls)
        for (let x = 0; x < data.count; x++){
            let newDie = document.createElement('div')
            let d100Roll = function() {
                let d100Value = data.rolls[x]
                console.log(d100Value)
                newDie.innerHTML = d100Value
                dreadRolls.textContent += d100Value + ' ';
                newDie.style.backgroundImage = `URL(img/d8.png)`
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
            d100Roll()
        }
    }
});