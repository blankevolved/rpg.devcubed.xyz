
var items = {
    // Main Hand //
    'fist': {
        'boostType1': 'damage',
        'boostNum1': 0,
        'name': 'Fist',
        'slots': ['mainHand'],
        'sellPrice': null,
        'desc': `Your first weapon, nothing!`
    },
    'dagger': {
        'boostType1': 'damage',
        'boostNum1': 2,
        'name': 'Dagger',
        'slots': ['mainHand'],
        'sellPrice':3,
        'desc': `A basic dagger
    ${green}+2 damage]`
    },
    'sword': {
        'boostType1': 'damage',
        'boostNum1': 4,
        'name': 'Sword',
        'slots': ['mainHand'],
        'sellPrice':7,
        'desc': `A basic sword
    ${green}+4 damage]`
    },
    // Off Hand //
    'small_shield': {
        'boostType1': 'health',
        'boostNum1': 1,
        'name': 'Small Shield',
        'slots': ['offHand'],
        'sellPrice':2.5,
        'desc': `A smaller shield
    ${green}+1 health]`
    },
    'shield': {
        'boostType1': 'health',
        'boostNum1': 2.5,
        'name': 'Shield',
        'slots': ['offHand'],
        'sellPrice':3.5,
        'desc': `A shield
    ${green}+2.5 health]`
    },
    // Helmets //
    'leather_helmet': {
        'boostType1': 'health',
        'boostNum1': 1.5,
        'name': 'Leather Helmet',
        'slots': ['head'],
        'sellPrice':2,
        'desc': `A leather helmet
    ${green}+1.5 Health]`
    },
    'iron_helmet': {
        'boostType1': 'health',
        'boostNum1': 3,
        'name': 'Iron Helmet',
        'slots': ['head'],
        'sellPrice':4,
        'desc': `A iron helmet
    ${green}+3 Health]`
    },
    // Chestplates //
    'leather_chestplate': {
        'boostType1': 'health',
        'boostNum1': 3,
        'name': 'Leather Chestplate',
        'slots': ['chest'],
        'sellPrice':6,
        'desc': `A leather chestplate
    ${green}+3 Health]`
    },
    // Leggings //
    'leather_leggings': {
        'boostType1': 'health',
        'boostNum1': 2,
        'name': 'Leather Leggings',
        'slots': ['legs'],
        'sellPrice':5,
        'desc': `A pair of leather leggings
    ${green}+2 Health]`
    },
    // Boots //
    'leather_boots': {
        'boostType1': 'health',
        'boostNum1': 1.5,
        'name': 'Leather Boots',
        'slots': ['boots'],
        'sellPrice':2,
        'desc': `A pair of leather boots
    ${green}+1.5 Health]`
    },
}


const enemys = {
    'goblins': {
        'name': 'Goblin',
        'lvl0': {
            'baseHealth':5,
            'health':5,
            'maxHealth':5,
            'damage':1,
            'xpDrop':[3, 5, 7],
            'coinDrop': [13, 14, 15],
            'itemDrop': [
                'Dagger', 
                'Dagger', 
                'Dagger', 
                'Shield', 
                'Sword', 
                'Leather Helmet', 
                'Leather Chestplate', 
                'Leather Leggings', 
                'Leather Boots',
                'Small Shield',
                'Small Shield',
                null, 
                null,
                null, 
                null,
                null, 
                null, 
                null, 
                null, 
                null
            ],
        },
        'lvl1': {
            'baseHealth':8,
            'health':8,
            'maxHealth':8,
            'damage':3,
            'xpDrop':[5, 8, 13],
            'coinDrop': [17, 20, 22],
            'itemDrop': ['Dagger',
                'Dagger', 
                'Small Shield', 
                'Small Shield', 
                'Small Shield', 
                'Sword', 
                'Sword', 
                'Leather Helmet', 
                'Leather Helmet', 
                'Leather Helmet', 
                'Leather Chestplate', 
                'Leather Leggings', 
                'Leather Leggings', 
                'Leather Boots', 
                'Leather Boots', ,
                'Shield', 
                'Shield', 
                null,
                null
            ],
        },
    }
}

