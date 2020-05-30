printThings(1, 2, "three", true, false, {error: 'something were wrong', code: '001'})

function printThings(...things: any) : void {

    for (const thing of things) {
        console.log(thing)
    }
}