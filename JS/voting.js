let data = [['B','C','A','E','D','F','H','I','G','J'],['A','C','E','I','J','F','H','G','B','D'],['D','A','F','J','B','I','G','H','C','E',]]

let candidates = [['A',0],['B',0],['C',0],['D',0],['E',0],['F',0],['G',0],['H',0],['I',0],['J',0]]
function checkWinner() {
    for (let i=0;i<candidates.length;i++) {
        if (candidates[i][1]>0.5) {return candidates[i][0]}
    }
    return ""
}
