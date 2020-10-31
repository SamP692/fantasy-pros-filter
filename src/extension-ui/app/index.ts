/**
 *  * Attach more info section
 *  * Attach errors section
 */
import {
    checkbox,
    numberInput,
    label
} from 'components'

import type {
    FilterConfiguration,
    InputItem
} from 'types'

class App {
    private rootEl: HTMLDivElement
    private filterTable: HTMLTableElement

    private filterConfiguration: FilterConfiguration = {}

    private inputs: InputItem[]

    constructor(rootEl: HTMLDivElement) {
        this.rootEl = rootEl

        this.filterTable = this.createFilterTable()
        this.inputs = this.createInputs()
    }

    public initialize(): void {
        this.clearRoot()
        this.injectFilterTable()
        this.injectFilterComponents()
        this.injectSubmitButton()
    }

    private clearRoot(): void {
        this.rootEl.innerHTML = ''
    }

    private createFilterTable(): HTMLTableElement {
        const appEl = document.createElement('table')

        return appEl
    }

    private createInputs(): InputItem[] {
        return [
            this.createCurrentYearInput(),
            this.createPriorYearInput(),
            this.createDaysOldInput(),
            this.createRookiesOnlyInput()
        ]
    }

    private createCurrentYearInput() {
        const inputLabel = label('Current Season Rank')
        const inputComponent = numberInput((value) => {
            this.filterConfiguration['currentYearExpertRank'] = value
        })

        return {
            label: inputLabel,
            input: inputComponent
        }
    }

    private createPriorYearInput() {
        const inputLabel = label('Last Season Rank')
        const inputComponent = numberInput((value) => {
            this.filterConfiguration['priorYearExpertRank'] = value
        })

        return {
            label: inputLabel,
            input: inputComponent
        }
    }

    private createDaysOldInput() {
        const inputLabel = label('Maximum Days Old')
        const inputComponent = numberInput((value) => {
            this.filterConfiguration['opinionDaysOld'] = value
        })

        return {
            label: inputLabel,
            input: inputComponent
        }
    }

    private createRookiesOnlyInput() {
        const inputLabel = label('Current Season Rookies Only')
        const inputComponent = checkbox((value) => {
            this.filterConfiguration['currentYearRookiesOnly'] = value
        })

        return {
            label: inputLabel,
            input: inputComponent
        }
    }

    private injectFilterTable(): void {
        this.rootEl.append(this.filterTable)
    }

    private injectFilterComponents(): void {
        this.inputs.forEach((input) => {
            const rowElement = this.createTableRow(input)

            this.filterTable.append(rowElement)
        })
    }

    private injectSubmitButton() {
        const buttonElement = document.createElement('button')
        buttonElement.className = 'submit-filters-button'

        buttonElement.innerText = 'UPDATE'

        buttonElement.onclick = () => {
            console.log(this.filterConfiguration)

            this.sendFilterConfig()
        }

        this.rootEl.appendChild(buttonElement)
    }

    private sendFilterConfig(): void {
        chrome.tabs.query(
            { currentWindow: true, active: true },
            (tabs) => {
                if (tabs[0]?.id) {
                    chrome.tabs.sendMessage(tabs[0].id, 'hi')
                }
            }
        )
    }

    private createTableRow({ input, label }: InputItem): HTMLTableRowElement {
        const tableRow = document.createElement('tr')
        const leftColumn = document.createElement('td')
        const rightColumn = document.createElement('td')

        leftColumn.append(label)
        rightColumn.append(input)

        tableRow.append(leftColumn)
        tableRow.append(rightColumn)

        return tableRow
    }
}

export default App