const levels = {
    0: {
        'req': 50,
        'hpBoost':null,
        'dmgBoost':null,
        'regenBoost':null
    },
    1: {
        'req': 100,
        'hpBoost':.5,
        'dmgBoost':1,
        'regenBoost':0.1
    },
    2: {
        'req': 250,
        'hpBoost':1,
        'dmgBoost':1.5,
        'regenBoost':0.15
    },
    3: {
        'req': 350,
        'hpBoost':2,
        'dmgBoost':2.5,
        'regenBoost':0.25
    }
}
var level = 0
var coins = 0
var health = 10
var maxHealth = 10
var damage = 1
var xp = 0
var regen = 0.05
var xpToNext = levels[level].req
var currentEnemy = null
var currentEnemyName = null
var hasRun = false

var baseHealth = 10
var baseMaxHealth = 10
var baseDamage = 1

var currentHead = null
var currentChest = null
var currentLegs = null
var currentBoots = null

var currentWeapon = null
var currentOffhand = null

var bodyMap = null
var stats = null

var inv = ['Fist']
var equipped = []

var devMode = false 
const version = '1.1.2a'


const help = `${white}Help:
    help: get some help

    stats: show your stats

    fight: initiate a fight (f)
    
    attack: attack your enemy (a)
    
    run: run away from a fight (one time per fight) (r)
    
    inv: open your inventory
        page: 1, 2
    
    equip: use/put on a item in your inventory

    unequip: put away a item in your inventory
    
    sell: sell any item in your inventory
    
    listItems: list every item in the game
    
    inspect: inspect any item in the game
    
    save: saves your game
`

function removeFirst(arr, target) {
    var idx = arr.indexOf(target);
    if (idx > -1) {
      arr.splice(idx, 1);
    }
    return arr;
  }



refresh()


function refresh() {
    levelUp()
    if (health <= 0) {
        death()
    }
    if (currentWeapon == null) {
        equip(items['fist'])
    }
    if (health > maxHealth) {
        health = maxHealth
    }

    stats = `${white}Stats:
    ${white}Coins: ${yellow}{ ${coins.toFixed(2)} }]
    ${white}Level: ${green}{ ${level} }]
    ${white}XP: ${darkGreen}{ ${xp.toFixed(2)}/${xpToNext.toFixed(2)} }]
    ${white}HP: ${red}{ ${health.toFixed(2)}/${maxHealth.toFixed(2)} } ( +${levels[level].hpBoost} )]
    ${white}Regen: ${lightRedPink}{ ${regen.toFixed(2)}/s } ( +${levels[level].regenBoost} ) ]
    ${white}Damage: ${blue}{ ${damage.toFixed(2)} } ( +${levels[level].dmgBoost} )]`.replaceAll(null, 0)

    bodyMap = `
    ${white}Helmet: ${redPink}{ ${currentHead} }]
    ${white}Chest: ${redPink}{ ${currentChest} }]
    ${white}Legs: ${redPink}{ ${currentLegs} }]
    ${white}Boots: ${redPink}{ ${currentBoots} }]

    ${white}Weapon: ${purple}{ ${currentWeapon} }]
    ${white}Offhand: ${purple}{ ${currentOffhand} }]`.replaceAll(null, 'None')
}

function showStats() {
    return `${stats}
${bodyMap}`
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
        return `That page doesn't exist`
    }
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

function fight(id, enlevel) {
    if (currentEnemy !== null) {
        var enemyStats = `${showStats()}

${white}${currentEnemyName}:
    ${white}Health: ]${red}{ ${currentEnemy.health}/${currentEnemy.maxHealth} }]
    ${white}Damage: ]${blue}{ ${currentEnemy.damage} }]
`
        return enemyStats
    }
    if (id == undefined) {
        return `Goblins (fight goblins)`
    }
    if (id =='gobs') {
        id = 'goblins'
    }
    if (id == 'goblins') {
        if (enlevel == undefined) {
            return `Your Level: ${green}{ ${level} }]
Level 0 (fight goblins 0)
Level 1 (fight goblins 1)`
        }
        if (enlevel !== undefined && enemys[id]['lvl' + enlevel.toString()] == undefined) {
            return `That level dosen't exist!`
        }
    }
    else {
        return `That enemy dosent exist`
    }
    if (enlevel <= level) {
        if (id == 'goblins') {
            var enemy = enemys[id]['lvl' + enlevel.toString()]
            var enemyName = enemys[id].name
        }
    }
    else {
        return `Your Level isn't high enough`
    }
    refresh()
    var enemyStats = `${showStats()}

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
    if (currentEnemy === null) return `${white}Cant run until you initiate a fight with the ]${blue}fight] ${white}command]`
    var enemy = currentEnemy
    var enemyName = currentEnemyName
    if (hasRun == true) {
        health = health - currentEnemy.damage
        refresh()
        if (currentEnemy == null) {
            return `${white}You couldn't run away and died]
