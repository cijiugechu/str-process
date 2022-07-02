type ProcessFn = (str: string) => string

const transparent: ProcessFn = str => str

class StrProcess {
    fn = transparent

    constructor(fn?: ProcessFn) {
        if (fn) {
            this.fn = fn
        }
    }

    /**
     * @description the static method `of` is used to create a new `StrProcess`.
     * @param fn ProcessFn
     * @returns `StrProcess` instance
     */
    static of(fn?: ProcessFn) {
        return new StrProcess(fn)
    }


    /**
     * @description StrProcess is lazy! you can use `runWith` to evaluate it.
     * @param value string
     * @returns string
     */
    runWith(value: string) {
        return this.fn(value)
    }


    /**
     * @description you can use this method to customize your own process function.
     * @param fn ProcessFn
     * @returns 
     */
    map(fn: ProcessFn) {
        return new StrProcess(v => fn(this.fn(v)))
    }


    /**
     * @description unbox the StrProcess and get the process function inside it.
     * @returns ProcessFn
     */
    unbox() {
        return this.fn
    }

    upperCase() {
        return this.map(v => v.toUpperCase())
    }

    lowerCase() {
        return this.map(v => v.toLowerCase())
    }

    alphaBet() {
        return this.map(v => v.replace(/[^a-zA-Z]/g, ''))
    }

    alphaBetWithSpace() {
        return this.map(v => v.replace(/[^a-zA-Z\s]/g, ''))
    }

    alphaBetWithDigits() {
        return this.map(v => v.replace(/[^a-zA-Z0-9]/g, ''))
    }

    digits() {
        return this.map(v => v.replace(/[^0-9]/g, ''))
    }

    maxLength(n: number) {
        return this.map(v => v.slice(0, n))
    }

}

export {
    StrProcess,
    transparent,
    ProcessFn
}