# Type Guards in TypeScript

## Why Are Type Guards Necessary?

In TypeScript, type guards are essential for providing runtime checks to determine a variable's type. This is especially helpful, where a variable can be of multiple types (e.g., union types). Type guards allow TypeScript to narrow down the type. It gives better code safety, reliability and preventing runtime errors.

### Benefits of Type Guards
- **Improved Type Safety:** Prevents invalid operations on types, reducing runtime errors.
- **Code Clarity:** Clarifies the code by explicitly checking types, making intentions clearer.

---

## Types of Type Guards and Their Use Cases

### 1. **`typeof` Type Guard**

The `typeof` type guard checks for primitive types (like `string`, `number`, `boolean`). It is ideal when handling union types with primitive values and ensuring correct operations for each type.

**Syntax:**
```typescript
if (typeof variable === "type") {
  // Handle type-specific logic here
}
```
Example:

```typescript
const add = (param1: string | number, param2: string | number) => {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
};
```



### 2. **`instanceof` Type Guard**
The instanceof type guard checks if an object is an instance of a particular class or constructor function. This is especially useful for custom classes or objects created with constructors.instanceof is helpful when dealing with class hierarchies and polymorphism, allowing specific handling for subclasses.

Syntax:

```typescript

if (variable instanceof Constructor) {
  // Handle type-specific logic here
}
```
Example:

```typescript
class Animal {

  makeSound() { console.log("I am making sound"); }
}

class Dog extends Animal {
  bark() { console.log("Woof!"); }
}

function makeNoise(animal: Animal) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.makeSound();
  }
}
```

### 3. **`in` Type Guard**
The `in `type guard checks for the presence of a property within an object. This is particularly useful when working with objects of different shapes in union types, ensuring that operations are performed only on objects containing specific properties.

Syntax:

```typescript
if ("property" in variable) {
  // Handle type-specific logic here
}
```
Example:

```typescript
type Car = { drive: () => void };
type Boat = { sail: () => void };

function operateVehicle(vehicle: Car | Boat) {
  if ("drive" in vehicle) {
    vehicle.drive();
  } else {
    vehicle.sail();
  }
}
```

### 4. **`User-Defined` Type Guard**
User-defined type guards allow developers to create custom type-checking functions using the variable is Type syntax. This is valuable for more complex type-checking logic that cannot be achieved with typeof, instanceof, or in.

Syntax:

```typescript
function isType(variable: any): variable is Type {
  // Return true if variable is of type Type, otherwise false
}
```
Example:

```typescript
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim();
  } else {
    animal.fly();
  }
}
```

## Summary
Type guards in TypeScript are powerful tools for narrowing down types in a way that ensures safe and accurate operations across various types.





