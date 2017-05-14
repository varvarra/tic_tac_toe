# Tic Tac Toe Tech Test!

 The purpose of this test is to build the business logic for a game of tic tac toe. It should be easy to implement a working game of tic tac toe by combining your code with any user interface, whether web or command line.

## The brief

### The rules of tic-tac-toe are as follows:

- There are two players in the game (X and O)
- Players take turns until the game is over
- A player can claim a field if it is not already taken
- A turn ends when a player claims a field
- A player wins if they claim all the fields in a row, column or diagonal
- A game is over if a player wins
- A game is over when all fields are taken

### Instructions

 - clone this repository  
 - Open a SpecRunner.html file - you will see the test coverage
 - Open the console in the browser to interact with an application

## User Stories

```
As a player
To play tic-tac-toe
I want to choose a role to play with (X or O)
```

```
As a player
To play tic-tac-toe
I want to be able to claim a field if it is not already taken
```

```
As a player
To let another player play
I should not be allowed to claim a field straight after another claim
```

```
As a player
To win
I want to be able to claim all the fields in a row, column or diagonal
```

```
As a player
To finish playing
One of the players should win
```

```
As a player
To finish playing
All of the fields should be claimed
```

### Approach

- I decided to build my application based on Single Responsibility Principle and gave each 'class' its own responsibility.
- **Game** constructor function - understands just how to play
- **Rulebook** understands the rules of the game. Encapsulating behaviour of the rules in the Rulebook class will help avoid problems if the rules change not so ff all the information about rules was inside a Game class.
- **Player** just knows the properties of the players.
- **Board** only knows the state of its fields and how to change them.

I tried to follow these design principles as a good practice which might be very helpful if the application is extended.


I plan to further add an interface jQuery layer to the game.
