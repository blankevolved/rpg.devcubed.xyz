
var weapons = {
    'fist': {
        'boostType1': null,
        'boostNum1': 0,
        'name': 'Fist',
        'sellPrice':null,
        'desc':`Your first weapon, nothing!`
    },
    'dagger': {
        'boostType1': 'damage',
        'boostNum1': 2,
        'name': 'Dagger',
        'sellPrice':3,
        'desc': `A basic dagger
    ${green}+2 damage]`
    },
    'sword': {
        'boostType1': 'damage',
        'boostNum1': 4,
        'deboostType1': 'health',
        'deboostNum1': 1,
        'name': 'Sword',
        'sellPrice':7,
        'desc': `A basic sword
    ${green}+4 damage]
    ${red}-1 health]`
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
            'xpDrop':[1, 3, 5],
            'coinDrop': [13, 14, 15],
            'itemDrop': ['Dagger', 'Dagger', 'Dagger', 'Dagger', 'Sword', null, null, null, null, null],
        },
        'lvl1': {
            'baseHealth':8,
            'health':8,
            'maxHealth':8,
            'damage':3,
            'xpDrop':[2, 5, 8],
            'coinDrop': [17, 20, 22],
            'itemDrop': ['Dagger', 'Dagger', 'Dagger', 'Dagger', 'Dagger', 'Sword', 'Sword', null, null, null],
        },
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
        'hpBoost':.5,
        'dmgBoost':1
    },
    2: {
        'req': 150,
        'hpBoost':1,
        'dmgBoost':1.5
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
var hasRun = false

var baseHealth = 10
var baseMaxHealth = 10
var baseDamage = 1

var currentWeapon = null
var inv = ['Fist']

var devMode = false 


const baseName = 'RPG'
var gameName = baseName

function removeFirst(arr, target) {
    var idx = arr.indexOf(target);
    if (idx > -1) {
      arr.splice(idx, 1);
    }
    return arr;
  }

function invList(page) {
    if (page == 1) {
        return`${white}Inventory Page 1:
        {${inv[0]}}    {${inv[1]}}    {${inv[2]}}    {${inv[3]}}    {${inv[4]}}
        {${inv[5]}}    {${inv[6]}}    {${inv[7]}}    {${inv[8]}}    {${inv[9]}}
        {${inv[10]}}    {${inv[11]}}    {${inv[12]}}    {${inv[13]}}    {${inv[14]}}
        {${inv[15]}}    {${inv[16]}}    {${inv[17]}}    {${inv[18]}}    {${inv[19]}}
        {${inv[20]}}    {${inv[21]}}    {${inv[22]}}    {${inv[23]}}    {${inv[24]}}
        {${inv[25]}}    {${inv[26]}}    {${inv[27]}}    {${inv[28]}}    {${inv[29]}}
        {${inv[30]}}    {${inv[31]}}    {${inv[32]}}    {${inv[33]}}    {${inv[34]}}
        {${inv[35]}}    {${inv[36]}}    {${inv[37]}}    {${inv[38]}}    {${inv[39]}}
        {${inv[40]}}    {${inv[41]}}    {${inv[42]}}    {${inv[43]}}    {${inv[44]}}
        {${inv[45]}}    {${inv[46]}}    {${inv[47]}}    {${inv[48]}}    {${inv[49]}}]
    `.replaceAll('{undefined}', '')
    }
    if (page == 2) {
        return`${white}Inventory Page 2:
        {${inv[50]}}    {${inv[51]}}    {${inv[52]}}    {${inv[53]}}    {${inv[54]}}
        {${inv[55]}}    {${inv[56]}}    {${inv[57]}}    {${inv[58]}}    {${inv[59]}}
        {${inv[60]}}    {${inv[61]}}    {${inv[62]}}    {${inv[63]}}    {${inv[64]}}
        {${inv[65]}}    {${inv[66]}}    {${inv[67]}}    {${inv[68]}}    {${inv[69]}}
        {${inv[70]}}    {${inv[71]}}    {${inv[72]}}    {${inv[73]}}    {${inv[74]}}
        {${inv[75]}}    {${inv[76]}}    {${inv[77]}}    {${inv[78]}}    {${inv[79]}}
        {${inv[80]}}    {${inv[81]}}    {${inv[82]}}    {${inv[83]}}    {${inv[84]}}
        {${inv[85]}}    {${inv[86]}}    {${inv[87]}}    {${inv[88]}}    {${inv[89]}}
        {${inv[90]}}    {${inv[91]}}    {${inv[92]}}    {${inv[93]}}    {${inv[94]}}
        {${inv[95]}}    {${inv[96]}}    {${inv[97]}}    {${inv[98]}}    {${inv[99]}}]
    `.replaceAll('{undefined}', '')
    }
    else {
        return `${white}That page dosent exist]`
    }
}

const help = `${white}Help:
    help: get some help

    stats: show your stats

    fight: intiate a fight

    attack: attack your enemy

    run: run away from a fight (one time per fight)

    inv: open your inventory
        page: page number you wanna look at

    equip: use/put on a item in your inventory

    sell: sell any item in your inventory

    listItems: list every item in the game

    inspect: inspect any item in the game
    
    save: saves your game
`
const osError = `${pink}{${white}os${pink}}`

var stats = ''

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
    if (currentWeapon == null) {
        equip(weapons.fist)
    }
    if (health > maxHealth) {
        health = maxHealth
    }
    stats = `${white}Stats: ]
    ${white}Coins: ]${yellow}{ ${coins.toFixed(2)} }]
    ${white}Level: ]${green}{ ${level} }]
    ${white}XP: ]${darkgreen}{ ${xp}/${xpToNext} }]
    ${white}HP: ]${red}{ ${health}/${maxHealth} } ( +${levels[level].hpBoost} )]
    ${white}Damage: ]${blue}{ ${damage} } ( +${levels[level].dmgBoost} )]
    ${white}Weapon: ]${purple}{ ${currentWeapon} }]`.replaceAll(null, '0')

    document.getElementById('title').innerHTML = gameName

}

