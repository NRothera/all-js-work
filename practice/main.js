// var randomNumber = Math.floor((Math.random()*12))
// var groupNames = ["Nick", "Jon", "Nick 2", "Yusuf", "Matt", "Daniel", "Deepa", "Narullah", "Nathan", "Soraia", "Steven", "Katie", "Ka Lok"]
//
// console.log(groupNames[randomNumber])

function calculateYears(principal, interest, tax, desired) {
    if (principal >=desired){
      return 0
    }
    var year = 1
    var newTotal = principal
    while ( newTotal<= desired){
      year ++
      var new_interest = (newTotal*interest)/(tax+1)
      newTotal += new_interest

    }
    return year
  }



console.log(calculateYears(1000, 0.05,0.18,1100))
