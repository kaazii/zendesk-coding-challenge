import readlineSync from 'readline-sync'

export const getInput = readlineSync.question.bind(readlineSync)