function death() {
    health = maxHealth
    hasRun = false
    currentEnemy.health = currentEnemy.baseHealth
    currentEnemy = null
    currentEnemyName = null
    coins = coins / 2
    refresh()
}

function fight(id, level) {
    var enemy = enemys[id]['lvl' + level.toString()]
    var enemyName = enemys[id].name
    if (enemy === undefined) {
        enemy = enemys[id]['lvl' + (level - 1).toString()]
    }
    refresh()
    var enemyStats = `${stats}
${white}${enemyName}:
    ${white}Health: ]${red}{ ${enemy.health}/${enemy.maxHealth} }]
    ${white}Damage: ]${blue}{ ${enemy.damage} }]
`

    if (currentEnemy !== null) return enemyStats

    currentEnemy = enemy
    currentEnemyName = enemyName
    return enemyStats
}

function run() {
    if (currentEnemy === null) return `${white}Cant run until you intiate a fight with the ]${blue}fight] ${white}command]`
    var enemy = currentEnemy
    var enemyName = currentEnemyName
    if (hasRun == true) {
        health = health - currentEnemy.damage
        refresh()
        if (currentEnemy == null) {
            return `${white}You couldnt run away and died]
${stats}` 
        }
        else {
        return `${white}You already tried to run]
${stats}
    ${red}-${currentEnemy.damage} HP] 

${white}${enemyName}:
    ${white}Health: ]${red}{ ${enemy.health}/${enemy.maxHealth} }]
    ${white}Damage: ]${blue}{ ${enemy.damage} }]`
        }
    }
    else {
        var ran = Math.floor(Math.random() * 2)
        console.log(ran)
    }     
    if (ran == 0) {
        currentEnemy.health = currentEnemy.baseHealth
        currentEnemy = null
        currentEnemyName = null
        hasRun = true
        return `${white}You ran away]
${stats}`
    }
    else if (ran == 1) {
        hasRun = true
        health = health - currentEnemy.damage
        refresh()
        if (currentEnemy == null) {
            return `${white}You couldnt run away and died]
${stats}` 
        }
        else {
        return `${white}You couldnt run away]
${stats}
    ${red}-${currentEnemy.damage} HP] 

${white}${enemyName}:
    ${white}Health: ]${red}{ ${enemy.health}/${enemy.maxHealth} }]
    ${white}Damage: ]${blue}{ ${enemy.damage} }]`
        }
    }
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
        hasRun = false
        refresh()
        return `${white}Drops:
    ${yellow}( + ${addedCoins} ) coins]
    ${green}( + ${addedXP} ) XP]
    ${blue}( + ${addedWeapons} ) to your inventory]

${stats}
    `.replaceAll(null, 'None')
    } 
    var enemy = currentEnemy
    var enemyName = currentEnemyName
    refresh()

    if (currentEnemy === null) return `You've died\n${stats}`

    return `${stats}
    ${red}-${currentEnemy.damage} HP] 

${white}${enemyName}:
    ${white}Health: ]${red}{ ${enemy.health}/${enemy.maxHealth} }]
    ${white}Damage: ]${blue}{ ${enemy.damage} }]
    ${red}-${damage} HP]
`
}

function sell(item) {
    if (item.sellPrice !== null && inv.includes(item.name)) {
        removeFirst(inv, item.name)
        coins = coins + item.sellPrice
        refresh()
        if (inv.includes(item.name) == false) {
            equip(weapons.fist)
            refresh()
        }
        return stats
    }
    else {
        equip(weapons.fist)
        refresh()
        return `${white}You dont have that item] 
${stats}`
    }
}

function levelUp() {
    if (xp >= xpToNext) {
        level = level + 1
        if (levels[level] === undefined) {
            level = level - 1
            xpToNext = levels[level].req
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
        console.log(item.boostType1)
        if (item.boostType1 === 'health') {
            maxHealth =  baseMaxHealth + item.boostNum1 + levels[level].hpBoost
        }
        else if (item.boostType1 === 'damage') {
            damage = baseDamage + item.boostNum1 + levels[level].dmgBoost
        }
        if (item.deboostType1 !== undefined) {
            if (item.deboostType1 === 'health') {
                maxHealth =  baseMaxHealth - item.deboostNum1 + levels[level].hpBoost
            }
            else if (item.deboostType1 === 'damage') {
                damage = baseDamage - item.deboostNum1 + levels[level].dmgBoost
            }
        }
        else if (item.deboostType1 === null || item.deboostType1 === undefined && item.boostType1 === null) {
            maxHealth = baseMaxHealth + levels[level].hpBoost
            damage = baseDamage + levels[level].dmgBoost
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
        xp: xp,
        xpToNext: xpToNext
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
    if (typeof savedGame.xpToNext !== 'undefined') xpToNext = savedGame.xpToNext
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

window.setInterval(function(){
    // call your function here
    save()
    refresh()
}, 10000);  // Change Interval here to test. For eg: 5000 for 5 sec

function addcoins(num) {
    coins = coins + num
    refresh()
}

function addxp(num) {
    xp = xp + num
    refresh()
}