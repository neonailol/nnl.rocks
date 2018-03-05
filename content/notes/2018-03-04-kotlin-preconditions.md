+++
title = "Kotlin Preconditions"
summary = "failing fast with preconditions"
date = 2018-03-04
draft = false
tags = ["kotlin", "oop"]
+++

In this note, I would like to describe how to fail fast when method invoked with invalid input, or when a state is incorrect inside function code.

The concept of preconditions is coming from [Design by contract](https://en.wikipedia.org/wiki/Design_by_contract) approach. Saying, client code that invokes an operation must meet required conditions and be in the right state before and after an invoking.

I use transition of product between to shops as an example. Here are requirements for this operation:

- Transferring quantity must be positive
- Source and destination shops must not be equal
- Source shop must have specified product on balance
- After operation quantity of product on source shop must be zero or positive

First, there are specifications of shop and product:

{{< highlight kotlin >}}
interface Shop {
    fun quantity(product: Product): BigDecimal
    fun move(product: Product, destination: Shop, quantity: BigDecimal)
}

interface Product
{{< /highlight >}}

Moreover, here our transition function stub:

{{< highlight kotlin >}}
fun transition(source: Shop, destination: Shop, product: Product, quantity: BigDecimal) {
    TODO("Not Implemented")
}
{{< /highlight >}}

Let's start with the most typical approach for implementation:

{{< highlight kotlin >}}
fun transfer(source: Shop, destination: Shop, product: Product, quantity: BigDecimal) {

    if (quantity <= BigDecimal.ZERO) {
        throw IllegalArgumentException(
            "Transition quantity must be positive, found $quantity."
        )
    }

    if (source == destination) {
        throw IllegalArgumentException(
            "Cannot transition to itself, $source and $destination are equal"
        )
    }

    if (source.quantity(product) <= BigDecimal.ZERO) {
        throw IllegalStateException(
            "Quantity of $product on $source is zero"
        )
    }

    source.move(product, destination, quantity)

    if (source.quantity(product) <= BigDecimal.ZERO) {
        throw IllegalStateException(
            "Not enough $product on $source, need $quantity"
        )
    }
}
{{< /highlight >}}

Kotlin saves us from null checks, but the code is not great:

- Much noise from the if statements
- Repetitive throw statements
- Only one line that does something other than checking

Now see how we can apply kotlin [preconditions](https://github.com/JetBrains/kotlin/blob/master/libraries/stdlib/src/kotlin/util/Preconditions.kt) to this code.

First, lets see what tools we have in kotlin standard library:

- [require(value)](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/require.html): Throws an `IllegalArgumentException` if the value is false
- [requireNotNull(value)](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/require-not-null.html): Throws an `IllegalArgumentException` if the value is null. Otherwise returns the not null value.
- [check(value)](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/check.html): Throws an `IllegalStateException` if the value is false.
- [checkNotNull(value)](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/check-not-null.html): Throws an `IllegalStateException` if the value is null. Otherwise returns the not null value.
- [assert(value)](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/assert.html): Throws an `AssertionError` if the value is false and runtime assertions have been enabled on the JVM using the `-ea` JVM option.
- [error(message)](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/error.html): Throws an `IllegalStateException` with the given message.

All of this functions, except error, can be invoked with an optional lazy message, supplied via lambda.

Next, I rewrite transfer function code using these functions:

{{< highlight kotlin >}}
fun transfer2(source: Shop, destination: Shop, product: Product, quantity: BigDecimal) {

    require(quantity > BigDecimal.ZERO) {
        "Transition quantity must be positive, found $quantity."
    }

    require(source != destination) {
        "Cannot transition to itself, $source and $destination are equal"
    }

    check(source.quantity(product) > BigDecimal.ZERO) {
        "Quantity of $product on $source is zero"
    }

    source.move(product, destination, quantity)

    check(source.quantity(product) >= BigDecimal.ZERO) {
        "Not enough $product on $source, need $quantity"
    }
}
{{< /highlight >}}

The code is much more straightforward and easy to read, but still, there is room for improvements. Imagine that you need to reuse some of this checks in other code, for example, checking quantity for positive values. It would require copy and paste, and this can lead to errors, where you forgot to change some parameters. What can we do about it? We can apply some of concepts of [object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming) and [domain driven design](https://en.wikipedia.org/wiki/Domain-driven_design) to code for making it better.

Start with _quantity_; it is a good candidate for translating into [value object](https://martinfowler.com/bliki/ValueObject.html)

{{< highlight kotlin >}}
class Quantity(val value: BigDecimal) {
    init {
        require(value > BigDecimal.ZERO) {
            "Quantity must be positive, found $value"
        }
    }
}
{{< /highlight >}}

Now we can be sure that quantity is always greater than zero. Next is _transfer_ function is an excellent candidate to becoming set of objects:

{{< highlight kotlin >}}
open class Operation(
    val source: Shop,
    val destination: Shop
) {

    init {
        require(source != destination) {
            "Cannot make an operation, $source and $destination are equal"
        }
    }
}

class BalanceTransferCheck(
    private val shop: Shop,
    private val product: Product,
    private val operation: () -> Unit
) {

    fun commit() {
        checkBalance()
        operation()
        checkBalance()
    }

    private fun checkBalance() {
        check(shop.quantity(product) >= BigDecimal.ZERO) {
            "Not enough $product on $shop"
        }
    }
}

class Transfer(
    source: Shop,
    destination: Shop,
    private val product: Product,
    private val quantity: Quantity
) : Operation(source, destination) {

    fun commit() {
        BalanceTransferCheck(source, product) {
            source.move(product, destination, quantity.value)
        }.commit()
    }
}
{{< /highlight >}}

Looking good, we removed most of the repetitions, made reusable components out of function, and in general designed a quality solution for our problem.