${showStats()}` 
        }
        else {
        return `${white}You already tried to run]
${showStats()}
    ${red}-${currentEnemy.damage} HP] 

${white}${enemyName}:
    ${white}Health: ]${red}{ ${enemy.health}/${enemy.maxHealth} }]
    ${white}Damage: ]${blue}{ ${enemy.damage} }]`
        }
    }
    else {
        var ran = Math.floor(Math.random() * 2)
    }     
    if (ran == 0) {
        currentEnemy.health = currentEnemy.baseHealth
        currentEnemy = null
        currentEnemyName = null
        hasRun = true
        return `${white}You ran away]
${showStats()}`
    }
    else if (ran == 1) {
        hasRun = true
        health = health - currentEnemy.damage
        refresh()
        if (currentEnemy == null) {
            return `${white}You couldn't run away and died]
${showStats()}` 
        }
        else {
        return `${white}You couldn't run away]
${showStats()}
    ${red}-${currentEnemy.damage} HP] 

${white}${enemyName}:
    ${white}Health: ]${red}{ ${enemy.health}/${enemy.maxHealth} }]
    ${white}Damage: ]${blue}{ ${enemy.damage} }]`
        }
    }
}

function attack() {
    if (currentEnemy === null) return `${white}Cant attack until you initiate a fight with the ]${blue}fight] ${white}command]`
    currentEnemy.health = currentEnemy.health - damage
    health = health - currentEnemy.damage

    if (currentEnemy.health <= 0 && currentEnemy !== null) {
        currentEnemy.health = currentEnemy.baseHealth
        var coinsLength = Math.floor(Math.random() * currentEnemy.coinDrop.length)
        var itemLength = Math.floor(Math.random() * currentEnemy.itemDrop.length)
        var xpLength = Math.floor(Math.random() * currentEnemy.xpDrop.length)
        var addedCoins = currentEnemy.coinDrop[coinsLength]
        var addedWeapons = currentEnemy.itemDrop[itemLength]
        var addedXP = currentEnemy.xpDrop[xpLength]
        if (addedWeapons !== null) inv.push(addedWeapons)
        coins = coins + addedCoins
        xp = xp + addedXP
        refresh()
        currentEnemy = null
        currentEnemyName = null
        hasRun = false
        refresh()
        return `${white}Drops:
    ${yellow}( + ${addedCoins} ) Coins]
    ${green}( + ${addedXP} ) XP]
    ${blue}( + ${addedWeapons} ) to your inventory]

${showStats()}
    `.replaceAll(null, 'None')
    } 
    var enemy = currentEnemy
    var enemyName = currentEnemyName
    refresh()

    if (currentEnemy === null) return `You've died\n${showStats()}`

    return `${showStats()}
    ${red}-${currentEnemy.damage} HP] 

${white}${enemyName}:
    ${white}Health: ]${red}{ ${enemy.health}/${enemy.maxHealth} }]
    ${white}Damage: ]${blue}{ ${enemy.damage} }]
    ${red}-${damage} HP]
`
}

