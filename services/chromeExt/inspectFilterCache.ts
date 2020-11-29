/* Configs */
import { FILTER_CACHE_KEY } from '~global-configs'

/* Types */
import {
    FilterConfiguration,
    ChromeExtCallback
} from '~global-types'

type FiltersCallback = ChromeExtCallback<FilterConfiguration | undefined>

/* Filter Cache */
function inspectFilterCache(filtersCallback: FiltersCallback) {
    chrome.storage.sync.get(
        [FILTER_CACHE_KEY],
        (result) => { filtersCallback(result[FILTER_CACHE_KEY]) }
    )
}

export default inspectFilterCache
