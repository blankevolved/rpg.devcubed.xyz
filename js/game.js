
var weapons = {
    'fist': {
        'boostType': null,
        'boostNum': 0,
        'name': "Fist",
        'desc':`Your first weapon, nothing!`
    },
    'sword': {
        'boostType': 'damage',
        'boostNum': 5,
        'name': "Sword",
        'desc': `A basic sword
    ${green}+5 damage]`
    }
}

const enemys = {
    0: {
        'name': 'Goblin',
        'lvl0': {
            'baseHealth':5,
            'health':5,
            'maxHealth':5,
            'damage':1,
            'xpDrop':[5, 10, 15],
            'coinDrop': [13, 14, 15],
            'itemDrop': ['Sword', 'Sword', 'Sword', 'Sword', 'Sword', null, null, null, null, null],
        }
    }
}

const levels = {
    0: {
        'req': 50,
        'hpBoost':null,
        'dmgBoost':null
    },
    1: {
        'req': 100,
        'hpBoost':1,
        'dmgBoost':2
    },
    2: {
        'req': 150,
        'hpBoost':2,
        'dmgBoost':3
    }
}
var level = 0
var coins = 0
var health = 10
var maxHealth = 10
var damage = 1
var xp = 0
var xpToNext = levels[level].req
var currentEnemy = null
var currentEnemyName = null

var baseHealth = 10
var baseMaxHealth = 10
var baseDamage = 1

var currentWeapon = null
var inv = ['Fist']

var devMode = false 


const baseName = 'RPG'
var gameName = baseName


function invList() {
    return`${white}Inventory:
    {${inv[0]}}    {${inv[1]}}    {${inv[2]}}    {${inv[3]}}    {${inv[4]}}
    {${inv[5]}}    {${inv[6]}}    {${inv[7]}}    {${inv[8]}}    {${inv[9]}}
    {${inv[10]}}    {${inv[11]}}    {${inv[12]}}    {${inv[13]}}    {${inv[14]}}
    {${inv[15]}}    {${inv[16]}}    {${inv[17]}}    {${inv[18]}}    {${inv[19]}}]
`.replaceAll('{undefined}', '')
}

const help = `${white}Help:
    help: get some help

    stats: show your stats

    inv: open your inventory

    equip: use/put on a item in your inventory

    listItems: list every item in the game

    inspect: inspect any item in the game
    
    save: saves your game

    title: set the title of the web page to something
        set: reset, coins, health
`
const osError = `${pink}{${white}os${pink}}`

var stats = ''

if (currentWeapon == null) {
    equip(weapons.fist)
}
if (health > maxHealth) {
    health = maxHealth
}
refresh()

function refresh() {
    levelUp()
    if (levels[level].hpBoost !== null) {
        maxHealth = baseMaxHealth + levels[level].hpBoost
        equip(weapons[currentWeapon.toLowerCase()])
    }
    if (levels[level].dmgBoost !== null) {
        damage = baseDamage + levels[level].dmgBoost
        equip(weapons[currentWeapon.toLowerCase()])
    }
    if (health <= 0) {
        death()
    }
    stats = `${white}Stats: ]
    ${white}Coins: ] ${yellow}{ ${coins} }]
    ${white}Level: ]${green}{ ${level} }]
    ${white}XP: ]${darkgreen}{ ${xp}/${xpToNext} }]
    ${white}Health: ]${red}{ ${health}/${maxHealth} } ( +${levels[level].hpBoost} )]
    ${white}Damage: ]${blue}{ ${damage} } ( +${levels[level].dmgBoost} )]
    ${white}Weapon: ]${purple}{ ${currentWeapon} }]
`.replaceAll(null, '0')

    document.getElementById('title').innerHTML = gameName

}

function death() {
    health = maxHealth
    currentEnemy.health = currentEnemy.baseHealth
    currentEnemy = null
    currentEnemyName = null
    coins = coins / 2
    refresh()
}

function fight(id, level) {
    var enemy = enemys[id]['lvl' + level.toString()]
    var enemyName = enemys[id].name
    refresh()
    var enemyStats = `${stats}
${white}${enemyName}:
    ${white}Health: ]${red}{ ${enemy.health}/${enemy.maxHealth} }]
    ${white}Damage: ]${blue}{ ${enemy.damage} }]
`

    if (currentEnemy !== null) return enemyStats

    currentEnemy = enemys[id]['lvl' + level.toString()]
    currentEnemyName = enemys[id].name
    return enemyStats
}

