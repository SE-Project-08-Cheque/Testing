import { toWords, format } from "../../../components/Cheq/Function"



// import * as Function from "./Function"

describe("when positive number passed",()=>{
    test('should return number in words',()=>{
        expect(toWords('2345')).toBe('two thousand three hundred forty five Rupees Only')
    })
    test('should return number in words',()=>{
        expect(toWords('972')).toBe('nine hundred seventy two Rupees Only')
    })
})



describe("when floating number passed",()=>{
    test('should return in rupees and cents',()=>{
        expect(toWords('2345.2')).toBe('two thousand three hundred forty five Rupees twenty Cents Only')
    })
    test('should return two decimal points cents',()=>{
        expect(toWords('972.982')).toBe('nine hundred seventy two Rupees ninety eight Cents Only')
    })
})



describe("when passed number great than 10^15",()=>{
    test('should return in rupees and cents',()=>{
        expect(toWords('10000000000000000000000000000')).toBe('Value is too long to display')
    })
})



describe("when number passed",()=>{
    test('should return two decimal places seperated with commas',()=>{
        expect(format('2345.2')).toBe('2,345.20')
    })
})



describe("when zero passed as number",()=>{
    test('should return two decimal places seperated with commas',()=>{
        expect(format('0')).toBe('0.00')
    })
})



describe("when nothing passed",()=>{
    test('should return zero with two decimal places',()=>{
        expect(format('')).toBe('0.00')
    })
})



describe("when passed number with more than 2 decimal places",()=>{
    test('should return rounded value with two decimal placses',()=>{
        expect(format('89.999')).toBe('90.00')
    })
})



describe("when passed characters other for amount",()=>{
    test('should return zero',()=>{
        expect(format('sd')).toBe('0.00')
    })
})


describe("Function.toWords", () => {
    test("0", () => {
        let result = toWords("2345.2")
        expect(result).toBe('two thousand three hundred forty five Rupees twenty Cents Only')
    })

    test("1", () => {
        let result = toWords('972')
        expect(result).toBe('nine hundred seventy two Rupees Only')
    })
})

