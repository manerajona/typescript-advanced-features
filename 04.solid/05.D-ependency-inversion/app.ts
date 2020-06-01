enum Relationship {
    PARENT,
    CHILD,
    SIBLING
}

class Person {
    constructor(readonly name: string) {
        this.name = name;
    }
}

interface RelationshipBrowser {
    findAllChildrenOf(name: string): Person[]
}

class Relationships implements RelationshipBrowser {

    private relations: [Person, Relationship, Person][] = []

    public addParentAndChild(parent: Person, child: Person) {
        this.relations.push([parent, Relationship.PARENT, child])
        this.relations.push([child, Relationship.CHILD, parent]);
    }
    public findAllChildrenOf(name: string): Person[] {
        return this.relations
            .filter(x => (x[0].name == name) && (x[1] == Relationship.PARENT))
            .map(x => x[2])
    }

}

const faher: Person = new Person("John")
const child1: Person = new Person("Chris")
const child2: Person = new Person("Matt")

// low-level module
const relationships = new Relationships();
relationships.addParentAndChild(faher, child1);
relationships.addParentAndChild(faher, child2);

const research = (browser: RelationshipBrowser, name: string) => browser.findAllChildrenOf(name).map(child => `${name} has a child called ${child.name}`)

const childs = research(relationships, "John")

childs.forEach(c => console.log(c))