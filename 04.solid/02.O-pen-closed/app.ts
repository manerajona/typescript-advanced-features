enum Color {
    RED,
    GREEN,
    BLUE
}

enum Size {
    SMALL,
    MEDIUM,
    LARGE,
    YUGE
}

class Product {
    constructor(readonly name: string, public color: Color, public size: Size) {
        this.name = name
        this.color = color
        this.size = size
    }
}

class ProductFilter {
    public static byColor(products: Product[], color: Color): Product[] {
        return products.filter(p => p.color == color)
    }

    public static bySize(products: Product[], size: Size): Product[] {
        return products.filter(p => p.size == size)
    }

    public static bySizeAndColor(products: Product[], size: Size, color: Color): Product[] { // anti-pattern
        return products.filter(p => p.size == size && p.color == color)
    }
}

// we introduce two new interfaces that are open for extension
interface Specification {
    isSatisfied(item: Product): boolean;
}

class ColorSpecification implements Specification {

    constructor(public color: Color) {
        this.color = color;
    }

    public isSatisfied(p: Product): boolean {
        return p.color == this.color;
    }
}

class SizeSpecification implements Specification {

    constructor(public size: Size) {
        this.size = size;
    }

    public isSatisfied(p: Product): boolean {
        return p.size == this.size;
    }
}

class AndSpecification implements Specification {

    constructor(public specs: Specification[]) {
        this.specs = specs;
    }

    public isSatisfied(p: Product): boolean {
        for (const spec of this.specs) {
            if (!spec.isSatisfied(p)) return false
        }
        return true
    }

}

class BetterFilter {
    static filter(products: Product[], spec: Specification): Product[] {
        return products.filter(p => spec.isSatisfied(p));
    }
}

const apple: Product = new Product("Apple", Color.GREEN, Size.SMALL)
const tree: Product = new Product("Tree", Color.GREEN, Size.LARGE)
const house: Product = new Product("House", Color.BLUE, Size.LARGE)

const products: Product[] = [apple, tree, house]

console.log(products)

console.log("Large products:")
console.log(ProductFilter.bySize(products, Size.LARGE))
console.log("Green products:")
console.log(ProductFilter.byColor(products, Color.GREEN))
console.log("Large Green:")
console.log(ProductFilter.bySizeAndColor(products, Size.LARGE, Color.GREEN))

// Apply Open-Close
console.log("Large products:")
console.log(BetterFilter.filter(products, new SizeSpecification(Size.LARGE)))
console.log("Green products:")
console.log(BetterFilter.filter(products, new ColorSpecification(Color.GREEN)))

const colorAndSizeSpec: Specification = new AndSpecification([
    new SizeSpecification(Size.LARGE),
    new ColorSpecification(Color.GREEN)
])

console.log("Large Green:")
console.log(BetterFilter.filter(products, colorAndSizeSpec))
