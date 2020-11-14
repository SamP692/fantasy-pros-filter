/**
 * ===============
 * == UTILITIES ==
 * ===============
 */
function unusableNumber(num?: number) {
  if (!num) return false

  return !Number.isInteger(num)
}

function isNotBoolean(bool?: boolean) {
  if(!bool || bool === true) return false

  return true
}

function indexOfStringIsNumber(string: string, index: number) {
  return Number.isInteger(Number(string[index]))
}

function startOfStringNumber(string: string, throughIndex: number) {
  return Number(string.substr(0, throughIndex + 1))
}

function stripDaysOldCount(daysOldString: string) {
  const isThreeDigits = indexOfStringIsNumber(daysOldString, 2)
  if (isThreeDigits) return startOfStringNumber(daysOldString, 2)

  const isTwoDigits = indexOfStringIsNumber(daysOldString, 1)
  if (isTwoDigits) return startOfStringNumber(daysOldString, 2)

  return startOfStringNumber(daysOldString, 0)
}

function calculateDaysOld(daysOldString: string) {
  const standardizedDaysOldString = daysOldString.toLowerCase()
  switch(standardizedDaysOldString) {
    case 'today':     return 0
    case 'yesterday': return 1
    default:          return stripDaysOldCount(daysOldString)
  }
}

function extractDaysOldStringForExpert(expertNumber: number) {
  const updatedSelectorCreator = selectorCreators.rowUpdatedOn

  const daysOldElementForExpert = select(updatedSelectorCreator(expertNumber)) as HTMLTableRowElement

  if (!daysOldElementForExpert) return null

  const daysOldString = daysOldElementForExpert.innerText.trim()

  return daysOldString
}

function extractRankForExpert(expertNumber: number, year: 2020 | 2019) {
  const rankSelectorCreator = selectorCreators.rowAccuracy

  const rankElementForExpert = select(rankSelectorCreator(expertNumber, year)) as HTMLTableDataCellElement

  if (!rankElementForExpert) return null

  const rankString = rankElementForExpert.innerText.trim()

  if (!rankString) return null

  const rankNumber = Number(rankString.split('#')[1])

  return rankNumber
}

function selectExpert(expertNumber: number) {
  const checkboxSelectorCreator = selectorCreators.rowCheckbox

  const checkboxElement = select(checkboxSelectorCreator(expertNumber)) as HTMLInputElement

  checkboxElement.checked = true
}

/**
 * ===============
 * == SELECTORS ==
 * ===============
 */
function returnAccuracySelector(row: number, year: 2020 | 2019): string {
  switch(year) {
    case 2020:
      return '#expertModal > div > div > div.modal-body.ExpertsSelector > div.ExpertPane > table > tbody > '
        + `tr:nth-child(${row}) > td.Accuracy.Accuracy1`
    case 2019:
      return '#expertModal > div > div > div.modal-body.ExpertsSelector > div.ExpertPane > table > tbody > '
        + `tr:nth-child(${row}) > td.Accuracy.Accuracy5`
    default:
      throw new Error(`Accuracy year ${year} not supported`)
  }
}

const selectorCreators = {
  rowUpdatedOn: (row: number) =>
    `#expertModal > div > div > div.modal-body.ExpertsSelector > div.ExpertPane > table > tbody > tr:nth-child(${row}) > td:nth-child(4)`,
  rowAccuracy: (row: number, year: 2020 | 2019) =>
    returnAccuracySelector(row, year),
  rowCheckbox: (row: number) =>
    `#expertModal > div > div > div.modal-body.ExpertsSelector > div.ExpertPane > table > tbody > tr:nth-child(${row}) > td:nth-child(1) > input`
}

const selectors = {
  ROW_CHECKBOX:
    '#expertModal > div > div > div.modal-body.ExpertsSelector > div.ExpertPane > table > tbody > tr > td:nth-child(1) > input',
  EXPERTS_BUTTON:
    'body > a',
  CLOSE_EXPERTS_LIST:
    '#expertModal > div > div > div.modal-header > a'
}

/**
 * ===============
 * == DOM TOOLS ==
 * ===============
 */
function select(selector: string) {
  return document.querySelector(selector)
}

function selectAll(selector: string) {
  return document.querySelectorAll(selector)
}

/**
 * =========
 * == APP ==
 * =========
 */
