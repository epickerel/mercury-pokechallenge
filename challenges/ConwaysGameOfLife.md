# Conway's Game of Life Challenge

Welcome to the Conway's Game of Life challenge! This technical interview challenge is designed to test your understanding of cellular automata and your ability to implement the rules of Conway's Game of Life algorithm.

## Challenge Overview

### Task

Implement Conway's Game of Life, a cellular automaton devised by the mathematician John Conway. The game consists of a grid of cells, each of which can be in one of two states: alive or dead. The state of each cell evolves based on a set of rules over discrete time steps.

### Requirements

1. **Grid Display:** Create a grid to represent the game board. You can use any graphical library or a simple console-based display.

2. **Cell State:** Implement the logic for the initial state of cells (alive or dead).

3. **Rules of Evolution:** Implement the rules for the evolution of the cells based on the following rules:
   - A live cell with fewer than two live neighbors dies (underpopulation).
   - A live cell with two or three live neighbors survives.
   - A live cell with more than three live neighbors dies (overpopulation).
   - A dead cell with exactly three live neighbors becomes alive (reproduction).

4. **User Interaction:** Allow users to interact with the game, such as starting, stopping, and resetting the simulation.

5. **Additional Features (Bonus):**
   - Add the ability for users to draw an initial state on the grid.
   - Implement different grid topologies (toroidal, finite, etc.).
   - Allow users to set the speed of the simulation.