export interface Round {
    id: number
    roundname: String
    totalquestions: Number
    scorefirst: Number
    scoresecond: Number
    scorethird: Number
    scoreother: Number
    scorenegative: Number
    tomass: Boolean
    tonextteam: Boolean
    timefirst: Number
    timesecond: Number
    timethird: Number
    hassubcategory: Boolean
    issubcategory: Boolean
    parentroundid: Number
    ischoosen: Boolean
    issubcategoryonlyonce: Boolean
    israpidfire: Boolean
    isestimation: Boolean
    isbuzzer: Boolean
    isgambling: Boolean
    istiebreaker: Boolean
    isoption: Boolean
    isfiftyfifty: Boolean
  }