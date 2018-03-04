+++
title = "Kotlin Preconditions"
summary = "failing fast with preconditions"
date = 2018-03-04
draft = false
tags = ["kotlin", "oop"]
+++

In this note, I would like to describe how to fail fast when method invoked with invalid input, or when a state is incorrect inside function code.

The concept of preconditions is coming from [Design by contract](https://en.wikipedia.org/wiki/Design_by_contract) approach. Simply saying client code that invokes an operation must meet required conditions and be in right state before and after an invoking.

I use transition of product between to shops as an example. Here are requirements for this operation:

- Transferring quantity must be positive
- Source and destination shops must not be equal
- Source shop must have specified product on balance
- After operation quantity of product on source shop must be zero or positive

First, there are specifications of shop and product:

```kotlin
interface Shop {
    fun quantity(product: Product): BigDecimal
    fun move(product: Product, destination: Shop, quantity: BigDecimal)
}

interface Product
```

And here our transition function stub:

```kotlin
fun transition(source: Shop, destination: Shop, product: Product, quantity: BigDecimal) {
    TODO("Not Implemented")
}
```

Let's start with most typical approach for implementation:

```kotlin
fun transition(source: Shop, destination: Shop, product: Product, quantity: BigDecimal) {

}
```

[Source](https://github.com/JetBrains/kotlin/blob/master/libraries/stdlib/src/kotlin/util/Preconditions.kt)
[require](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/require.html)
[requireNotNull](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/require-not-null.html)
[check](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/check.html)
[checkNotNull](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/check-not-null.html)
[assert](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/assert.html)
[error](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/error.html)
