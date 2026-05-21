// EXTRANEOUS FUNCTIONS/DECLARATIONS AND DATA

function title(data) {
    let line = '---------------------------------------'
    line = line.slice(data.length/2)
    return line+' '+data+' '+line
}

let ballotsRaw = []
function setBallots() {
    ballotsRaw = [['Geraldo Manchester', 'Marcello Hernández', 'Donald Duck', 'Richard Johnson', 'Oswaldo Guayasamin', 'Charles M. Knight', 'Bruce Gator Reinsburg', 'Dolphin Man', 'Claudia De La Cruz', 'Jackie Chancellor'], ['Oswaldo Guayasamin', 'Bruce Gator Reinsburg', 'Charles M. Knight', 'Claudia De La Cruz', 'Geraldo Manchester', 'Richard Johnson', 'Donald Duck', 'Jackie Chancellor', 'Marcello Hernández', 'Dolphin Man'], ['Oswaldo Guayasamin', 'Bruce Gator Reinsburg', 'Richard Johnson', 'Charles M. Knight', 'Marcello Hernández', 'Claudia De La Cruz', 'Jackie Chancellor', 'Donald Duck', 'Dolphin Man', 'Geraldo Manchester'], ['Oswaldo Guayasamin', 'Charles M. Knight', 'Richard Johnson', 'Marcello Hernández', 'Donald Duck', 'Claudia De La Cruz', 'Bruce Gator Reinsburg', 'Jackie Chancellor', 'Dolphin Man', 'Geraldo Manchester'], ['Dolphin Man', 'Donald Duck', 'Bruce Gator Reinsburg', 'Claudia De La Cruz', 'Richard Johnson', 'Geraldo Manchester', 'Jackie Chancellor', 'Marcello Hernández', 'Oswaldo Guayasamin', 'Charles M. Knight'], ['Dolphin Man', 'Jackie Chancellor', 'Bruce Gator Reinsburg', 'Donald Duck', 'Claudia De La Cruz', 'Geraldo Manchester', 'Richard Johnson', 'Marcello Hernández', 'Oswaldo Guayasamin', 'Charles M. Knight'], ['Geraldo Manchester', 'Marcello Hernández', 'Oswaldo Guayasamin', 'Claudia De La Cruz', 'Jackie Chancellor', 'Dolphin Man', 'Donald Duck', 'Richard Johnson', 'Bruce Gator Reinsburg', 'Charles M. Knight'], ['Charles M. Knight', 'Richard Johnson', 'Bruce Gator Reinsburg', 'Dolphin Man', 'Oswaldo Guayasamin', 'Geraldo Manchester', 'Jackie Chancellor', 'Claudia De La Cruz', 'Marcello Hernández', 'Donald Duck'], ['Jackie Chancellor', 'Charles M. Knight', 'Bruce Gator Reinsburg', 'Oswaldo Guayasamin', 'Marcello Hernández', 'Richard Johnson', 'Dolphin Man', 'Claudia De La Cruz', 'Geraldo Manchester', 'Donald Duck'], ['Donald Duck', 'Claudia De La Cruz', 'Bruce Gator Reinsburg', 'Jackie Chancellor', 'Charles M. Knight', 'Dolphin Man', 'Marcello Hernández', 'Geraldo Manchester', 'Oswaldo Guayasamin', 'Richard Johnson'], ['Marcello Hernández', 'Jackie Chancellor', 'Claudia De La Cruz', 'Oswaldo Guayasamin', 'Donald Duck', 'Bruce Gator Reinsburg', 'Charles M. Knight', 'Geraldo Manchester', 'Richard Johnson', 'Dolphin Man'], ['Charles M. Knight', 'Bruce Gator Reinsburg', 'Claudia De La Cruz', 'Richard Johnson', 'Jackie Chancellor', 'Marcello Hernández', 'Geraldo Manchester', 'Oswaldo Guayasamin', 'Dolphin Man', 'Donald Duck'], ['Richard Johnson', 'Oswaldo Guayasamin', 'Claudia De La Cruz', 'Geraldo Manchester', 'Dolphin Man', 'Donald Duck', 'Jackie Chancellor', 'Bruce Gator Reinsburg', 'Marcello Hernández', 'Charles M. Knight'], ['Richard Johnson', 'Marcello Hernández', 'Oswaldo Guayasamin', 'Jackie Chancellor', 'Charles M. Knight', 'Bruce Gator Reinsburg', 'Geraldo Manchester', 'Claudia De La Cruz', 'Donald Duck', 'Dolphin Man'], ['Richard Johnson', 'Charles M. Knight', 'Claudia De La Cruz', 'Geraldo Manchester', 'Jackie Chancellor', 'Donald Duck', 'Bruce Gator Reinsburg', 'Dolphin Man', 'Oswaldo Guayasamin', 'Marcello Hernández'], ['Bruce Gator Reinsburg', 'Oswaldo Guayasamin', 'Richard Johnson', 'Marcello Hernández', 'Jackie Chancellor', 'Charles M. Knight', 'Claudia De La Cruz', 'Dolphin Man', 'Geraldo Manchester', 'Donald Duck'], ['Bruce Gator Reinsburg', 'Richard Johnson', 'Charles M. Knight', 'Donald Duck', 'Marcello Hernández', 'Jackie Chancellor', 'Claudia De La Cruz', 'Dolphin Man', 'Oswaldo Guayasamin', 'Geraldo Manchester'], ['Marcello Hernández', 'Richard Johnson', 'Jackie Chancellor', 'Dolphin Man', 'Oswaldo Guayasamin', 'Charles M. Knight', 'Bruce Gator Reinsburg', 'Geraldo Manchester', 'Claudia De La Cruz', 'Donald Duck'], ['Dolphin Man', 'Geraldo Manchester', 'Bruce Gator Reinsburg', 'Claudia De La Cruz', 'Marcello Hernández', 'Jackie Chancellor', 'Richard Johnson', 'Oswaldo Guayasamin', 'Charles M. Knight', 'Donald Duck'], ['Marcello Hernández', 'Claudia De La Cruz', 'Richard Johnson', 'Charles M. Knight', 'Dolphin Man', 'Bruce Gator Reinsburg', 'Oswaldo Guayasamin', 'Jackie Chancellor', 'Geraldo Manchester', 'Donald Duck'], ['Donald Duck', 'Charles M. Knight', 'Richard Johnson', 'Oswaldo Guayasamin', 'Marcello Hernández', 'Dolphin Man', 'Bruce Gator Reinsburg', 'Claudia De La Cruz', 'Geraldo Manchester', 'Jackie Chancellor'], ['Richard Johnson', 'Dolphin Man', 'Donald Duck', 'Charles M. Knight', 'Oswaldo Guayasamin', 'Claudia De La Cruz', 'Geraldo Manchester', 'Bruce Gator Reinsburg', 'Marcello Hernández', 'Jackie Chancellor'], ['Oswaldo Guayasamin', 'Dolphin Man', 'Claudia De La Cruz', 'Bruce Gator Reinsburg', 'Geraldo Manchester', 'Donald Duck', 'Marcello Hernández', 'Richard Johnson', 'Jackie Chancellor', 'Charles M. Knight'], ['Jackie Chancellor', 'Bruce Gator Reinsburg', 'Geraldo Manchester', 'Dolphin Man', 'Charles M. Knight', 'Claudia De La Cruz', 'Donald Duck', 'Oswaldo Guayasamin', 'Richard Johnson', 'Marcello Hernández'], ['Geraldo Manchester', 'Marcello Hernández', 'Bruce Gator Reinsburg', 'Oswaldo Guayasamin', 'Donald Duck', 'Dolphin Man', 'Claudia De La Cruz', 'Charles M. Knight', 'Richard Johnson', 'Jackie Chancellor'], ['Marcello Hernández', 'Jackie Chancellor', 'Claudia De La Cruz', 'Charles M. Knight', 'Dolphin Man', 'Geraldo Manchester', 'Richard Johnson', 'Donald Duck', 'Oswaldo Guayasamin', 'Bruce Gator Reinsburg'], ['Oswaldo Guayasamin', 'Dolphin Man', 'Richard Johnson', 'Charles M. Knight', 'Claudia De La Cruz', 'Jackie Chancellor', 'Geraldo Manchester', 'Donald Duck', 'Bruce Gator Reinsburg', 'Marcello Hernández'], ['Oswaldo Guayasamin', 'Bruce Gator Reinsburg', 'Claudia De La Cruz', 'Jackie Chancellor', 'Richard Johnson', 'Donald Duck', 'Marcello Hernández', 'Charles M. Knight', 'Geraldo Manchester', 'Dolphin Man'], ['Geraldo Manchester', 'Marcello Hernández', 'Donald Duck', 'Claudia De La Cruz', 'Jackie Chancellor', 'Oswaldo Guayasamin', 'Dolphin Man', 'Richard Johnson', 'Charles M. Knight', 'Bruce Gator Reinsburg'], ['Marcello Hernández', 'Bruce Gator Reinsburg', 'Richard Johnson', 'Charles M. Knight', 'Oswaldo Guayasamin', 'Dolphin Man', 'Geraldo Manchester', 'Jackie Chancellor', 'Claudia De La Cruz', 'Donald Duck'], ['Claudia De La Cruz', 'Jackie Chancellor', 'Oswaldo Guayasamin', 'Geraldo Manchester', 'Richard Johnson', 'Bruce Gator Reinsburg', 'Charles M. Knight', 'Dolphin Man', 'Marcello Hernández', 'Donald Duck'], ['Donald Duck', 'Jackie Chancellor', 'Oswaldo Guayasamin', 'Claudia De La Cruz', 'Marcello Hernández', 'Charles M. Knight', 'Richard Johnson', 'Bruce Gator Reinsburg', 'Geraldo Manchester', 'Dolphin Man'], ['Jackie Chancellor', 'Marcello Hernández', 'Charles M. Knight', 'Bruce Gator Reinsburg', 'Geraldo Manchester', 'Claudia De La Cruz', 'Donald Duck', 'Dolphin Man', 'Oswaldo Guayasamin', 'Richard Johnson'], ['Charles M. Knight', 'Oswaldo Guayasamin', 'Dolphin Man', 'Bruce Gator Reinsburg', 'Donald Duck', 'Marcello Hernández', 'Richard Johnson', 'Claudia De La Cruz', 'Geraldo Manchester', 'Jackie Chancellor'], ['Bruce Gator Reinsburg', 'Richard Johnson', 'Charles M. Knight', 'Oswaldo Guayasamin', 'Geraldo Manchester', 'Donald Duck', 'Marcello Hernández', 'Claudia De La Cruz', 'Jackie Chancellor', 'Dolphin Man'], ['Bruce Gator Reinsburg', 'Claudia De La Cruz', 'Geraldo Manchester', 'Jackie Chancellor', 'Marcello Hernández', 'Charles M. Knight', 'Richard Johnson', 'Donald Duck', 'Oswaldo Guayasamin', 'Dolphin Man'], ['Claudia De La Cruz', 'Charles M. Knight', 'Bruce Gator Reinsburg', 'Donald Duck', 'Richard Johnson', 'Dolphin Man', 'Marcello Hernández', 'Jackie Chancellor', 'Oswaldo Guayasamin', 'Geraldo Manchester'], ['Geraldo Manchester', 'Jackie Chancellor', 'Claudia De La Cruz', 'Marcello Hernández', 'Bruce Gator Reinsburg', 'Richard Johnson', 'Dolphin Man', 'Oswaldo Guayasamin', 'Donald Duck', 'Charles M. Knight'], ['Geraldo Manchester', 'Claudia De La Cruz', 'Charles M. Knight', 'Richard Johnson', 'Dolphin Man', 'Jackie Chancellor', 'Oswaldo Guayasamin', 'Donald Duck', 'Bruce Gator Reinsburg', 'Marcello Hernández'], ['Oswaldo Guayasamin', 'Richard Johnson', 'Bruce Gator Reinsburg', 'Jackie Chancellor', 'Marcello Hernández', 'Charles M. Knight', 'Dolphin Man', 'Claudia De La Cruz', 'Donald Duck', 'Geraldo Manchester'], ['Charles M. Knight', 'Dolphin Man', 'Richard Johnson', 'Bruce Gator Reinsburg', 'Geraldo Manchester', 'Claudia De La Cruz', 'Oswaldo Guayasamin', 'Marcello Hernández', 'Jackie Chancellor', 'Donald Duck'], ['Bruce Gator Reinsburg', 'Donald Duck', 'Geraldo Manchester', 'Oswaldo Guayasamin', 'Charles M. Knight', 'Claudia De La Cruz', 'Marcello Hernández', 'Richard Johnson', 'Jackie Chancellor', 'Dolphin Man'], ['Jackie Chancellor', 'Donald Duck', 'Geraldo Manchester', 'Dolphin Man', 'Bruce Gator Reinsburg', 'Charles M. Knight', 'Claudia De La Cruz', 'Marcello Hernández', 'Richard Johnson', 'Oswaldo Guayasamin'], ['Oswaldo Guayasamin', 'Jackie Chancellor', 'Donald Duck', 'Marcello Hernández', 'Bruce Gator Reinsburg', 'Richard Johnson', 'Dolphin Man', 'Charles M. Knight', 'Geraldo Manchester', 'Claudia De La Cruz'], ['Dolphin Man', 'Marcello Hernández', 'Claudia De La Cruz', 'Charles M. Knight', 'Geraldo Manchester', 'Jackie Chancellor', 'Oswaldo Guayasamin', 'Richard Johnson', 'Donald Duck', 'Bruce Gator Reinsburg'], ['Donald Duck', 'Claudia De La Cruz', 'Charles M. Knight', 'Bruce Gator Reinsburg', 'Richard Johnson', 'Geraldo Manchester', 'Marcello Hernández', 'Dolphin Man', 'Oswaldo Guayasamin', 'Jackie Chancellor'], ['Richard Johnson', 'Dolphin Man', 'Bruce Gator Reinsburg', 'Oswaldo Guayasamin', 'Marcello Hernández', 'Charles M. Knight', 'Geraldo Manchester', 'Claudia De La Cruz', 'Donald Duck', 'Jackie Chancellor'], ['Jackie Chancellor', 'Richard Johnson', 'Donald Duck', 'Claudia De La Cruz', 'Marcello Hernández', 'Oswaldo Guayasamin', 'Charles M. Knight', 'Dolphin Man', 'Geraldo Manchester', 'Bruce Gator Reinsburg'], ['Bruce Gator Reinsburg', 'Charles M. Knight', 'Marcello Hernández', 'Geraldo Manchester', 'Dolphin Man', 'Donald Duck', 'Oswaldo Guayasamin', 'Jackie Chancellor', 'Claudia De La Cruz', 'Richard Johnson'], ['Charles M. Knight', 'Jackie Chancellor', 'Richard Johnson', 'Geraldo Manchester', 'Bruce Gator Reinsburg', 'Marcello Hernández', 'Claudia De La Cruz', 'Oswaldo Guayasamin', 'Donald Duck', 'Dolphin Man'], ['Jackie Chancellor', 'Oswaldo Guayasamin', 'Dolphin Man', 'Claudia De La Cruz', 'Charles M. Knight', 'Marcello Hernández', 'Bruce Gator Reinsburg', 'Donald Duck', 'Geraldo Manchester', 'Richard Johnson'], ['Richard Johnson', 'Claudia De La Cruz', 'Dolphin Man', 'Jackie Chancellor', 'Donald Duck', 'Charles M. Knight', 'Bruce Gator Reinsburg', 'Marcello Hernández', 'Geraldo Manchester', 'Oswaldo Guayasamin'], ['Dolphin Man', 'Oswaldo Guayasamin', 'Geraldo Manchester', 'Claudia De La Cruz', 'Jackie Chancellor', 'Richard Johnson', 'Charles M. Knight', 'Bruce Gator Reinsburg', 'Marcello Hernández', 'Donald Duck'], ['Dolphin Man', 'Richard Johnson', 'Bruce Gator Reinsburg', 'Claudia De La Cruz', 'Jackie Chancellor', 'Oswaldo Guayasamin', 'Marcello Hernández', 'Geraldo Manchester', 'Charles M. Knight', 'Donald Duck'], ['Charles M. Knight', 'Bruce Gator Reinsburg', 'Jackie Chancellor', 'Donald Duck', 'Oswaldo Guayasamin', 'Richard Johnson', 'Claudia De La Cruz', 'Geraldo Manchester', 'Dolphin Man', 'Marcello Hernández'], ['Jackie Chancellor', 'Richard Johnson', 'Claudia De La Cruz', 'Geraldo Manchester', 'Charles M. Knight', 'Dolphin Man', 'Bruce Gator Reinsburg', 'Marcello Hernández', 'Oswaldo Guayasamin', 'Donald Duck'], ['Geraldo Manchester', 'Dolphin Man', 'Charles M. Knight', 'Donald Duck', 'Oswaldo Guayasamin', 'Richard Johnson', 'Jackie Chancellor', 'Marcello Hernández', 'Bruce Gator Reinsburg', 'Claudia De La Cruz'], ['Dolphin Man', 'Richard Johnson', 'Bruce Gator Reinsburg', 'Marcello Hernández', 'Jackie Chancellor', 'Claudia De La Cruz', 'Oswaldo Guayasamin', 'Geraldo Manchester', 'Donald Duck', 'Charles M. Knight'], ['Donald Duck', 'Richard Johnson', 'Jackie Chancellor', 'Claudia De La Cruz', 'Oswaldo Guayasamin', 'Marcello Hernández', 'Geraldo Manchester', 'Dolphin Man', 'Charles M. Knight', 'Bruce Gator Reinsburg'], ['Geraldo Manchester', 'Donald Duck', 'Oswaldo Guayasamin', 'Bruce Gator Reinsburg', 'Claudia De La Cruz', 'Marcello Hernández', 'Dolphin Man', 'Jackie Chancellor', 'Richard Johnson', 'Charles M. Knight'], ['Donald Duck', 'Dolphin Man', 'Geraldo Manchester', 'Marcello Hernández', 'Charles M. Knight', 'Oswaldo Guayasamin', 'Claudia De La Cruz', 'Jackie Chancellor', 'Bruce Gator Reinsburg', 'Richard Johnson'], ['Oswaldo Guayasamin', 'Richard Johnson', 'Marcello Hernández', 'Claudia De La Cruz', 'Jackie Chancellor', 'Dolphin Man', 'Donald Duck', 'Charles M. Knight', 'Bruce Gator Reinsburg', 'Geraldo Manchester'], ['Geraldo Manchester', 'Dolphin Man', 'Oswaldo Guayasamin', 'Charles M. Knight', 'Marcello Hernández', 'Claudia De La Cruz', 'Bruce Gator Reinsburg', 'Jackie Chancellor', 'Donald Duck', 'Richard Johnson'], ['Jackie Chancellor', 'Marcello Hernández', 'Charles M. Knight', 'Donald Duck', 'Richard Johnson', 'Claudia De La Cruz', 'Geraldo Manchester', 'Bruce Gator Reinsburg', 'Oswaldo Guayasamin', 'Dolphin Man'], ['Richard Johnson', 'Bruce Gator Reinsburg', 'Marcello Hernández', 'Claudia De La Cruz', 'Charles M. Knight', 'Geraldo Manchester', 'Donald Duck', 'Oswaldo Guayasamin', 'Jackie Chancellor', 'Dolphin Man'], ['Dolphin Man', 'Geraldo Manchester', 'Claudia De La Cruz', 'Jackie Chancellor', 'Richard Johnson', 'Donald Duck', 'Marcello Hernández', 'Oswaldo Guayasamin', 'Charles M. Knight', 'Bruce Gator Reinsburg'], ['Bruce Gator Reinsburg', 'Dolphin Man', 'Richard Johnson', 'Claudia De La Cruz', 'Jackie Chancellor', 'Charles M. Knight', 'Donald Duck', 'Oswaldo Guayasamin', 'Marcello Hernández', 'Geraldo Manchester'], ['Richard Johnson', 'Dolphin Man', 'Charles M. Knight', 'Claudia De La Cruz', 'Oswaldo Guayasamin', 'Bruce Gator Reinsburg', 'Jackie Chancellor', 'Marcello Hernández', 'Geraldo Manchester', 'Donald Duck'], ['Jackie Chancellor', 'Dolphin Man', 'Donald Duck', 'Bruce Gator Reinsburg', 'Claudia De La Cruz', 'Marcello Hernández', 'Geraldo Manchester', 'Charles M. Knight', 'Richard Johnson', 'Oswaldo Guayasamin'], ['Marcello Hernández', 'Oswaldo Guayasamin', 'Dolphin Man', 'Bruce Gator Reinsburg', 'Charles M. Knight', 'Jackie Chancellor', 'Claudia De La Cruz', 'Geraldo Manchester', 'Richard Johnson', 'Donald Duck'], ['Donald Duck', 'Dolphin Man', 'Bruce Gator Reinsburg', 'Claudia De La Cruz', 'Charles M. Knight', 'Geraldo Manchester', 'Marcello Hernández', 'Jackie Chancellor', 'Oswaldo Guayasamin', 'Richard Johnson'], ['Donald Duck', 'Richard Johnson', 'Jackie Chancellor', 'Claudia De La Cruz', 'Marcello Hernández', 'Charles M. Knight', 'Oswaldo Guayasamin', 'Dolphin Man', 'Geraldo Manchester', 'Bruce Gator Reinsburg'], ['Donald Duck', 'Geraldo Manchester', 'Bruce Gator Reinsburg', 'Richard Johnson', 'Marcello Hernández', 'Dolphin Man', 'Oswaldo Guayasamin', 'Jackie Chancellor', 'Claudia De La Cruz', 'Charles M. Knight'], ['Claudia De La Cruz', 'Bruce Gator Reinsburg', 'Richard Johnson', 'Geraldo Manchester', 'Charles M. Knight', 'Jackie Chancellor', 'Marcello Hernández', 'Donald Duck', 'Oswaldo Guayasamin', 'Dolphin Man'], ['Donald Duck', 'Bruce Gator Reinsburg', 'Charles M. Knight', 'Marcello Hernández', 'Oswaldo Guayasamin', 'Richard Johnson', 'Jackie Chancellor', 'Geraldo Manchester', 'Claudia De La Cruz', 'Dolphin Man'], ['Donald Duck', 'Dolphin Man', 'Charles M. Knight', 'Richard Johnson', 'Geraldo Manchester', 'Claudia De La Cruz', 'Bruce Gator Reinsburg', 'Marcello Hernández', 'Oswaldo Guayasamin', 'Jackie Chancellor'], ['Richard Johnson', 'Jackie Chancellor', 'Geraldo Manchester', 'Bruce Gator Reinsburg', 'Dolphin Man', 'Charles M. Knight', 'Oswaldo Guayasamin', 'Claudia De La Cruz', 'Marcello Hernández', 'Donald Duck'], ['Charles M. Knight', 'Dolphin Man', 'Oswaldo Guayasamin', 'Claudia De La Cruz', 'Jackie Chancellor', 'Richard Johnson', 'Marcello Hernández', 'Geraldo Manchester', 'Bruce Gator Reinsburg', 'Donald Duck'], ['Dolphin Man', 'Geraldo Manchester', 'Claudia De La Cruz', 'Bruce Gator Reinsburg', 'Oswaldo Guayasamin', 'Richard Johnson', 'Charles M. Knight', 'Marcello Hernández', 'Donald Duck', 'Jackie Chancellor'], ['Marcello Hernández', 'Oswaldo Guayasamin', 'Bruce Gator Reinsburg', 'Richard Johnson', 'Dolphin Man', 'Charles M. Knight', 'Claudia De La Cruz', 'Jackie Chancellor', 'Geraldo Manchester', 'Donald Duck'], ['Geraldo Manchester', 'Donald Duck', 'Claudia De La Cruz', 'Charles M. Knight', 'Bruce Gator Reinsburg', 'Dolphin Man', 'Jackie Chancellor', 'Richard Johnson', 'Marcello Hernández', 'Oswaldo Guayasamin'], ['Dolphin Man', 'Oswaldo Guayasamin', 'Donald Duck', 'Jackie Chancellor', 'Geraldo Manchester', 'Richard Johnson', 'Charles M. Knight', 'Claudia De La Cruz', 'Bruce Gator Reinsburg', 'Marcello Hernández'], ['Richard Johnson', 'Marcello Hernández', 'Geraldo Manchester', 'Jackie Chancellor', 'Donald Duck', 'Dolphin Man', 'Bruce Gator Reinsburg', 'Claudia De La Cruz', 'Charles M. Knight', 'Oswaldo Guayasamin'], ['Dolphin Man', 'Marcello Hernández', 'Bruce Gator Reinsburg', 'Charles M. Knight', 'Geraldo Manchester', 'Donald Duck', 'Oswaldo Guayasamin', 'Claudia De La Cruz', 'Jackie Chancellor', 'Richard Johnson'], ['Claudia De La Cruz', 'Donald Duck', 'Geraldo Manchester', 'Jackie Chancellor', 'Oswaldo Guayasamin', 'Richard Johnson', 'Bruce Gator Reinsburg', 'Charles M. Knight', 'Dolphin Man', 'Marcello Hernández'], ['Claudia De La Cruz', 'Bruce Gator Reinsburg', 'Donald Duck', 'Oswaldo Guayasamin', 'Geraldo Manchester', 'Marcello Hernández', 'Charles M. Knight', 'Jackie Chancellor', 'Dolphin Man', 'Richard Johnson'], ['Geraldo Manchester', 'Donald Duck', 'Claudia De La Cruz', 'Bruce Gator Reinsburg', 'Charles M. Knight', 'Jackie Chancellor', 'Oswaldo Guayasamin', 'Richard Johnson', 'Dolphin Man', 'Marcello Hernández'], ['Charles M. Knight', 'Claudia De La Cruz', 'Oswaldo Guayasamin', 'Dolphin Man', 'Richard Johnson', 'Donald Duck', 'Geraldo Manchester', 'Bruce Gator Reinsburg', 'Marcello Hernández', 'Jackie Chancellor'], ['Bruce Gator Reinsburg', 'Donald Duck', 'Dolphin Man', 'Jackie Chancellor', 'Geraldo Manchester', 'Claudia De La Cruz', 'Richard Johnson', 'Marcello Hernández', 'Charles M. Knight', 'Oswaldo Guayasamin'], ['Geraldo Manchester', 'Marcello Hernández', 'Claudia De La Cruz', 'Oswaldo Guayasamin', 'Jackie Chancellor', 'Dolphin Man', 'Donald Duck', 'Charles M. Knight', 'Bruce Gator Reinsburg', 'Richard Johnson'], ['Claudia De La Cruz', 'Oswaldo Guayasamin', 'Geraldo Manchester', 'Donald Duck', 'Jackie Chancellor', 'Richard Johnson', 'Charles M. Knight', 'Marcello Hernández', 'Bruce Gator Reinsburg', 'Dolphin Man'], ['Claudia De La Cruz', 'Richard Johnson', 'Jackie Chancellor', 'Dolphin Man', 'Charles M. Knight', 'Donald Duck', 'Bruce Gator Reinsburg', 'Geraldo Manchester', 'Marcello Hernández', 'Oswaldo Guayasamin'], ['Claudia De La Cruz', 'Dolphin Man', 'Oswaldo Guayasamin', 'Charles M. Knight', 'Marcello Hernández', 'Geraldo Manchester', 'Richard Johnson', 'Jackie Chancellor', 'Bruce Gator Reinsburg', 'Donald Duck'], ['Dolphin Man', 'Charles M. Knight', 'Claudia De La Cruz', 'Geraldo Manchester', 'Oswaldo Guayasamin', 'Jackie Chancellor', 'Richard Johnson', 'Marcello Hernández', 'Bruce Gator Reinsburg', 'Donald Duck'], ['Jackie Chancellor', 'Oswaldo Guayasamin', 'Donald Duck', 'Charles M. Knight', 'Bruce Gator Reinsburg', 'Marcello Hernández', 'Claudia De La Cruz', 'Dolphin Man', 'Richard Johnson', 'Geraldo Manchester'], ['Marcello Hernández', 'Jackie Chancellor', 'Charles M. Knight', 'Richard Johnson', 'Geraldo Manchester', 'Donald Duck', 'Dolphin Man', 'Bruce Gator Reinsburg', 'Oswaldo Guayasamin', 'Claudia De La Cruz'], ['Marcello Hernández', 'Richard Johnson', 'Donald Duck', 'Oswaldo Guayasamin', 'Geraldo Manchester', 'Charles M. Knight', 'Dolphin Man', 'Claudia De La Cruz', 'Bruce Gator Reinsburg', 'Jackie Chancellor'], ['Dolphin Man', 'Oswaldo Guayasamin', 'Donald Duck', 'Geraldo Manchester', 'Richard Johnson', 'Claudia De La Cruz', 'Jackie Chancellor', 'Charles M. Knight', 'Marcello Hernández', 'Bruce Gator Reinsburg'], ['Claudia De La Cruz', 'Geraldo Manchester', 'Richard Johnson', 'Jackie Chancellor', 'Donald Duck', 'Charles M. Knight', 'Dolphin Man', 'Oswaldo Guayasamin', 'Marcello Hernández', 'Bruce Gator Reinsburg'], ['Jackie Chancellor', 'Bruce Gator Reinsburg', 'Richard Johnson', 'Donald Duck', 'Marcello Hernández', 'Charles M. Knight', 'Geraldo Manchester', 'Dolphin Man', 'Oswaldo Guayasamin', 'Claudia De La Cruz']]
}
setBallots()

