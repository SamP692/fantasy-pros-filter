function label(label: string): HTMLElement {
    const labelElement = document.createElement('p')

    labelElement.className = 'input-label'
    
    labelElement.innerText = label

    return labelElement
}

export default label
