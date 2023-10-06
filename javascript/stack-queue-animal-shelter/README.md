# Animal Shelter

The AnimalShelter class is a JavaScript implementation of a shelter that holds dogs and cats. It operates using a first-in, first-out (FIFO) approach, allowing you to enqueue and dequeue animals based on your preference.

## Whiteboard Process

- [Whiteboard](./IMG_0027.jpg)

## Approach & Efficiency

- The `enqueue` method adds an animal (either a dog or a cat) to the shelter based on its species (species property).
- The `dequeue` method removes and returns the first animal from the shelter based on your preference (either "dog" or "cat"). If the preference is not "dog" or "cat" or if the shelter is empty, it returns null.

### `enqueue(animal)`

Adds an animal to the shelter.

- Arguments:
  - `animal` (Object): An object representing an animal with species (either "cat" or "dog") and name (string).

### `dequeue(pref)`

Removes and returns an animal from the shelter based on preference.

- Arguments:
  - `pref` (string): The preference for dequeuing an animal, either "cat" or "dog".

- Returns:
  - `animal` (Object | null): The dequeued animal based on preference, or null if no matching animal is available.

## Solution

- [Code Link](../stack-queue-animal-shelter/index.js)
- [GitHub Actions](https://github.com/KatKho/data-structures-and-algorithms/actions)
