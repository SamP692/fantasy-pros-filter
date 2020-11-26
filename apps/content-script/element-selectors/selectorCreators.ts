/* Opinion Days Old Selector Creator */
export function opinionDaysOld(row: number) {
    return '#expertModal > div > div > div.modal-body.ExpertsSelector > '
        + `div.ExpertPane > table > tbody > tr:nth-child(${row}) > td:nth-child(4)`
}

/* Expert Accuracy Selector Creator */
type SupportedYear = 'CURRENT' | 'LAST'
export function expertAccuracy(row: number, year: SupportedYear) {
    const accuracyNumber = year === 'CURRENT' ? 1 : 5

    return '#expertModal > div > div > div.modal-body.ExpertsSelector > '
        + 'div.ExpertPane > table > tbody > '
        + `tr:nth-child(${row}) > td.Accuracy.Accuracy${accuracyNumber}`
}

/* Expert Opinion Row */
export function expertOpinionRow(row: number) {
    return '#expertModal > div > div > div.modal-body.ExpertsSelector > '
        + `div.ExpertPane > table > tbody > tr:nth-child(${row})`
}

/* Expert Row Checkbox */
export function expertRowCheckbox(row: number) {
    return '#expertModal > div > div > div.modal-body.ExpertsSelector > '
        + `div.ExpertPane > table > tbody > tr:nth-child(${row}) > `
        + 'td:nth-child(1) > input'
}