function validateOptions(options: AppOptions) {
  const { top2019, top2020, rookiesOf2020Only, daysOld } = options

  const errors: string[] = []

  if (!top2019 && !top2020 && !daysOld) {
    errors.push('Must define either a top selection for 2019 or 2020, or a number of days old')
  }

  if (unusableNumber(top2019)) {
    errors.push(`Value for top2019 (${top2019}) is not usable`)
  }

  if (unusableNumber(top2020)) {
    errors.push(`Value for top2020 (${top2020}) is not usable`)
  }

  if (unusableNumber(daysOld)) {
    errors.push(`Value for daysOld (${daysOld}) is not usable`)
  }

  if (isNotBoolean(rookiesOf2020Only)) {
    errors.push(`rookiesOf2020Only value (${rookiesOf2020Only}) must be boolean or undefined`)
  }

  if (errors.length) {
    throw new Error(`- ${errors.join('\n- ')}`)
  }
}

function openModal() {
  const expertsButton = select(selectors.EXPERTS_BUTTON) as HTMLAnchorElement

  expertsButton.click()

  console.log('Opened Modal')
}

function closeModal() {
  const closeButton = select(selectors.CLOSE_EXPERTS_LIST) as HTMLAnchorElement

  closeButton.click()

  console.log('Modal Closed')
}

function resetExperts() {
  const checkboxes = selectAll(selectors.ROW_CHECKBOX)

  checkboxes.forEach((c) => {
    (c as HTMLInputElement).checked = false
  })

  console.log('Reset all expert selections')
}

function select2019Experts(topExpertsCount?: number, daysOld?: number) {
  if (!topExpertsCount) return

  let expertNumber = 1
  while(true) {
    const expertDaysOldString = extractDaysOldStringForExpert(expertNumber)

    if (!expertDaysOldString) break

    const expertDaysOld = calculateDaysOld(expertDaysOldString)
    const expertIsTooOld = Number.isNaN(expertDaysOld)

    if (Number.isInteger(daysOld) && (expertIsTooOld || (expertDaysOld > daysOld))) break

    const expertRank = extractRankForExpert(expertNumber, 2019)

    if (expertRank && (expertRank <= topExpertsCount)) {
      selectExpert(expertNumber)

      console.log(`2019 Expert Selected [Rank: #${expertRank} | From: ${expertDaysOldString}]`)
    }

    expertNumber ++
  }
}

/* Props */
interface Experts2020Options {
  topExpertsCount?: number
  daysOld?: number
  rookiesOnly?: boolean
}
/* Function */
function select2020Experts({ topExpertsCount, daysOld, rookiesOnly }: Experts2020Options) {
  if (!topExpertsCount) return

  let expertNumber = 1
  while(true) {
    const expertDaysOldString = extractDaysOldStringForExpert(expertNumber)

    if (!expertDaysOldString) break

    const expertDaysOld = calculateDaysOld(expertDaysOldString)
    const expertIsTooOld = Number.isNaN(expertDaysOld)

    if (Number.isInteger(daysOld) && (expertIsTooOld || (expertDaysOld > daysOld))) break

    if (!rookiesOnly || (rookiesOnly && !extractRankForExpert(expertNumber, 2019))) {
      const expertRank = extractRankForExpert(expertNumber, 2020)

      if (expertRank && (expertRank <= topExpertsCount)) {
        selectExpert(expertNumber)

        console.log(`2020 Expert Selected [Rank: #${expertRank} | From: ${expertDaysOldString}]`)
      }
    }

    expertNumber ++
  }
}

/* Props */
interface AppOptions {
  top2019?: number
  top2020?: number
  rookiesOf2020Only?: boolean
  daysOld?: number
}
/* Function */
function updateFilters(options: AppOptions) {
  validateOptions(options)

  openModal()

  resetExperts()

  const { daysOld } = options

  const { top2019 } = options
  select2019Experts(top2019, daysOld)

  const { top2020, rookiesOf2020Only } = options
  select2020Experts({
    topExpertsCount: top2020,
    daysOld,
    rookiesOnly: rookiesOf2020Only
  })

  closeModal()

  console.log('Expert selection updated')
}

updateFilters({
  top2019: 50,
  top2020: 50,
  daysOld: 1,
  rookiesOf2020Only: false
})