function sell(item) {
    if (item == undefined) return `That item doesn't exist\n${showStats()}`
    if (item.sellPrice !== null && inv.includes(item.name)) {
        removeFirst(inv, item.name)
        coins = coins + item.sellPrice
        if (inv.includes(item.name) === false) {
            if (item.slots.includes('mainHand')) {
                equip(items.fist)
            }
            if (item.slots.includes('offHand')) {
                if (items[currentOffhand.toLowerCase().replaceAll(' ', '_')].boostType1 == 'health') {
                    maxHealth = maxHealth - items[currentOffhand.toLowerCase().replaceAll(' ', '_')].boostNum1
                    removeFirst(equipped, currentOffhand)

                }
                if (items[currentOffhand.toLowerCase().replaceAll(' ', '_')].boostType1 == 'damage') {
                    damage = damage - items[currentOffhand.toLowerCase().replaceAll(' ', '_')].boostNum1
                    removeFirst(equipped, currentOffhand)
                }
                currentOffhand = 'None'
            }
            if (item.slots.includes('head')) {
                if (items[currentHead.toLowerCase().replaceAll(' ', '_')].boostType1 == 'health') {
                    maxHealth = maxHealth - items[currentHead.toLowerCase().replaceAll(' ', '_')].boostNum1
                    removeFirst(equipped, currentHead)

                }
                if (items[currentHead.toLowerCase().replaceAll(' ', '_')].boostType1 == 'damage') {
                    damage = damage - items[currentHead.toLowerCase().replaceAll(' ', '_')].boostNum1
                    removeFirst(equipped, currentHead)
                }
                currentHead = 'None'
            }
            if (item.slots.includes('chest')) {
                if (items[currentChest.toLowerCase().replaceAll(' ', '_')].boostType1 == 'health') {
                    maxHealth = maxHealth - items[currentChest.toLowerCase().replaceAll(' ', '_')].boostNum1
                    removeFirst(equipped, currentChest)

                }
                if (items[currentChest.toLowerCase().replaceAll(' ', '_')].boostType1 == 'damage') {
                    damage = damage - items[currentChest.toLowerCase().replaceAll(' ', '_')].boostNum1
                    removeFirst(equipped, currentChest)
                }
                currentChest = 'None'
            }
            if (item.slots.includes('legs')) {
                if (items[currentLegs.toLowerCase().replaceAll(' ', '_')].boostType1 == 'health') {
                    maxHealth = maxHealth - items[currentLegs.toLowerCase().replaceAll(' ', '_')].boostNum1
                    removeFirst(equipped, currentLegs)

                }
                if (items[currentLegs.toLowerCase().replaceAll(' ', '_')].boostType1 == 'damage') {
                    damage = damage - items[currentLegs.toLowerCase().replaceAll(' ', '_')].boostNum1
                    removeFirst(equipped, currentLegs)
                }
                currentLegs = 'None'
            }
            if (item.slots.includes('boots')) {
                if (items[currentBoots.toLowerCase().replaceAll(' ', '_')].boostType1 == 'health') {
                    maxHealth = maxHealth - items[currentBoots.toLowerCase().replaceAll(' ', '_')].boostNum1
                    removeFirst(equipped, currentBoots)

                }
                if (items[currentBoots.toLowerCase().replaceAll(' ', '_')].boostType1 == 'damage') {
                    damage = damage - items[currentBoots.toLowerCase().replaceAll(' ', '_')].boostNum1
                    removeFirst(equipped, currentBoots)
                }
                currentBoots = 'None'
            }
        }
        refresh()
        return `${green}Sold: ${item.name}]
${yellow}( + ${item.sellPrice} Coins )]
${showStats()}`
    }
    else {
        equip(items.fist)
        refresh()
        return `${white}You don't have that item] 
${showStats()}`
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
            maxHealth = maxHealth - levels[level - 1].hpBoost
            maxHealth = maxHealth + levels[level].hpBoost
            damage = damage - levels[level - 1].dmgBoost
            damage = damage + levels[level].dmgBoost
            regen = regen - levels[level - 1].regenBoost
            regen = regen + levels[level].regenBoost
        }
    }
}


