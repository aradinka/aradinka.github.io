---
title: "lean-java"
tags:
- all-post
enableToc: false
---

- we can't redeclare variables multiple times in the same code blocks
- static method can only work with static variables

---

### dtypes

primitive dtypes: int, double, float, boolean  

- compiler treated number as int and decimal as double by default
-  conversion between the different types is absoultely possible (implicit/explicit)
	- implicit: java change int number to large number or double
- double to integer conversion isn't possible automatically
- if we divide int with int, the result never be a float


integer:
- byte: -128 to 127
- short: -32,768 to 32,767
- int: -2147483648 to 2147483647
- long: 9223372036854775807L -> Kasih L di belakangnya untuk large number

decimal:
- double: 4.9E-324 to 1.79 -> 64-bit floating point numbers with a very long range
- float: 1.4E-45 to 3.4F -> single position 32-bit floating point numbers with a smaller range, add F at the end of the number

booleans:
- boolean: true or false

characters:
- char: "a" or unicode subsequences
- String

---

## operator

```java
int number = 4;
number++ // equal to number += 1 or number = number + 1
```

---

## string

```java
String name = "Azka Purba"; // literal string

String name = new String("Azka Purba"); // object string
```

usecase:

![[string in java.png]]

### Formatted String

```java
String name = "Azka";
int age = 22;
String formattedString = String.format(
	"My Name is %s, Im %d years old", // %f for double, %b for boolean
	name, 
	age
);
System.out.println(formattedString)
```

---

## Array

Arrays in java is reference type

```java
char vowels[] = new char[5]; // create new array containing char with the length of 5

// or
char vowels[] = {'a', 'i', 'u', 'e', 'o'};

Array.toString(vowels);
Array.sort(vowels);

char key = 'o';
int foundItemIndex = Arrays.binarySearch(vowels, key);


// other
Arrays.fill(vowels, "x") // replace all elements with "x"
char copyOfVowels[] = Arrays.copyOf(vowels, vowels.length);

int startingIndex = 1;
int endingIndex = 4;
char copyOfVowels[] = Arrays.copyOfRange(vowels, startingIndex, endingIndex);

vowels == copyOfVowels // will return false because it's a different object
Arrays.equals(vowels, copyOfVowels) // to compare it's value
```


---

## Common Method

```java
// string method
.length()
.isEmpty()
.toUpperCase()
.toLowerCase()
.replace()
.contains()

// comparing between String object
string1.equals(string2)

```

