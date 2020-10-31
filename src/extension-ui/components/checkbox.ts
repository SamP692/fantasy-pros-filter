type Callback = (checked: boolean) => void

function checkbox(callback: Callback) {
    const inputElement = document.createElement('input')
    inputElement.type = 'checkbox'

    inputElement.onchange = (e) => {
        callback((<HTMLInputElement>e.target).checked)
    }

    return inputElement
}

export default checkbox
