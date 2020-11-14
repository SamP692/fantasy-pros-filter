import FilterConfiguration from './FilterConfiguration'

interface BaseInputComponentConfiguration {
    filter: keyof FilterConfiguration
    label: string
    displayOrder: number
}

interface NumberInputComponentConfiguration extends BaseInputComponentConfiguration {
    inputType: 'NUMBER'
    optional: boolean
}

interface CheckboxInputComponentConfiguration extends BaseInputComponentConfiguration {
    inputType: 'CHECKBOX'
}

type InputComponentConfiguration = NumberInputComponentConfiguration |
    CheckboxInputComponentConfiguration

export default InputComponentConfiguration
