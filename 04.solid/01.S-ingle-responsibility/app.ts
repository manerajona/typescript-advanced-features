class DigitalJournal {
    private entries: string[] = []
    private count: number = 0

    public addEntry(text: string) {
        this.entries[++this.count] = text
    }

    public removeEntry(index: number) {
        this.entries[index] = ''
    }

    // ANTI-PATTERN! We break SRP
    public save(filename: string) {
        console.log(`saving ${filename}...`)
    }
}

// handles the responsibility of persisting objects (separation of concerns)
class Persistence {
    public save(filename: string) {
        console.log(`saving ${filename}...`)
        // Do something
    }

    public load(filename: string): DigitalJournal {
        console.log(`loading ${filename}...`)
        // Do something
        return {} as DigitalJournal
    }
}
