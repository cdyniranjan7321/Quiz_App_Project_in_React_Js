export interface RoundI {
  id: number
  roundname: string
  totalquestions: number
  scorefirst: number
  scoresecond: number
  scorethird: number
  scoreother: number
  scorenegative: number
  tomass: Boolean
  tonextteam: Boolean
  timefirst: number
  timesecond: number
  timethird: number
  hassubcategory: Boolean
  issubcategory: Boolean
  parentroundid: number
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

export interface QuestionI {
  id: number
  question: string
  answer: string
  isAsked: Boolean
  resourceType: string
  resource: string
  font: string
  option1: string
  option2: string
  option3: string
  option4: string
  fiftyOption1: string
  fiftyOption2: string
  roundId: number
}
