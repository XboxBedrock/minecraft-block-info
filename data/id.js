/* eslint-disable */

const idMappings = {
  0: { displayName: 'Air', name: 'air', id: 0 },
  "1:0": { displayName: 'Stone', name: 'stone', id: "1:0" },
  "1:1": { "displayName": "Granite", "name": "stone", "id": "1:1" },
  "1:2": { "displayName": "Polished Granite", "name": "stone", "id": "1:2" }, 
  "1:3": { "displayName": "Diorite", "name": "stone", "id": "1:3" }, 
  "1:4": { "displayName": "Polished Diorite", "name": "stone", "id": "1:4" }, 
  "1:5": { "displayName": "Andesite", "name": "stone", "id": "1:5" }, 
  "1:6": { "displayName": "Polished Andesite", "name": "stone", "id": "1:6" },
  2: { displayName: 'Grass Block', name: 'grass', id: 2 },
  '3:0': { displayName: 'Dirt', name: 'dirt', id: '3:0' },
  '3:1': { displayName: 'Coarse Dirt', name: 'dirt', id: '3:1' },
  '3:2': { displayName: 'Podzol', name: 'dirt', id: '3:2' },
  4: { displayName: 'Cobblestone', name: 'cobblestone', id: 4 },
  '5:0': { displayName: 'Oak Wood Planks', name: 'planks', id: '5:0' },
  '5:1': { displayName: 'Spruce Wood Planks', name: 'planks', id: '5:1' },
  '5:2': { displayName: 'Birch Wood Planks', name: 'planks', id: '5:2' },
  '5:3': { displayName: 'Jungle Wood Planks', name: 'planks', id: '5:3' },
  '5:4': { displayName: 'Acacia Wood Planks', name: 'planks', id: '5:4' },
  '5:5': { displayName: 'Dark Oak Wood Planks', name: 'planks', id: '5:5' },
  7: { displayName: 'Bedrock', name: 'bedrock', id: 7 },
  '12:0': { displayName: 'Sand', name: 'sand', id: '12:0' },
  13: { displayName: 'Gravel', name: 'gravel', id: 13 },
  14: { displayName: 'Gold Ore', name: 'gold_ore', id: 14 },
  15: { displayName: 'Iron Ore', name: 'iron_ore', id: 15 },
  16: { displayName: 'Coal Ore', name: 'coal_ore', id: 16 },
  '17:0': { displayName: 'Oak Wood', name: 'log', id: '17:0' },
  '17:1': { displayName: 'Spruce Wood', name: 'log', id: '17:1' },
  '17:2': { displayName: 'Birch Wood', name: 'log', id: '17:2' },
  '17:3': { displayName: 'Jungle Wood', name: 'log', id: '17:3' },
  '18:0': { displayName: 'Oak Leaves', name: 'leaves', id: '18:0' },
  '18:1': { displayName: 'Spruce Leaves', name: 'leaves', id: '18:1' },
  '18:2': { displayName: 'Birch Leaves', name: 'leaves', id: '18:2' },
  '18:3': { displayName: 'Jungle Leaves', name: 'leaves', id: '18:3' },
  '19:0': { displayName: 'Sponge', name: 'sponge', id: '19:0' },
  '19:1': { displayName: 'Wet Sponge', name: 'sponge', id: '19:1' },
  20: { displayName: 'Glass', name: 'glass', id: 20 },
  21: { displayName: 'Lapis Lazuli Ore', name: 'lapis_ore', id: 21 },
  22: { displayName: 'Lapis Lazuli Block', name: 'lapis_block', id: 22 },
  23: { displayName: 'Dispenser', name: 'dispenser', id: 23 },
  '24:0': { displayName: 'Sandstone', name: 'sandstone', id: '24:0' },
  25: { displayName: 'Note Block', name: 'noteblock', id: 25 },
  '27:0': { displayName: 'Powered Rail', name: 'golden_rail', id: '27:0' },
  '28:0': { displayName: 'Detector Rail', name: 'detector_rail', id: '28:0' },
  '29:0': { displayName: 'Sticky Piston', name: 'sticky_piston', id: '29:0' },
  30: { displayName: 'Cobweb', name: 'web', id: 30 },
  '31:2': { displayName: 'Fern', name: 'tallgrass', id: '31:2' },
  32: { displayName: 'Dead Bush', name: 'deadbush', id: 32 },
  '33:0': { displayName: 'Piston', name: 'piston', id: '33:0' },
  '35:0': { displayName: 'White Wool', name: 'wool', id: '35:0' },
  '35:1': { displayName: 'Orange Wool', name: 'wool', id: '35:1' },
  '35:2': { displayName: 'Magenta Wool', name: 'wool', id: '35:2' },
  '35:4': { displayName: 'Yellow Wool', name: 'wool', id: '35:4' },
  '35:5': { displayName: 'Lime Wool', name: 'wool', id: '35:5' },
  '35:6': { displayName: 'Pink Wool', name: 'wool', id: '35:6' },
  '35:7': { displayName: 'Gray Wool', name: 'wool', id: '35:7' },
  '35:9': { displayName: 'Cyan Wool', name: 'wool', id: '35:9' },
  '35:10': { displayName: 'Purple Wool', name: 'wool', id: '35:10' },
  '35:11': { displayName: 'Blue Wool', name: 'wool', id: '35:11' },
  '35:12': { displayName: 'Brown Wool', name: 'wool', id: '35:12' },
  '35:13': { displayName: 'Green Wool', name: 'wool', id: '35:13' },
  '35:14': { displayName: 'Red Wool', name: 'wool', id: '35:14' },
  '35:15': { displayName: 'Black Wool', name: 'wool', id: '35:15' },
  37: { displayName: 'Dandelion', name: 'yellow_flower', id: 37 },
  '38:0': { displayName: 'Poppy', name: 'red_flower', id: '38:0' },
  '38:1': { displayName: 'Blue Orchid', name: 'red_flower', id: '38:1' },
  '38:2': { displayName: 'Allium', name: 'red_flower', id: '38:2' },
  '38:3': { displayName: 'Azure Bluet', name: 'red_flower', id: '38:3' },
  '38:4': { displayName: 'Red Tulip', name: 'red_flower', id: '38:4' },
  '38:5': { displayName: 'Orange Tulip', name: 'red_flower', id: '38:5' },
  '38:6': { displayName: 'White Tulip', name: 'red_flower', id: '38:6' },
  '38:7': { displayName: 'Pink Tulip', name: 'red_flower', id: '38:7' },
  '38:8': { displayName: 'Oxeye Daisy', name: 'red_flower', id: '38:8' },
  39: { displayName: 'Mushroom', name: 'brown_mushroom', id: 39 },
  40: { displayName: 'Mushroom', name: 'red_mushroom', id: 40 },
  41: { displayName: 'Block of Gold', name: 'gold_block', id: 41 },
  42: { displayName: 'Block of Iron', name: 'iron_block', id: 42 },
  '44:0': { displayName: 'Stone Slab', name: 'stone_slab', id: '44:0' },
  '44:1': { displayName: 'Sandstone Slab', name: 'stone_slab', id: '44:1' },
  '44:3': { displayName: 'Cobblestone Slab', name: 'stone_slab', id: '44:3' },
  '44:4': { displayName: 'Bricks Slab', name: 'stone_slab', id: '44:4' },
  '44:6': { displayName: 'Nether Brick Slab', name: 'stone_slab', id: '44:6' },
  '44:7': { displayName: 'Quartz Slab', name: 'stone_slab', id: '44:7' },
  45: { displayName: 'Brick', name: 'brick_block', id: 45 },
  '46:0': { displayName: 'TNT', name: 'tnt', id: '46:0' },
  47: { displayName: 'Bookshelf', name: 'bookshelf', id: 47 },
  48: { displayName: 'Moss Stone', name: 'mossy_cobblestone', id: 48 },
  49: { displayName: 'Obsidian', name: 'obsidian', id: 49 },
  '50:0': { displayName: 'Torch', name: 'torch', id: '50:0' },
  52: { displayName: 'Monster Spawner', name: 'mob_spawner', id: 52 },
  '53:0': { displayName: 'Oak Wood Stairs', name: 'oak_stairs', id: '53:0' },
  '54:2': { displayName: 'Chest', name: 'chest', id: '54:2' },
  56: { displayName: 'Diamond Ore', name: 'diamond_ore', id: 56 },
  57: { displayName: 'Block of Diamond', name: 'diamond_block', id: 57 },
  58: { displayName: 'Crafting Table', name: 'crafting_table', id: 58 },
  '59:0': { displayName: 'Wheat', name: 'wheat', id: '59:0' },
  '60:0': { displayName: 'Farmland', name: 'farmland', id: '60:0' },
  '61:2': { displayName: 'Furnace', name: 'furnace', id: '61:2' },
  '64:0': { displayName: 'Oak Door', name: 'wooden_door', id: '64:0' },
  '65:2': { displayName: 'Ladder', name: 'ladder', id: '65:2' },
  '66:0': { displayName: 'Rail', name: 'rail', id: '66:0' },
  '67:0': {
    displayName: 'Cobblestone Stairs',
    name: 'stone_stairs',
    id: '67:0'
  },
  '69:0': { displayName: 'Lever', name: 'lever', id: '69:0' },
  '70:0': {
    displayName: 'Stone Pressure Plate',
    name: 'stone_pressure_plate',
    id: '70:0'
  },
  '71:0': { displayName: 'Iron Door', name: 'iron_door', id: '71:0' },
  '72:0': {
    displayName: 'Wooden Pressure Plate',
    name: 'wooden_pressure_plate',
    id: '72:0'
  },
  73: { displayName: 'Redstone Ore', name: 'redstone_ore', id: 73 },
  '75:0': {
    displayName: 'Redstone Torch',
    name: 'unlit_redstone_torch',
    id: '75:0'
  },
  '78:0': { displayName: 'Snow', name: 'snow_layer', id: '78:0' },
  79: { displayName: 'Ice', name: 'ice', id: 79 },
  80: { displayName: 'Snow', name: 'snow', id: 80 },
  81: { displayName: 'Cactus', name: 'cactus', id: 81 },
  82: { displayName: 'Clay', name: 'clay', id: 82 },
  '84:0': { displayName: 'Jukebox', name: 'jukebox', id: '84:0' },
  85: { displayName: 'Oak Fence', name: 'fence', id: 85 },
  '86:0': { displayName: 'Pumpkin', name: 'pumpkin', id: '86:0' },
  87: { displayName: 'Netherrack', name: 'netherrack', id: 87 },
  88: { displayName: 'Soul Sand', name: 'soul_sand', id: 88 },
  89: { displayName: 'Glowstone', name: 'glowstone', id: 89 },
  '91:0': { displayName: 'Pumpkin', name: 'lit_pumpkin', id: '91:0' },
  '92:0': { displayName: 'Cake', name: 'cake', id: '92:0' },
  '93:0': {
    displayName: 'Redstone Repeater',
    name: 'unpowered_repeater',
    id: '93:0'
  },
  '94:0': {
    displayName: 'Redstone Repeater',
    name: 'powered_repeater',
    id: '94:0'
  },
  '95:0': {
    displayName: 'White Stained Glass',
    name: 'stained_glass',
    id: '95:0'
  },
  '95:1': {
    displayName: 'Orange Stained Glass',
    name: 'stained_glass',
    id: '95:1'
  },
  '95:2': {
    displayName: 'Magenta Stained Glass',
    name: 'stained_glass',
    id: '95:2'
  },
  '95:3': {
    displayName: 'Light Blue Stained Glass',
    name: 'stained_glass',
    id: '95:3'
  },
  '95:4': {
    displayName: 'Yellow Stained Glass',
    name: 'stained_glass',
    id: '95:4'
  },
  '95:5': {
    displayName: 'Lime Stained Glass',
    name: 'stained_glass',
    id: '95:5'
  },
  '95:6': {
    displayName: 'Pink Stained Glass',
    name: 'stained_glass',
    id: '95:6'
  },
  '95:7': {
    displayName: 'Gray Stained Glass',
    name: 'stained_glass',
    id: '95:7'
  },
  '95:8': {
    displayName: 'Light Gray Stained Glass',
    name: 'stained_glass',
    id: '95:8'
  },
  '95:9': {
    displayName: 'Cyan Stained Glass',
    name: 'stained_glass',
    id: '95:9'
  },
  '95:10': {
    displayName: 'Purple Stained Glass',
    name: 'stained_glass',
    id: '95:10'
  },
  '95:11': {
    displayName: 'Blue Stained Glass',
    name: 'stained_glass',
    id: '95:11'
  },
  '95:12': {
    displayName: 'Brown Stained Glass',
    name: 'stained_glass',
    id: '95:12'
  },
  '95:13': {
    displayName: 'Green Stained Glass',
    name: 'stained_glass',
    id: '95:13'
  },
  '95:14': {
    displayName: 'Red Stained Glass',
    name: 'stained_glass',
    id: '95:14'
  },
  '95:15': {
    displayName: 'Black Stained Glass',
    name: 'stained_glass',
    id: '95:15'
  },
  '96:0': { displayName: 'Wooden Trapdoor', name: 'trapdoor', id: '96:0' },
  '97:0': { displayName: 'Stone Monster Egg', name: 'monster_egg', id: '97:0' },
  '97:1': {
    displayName: 'Cobblestone Monster Egg',
    name: 'monster_egg',
    id: '97:1'
  },
  '97:2': {
    displayName: 'Stone Brick Monster Egg',
    name: 'monster_egg',
    id: '97:2'
  },
  '97:3': {
    displayName: 'Mossy Stone Brick Monster Egg',
    name: 'monster_egg',
    id: '97:3'
  },
  '97:4': {
    displayName: 'Cracked Stone Brick Monster Egg',
    name: 'monster_egg',
    id: '97:4'
  },
  '97:5': {
    displayName: 'Chiseled Stone Brick Monster Egg',
    name: 'monster_egg',
    id: '97:5'
  },
  '99:0': { displayName: 'Mushroom', name: 'brown_mushroom_block', id: '99:0' },
  '100:0': { displayName: 'Mushroom', name: 'red_mushroom_block', id: '100:0' },
  101: { displayName: 'Iron Bars', name: 'iron_bars', id: 101 },
  102: { displayName: 'Glass Pane', name: 'glass_pane', id: 102 },
  103: { displayName: 'Melon', name: 'melon_block', id: 103 },
  '106:0': { displayName: 'Vines', name: 'vine', id: '106:0' },
  '108:0': { displayName: 'Brick Stairs', name: 'brick_stairs', id: '108:0' },
  '109:0': {
    displayName: 'Stone Brick Stairs',
    name: 'stone_brick_stairs',
    id: '109:0'
  },
  110: { displayName: 'Mycelium', name: 'mycelium', id: 110 },
  111: { displayName: 'Lily Pad', name: 'waterlily', id: 111 },
  112: { displayName: 'Nether Brick', name: 'nether_brick', id: 112 },
  113: {
    displayName: 'Nether Brick Fence',
    name: 'nether_brick_fence',
    id: 113
  },
  '114:0': {
    displayName: 'Nether Brick Stairs',
    name: 'nether_brick_stairs',
    id: '114:0'
  },
  '115:0': { displayName: 'Nether Wart', name: 'nether_wart', id: '115:0' },
  116: { displayName: 'Enchantment Table', name: 'enchanting_table', id: 116 },
  '117:0': { displayName: 'Brewing Stand', name: 'brewing_stand', id: '117:0' },
  '118:0': { displayName: 'Cauldron', name: 'cauldron', id: '118:0' },
  119: { displayName: 'End Portal', name: 'end_portal', id: 119 },
  121: { displayName: 'End Stone', name: 'end_stone', id: 121 },
  122: { displayName: 'Dragon Egg', name: 'dragon_egg', id: 122 },
  123: { displayName: 'Redstone Lamp', name: 'redstone_lamp', id: 123 },
  124: { displayName: 'Redstone Lamp', name: 'lit_redstone_lamp', id: 124 },
  '126:0': { displayName: 'Oak Wood Slab', name: 'wooden_slab', id: '126:0' },
  '126:1': {
    displayName: 'Spruce Wood Slab',
    name: 'wooden_slab',
    id: '126:1'
  },
  '126:2': { displayName: 'Birch Wood Slab', name: 'wooden_slab', id: '126:2' },
  '126:3': {
    displayName: 'Jungle Wood Slab',
    name: 'wooden_slab',
    id: '126:3'
  },
  '126:4': {
    displayName: 'Acacia Wood Slab',
    name: 'wooden_slab',
    id: '126:4'
  },
  '126:5': {
    displayName: 'Dark Oak Wood Slab',
    name: 'wooden_slab',
    id: '126:5'
  },
  129: { displayName: 'Emerald Ore', name: 'emerald_ore', id: 129 },
  '130:2': { displayName: 'Ender Chest', name: 'ender_chest', id: '130:2' },
  '131:0': { displayName: 'Tripwire Hook', name: 'tripwire_hook', id: '131:0' },
  133: { displayName: 'Block of Emerald', name: 'emerald_block', id: 133 },
  '134:0': {
    displayName: 'Spruce Wood Stairs',
    name: 'spruce_stairs',
    id: '134:0'
  },
  '135:0': {
    displayName: 'Birch Wood Stairs',
    name: 'birch_stairs',
    id: '135:0'
  },
  '136:0': {
    displayName: 'Jungle Wood Stairs',
    name: 'jungle_stairs',
    id: '136:0'
  },
  '137:0': { displayName: 'Command Block', name: 'command_block', id: '137:0' },
  138: { displayName: 'Beacon', name: 'beacon', id: 138 },
  '139:0': {
    displayName: 'Cobblestone Wall',
    name: 'cobblestone_wall',
    id: '139:0'
  },
  '139:1': {
    displayName: 'Mossy Cobblestone Wall',
    name: 'cobblestone_wall',
    id: '139:1'
  },
  140: { displayName: 'Flower Pot', name: 'flower_pot', id: 140 },
  '141:0': { displayName: 'Carrot', name: 'carrots', id: '141:0' },
  '142:0': { displayName: 'Potato', name: 'potatoes', id: '142:0' },
  '143:0': { displayName: 'Button', name: 'wooden_button', id: '143:0' },
  '144:0': { displayName: 'Skeleton Skull', name: 'skull', id: '144:0' },
  '144:1': { displayName: 'Wither Skeleton Skull', name: 'skull', id: '144:1' },
  '144:2': { displayName: 'Zombie Head', name: 'skull', id: '144:2' },
  '144:3': { displayName: 'Head', name: 'skull', id: '144:3' },
  '144:4': { displayName: 'Creeper Head', name: 'skull', id: '144:4' },
  '145:0': { displayName: 'Anvil', name: 'anvil', id: '145:0' },
  '145:1': {
    displayName: 'Slightly Damaged Anvil',
    name: 'anvil',
    id: '145:1'
  },
  '145:2': { displayName: 'Very Damaged Anvil', name: 'anvil', id: '145:2' },
  '146:2': { displayName: 'Trapped Chest', name: 'trapped_chest', id: '146:2' },
  '149:0': {
    displayName: 'Redstone Comparator',
    name: 'unpowered_comparator',
    id: '149:0'
  },
  '151:0': {
    displayName: 'Daylight Sensor',
    name: 'daylight_detector',
    id: '151:0'
  },
  152: { displayName: 'Block of Redstone', name: 'redstone_block', id: 152 },
  153: { displayName: 'Nether Quartz', name: 'quartz_ore', id: 153 },
  '154:0': { displayName: 'Hopper', name: 'hopper', id: '154:0' },
  '155:0': {
    displayName: 'Block of Quartz',
    name: 'quartz_block',
    id: '155:0'
  },
  '155:1': {
    displayName: 'Chiseled Quartz Block',
    name: 'quartz_block',
    id: '155:1'
  },
  '155:2': {
    displayName: 'Pillar Quartz Block',
    name: 'quartz_block',
    id: '155:2'
  },
  '156:0': { displayName: 'Quartz Stairs', name: 'quartz_stairs', id: '156:0' },
  '157:1': {
    displayName: 'Activator Rail',
    name: 'activator_rail',
    id: '157:1'
  },
  '158:0': { displayName: 'Dropper', name: 'dropper', id: '158:0' },
  '160:0': {
    displayName: 'White Stained Glass Pane',
    name: 'stained_glass_pane',
    id: '160:0'
  },
  '160:1': {
    displayName: 'Orange Stained Glass Pane',
    name: 'stained_glass_pane',
    id: '160:1'
  },
  '160:2': {
    displayName: 'Magenta Stained Glass Pane',
    name: 'stained_glass_pane',
    id: '160:2'
  },
  '160:3': {
    displayName: 'Light Blue Stained Glass Pane',
    name: 'stained_glass_pane',
    id: '160:3'
  },
  '160:4': {
    displayName: 'Yellow Stained Glass Pane',
    name: 'stained_glass_pane',
    id: '160:4'
  },
  '160:5': {
    displayName: 'Lime Stained Glass Pane',
    name: 'stained_glass_pane',
    id: '160:5'
  },
  '160:6': {
    displayName: 'Pink Stained Glass Pane',
    name: 'stained_glass_pane',
    id: '160:6'
  },
  '160:7': {
    displayName: 'Gray Stained Glass Pane',
    name: 'stained_glass_pane',
    id: '160:7'
  },
  '160:8': {
    displayName: 'Light Gray Stained Glass Pane',
    name: 'stained_glass_pane',
    id: '160:8'
  },
  '160:9': {
    displayName: 'Cyan Stained Glass Pane',
    name: 'stained_glass_pane',
    id: '160:9'
  },
  '160:10': {
    displayName: 'Purple Stained Glass Pane',
    name: 'stained_glass_pane',
    id: '160:10'
  },
  '160:11': {
    displayName: 'Blue Stained Glass Pane',
    name: 'stained_glass_pane',
    id: '160:11'
  },
  '160:12': {
    displayName: 'Brown Stained Glass Pane',
    name: 'stained_glass_pane',
    id: '160:12'
  },
  '160:13': {
    displayName: 'Green Stained Glass Pane',
    name: 'stained_glass_pane',
    id: '160:13'
  },
  '160:14': {
    displayName: 'Red Stained Glass Pane',
    name: 'stained_glass_pane',
    id: '160:14'
  },
  '160:15': {
    displayName: 'Black Stained Glass Pane',
    name: 'stained_glass_pane',
    id: '160:15'
  },
  '161:0': { displayName: 'Acacia Leaves', name: 'leaves2', id: '161:0' },
  '161:1': { displayName: 'Dark Oak Leaves', name: 'leaves2', id: '161:1' },
  '162:0': { displayName: 'Acacia Wood', name: 'log2', id: '162:0' },
  '162:1': { displayName: 'Dark Oak Wood', name: 'log2', id: '162:1' },
  '163:0': {
    displayName: 'Acacia Wood Stairs',
    name: 'acacia_stairs',
    id: '163:0'
  },
  '164:0': {
    displayName: 'Dark Oak Wood Stairs',
    name: 'dark_oak_stairs',
    id: '164:0'
  },
  165: { displayName: 'Slime Block', name: 'slime', id: 165 },
  166: { displayName: 'Barrier', name: 'barrier', id: 166 },
  '167:0': { displayName: 'Iron Trapdoor', name: 'iron_trapdoor', id: '167:0' },
  '168:0': { displayName: 'Prismarine', name: 'prismarine', id: '168:0' },
  '168:1': {
    displayName: 'Prismarine Bricks',
    name: 'prismarine',
    id: '168:1'
  },
  '168:2': { displayName: 'Dark Prismarine', name: 'prismarine', id: '168:2' },
  169: { displayName: 'Sea Lantern', name: 'sea_lantern', id: 169 },
  '170:0': { displayName: 'Hay Bale', name: 'hay_block', id: '170:0' },
  '171:0': { displayName: 'White Carpet', name: 'carpet', id: '171:0' },
  '171:1': { displayName: 'Orange Carpet', name: 'carpet', id: '171:1' },
  '171:2': { displayName: 'Magenta Carpet', name: 'carpet', id: '171:2' },
  '171:3': { displayName: 'Light Blue Carpet', name: 'carpet', id: '171:3' },
  '171:4': { displayName: 'Yellow Carpet', name: 'carpet', id: '171:4' },
  '171:5': { displayName: 'Lime Carpet', name: 'carpet', id: '171:5' },
  '171:6': { displayName: 'Pink Carpet', name: 'carpet', id: '171:6' },
  '171:7': { displayName: 'Gray Carpet', name: 'carpet', id: '171:7' },
  '171:8': { displayName: 'Light Gray Carpet', name: 'carpet', id: '171:8' },
  '171:9': { displayName: 'Cyan Carpet', name: 'carpet', id: '171:9' },
  '171:10': { displayName: 'Purple Carpet', name: 'carpet', id: '171:10' },
  '171:11': { displayName: 'Blue Carpet', name: 'carpet', id: '171:11' },
  '171:12': { displayName: 'Brown Carpet', name: 'carpet', id: '171:12' },
  '171:13': { displayName: 'Green Carpet', name: 'carpet', id: '171:13' },
  '171:14': { displayName: 'Red Carpet', name: 'carpet', id: '171:14' },
  '171:15': { displayName: 'Black Carpet', name: 'carpet', id: '171:15' },
  173: { displayName: 'Block of Coal', name: 'coal_block', id: 173 },
  174: { displayName: 'Packed Ice', name: 'packed_ice', id: 174 },
  '175:0': { displayName: 'Sunflower', name: 'double_plant', id: '175:0' },
  '175:1': { displayName: 'Lilac', name: 'double_plant', id: '175:1' },
  '175:2': {
    displayName: 'Double Tallgrass',
    name: 'double_plant',
    id: '175:2'
  },
  '175:3': { displayName: 'Large Fern', name: 'double_plant', id: '175:3' },
  '175:4': { displayName: 'Rose Bush', name: 'double_plant', id: '175:4' },
  '175:5': { displayName: 'Peony', name: 'double_plant', id: '175:5' },
  '179:0': { displayName: 'Red Sandstone', name: 'red_sandstone', id: '179:0' },
  '179:1': {
    displayName: 'Chiseled Red Sandstone',
    name: 'red_sandstone',
    id: '179:1'
  },
  '179:2': {
    displayName: 'Smooth Red Sandstone',
    name: 'red_sandstone',
    id: '179:2'
  },
  '180:0': {
    displayName: 'Red Sandstone Stairs',
    name: 'red_sandstone_stairs',
    id: '180:0'
  },
  '182:0': {
    displayName: 'Red Sandstone Slab',
    name: 'stone_slab2',
    id: '182:0'
  },
  183: { displayName: 'Spruce Fence Gate', name: 'spruce_fence_gate', id: 183 },
  184: { displayName: 'Birch Fence Gate', name: 'birch_fence_gate', id: 184 },
  185: { displayName: 'Jungle Fence Gate', name: 'jungle_fence_gate', id: 185 },
  186: {
    displayName: 'Dark Oak Fence Gate',
    name: 'dark_oak_fence_gate',
    id: 186
  },
  187: { displayName: 'Acacia Fence Gate', name: 'acacia_fence_gate', id: 187 },
  188: { displayName: 'Spruce Fence', name: 'spruce_fence', id: 188 },
  189: { displayName: 'Birch Fence', name: 'birch_fence', id: 189 },
  190: { displayName: 'Jungle Fence', name: 'jungle_fence', id: 190 },
  191: { displayName: 'Dark Oak Fence', name: 'dark_oak_fence', id: 191 },
  192: { displayName: 'Acacia Fence', name: 'acacia_fence', id: 192 },
  '193:0': { displayName: 'Spruce Door', name: 'spruce_door', id: '193:0' },
  '194:0': { displayName: 'Birch Door', name: 'birch_door', id: '194:0' },
  '195:0': { displayName: 'Jungle Door', name: 'jungle_door', id: '195:0' },
  '196:0': { displayName: 'Acacia Door', name: 'acacia_door', id: '196:0' },
  '197:0': { displayName: 'Dark Oak Door', name: 'dark_oak_door', id: '197:0' },
  '198:0': { displayName: 'End Rod', name: 'end_rod', id: '198:0' },
  199: { displayName: 'Chorus Plant', name: 'chorus_plant', id: 199 },
  '200:0': { displayName: 'Chorus Flower', name: 'chorus_flower', id: '200:0' },
  201: { displayName: 'Purpur Block', name: 'purpur_block', id: 201 },
  '202:0': { displayName: 'Purpur Pillar', name: 'purpur_pillar', id: '202:0' },
  '203:0': { displayName: 'Purpur Stairs', name: 'purpur_stairs', id: '203:0' },
  '205:0': { displayName: 'Purpur Slab', name: 'purpur_slab', id: '205:0' },
  206: { displayName: 'End Stone Bricks', name: 'end_bricks', id: 206 },
  '207:0': { displayName: 'Beetroot Seeds', name: 'beetroots', id: '207:0' },
  208: { displayName: 'Grass Path', name: 'grass_path', id: 208 },
  '210:0': {
    displayName: 'Repeating Command Block',
    name: 'repeating_command_block',
    id: '210:0'
  },
  '211:0': {
    displayName: 'Chain Command Block',
    name: 'chain_command_block',
    id: '211:0'
  },
  213: { displayName: 'Magma Block', name: 'magma', id: 213 },
  214: { displayName: 'Nether Wart Block', name: 'nether_wart_block', id: 214 },
  215: { displayName: 'Red Nether Brick', name: 'red_nether_brick', id: 215 },
  '216:0': { displayName: 'Bone Block', name: 'bone_block', id: '216:0' },
  '218:0': { displayName: 'Observer', name: 'observer', id: '218:0' },
  '219:0': {
    displayName: 'White Shulker Box',
    name: 'white_shulker_box',
    id: '219:0'
  },
  '220:0': {
    displayName: 'Orange Shulker Box',
    name: 'orange_shulker_box',
    id: '220:0'
  },
  '221:0': {
    displayName: 'Magenta Shulker Box',
    name: 'magenta_shulker_box',
    id: '221:0'
  },
  '222:0': {
    displayName: 'Light Blue Shulker Box',
    name: 'light_blue_shulker_box',
    id: '222:0'
  },
  '223:0': {
    displayName: 'Yellow Shulker Box',
    name: 'yellow_shulker_box',
    id: '223:0'
  },
  '224:0': {
    displayName: 'Lime Shulker Box',
    name: 'lime_shulker_box',
    id: '224:0'
  },
  '225:0': {
    displayName: 'Pink Shulker Box',
    name: 'pink_shulker_box',
    id: '225:0'
  },
  '226:0': {
    displayName: 'Gray Shulker Box',
    name: 'gray_shulker_box',
    id: '226:0'
  },
  '227:0': {
    displayName: 'Light Gray Shulker Box',
    name: 'light_gray_shulker_box',
    id: '227:0'
  },
  '228:0': {
    displayName: 'Cyan Shulker Box',
    name: 'cyan_shulker_box',
    id: '228:0'
  },
  '229:0': {
    displayName: 'Purple Shulker Box',
    name: 'purple_shulker_box',
    id: '229:0'
  },
  '230:0': {
    displayName: 'Blue Shulker Box',
    name: 'blue_shulker_box',
    id: '230:0'
  },
  '231:0': {
    displayName: 'Brown Shulker Box',
    name: 'brown_shulker_box',
    id: '231:0'
  },
  '232:0': {
    displayName: 'Green Shulker Box',
    name: 'green_shulker_box',
    id: '232:0'
  },
  '233:0': {
    displayName: 'Red Shulker Box',
    name: 'red_shulker_box',
    id: '233:0'
  },
  '234:0': {
    displayName: 'Black Shulker Box',
    name: 'black_shulker_box',
    id: '234:0'
  },
  '235:0': {
    displayName: 'White Glazed Terracotta',
    name: 'white_glazed_terracotta',
    id: '235:0'
  },
  '236:0': {
    displayName: 'Orange Glazed Terracotta',
    name: 'orange_glazed_terracotta',
    id: '236:0'
  },
  '237:0': {
    displayName: 'Magenta Glazed Terracotta',
    name: 'magenta_glazed_terracotta',
    id: '237:0'
  },
  '238:0': {
    displayName: 'Light Blue Glazed Terracotta',
    name: 'light_blue_glazed_terracotta',
    id: '238:0'
  },
  '239:0': {
    displayName: 'Yellow Glazed Terracotta',
    name: 'yellow_glazed_terracotta',
    id: '239:0'
  },
  '240:0': {
    displayName: 'Lime Glazed Terracotta',
    name: 'lime_glazed_terracotta',
    id: '240:0'
  },
  '241:0': {
    displayName: 'Pink Glazed Terracotta',
    name: 'pink_glazed_terracotta',
    id: '241:0'
  },
  '242:0': {
    displayName: 'Gray Glazed Terracotta',
    name: 'gray_glazed_terracotta',
    id: '242:0'
  },
  '243:0': {
    displayName: 'Light Gray Glazed Terracotta',
    name: 'light_gray_glazed_terracotta',
    id: '243:0'
  },
  '244:0': {
    displayName: 'Cyan Glazed Terracotta',
    name: 'cyan_glazed_terracotta',
    id: '244:0'
  },
  '245:0': {
    displayName: 'Purple Glazed Terracotta',
    name: 'purple_glazed_terracotta',
    id: '245:0'
  },
  '246:0': {
    displayName: 'Blue Glazed Terracotta',
    name: 'blue_glazed_terracotta',
    id: '246:0'
  },
  '247:0': {
    displayName: 'Brown Glazed Terracotta',
    name: 'brown_glazed_terracotta',
    id: '247:0'
  },
  '248:0': {
    displayName: 'Green Glazed Terracotta',
    name: 'green_glazed_terracotta',
    id: '248:0'
  },
  '249:0': {
    displayName: 'Red Glazed Terracotta',
    name: 'red_glazed_terracotta',
    id: '249:0'
  },
  '250:0': {
    displayName: 'Black Glazed Terracotta',
    name: 'black_glazed_terracotta',
    id: '250:0'
  },
  '251:0': { displayName: 'White Concrete', name: 'concrete', id: '251:0' },
  '251:1': { displayName: 'Orange Concrete', name: 'concrete', id: '251:1' },
  '251:2': { displayName: 'Magenta Concrete', name: 'concrete', id: '251:2' },
  '251:4': { displayName: 'Yellow Concrete', name: 'concrete', id: '251:4' },
  '251:5': { displayName: 'Lime Concrete', name: 'concrete', id: '251:5' },
  '251:6': { displayName: 'Pink Concrete', name: 'concrete', id: '251:6' },
  '251:7': { displayName: 'Gray Concrete', name: 'concrete', id: '251:7' },
  '251:9': { displayName: 'Cyan Concrete', name: 'concrete', id: '251:9' },
  '251:10': { displayName: 'Purple Concrete', name: 'concrete', id: '251:10' },
  '251:11': { displayName: 'Blue Concrete', name: 'concrete', id: '251:11' },
  '251:12': { displayName: 'Brown Concrete', name: 'concrete', id: '251:12' },
  '251:13': { displayName: 'Green Concrete', name: 'concrete', id: '251:13' },
  '251:14': { displayName: 'Red Concrete', name: 'concrete', id: '251:14' },
  '251:15': { displayName: 'Black Concrete', name: 'concrete', id: '251:15' },
  '252:0': {
    displayName: 'White Concrete Powder',
    name: 'concrete_powder',
    id: '252:0'
  },
  '252:1': {
    displayName: 'Orange Concrete Powder',
    name: 'concrete_powder',
    id: '252:1'
  },
  '252:2': {
    displayName: 'Magenta Concrete Powder',
    name: 'concrete_powder',
    id: '252:2'
  },
  '252:4': {
    displayName: 'Yellow Concrete Powder',
    name: 'concrete_powder',
    id: '252:4'
  },
  '252:5': {
    displayName: 'Lime Concrete Powder',
    name: 'concrete_powder',
    id: '252:5'
  },
  '252:6': {
    displayName: 'Pink Concrete Powder',
    name: 'concrete_powder',
    id: '252:6'
  },
  '252:7': {
    displayName: 'Gray Concrete Powder',
    name: 'concrete_powder',
    id: '252:7'
  },
  '252:9': {
    displayName: 'Cyan Concrete Powder',
    name: 'concrete_powder',
    id: '252:9'
  },
  '252:10': {
    displayName: 'Purple Concrete Powder',
    name: 'concrete_powder',
    id: '252:10'
  },
  '252:11': {
    displayName: 'Blue Concrete Powder',
    name: 'concrete_powder',
    id: '252:11'
  },
  '252:12': {
    displayName: 'Brown Concrete Powder',
    name: 'concrete_powder',
    id: '252:12'
  },
  '252:13': {
    displayName: 'Green Concrete Powder',
    name: 'concrete_powder',
    id: '252:13'
  },
  '252:14': {
    displayName: 'Red Concrete Powder',
    name: 'concrete_powder',
    id: '252:14'
  },
  '252:15': {
    displayName: 'Black Concrete Powder',
    name: 'concrete_powder',
    id: '252:15'
  },
  31: { displayName: 'Grass', name: 'tallgrass', id: 31 },
  76: { displayName: 'Redstone Torch', name: 'redstone_torch', id: 76 },
  98: { displayName: 'Stone Bricks', name: 'stonebrick', id: 98 },
  107: { displayName: 'Oak Fence Gate', name: 'fence_gate', id: 107 },
  128: { displayName: 'Sandstone Stairs', name: 'sandstone_stairs', id: 128 },
  172: { displayName: 'Terracotta', name: 'hardened_clay', id: 172 },
  217: { displayName: 'Structure Void', name: 'structure_void', id: 217 },
  227: {
    displayName: 'Light Gray Shulker Box',
    name: 'silver_shulker_box',
    id: 227
  },
  255: { displayName: 'Structure Block', name: 'structure_block', id: 255 },
  256: { displayName: 'Iron Shovel', name: 'iron_shovel', id: 256 },
  257: { displayName: 'Iron Pickaxe', name: 'iron_pickaxe', id: 257 },
  258: { displayName: 'Iron Axe', name: 'iron_axe', id: 258 },
  259: { displayName: 'Flint and Steel', name: 'flint_and_steel', id: 259 },
  260: { displayName: 'Apple', name: 'apple', id: 260 },
  261: { displayName: 'Bow', name: 'bow', id: 261 },
  262: { displayName: 'Arrow', name: 'arrow', id: 262 },
  '263:0': { displayName: 'Coal', name: 'coal', id: '263:0' },
  '263:1': { displayName: 'Charcoal', name: 'coal', id: '263:1' },
  264: { displayName: 'Diamond', name: 'diamond', id: 264 },
  265: { displayName: 'Iron Ingot', name: 'iron_ingot', id: 265 },
  266: { displayName: 'Gold Ingot', name: 'gold_ingot', id: 266 },
  267: { displayName: 'Iron Sword', name: 'iron_sword', id: 267 },
  268: { displayName: 'Wooden Sword', name: 'wooden_sword', id: 268 },
  269: { displayName: 'Wooden Shovel', name: 'wooden_shovel', id: 269 },
  270: { displayName: 'Wooden Pickaxe', name: 'wooden_pickaxe', id: 270 },
  271: { displayName: 'Wooden Axe', name: 'wooden_axe', id: 271 },
  272: { displayName: 'Stone Sword', name: 'stone_sword', id: 272 },
  273: { displayName: 'Stone Shovel', name: 'stone_shovel', id: 273 },
  274: { displayName: 'Stone Pickaxe', name: 'stone_pickaxe', id: 274 },
  275: { displayName: 'Stone Axe', name: 'stone_axe', id: 275 },
  276: { displayName: 'Diamond Sword', name: 'diamond_sword', id: 276 },
  277: { displayName: 'Diamond Shovel', name: 'diamond_shovel', id: 277 },
  278: { displayName: 'Diamond Pickaxe', name: 'diamond_pickaxe', id: 278 },
  279: { displayName: 'Diamond Axe', name: 'diamond_axe', id: 279 },
  280: { displayName: 'Stick', name: 'stick', id: 280 },
  281: { displayName: 'Bowl', name: 'bowl', id: 281 },
  282: { displayName: 'Mushroom Stew', name: 'mushroom_stew', id: 282 },
  283: { displayName: 'Golden Sword', name: 'golden_sword', id: 283 },
  284: { displayName: 'Golden Shovel', name: 'golden_shovel', id: 284 },
  285: { displayName: 'Golden Pickaxe', name: 'golden_pickaxe', id: 285 },
  286: { displayName: 'Golden Axe', name: 'golden_axe', id: 286 },
  287: { displayName: 'String', name: 'string', id: 287 },
  288: { displayName: 'Feather', name: 'feather', id: 288 },
  289: { displayName: 'Gunpowder', name: 'gunpowder', id: 289 },
  290: { displayName: 'Wooden Hoe', name: 'wooden_hoe', id: 290 },
  291: { displayName: 'Stone Hoe', name: 'stone_hoe', id: 291 },
  292: { displayName: 'Iron Hoe', name: 'iron_hoe', id: 292 },
  293: { displayName: 'Diamond Hoe', name: 'diamond_hoe', id: 293 },
  294: { displayName: 'Golden Hoe', name: 'golden_hoe', id: 294 },
  295: { displayName: 'Seeds', name: 'wheat_seeds', id: 295 },
  297: { displayName: 'Bread', name: 'bread', id: 297 },
  298: { displayName: 'Leather Cap', name: 'leather_helmet', id: 298 },
  299: { displayName: 'Leather Tunic', name: 'leather_chestplate', id: 299 },
  300: { displayName: 'Leather Pants', name: 'leather_leggings', id: 300 },
  301: { displayName: 'Leather Boots', name: 'leather_boots', id: 301 },
  302: { displayName: 'Chain Helmet', name: 'chainmail_helmet', id: 302 },
  303: {
    displayName: 'Chain Chestplate',
    name: 'chainmail_chestplate',
    id: 303
  },
  304: { displayName: 'Chain Leggings', name: 'chainmail_leggings', id: 304 },
  305: { displayName: 'Chain Boots', name: 'chainmail_boots', id: 305 },
  306: { displayName: 'Iron Helmet', name: 'iron_helmet', id: 306 },
  307: { displayName: 'Iron Chestplate', name: 'iron_chestplate', id: 307 },
  308: { displayName: 'Iron Leggings', name: 'iron_leggings', id: 308 },
  309: { displayName: 'Iron Boots', name: 'iron_boots', id: 309 },
  310: { displayName: 'Diamond Helmet', name: 'diamond_helmet', id: 310 },
  311: {
    displayName: 'Diamond Chestplate',
    name: 'diamond_chestplate',
    id: 311
  },
  312: { displayName: 'Diamond Leggings', name: 'diamond_leggings', id: 312 },
  313: { displayName: 'Diamond Boots', name: 'diamond_boots', id: 313 },
  314: { displayName: 'Golden Helmet', name: 'golden_helmet', id: 314 },
  315: { displayName: 'Golden Chestplate', name: 'golden_chestplate', id: 315 },
  316: { displayName: 'Golden Leggings', name: 'golden_leggings', id: 316 },
  317: { displayName: 'Golden Boots', name: 'golden_boots', id: 317 },
  318: { displayName: 'Flint', name: 'flint', id: 318 },
  319: { displayName: 'Raw Porkchop', name: 'porkchop', id: 319 },
  320: { displayName: 'Cooked Porkchop', name: 'cooked_porkchop', id: 320 },
  321: { displayName: 'Painting', name: 'painting', id: 321 },
  '322:0': { displayName: 'Golden Apple', name: 'golden_apple', id: '322:0' },
  323: { displayName: 'Sign', name: 'sign', id: 323 },
  325: { displayName: 'Bucket', name: 'bucket', id: 325 },
  326: { displayName: 'Water Bucket', name: 'water_bucket', id: 326 },
  327: { displayName: 'Lava Bucket', name: 'lava_bucket', id: 327 },
  328: { displayName: 'Minecart', name: 'minecart', id: 328 },
  329: { displayName: 'Saddle', name: 'saddle', id: 329 },
  331: { displayName: 'Redstone', name: 'redstone', id: 331 },
  332: { displayName: 'Snowball', name: 'snowball', id: 332 },
  334: { displayName: 'Leather', name: 'leather', id: 334 },
  335: { displayName: 'Milk', name: 'milk_bucket', id: 335 },
  336: { displayName: 'Brick', name: 'brick', id: 336 },
  337: { displayName: 'Clay', name: 'clay_ball', id: 337 },
  338: { displayName: 'Sugar Canes', name: 'reeds', id: 338 },
  339: { displayName: 'Paper', name: 'paper', id: 339 },
  340: { displayName: 'Book', name: 'book', id: 340 },
  341: { displayName: 'Slimeball', name: 'slime_ball', id: 341 },
  342: { displayName: 'Minecart with Chest', name: 'chest_minecart', id: 342 },
  343: {
    displayName: 'Minecart with Furnace',
    name: 'furnace_minecart',
    id: 343
  },
  344: { displayName: 'Egg', name: 'egg', id: 344 },
  345: { displayName: 'Compass', name: 'compass', id: 345 },
  346: { displayName: 'Fishing Rod', name: 'fishing_rod', id: 346 },
  347: { displayName: 'Clock', name: 'clock', id: 347 },
  348: { displayName: 'Glowstone Dust', name: 'glowstone_dust', id: 348 },
  '349:0': { displayName: 'Raw Fish', name: 'fish', id: '349:0' },
  '349:1': { displayName: 'Raw Salmon', name: 'fish', id: '349:1' },
  '349:2': { displayName: 'Clownfish', name: 'fish', id: '349:2' },
  '349:3': { displayName: 'Pufferfish', name: 'fish', id: '349:3' },
  350: { displayName: 'Cooked Fish', name: 'cooked_fish', id: 350 },
  '351:0': { displayName: 'Ink Sac', name: 'dye', id: '351:0' },
  '351:1': { displayName: 'Rose Red', name: 'dye', id: '351:1' },
  '351:2': { displayName: 'Cactus Green', name: 'dye', id: '351:2' },
  '351:3': { displayName: 'Cocoa Beans', name: 'dye', id: '351:3' },
  '351:4': { displayName: 'Lapis Lazuli', name: 'dye', id: '351:4' },
  '351:5': { displayName: 'Purple Dye', name: 'dye', id: '351:5' },
  '351:6': { displayName: 'Cyan Dye', name: 'dye', id: '351:6' },
  '351:7': { displayName: 'Light Gray Dye', name: 'dye', id: '351:7' },
  '351:8': { displayName: 'Gray Dye', name: 'dye', id: '351:8' },
  '351:9': { displayName: 'Pink Dye', name: 'dye', id: '351:9' },
  '351:10': { displayName: 'Lime Dye', name: 'dye', id: '351:10' },
  '351:11': { displayName: 'Dandelion Yellow', name: 'dye', id: '351:11' },
  '351:12': { displayName: 'Light Blue Dye', name: 'dye', id: '351:12' },
  '351:13': { displayName: 'Magenta Dye', name: 'dye', id: '351:13' },
  '351:14': { displayName: 'Orange Dye', name: 'dye', id: '351:14' },
  '351:15': { displayName: 'Bone Meal', name: 'dye', id: '351:15' },
  352: { displayName: 'Bone', name: 'bone', id: 352 },
  353: { displayName: 'Sugar', name: 'sugar', id: 353 },
  356: { displayName: 'Redstone Repeater', name: 'repeater', id: 356 },
  357: { displayName: 'Cookie', name: 'cookie', id: 357 },
  358: { displayName: 'Map', name: 'filled_map', id: 358 },
  359: { displayName: 'Shears', name: 'shears', id: 359 },
  360: { displayName: 'Melon', name: 'melon', id: 360 },
  361: { displayName: 'Pumpkin Seeds', name: 'pumpkin_seeds', id: 361 },
  362: { displayName: 'Melon Seeds', name: 'melon_seeds', id: 362 },
  363: { displayName: 'Raw Beef', name: 'beef', id: 363 },
  364: { displayName: 'Steak', name: 'cooked_beef', id: 364 },
  365: { displayName: 'Raw Chicken', name: 'chicken', id: 365 },
  366: { displayName: 'Cooked Chicken', name: 'cooked_chicken', id: 366 },
  367: { displayName: 'Rotten Flesh', name: 'rotten_flesh', id: 367 },
  368: { displayName: 'Ender Pearl', name: 'ender_pearl', id: 368 },
  369: { displayName: 'Blaze Rod', name: 'blaze_rod', id: 369 },
  370: { displayName: 'Ghast Tear', name: 'ghast_tear', id: 370 },
  371: { displayName: 'Gold Nugget', name: 'gold_nugget', id: 371 },
  374: { displayName: 'Glass Bottle', name: 'glass_bottle', id: 374 },
  375: { displayName: 'Spider Eye', name: 'spider_eye', id: 375 },
  376: {
    displayName: 'Fermented Spider Eye',
    name: 'fermented_spider_eye',
    id: 376
  },
  377: { displayName: 'Blaze Powder', name: 'blaze_powder', id: 377 },
  378: { displayName: 'Magma Cream', name: 'magma_cream', id: 378 },
  381: { displayName: 'Eye of Ender', name: 'ender_eye', id: 381 },
  382: { displayName: 'Glistering Melon', name: 'speckled_melon', id: 382 },
  385: { displayName: 'Fire Charge', name: 'fire_charge', id: 385 },
  386: { displayName: 'Book and Quill', name: 'writable_book', id: 386 },
  387: { displayName: 'Written Book', name: 'written_book', id: 387 },
  388: { displayName: 'Emerald', name: 'emerald', id: 388 },
  389: { displayName: 'Item Frame', name: 'item_frame', id: 389 },
  391: { displayName: 'Carrot', name: 'carrot', id: 391 },
  392: { displayName: 'Potato', name: 'potato', id: 392 },
  393: { displayName: 'Baked Potato', name: 'baked_potato', id: 393 },
  394: { displayName: 'Poisonous Potato', name: 'poisonous_potato', id: 394 },
  395: { displayName: 'Empty Map', name: 'map', id: 395 },
  396: { displayName: 'Golden Carrot', name: 'golden_carrot', id: 396 },
  398: { displayName: 'Carrot on a Stick', name: 'carrot_on_a_stick', id: 398 },
  399: { displayName: 'Nether Star', name: 'nether_star', id: 399 },
  400: { displayName: 'Pumpkin Pie', name: 'pumpkin_pie', id: 400 },
  401: { displayName: 'Firework Rocket', name: 'fireworks', id: 401 },
  402: { displayName: 'Firework Star', name: 'firework_charge', id: 402 },
  404: { displayName: 'Redstone Comparator', name: 'comparator', id: 404 },
  405: { displayName: 'Nether Brick', name: 'netherbrick', id: 405 },
  406: { displayName: 'Nether Quartz', name: 'quartz', id: 406 },
  407: { displayName: 'Minecart with TNT', name: 'tnt_minecart', id: 407 },
  408: {
    displayName: 'Minecart with Hopper',
    name: 'hopper_minecart',
    id: 408
  },
  409: { displayName: 'Prismarine Shard', name: 'prismarine_shard', id: 409 },
  410: {
    displayName: 'Prismarine Crystals',
    name: 'prismarine_crystals',
    id: 410
  },
  411: { displayName: 'Raw Rabbit', name: 'rabbit', id: 411 },
  412: { displayName: 'Cooked Rabbit', name: 'cooked_rabbit', id: 412 },
  413: { displayName: 'Rabbit Stew', name: 'rabbit_stew', id: 413 },
  415: { displayName: 'Rabbit Hide', name: 'rabbit_hide', id: 415 },
  416: { displayName: 'Armor Stand', name: 'armor_stand', id: 416 },
  417: { displayName: 'Iron Horse Armor', name: 'iron_horse_armor', id: 417 },
  418: { displayName: 'Gold Horse Armor', name: 'golden_horse_armor', id: 418 },
  419: {
    displayName: 'Diamond Horse Armor',
    name: 'diamond_horse_armor',
    id: 419
  },
  420: { displayName: 'Lead', name: 'lead', id: 420 },
  421: { displayName: 'Name Tag', name: 'name_tag', id: 421 },
  422: {
    displayName: 'Minecart with Command Block',
    name: 'command_block_minecart',
    id: 422
  },
  423: { displayName: 'Raw Mutton', name: 'mutton', id: 423 },
  424: { displayName: 'Cooked Mutton', name: 'cooked_mutton', id: 424 },
  426: { displayName: 'End Crystal', name: 'end_crystal', id: 426 },
  432: { displayName: 'Chorus Fruit', name: 'chorus_fruit', id: 432 },
  433: {
    displayName: 'Popped Chorus Fruit',
    name: 'chorus_fruit_popped',
    id: 433
  },
  434: { displayName: 'Beetroot', name: 'beetroot', id: 434 },
  435: { displayName: 'Beetroot Seeds', name: 'beetroot_seeds', id: 435 },
  436: { displayName: 'Beetroot Soup', name: 'beetroot_soup', id: 436 },
  439: { displayName: 'Spectral Arrow', name: 'spectral_arrow', id: 439 },
  442: { displayName: 'Shield', name: 'shield', id: 442 },
  443: { displayName: 'Elytra', name: 'elytra', id: 443 },
  444: { displayName: 'Spruce Boat', name: 'spruce_boat', id: 444 },
  445: { displayName: 'Birch Boat', name: 'birch_boat', id: 445 },
  446: { displayName: 'Jungle Boat', name: 'jungle_boat', id: 446 },
  447: { displayName: 'Acacia Boat', name: 'acacia_boat', id: 447 },
  448: { displayName: 'Dark Oak Boat', name: 'dark_oak_boat', id: 448 },
  449: { displayName: 'Totem of Undying', name: 'totem_of_undying', id: 449 },
  450: { displayName: 'Shulker Shell', name: 'shulker_shell', id: 450 },
  452: { displayName: 'Iron Nugget', name: 'iron_nugget', id: 452 },
  453: { displayName: 'Knowledge Book', name: 'knowledge_book', id: 453 },
  '159:0': { displayName: 'White Terracotta', name: 'stained_hardened_clay', id: '159:0' },
  '159:1': { displayName: 'Orange Terracotta', name: 'stained_hardened_clay', id: '159:1' },
  '159:2': { displayName: 'Magenta Terracotta', name: 'stained_hardened_clay', id: '159:2' },
  '159:3': { displayName: 'Light Blue Terracotta', name: 'stained_hardened_clay', id: '159:3' },
  '159:4': { displayName: 'Yellow Terracotta', name: 'stained_hardened_clay', id: '159:4' },
  '159:5': { displayName: 'Lime Terracotta', name: 'stained_hardened_clay', id: '159:5' },
  '159:6': { displayName: 'Pink Terracotta', name: 'stained_hardened_clay', id: '159:6' },
  '159:7': { displayName: 'Gray Terracotta', name: 'stained_hardened_clay', id: '159:7' },
  '159:8': { displayName: 'Light Gray Terracotta', name: 'stained_hardened_clay', id: '159:8' },
  '159:9': { displayName: 'Cyan Terracotta', name: 'stained_hardened_clay', id: '159:9' },
  '159:10': { displayName: 'Purple Terracotta', name: 'stained_hardened_clay', id: '159:10' },
  '159:11': { displayName: 'Blue Terracotta', name: 'stained_hardened_clay', id: '159:11' },
  '159:12': { displayName: 'Brown Terracotta', name: 'stained_hardened_clay', id: '159:12' },
  '159:13': { displayName: 'Green Terracotta', name: 'stained_hardened_clay', id: '159:13' },
  '159:14': { displayName: 'Red Terracotta', name: 'stained_hardened_clay', id: '159:14' },
  '159:15': { displayName: 'Black Terracotta', name: 'stained_hardened_clay', id: '159:15' }
}

module.exports = idMappings
