interface Doc {
}

/*
    ANTI-PATTERN WAY
 */

interface Machine {
    print(d: Doc): void
    fax(d: Doc): void
    scan(d: Doc): void
}

// ok if you need a multifunction machine
class MultiFunctionPrinter implements Machine {
    print(d: Doc): void {
        console.log("printing " + d)
    }

    fax(d: Doc): void {
        console.log("faxing " + d)
    }

    scan(d: Doc): void {
        console.log("scanning " + d)
    }
}

class OldFashionedPrinter implements Machine {
    print(d: Doc): void {
        console.log("printing " + d)
    }

    fax(d: Doc): void {
        d // nothing to do
    }

    scan(d: Doc): void {
        d // nothing to do
    }
}

/*
    ISP WAY
 */

interface Printer {
    print(d: Doc): void
}

interface IScanner {
    scan(d: Doc): void
}

interface IFax {
    fax(d: Doc): void
}

class JustAPrinter implements Printer {
    print(d: Doc): void {
        console.log("printing " + d)
    }
}

class Photocopier implements Printer, IScanner {
    print(d: Doc): void {
        console.log("printing " + d)
    }

    scan(d: Doc): void {
        console.log("scanning " + d)
    }
}

interface MultiFunctionDevice extends Printer, IScanner, IFax {}

class MultiFunctionMachine implements MultiFunctionDevice {
    print(d: Doc): void {
        console.log("printing " + d)
    }

    fax(d: Doc): void {
        console.log("faxing " + d)
    }

    scan(d: Doc): void {
        console.log("scanning " + d)
    }
}