function unequip(item) {
    if (equipped.includes(item.name)) {
        if (item.slots.includes('mainHand')) {
            equip(items.fist)
        }
        if (item.slots.includes('offHand')) {
            if (items[currentOffhand.toLowerCase().replaceAll(' ', '_')].boostType1 == 'health') {
                maxHealth = maxHealth - items[currentOffhand.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentOffhand)

            }
            if (items[currentOffhand.toLowerCase().replaceAll(' ', '_')].boostType1 == 'damage') {
                damage = damage - items[currentOffhand.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentOffhand)
            }
            currentOffhand = 'None'
        }
        if (item.slots.includes('head')) {
            if (items[currentHead.toLowerCase().replaceAll(' ', '_')].boostType1 == 'health') {
                maxHealth = maxHealth - items[currentHead.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentHead)

            }
            if (items[currentHead.toLowerCase().replaceAll(' ', '_')].boostType1 == 'damage') {
                damage = damage - items[currentHead.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentHead)
            }
            currentHead = 'None'
        }
        if (item.slots.includes('chest')) {
            if (items[currentChest.toLowerCase().replaceAll(' ', '_')].boostType1 == 'health') {
                maxHealth = maxHealth - items[currentChest.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentChest)

            }
            if (items[currentChest.toLowerCase().replaceAll(' ', '_')].boostType1 == 'damage') {
                damage = damage - items[currentChest.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentChest)
            }
            currentChest = 'None'
        }
        if (item.slots.includes('legs')) {
            if (items[currentLegs.toLowerCase().replaceAll(' ', '_')].boostType1 == 'health') {
                maxHealth = maxHealth - items[currentLegs.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentLegs)

            }
            if (items[currentLegs.toLowerCase().replaceAll(' ', '_')].boostType1 == 'damage') {
                damage = damage - items[currentLegs.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentLegs)
            }
            currentLegs = 'None'
        }
        if (item.slots.includes('boots')) {
            if (items[currentBoots.toLowerCase().replaceAll(' ', '_')].boostType1 == 'health') {
                maxHealth = maxHealth - items[currentBoots.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentBoots)

            }
            if (items[currentBoots.toLowerCase().replaceAll(' ', '_')].boostType1 == 'damage') {
                damage = damage - items[currentBoots.toLowerCase().replaceAll(' ', '_')].boostNum1
                removeFirst(equipped, currentBoots)
            }
            currentBoots = 'None'
        }
        refresh()
        return `Unequipped\n${showStats()}`
    }
    return `You don't have that item equipped\n${showStats()}`
}

