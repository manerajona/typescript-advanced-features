# SOLID
## Single responsibility principle
A class (or method) should have only a **single responsibility**. Avoid a *"God class"*, new classes serve to new purposes, this is known as **Separation of concerns**.

## Open / close principle
A class (or method) should be **open** for extension but **closed** for modification. Once implemented they should only be touched to fix errors.

## Liskov substitution principle
Objects (instances of a certain class) should be completely **substitutable** for instances of their subtypes, without altering the correctness of a program.

## Interface segregation principle
Clients should NOT be forced to implement unnecessary methods which they will NOT use. Define a small set of pieces and let clients implement them as they need.

## Dependency inversion principle
**Abstractions** should NOT depend on **Details**, instead **Details** should depend upon **Abstraction**. If high-level modules are ignorant of low-level implementation details, they become more reusable.
