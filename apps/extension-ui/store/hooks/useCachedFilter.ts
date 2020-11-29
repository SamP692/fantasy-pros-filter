/* Libraries */
import { useState } from 'react'

/* Services */
import { chromeExt } from '~services'

/* Types */
import { FilterConfiguration } from '~global-types'

type CachedConfig = FilterConfiguration | undefined

/* Hook -- Cache Filter Choices */
function useCachedFilter(): [CachedConfig, boolean] {
    const [config, setConfig] = useState<CachedConfig>(undefined)
    const [loading, setLoading] = useState(true)

    function updateCachedConfig(cachedConfig: CachedConfig) {
        setConfig(cachedConfig)

        setLoading(false)
    }

    chromeExt.inspectFilterCache(updateCachedConfig)

    return [config, loading]
}

export default useCachedFilter