function equip(item) {
    if (item == undefined || item == null) {
        refresh()
        return `You don't own that item\n${showStats()}`
    }
    if (inv.includes(item.name)) {
        function addBoosts(type) {
            if (type == 'mainHand' && equipped.includes(item.name) === false) {
                if (item.boostType1 === 'health') {
                    console.log('health')
                    if (equipped.includes(currentWeapon)) {
                        maxHealth = maxHealth - items[currentWeapon.toLowerCase().replaceAll(' ', '_')].boostNum1
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equipped, currentWeapon)
                    }
                    else {
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equipped, currentWeapon)
                    }
                    equipped.push(item.name)
                    currentWeapon = item.name
                }
                if (item.boostType1 === 'damage') {
                    console.log('damage')
                    if (equipped.includes(currentWeapon)) {
                        damage = damage - items[currentWeapon.toLowerCase().replaceAll(' ', '_')].boostNum1
                        damage = damage + item.boostNum1
                        removeFirst(equipped, currentWeapon)
                    }
                    else {
                        damage = damage + item.boostNum1
                        removeFirst(equipped, currentWeapon)
                    }
                    equipped.push(item.name)
                    currentWeapon = item.name
                }
            }
            if (type == 'offHand' && equipped.includes(item.name) === false) {
                if (item.boostType1 === 'health') {
                    console.log('health')
                    if (equipped.includes(currentOffhand)) {
                        maxHealth = maxHealth - items[currentOffhand.toLowerCase().replaceAll(' ', '_')].boostNum1
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equipped, currentOffhand)
                    }
                    else {
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equipped, currentOffhand)
                    }
                    equipped.push(item.name)
                    currentOffhand = item.name
                }
                if (item.boostType1 === 'damage') {
                    console.log('damage')
                    if (equipped.includes(currentOffhand)) {
                        damage = damage - items[currentOffhand.toLowerCase().replaceAll(' ', '_')].boostNum1
                        damage = damage + item.boostNum1
                        removeFirst(equipped, currentOffhand)
                    }
                    else {
                        damage = damage + item.boostNum1
                        removeFirst(equipped, currentOffhand)
                    }
                    equipped.push(item.name)
                    currentOffhand = item.name
                }
            }
            if (type == 'head' && equipped.includes(item.name) === false) {
                if (item.boostType1 === 'health') {
                    console.log('health')
                    if (equipped.includes(currentHead)) {
                        maxHealth = maxHealth - items[currentHead.toLowerCase().replaceAll(' ', '_')].boostNum1
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equipped, currentHead)
                    }
                    else {
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equipped, currentHead)
                    }
                    equipped.push(item.name)
                    currentHead = item.name
                }
                if (item.boostType1 === 'damage') {
                    console.log('damage')
                    if (equipped.includes(currentHead)) {
                        damage = damage - items[currentHead.toLowerCase().replaceAll(' ', '_')].boostNum1
                        damage = damage + item.boostNum1
                        removeFirst(equipped, currentHead)
                    }
                    else {
                        damage = damage + item.boostNum1
                        removeFirst(equipped, currentHead)
                    }
                    equipped.push(item.name)
                    currentHead = item.name
                }
            }
            if (type == 'chest' && equipped.includes(item.name) === false) {
                if (item.boostType1 === 'health') {
                    console.log('health')
                    if (equipped.includes(currentChest)) {
                        maxHealth = maxHealth - items[currentChest.toLowerCase().replaceAll(' ', '_')].boostNum1
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equipped, currentChest)
                    }
                    else {
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equipped, currentChest)
                    }
                    equipped.push(item.name)
                    currentChest = item.name
                }
                if (item.boostType1 === 'damage') {
                    console.log('damage')
                    if (equipped.includes(currentChest)) {
                        damage = damage - items[currentChest.toLowerCase().replaceAll(' ', '_')].boostNum1
                        damage = damage + item.boostNum1
                        removeFirst(equipped, currentChest)
                    }
                    else {
                        damage = damage + item.boostNum1
                        removeFirst(equipped, currentChest)
                    }
                    equipped.push(item.name)
                    currentChest = item.name
                }
            }
            if (type == 'legs' && equipped.includes(item.name) === false) {
                if (item.boostType1 === 'health') {
                    console.log('health')
                    if (equipped.includes(currentLegs)) {
                        maxHealth = maxHealth - items[currentLegs.toLowerCase().replaceAll(' ', '_')].boostNum1
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equipped, currentLegs)
                    }
                    else {
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equipped, currentLegs)
                    }
                    equipped.push(item.name)
                    currentLegs = item.name
                }
                if (item.boostType1 === 'damage') {
                    console.log('damage')
                    if (equipped.includes(currentLegs)) {
                        damage = damage - items[currentLegs.toLowerCase().replaceAll(' ', '_')].boostNum1
                        damage = damage + item.boostNum1
                        removeFirst(equipped, currentLegs)
                    }
                    else {
                        damage = damage + item.boostNum1
                        removeFirst(equipped, currentLegs)
                    }
                    equipped.push(item.name)
                    currentLegs = item.name
                }
            }
            if (type == 'boots' && equipped.includes(item.name) === false) {
                if (item.boostType1 === 'health') {
                    console.log('health')
                    if (equipped.includes(currentBoots)) {
                        maxHealth = maxHealth - items[currentBoots.toLowerCase().replaceAll(' ', '_')].boostNum1
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equipped, currentBoots)
                    }
                    else {
                        maxHealth = maxHealth + item.boostNum1
                        removeFirst(equipped, currentBoots)
                    }
                    equipped.push(item.name)
                    currentBoots = item.name
                }
                if (item.boostType1 === 'damage') {
                    console.log('damage')
                    if (equipped.includes(currentBoots)) {
                        damage = damage - items[currentBoots.toLowerCase().replaceAll(' ', '_')].boostNum1
                        damage = damage + item.boostNum1
                        removeFirst(equipped, currentBoots)
                    }
                    else {
                        damage = damage + item.boostNum1
                        removeFirst(equipped, currentBoots)
                    }
                    equipped.push(item.name)
                    currentBoots = item.name
                }
            }
        }
        if ((item.slots).includes('mainHand')) {
            addBoosts('mainHand')
        }
        if ((item.slots).includes('offHand')) {
            addBoosts('offHand')
        }
        if ((item.slots).includes('head')) {
            addBoosts('head')
        }
        if ((item.slots).includes('chest')) {
            addBoosts('chest')
        }
        if ((item.slots).includes('legs')) {
            addBoosts('legs')
        }
        if ((item.slots).includes('boots')) {
            addBoosts('boots')
        }
        refresh()
        return `Equipped\n${showStats()}`
    }
    refresh()
    return `You don't own that item\n${showStats()}`
}

