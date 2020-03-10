const player = {
  name: `Voyaflex`,
  games: `4`,
  age: `18`,
  winLoss: `50%`,
  tag: `Play to learn, not to win.`,
  getTag: function(){
    console.log(this.tag)
  }
}
console.log(player)

const callTag = player.getTag()
console.log(callTag)

