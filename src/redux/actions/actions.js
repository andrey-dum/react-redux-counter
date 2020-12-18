import { ADD, ADD2, ADD_NUMBER, SUB } from "./types"



export function add() {
    return {
        type: ADD
    }
}

export function sub() {
    return {
        type: SUB
    }
}

export function addNumber(number) {
    return {
        type: ADD_NUMBER,
        payload: number
    }
}

export function add2(number) {
    return {
        type: ADD2,
        ayload: number
    }
}