function attack() {
    if (currentEnemy === null) return `${white}Cant attack until you intiate a fight with the ]${blue}fight] ${white}command]`
    currentEnemy.health = currentEnemy.health - damage
    health = health - currentEnemy.damage

    if (currentEnemy.health <= 0 && currentEnemy !== null) {
        currentEnemy.health = currentEnemy.baseHealth
        coinsLength = Math.floor(Math.random() * currentEnemy.coinDrop.length)
        itemLength = Math.floor(Math.random() * currentEnemy.itemDrop.length)
        xpLength = Math.floor(Math.random() * currentEnemy.xpDrop.length)
        addedCoins = currentEnemy.coinDrop[coinsLength]
        addedWeapons = currentEnemy.itemDrop[itemLength]
        addedXP = currentEnemy.xpDrop[xpLength]
        if (addedWeapons !== null) inv.push(addedWeapons)
        coins = coins + addedCoins
        xp = xp + addedXP
        refresh()
        currentEnemy = null
        currentEnemyName = null
        refresh()
        return `${white}Drops:
    ${yellow}( + ${addedCoins} ) coins]
    ${green}( + ${addedXP} ) XP]
    ${blue}( + ${addedWeapons} ) to your inventory]
    `.replaceAll(null, 'None')
    } 
    enemy = currentEnemy
    enemyName = currentEnemyName
    refresh()

    if (currentEnemy === null) return `${stats}\nYou've died`

    return `${stats}
${white}${enemyName}:
    ${white}Health: ]${red}{ ${enemy.health}/${enemy.maxHealth} }]
    ${white}Damage: ]${blue}{ ${enemy.damage} }]
`
}

function levelUp() {
    if (xp >= xpToNext) {
        level = level + 1
        if (levels[level] === undefined) {
            level = level - 1
        }
        else {
            xp = xp - xpToNext 
            xpToNext = levels[level].req
        }
    }
}

function equip(item) {
    if (item == undefined || item == null) return 'you dont own that item'
    if (inv.includes(item.name)) {
        console.log(item.name)
        console.log(inv)
        console.log(inv.includes(item.name))
        currentWeapon = item.name
        console.log(item.boostType)
        if (item.boostType === 'health') {
            maxHealth =  baseMaxHealth + item.boostNum + levels[level].hpBoost
        }
        else if (item.boostType === 'damage') {
            damage = baseDamage + item.boostNum + levels[level].dmgBoost
        }
        else if (item.boostType === null) {
            maxHealth = baseMaxHealth
            damage = baseDamage
        }
        return 'equiped'
    }
    return 'you dont own that item'
    }

function inspect(item) {
    return `${item.name}:
    ${item.desc}`
}

function listAllItems() {
    function listItem(item) {
        return `${item.name}:
    ${item.desc}`
    }
    return `Items:
    ${listItem(weapons.fist)}
    
    ${listItem(weapons.sword)}`
}

function title(set) {
    if (set === 'reset') {
        gameName = `${baseName}`
    }
    else if (set === 'health') {
        gameName = `${baseName} - Health: [${health}/${maxHealth}]`
    }
    else if (set === 'coins') {
        gameName = `${baseName} - Coins: [${coins}]`
    }
    else {
        return `${osError}${red} invalid type]`
    }
    refresh()
}

function save() {
    var gameSave = {
        coins: coins,
        health: health,
        maxHealth: maxHealth,
        damage: damage,
        currentWeapon: currentWeapon,
        inv: inv,
        gameName: gameName,
        level: level,
        xp: xp
    }
    localStorage.setItem("gameSave", JSON.stringify(gameSave))
}

function load() {
    var savedGame = JSON.parse(localStorage.getItem("gameSave"))
    if (typeof savedGame.coins !== 'undefined') coins = savedGame.coins
    if (typeof savedGame.health !== 'undefined') health = savedGame.health
    if (typeof savedGame.maxHealth !== 'undefined') maxHealth = savedGame.maxHealth
    if (typeof savedGame.damage !== 'undefined') damage = savedGame.damage
    if (typeof savedGame.currentWeapon !== 'undefined') currentWeapon = savedGame.currentWeapon
    if (typeof savedGame.inv !== 'undefined') inv = savedGame.inv
    if (typeof savedGame.gameName !== 'undefined') gameName = savedGame.gameName
    if (typeof savedGame.level !== 'undefined') level = savedGame.level
    if (typeof savedGame.xp !== 'undefined') xp = savedGame.xp
    // if (typeof savedGame.a !== 'undefined') a = savedGame.a
    
    refresh()
}

window.onload = function() {
    load();
}

window.setInterval(function(){
    // call your function here
    if (currentEnemy === null) health = health + 1
    if (health > maxHealth) {
        health = maxHealth
    }
    refresh()
}, 15000);  // Change Interval here to test. For eg: 5000 for 5 sec

function addcoins(num) {
    coins = coins + num
    refresh()
}

function addxp(num) {
    xp = xp + num
    refresh()
}