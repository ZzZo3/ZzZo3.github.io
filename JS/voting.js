let data = [['B','C','A','E','D','F','H','I','G','J'],['A','C','E','I','J','F','H','G','B','D'],['D','A','F','J','B','I','G','H','C','E',]]

let candidates = [['A',0],['B',0],['C',0],['D',0],['E',0],['F',0],['G',0],['H',0],['I',0],['J',0]]

function checkWinner() {
    for (let i=0;i<candidates.length;i++) {
        if (candidates[i][1]>0.5) {return candidates[i][0]}
    }
    return ""
}

function tally() {
    let total=0
    candidates.forEach((K)=>{
        data.forEach((ballot)=>{
            if (ballot[0]==K[0]){K[1]++;total++}
        })
    })
    candidates.map((K)=>{K[1]=K[1]/total;return K})
}
function run() {
    console.log(candidates,data)
    tally()
    checkWinner()
    console.log(candidates,data)
}