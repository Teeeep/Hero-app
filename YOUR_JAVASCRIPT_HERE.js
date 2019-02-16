// Write your JS here


// hero object
const hero = {
    name: 'Casper',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'Code Fu',
        damage: 2
    }
}

//weapon object
const weapon = {
    type: 'dagger',
    damage: 2
}

//enemy object
const enemy = {
    name: 'Evil Pink Baby Unicorn',
    heroic: false,
    health: 7,
    weapon: {
        type: 'Magic unique horn',
        damage: 1
    }

}



// game logic
function rest(object){
    object.health = 10
    displayHeroStats()
    return object
}
function pickUpItem(hero, object){
    hero.inventory.push(object)
    const daggerparty = document.getElementById('dagger')
    daggerparty.style.display = 'none'
    
    
}

function equipWeapon(hero){
    if (hero.inventory[0] !== undefined)
    hero.weapon = hero.inventory[0]
    displayHeroStats()
}



// I'll show you what I got:

function displayHeroStats(){
    const heroStats = document.getElementById('herostats')
    heroStats.innerHTML = `Hero name: ${ hero.name }<br>Health: ${ hero.health }<br>Weapon: ${ hero.weapon.type }<br>Damage: ${ hero.weapon.damage }`
    // const enemyStats = document.getElementById('enemystats')
    // enemyStats.innerHTML = `Enemy name: ${enemy.name}<br>Health: ${enemy.health}<br>Weapon: ${enemy.weapon.type}<br>Damage: ${enemy.weapon.damage}`

}

function displayEnemyStats(){
    const enemyStats = document.getElementById('enemystats')
    enemyStats.innerHTML = `Enemy name: ${enemy.name}<br>Health: ${enemy.health}<br>Weapon: ${enemy.weapon.type}<br>Damage: ${enemy.weapon.damage}`

}



function fightEnemy(hero, enemy){
    const unicorn = document.getElementById('unicorn')
    hero.health = (hero.health - enemy.weapon.damage)
    enemy.health = (enemy.health - hero.weapon.damage)
    displayHeroStats()
    if (enemy.health <= 0) {
        unicorn.remove()
    } else {
        displayEnemyStats()
        displayHeroStats()
    }

    console.log(hero.health)
}
function changeHeroName() {
    const heroName = prompt('Please enter hero name.')
    localStorage.setItem('name', heroName)
    hero.name = heroName
    displayHeroStats()
}



displayHeroStats()


