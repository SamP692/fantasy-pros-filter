function createIndefiniteLoopFailure(iterationFailureThreshold: number) {
    let iteration = 0

    function checkLoopFailure() {
        iteration ++

        if (iteration >= iterationFailureThreshold) {
            throw new Error(
                `A loop has exceeded its threshold of ${iterationFailureThreshold} iterations`
            )
        }
    }

    return checkLoopFailure
}

export default createIndefiniteLoopFailure
