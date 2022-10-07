# RPS Challenge


## UserStories and Domain models
```
-might have cleaned server.js file by making some methods and calling them (if its possible and had time).
-added public folder to use css file in ejs files.
-have used if-else statements because wasn't possible to return in turnery ,also wanted to make sure each statement should always check condition before returning result
```
```
As a DFAT member
So that I can see my name
I would like to register my name before playing an online game
```

```
|Object        |Properties    |Messages      |Output         |
|--------------|--------------|--------------|---------------|
|Player        |name@String   |              |               |
```


```
As a DFAT member
So that I can enjoy myself away from the daily grind
I would like to be able to play rock/paper/scissors
```
### for single player

```
changed name from RPSGame to SinglePlayerGame and domain model after extended criteria. made all blocked variables into class variables so they are available everywhere in class without passing the in blocks

|Object                 |Properties                 |Messages                       |Output         |
|-----------------------|---------------------------|-------------------------------|---------------|
|SinglePlayerGame       |player1@Object             |setSinglePlayerGame(@player)   |               |
|                       |player2@Object             |decideWinner()                 |(message)      |
|                       |randomNumber@Number        |player2Choice()                |randomNumber   |
|                       |randomChoiceArray[@String] |declareWinner()                |(message)      |
|                       |randomChoice@string        |rules()                        |(message)      |
|                       |player1Choice@String       |case0()                        |(message)      |
|                       |                           |case1()                        |(message)      |
|                       |                           |case2()                        |(message)      |
```
### for two Players
```
|Object              |Properties              |Messages                       |Output         |
|--------------------|------------------------|-------------------------------|---------------|
|TwoPlayerGame       |playerArray[@objects]   |setTwoPlayerGame(@players)     |               |
|                    |                        |currentPlayer()                |player[0]      |
|                    |                        |switchTurn()                   |               |
|                    |                        |getWinner(ch1,ch2,pl1,pl2)     |message/player |
|                    |                        |chooseCase(ch1,ch2,pl1,pl2)    |player(name)   |
|                    |                        |twoPlayerCase0(ch2,pl1,pl2)    |player(name)   |
|                    |                        |twoPlayerCase1(ch2,pl1,pl2)    |player(name)   |
|                    |                        |twoPlayerCase2(ch2,pl1,pl2)    |player(name)   |
```
### for extended(Rock, Paper, Scissors, Spock, Lizard) single player 
```
created separate classes for extended games as rules for extended game have some extra conditions, first tried to make a boolean to check if game is extended or normal and implement logic n basis of that boolean but couldn't think how to implement it. made all blocked variables into class variables so they are available everywhere in class without passing the in blocks

|Object                 |Properties                  |Messages                           |Output         |
|-----------------------|----------------------------|-----------------------------------|---------------|
|ExtendedSingle         |player1@Object              |setExtendedOnePlayerGame(@player)  |               |
|                       |player2@Object              |decideWinner()                     |(message)      |
|                       |randomNumber@Number         |player2Choice()                    |randomNumber   |
|                       |randomChoiceArray[@String]  |declareWinner()                    |(message)      |
|                       |randomChoice@string         |rules()                            |(message)      |
|                       |player1Choice@String        |case0()                            |(message)      |
|                       |                            |case1()                            |(message)      |
|                       |                            |case2()                            |(message)      |
|                       |                            |case3()                            |(message)      |
|                       |                            |case4()                            |(message)      |

```

### for extended(Rock, Paper, Scissors, Spock, Lizard) Two players 

```
|Object              |Properties              |Messages                              |Output         |
|--------------------|------------------------|--------------------------------------|---------------|
|ExtendedTwoPlayer   |playerArray[@objects]   |setExtendedTwoPlayerGame(@players)    |               |
|                    |                        |currentPlayer()                       |player[0]      |
|                    |                        |switchTurn()                          |               |
|                    |                        |getWinner(ch1,ch2,pl1,pl2)            |message/player |
|                    |                        |chooseCase(ch1,ch2,pl1,pl2)           |player(name)   |
|                    |                        |twoPlayerCase0(ch2,pl1,pl2)           |player(name)   |
|                    |                        |twoPlayerCase1(ch2,pl1,pl2)           |player(name)   |
|                    |                        |twoPlayerCase2(ch2,pl1,pl2)           |player(name)   |
|                    |                        |twoPlayerCase3(ch2,pl1,pl2)           |player(name)   |
|                    |                        |twoPlayerCase4(ch2,pl1,pl2)           |player(name)   |

```
### Test
```
*** did try to use beforeEach but for some reasons it wasn't working as expected***
All tests are in test folder
First i made separate test file for each js file but because most of them just had one or two tests for routes so i made them together in one file for each game type with different test suite for each file
some of tests from singlePlayerGameClassTests and ExtendedSingleClass were working before but when i made all blocked variables as class variables they stopped working because before i was passing them in as argument but now these variables were calculated on basis of values calculated from block of codes
```



