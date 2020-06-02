class Storage<T> {
    
    private data: T[] = []

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T):boolean {
        let index = this.data.indexOf(item)
        if(index<0) return false
        this.data.splice(index, 1)
        return true
    }

    getItems(): T[] {
        return [...this.data]
    }

}
