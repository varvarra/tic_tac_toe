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

### Approach and Domain Model

Players       ||     Game       ||   Board ||

    <-----has 2----             
    ------play------>
                  -----has one->
  ------can claim fields of ----->
    ---can win---->                            
    ---can lose--->
