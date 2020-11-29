/* Configs */
import { FILTER_CACHE_KEY } from '~global-configs'

/* Types */
import { FilterConfiguration } from '~global-types'

/* Update Filter Cache */
function updateFilterCache(filters: FilterConfiguration) {
    chrome.storage.sync.set({ [FILTER_CACHE_KEY]: filters })
}

export default updateFilterCache
