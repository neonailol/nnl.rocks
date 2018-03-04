+++
title = "Kotlin Preconditions"
summary = "failing fast with precoditions"
date = 2018-03-04
draft = false
tags = ["kotlin"]
+++

In this note i would like describe how to fail fast when method invoked with invallid input, or when state is incorrect inside function code.

```kotlin
interface Shop {
    fun quantity(product: Product): BigDecimal
    fun move(product: Product, destination: Shop, quantity: BigDecimal)
}

interface Product

fun transition(source: Shop, destination: Shop, product: Product, quantity: BigDecimal) {

    require(source.quantity(product) > BigDecimal.ZERO) {
        "Quantity of $product on $source is zero"
    }

    source.move(product, destination, quantity)

    check(source.quantity(product) >= BigDecimal.ZERO) {
        "Not enough $product on $source, need $quantity"
    }
}
```

[Source](https://github.com/JetBrains/kotlin/blob/master/libraries/stdlib/src/kotlin/util/Preconditions.kt)
[require](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/require.html)
[requireNotNull](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/require-not-null.html)
[check](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/check.html)
[checkNotNull](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/check-not-null.html)