class roundData {
    constructor(list,winner,loser,voteAudit,anomalies) {
        this.list = list
        this.winner = winner
        this.loser = loser
        this.voteAudit = voteAudit
        this.anomalies = anomalies
    }
}

class resultData {
    constructor(data,tiesLast,tiesFirst) {
        this.data = data
        this.tiesLast = tiesLast
        this.tiesFirst = tiesFirst
    }
}

// INSTANT-RUNOFF PROGRAM

function getCandidates(ballots) {
    let list = []
    ballots.flat().forEach((name)=>{
        if (!list.includes(name)) {
            list.push(name)
        }
    })
    list = list.map((name)=>{return [name,0]})
    return list
}

function checkWinner(data) {
    for (let i=0;i<data.length;i++) {
        if (data[i][1]>0.5) {return data[i]}
    }
    return null
}

function tally(data,i) {
    let total=0
    data.forEach((K)=>{
        K[1]=0
        ballotsRaw.forEach((ballot)=>{
            if (ballot[i]==K[0]){K[1]++;total++}
        })
    })
    data.map((K)=>{K[1]=K[1]/total;return K})
    return data
}

function reroute(data,lowestName) {
    let losingIndex = 0
    data.forEach((K,index)=>{if(K[0]==lowestName){
        losingIndex=index
    }})
    ballotsRaw.map((ballot)=>{if (ballot[0]==lowestName) {
        ballot.shift()
    }})
    data.splice(losingIndex,1)
}

