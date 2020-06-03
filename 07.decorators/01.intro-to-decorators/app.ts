function Logger(target: Function) {
    console.log("logging for " + target)
}

@Logger
class Someone {
    constructor(readonly name: string) {
        this.name = name
    }
}

let milo = new Someone("milo")
console.log(milo)