function inspect(item) {
    return `${item.name}:
    ${item.desc}`
}

function listAllItems() {
    function listItem(item) {
        return `${items[item].name}:
    ${items[item].desc}`
    }
    return `${white}Items:

${listItem('fist')}

${listItem('dagger')}

${listItem('sword')}

${listItem('leather_helmet')}

${listItem('leather_chestplate')}

${listItem('leather_leggings')}

${listItem('leather_boots')}
    `
}

function save() {
    var gameSave = {
        coins: coins,
        health: health,
        maxHealth: maxHealth,
        damage: damage,
        currentHead: currentHead,
        currentChest: currentChest,
        currentLegs: currentLegs,
        currentBoots: currentBoots,
        currentWeapon: currentWeapon,
        currentOffhand: currentOffhand,
        inv: inv,
        level: level,
        xp: xp,
        xpToNext: xpToNext,
        equipped: equipped,
        regen: regen
    }
    localStorage.setItem("gameSave", JSON.stringify(gameSave))
}

function load() {
    var savedGame = JSON.parse(localStorage.getItem("gameSave"))
    if (typeof savedGame.coins !== 'undefined') coins = savedGame.coins
    if (typeof savedGame.health !== 'undefined') health = savedGame.health
    if (typeof savedGame.maxHealth !== 'undefined') maxHealth = savedGame.maxHealth
    if (typeof savedGame.damage !== 'undefined') damage = savedGame.damage
    if (typeof savedGame.currentHead !== 'undefined') currentHead = savedGame.currentHead
    if (typeof savedGame.currentChest !== 'undefined') currentChest = savedGame.currentChest
    if (typeof savedGame.currentLegs !== 'undefined') currentLegs = savedGame.currentLegs
    if (typeof savedGame.currentBoots !== 'undefined') currentBoots = savedGame.currentBoots
    if (typeof savedGame.currentWeapon !== 'undefined') currentWeapon = savedGame.currentWeapon
    if (typeof savedGame.currentOffhand !== 'undefined') currentOffhand = savedGame.currentOffhand
    if (typeof savedGame.inv !== 'undefined') inv = savedGame.inv
    if (typeof savedGame.level !== 'undefined') level = savedGame.level
    if (typeof savedGame.xp !== 'undefined') xp = savedGame.xp
    if (typeof savedGame.xpToNext !== 'undefined') xpToNext = savedGame.xpToNext
    if (typeof savedGame.equipped !== 'undefined') equipped = savedGame.equipped
    if (typeof savedGame.regen !== 'undefined') regen = savedGame.regen
    // if (typeof savedGame.a !== 'undefined') a = savedGame.a
    
    refresh()
}

window.onload = function() {
    $('#version').text(`v${version}`);
    load();
}

window.setInterval(function(){
    // call your function here
    if (currentEnemy === null) health = health + regen
    if (health > maxHealth) {
        health = maxHealth
    }
    refresh()
}, 1000);  // Change Interval here to test. For eg: 5000 for 5 sec

window.setInterval(function(){
    // call your function here
    save()
}, 10000);  // Change Interval here to test. For eg: 5000 for 5 sec

function addcoins(num) {
    coins = coins + num
    refresh()
}

function addxp(num) {
    xp = xp + num
    refresh()
}

function additem(item) {
    if (item.name !== undefined) {
        inv.push(item.name)
        refresh()
        return true
    }
    else {
        return false
    }
}