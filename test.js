const mcblockinfo = require('./index')
const fs = require('fs')

// console.log(mcblockinfo.isValidBlockID('3:81'))
// console.log(mcblockinfo.isValidBlockName('lol'))
// console.log(mcblockinfo.isValidBlockDisplayName('Dirt'))
// mcblockinfo.getBlockInfoFromIDs(['3:0', '2', '10']).then((res) => { console.log(res) })
// mcblockinfo.getBlockInfoFromNames(['dirt', 'grass', 'minecart']).then((res) => { console.log(res) })
// mcblockinfo.getBlockInfoFromDisplayNames(['Dirt', 'Grass Block', 'Minecart']).then((res) => { console.log(res) })

mcblockinfo.search('grass').then((res) => {
  mcblockinfo.getBlockImageObject(res.slice(0, 5)).then((img) => {
    fs.writeFile('test.txt', img, function (err) {
      if (err) return console.log(err)
      console.log('Hello World > helloworld.txt')
    })
  })
})
// TODO: finish typings
