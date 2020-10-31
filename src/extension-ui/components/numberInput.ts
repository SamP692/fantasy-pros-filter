type Callback = (value: number | undefined) => void

function numberInput(callback: Callback) {
    const inputElement = document.createElement('input')
    inputElement.type = 'number'
    inputElement.className = 'number-input'

    inputElement.oninput = (e) => {
        const value = (<HTMLInputElement>e.target).value

        const finalValue = value === '' ? undefined : Number(value)

        callback(finalValue)
    }

    return inputElement
}

export default numberInput