function sumAudit(sum) {
    let error = sum-1
    if (Math.abs(error)<0.00000001){return 'pass'}
    else {return 'fail'}
}

function tieBreaker(data,voteNum,place,round) {
    if (place==1) {
        console.log(title('ROUND '+round+' TIE FOR FIRST'))
    } else {
        console.log(title('ROUND '+round+' TIE FOR LAST'))
    }
    console.log('data',data)
    console.log('votes:',voteNum)
    let indexes = []
    data.forEach((K,index)=>{if(K[1]==voteNum){
        indexes.push(index)
    }})
    let secondsTally = tally(data,1)
    let tieChosen = ['',1]
    console.log('  indexes',indexes)
    console.log('  secondsTally:')
    indexes.forEach((i)=>{console.log('   ',secondsTally[i])})
    indexes.forEach((i)=>{
        if (place*secondsTally[i][1]>place*tieChosen[1]){
            tieChosen = secondsTally[i]
        }
    })
    console.log('  tieChosen',tieChosen)
    return tieChosen
}

function run(ballots) {
    let roundDataArray = []
    let candidates = getCandidates(ballots)
    let round = 0
    while (checkWinner(candidates)==null) {
        round++
        candidates = tally(candidates,0)
        // ROUND DATA
        let runningWinner = [['',0]]
        let runningLoser = [['',1]]
        let runningSum = 0
        let anomalies = ''
        candidates.forEach((K)=>{
            runningSum+=K[1]
            if (K[1]>runningWinner[0][1]){
                runningWinner = [[...K]]
            } else if (K[1]==runningWinner[0][1]){
                runningWinner.push([...K])
            }
            if (K[1]<runningLoser[0][1]){
                runningLoser = [[...K]]
            } else if (K[1]==runningLoser[0][1]){
                runningLoser.push([...K])
            }
        })
        let roundLoser = runningLoser[0]
        let roundWinner = runningWinner[0]
        console.log([...candidates])
        if (runningLoser.length>1){
            roundLoser = tieBreaker([...candidates],runningLoser[0][1],-1,round)
            let loserNames=[...runningLoser].map((K)=>{return ' '+K[0]})
            anomalies += 'There was a last place tie among'+loserNames
        }
        console.log([...candidates])
        if (runningWinner.length>1){
            roundWinner = tieBreaker([...candidates],runningWinner[0][1],1,round)
            let winnerNames=[...runningWinner].map((K)=>{return ' '+K[0]})
            anomalies += 'There was a first place tie among'+winnerNames
        }
        roundDataArray.push(new roundData(
            [...candidates],
            roundWinner,
            roundLoser,
            [runningSum,sumAudit(runningSum)],
            anomalies))
        // REROUTE ROUND LOSER'S VOTES
        reroute(candidates,roundLoser[0])
    }
    return roundDataArray
}

// PRETTY OUTPUT

function format(data) {
    let results = title('RESULTS')
    let rounds = data.length
    
    let winningPercent = Math.floor(data[rounds-1].winner[1]*10000)/100
    results += '\n'+data[rounds-1].winner[0]+' has won with '+winningPercent+'% of the vote.'
    results += '\nThe instant-runoff program ran for '+rounds+' rounds.'
    
    
    data.forEach((round)=>{
        
    })
    return results+'\n'+title('RESULTS END')
}

// STUFF THAT RUNS ON LOAD()

let results = run(ballotsRaw)
console.log(title('RAW OUTPUT DATA'))
console.log(results)
console.log(format(results))