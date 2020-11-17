/* Is Positive Number Options */
interface IsPositiveNumberOptions {
    value: number | string | undefined
    greaterThanZero?: boolean
}

/* Value Is Not Number */
function valueIsNotNumber(testValue: unknown, standardizedValue: number): boolean {
    return Number.isNaN(standardizedValue)
        || testValue === null
        || testValue === ''
        || typeof testValue === 'object'
}

/* Is Positive Number */
function isPositiveNumber({ value, greaterThanZero }: IsPositiveNumberOptions): boolean {
    const standardizedValue = Number(value)

    if (valueIsNotNumber(value, standardizedValue)) return false

    return greaterThanZero ? standardizedValue > 0 : standardizedValue >= 0
}

export default isPositiveNumber
