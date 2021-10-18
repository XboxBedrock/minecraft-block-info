# minecraft-block-info
This is a simple library I made that can provide info and images for minecraft blocks, intended for use with BuildTheEarth/main-bot

Also has typings for use with TypeScript but thats easy to figure out on your own
# Docs

async getBlockImageID - Returns an image of the block IDs given in base64 format
Accepts valid block ids in a list as an argument
```
const mcblockinfo = require("minecraft-block-info")
		mcblockinfo.getBlockImageID(["1", "2", "3:0"]).then((img) => console.log(img))
	})
})

```
#
isValidBlockID() - Returns a boolean of wheter this is a valid block id or not
Accepts string of block id as argument
```
const mcblockinfo = require("minecraft-block-info")

mcblockinfo.isValidBlockID("3:81")
```
#
isValidBlockName() - Returns a boolean of wheter this is a valid block name or not
Accepts string of block name as argument
```
const mcblockinfo = require("minecraft-block-info")

mcblockinfo.isValidBlockName("lol")
```
#
isValidBlockDisplayName() - Returns a boolean of wheter this is a valid block displayName or not
Accepts string of block displayName as argument
```
const mcblockinfo = require("minecraft-block-info")

mcblockinfo.isValidBlockDisplayName("Dirt")
```
#
getBlockInfoFromIDs - returns block information for provided list of block id's in respective order
Accepts list of block id as argument

```
const mcblockinfo = require("minecraft-block-info")

mcblockinfo.getBlockInfoFromIDs(["3:0", "2", "10"]).then((res) => {console.log(res)})
```


#
getBlockInfoFromDisplayNames - returns block information for provided list of displayNames in respective order
Accepts list of block displayNames as argument

```
const mcblockinfo = require("minecraft-block-info")

mcblockinfo.getBlockInfoFromDisplayNames(["Dirt", "Grass Block", "Minecart"]).then((res) => {console.log(res)})
```
#


getBlockInfoFromNames - returns block information for provided list of block names in respective order
Accepts list of block names as argument

```
const mcblockinfo = require("minecraft-block-info")

mcblockinfo.getBlockInfoFromNames(["dirt", "grass", "minecart"]).then((res) => {console.log(res)})
```


