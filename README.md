Rock Paper Sciccor Game
===================

About the Project:
-----------

- This is BackEnd Project
- Used Views for having a mock FrontEnd

Build With:
---------

### Languages
- JavaScript
- EJS
- CSS

### IDE
- Visual Studio Code

Getting Started:
----------

Steps to follow in order to run this project locally on your machine

1. Clone the repo

    You can copy project link from *green* button named as **Code**, link should be like this
    ```
    git clone http://github.com/your-username/Project-name.git
    ```
2. Install dependencies

    You can install them by writing this command in terminal or by right clicking on **Package.json** file and selecting *Install dependencies* of both folders
    ```
    npm install
    ```
3. Run servers

    Open integrated terminal from **Package.json** file and apply command
    ```
    npm start
    ```
4. Open in Browser
  
    Press `ctrl` key and click on server link from terminal to open project in browser
    

5. Test

    You can run tests by opening integrated terminal from **Package.json** file and running this command in terminal
    ```
    npm test
    ```

Problem Statements:
----------------

### Problem
  ```
  The DFA team ( **DFAT** ) have asked you to provide a game for them. The daily grind is pretty tough and they need time to have a little fun.
Your task is to provide a _Rock, Paper, Scissors_ game for them so they can play on the web
```

### User Stories

1.
```
As a DFAT member
So that I can see my name
I would like to register my name before playing an online game
```
Domain model

|Object        |Properties    |Messages      |Output         |
|--------------|--------------|--------------|---------------|
|Player        |name@String   |              |               |


2.
```
As a DFAT member
So that I can enjoy myself away from the daily grind
I would like to be able to play rock/paper/scissors
```
Domain model for single player

```
changed name from RPSGame to SinglePlayerGame and domain model after extended criteria. made all blocked variables into class variables so they are available everywhere in class without passing the in blocks
```
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


Domain model for two Players

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

Extended(Rock, Paper, Scissors, Spock, Lizard) single player 
```
created separate classes for extended games as rules for extended game have some extra conditions, first tried to make a boolean to check if game is extended or normal and implement logic n basis of that boolean but couldn't think how to implement it. made all blocked variables into class variables so they are available everywhere in class without passing the in blocks
```

Domain model
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


Extended(Rock, Paper, Scissors, Spock, Lizard) Two players 

Domain model

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

Project Review:
------------

- Could have tested EJS pages
- Could have provided more functionality of game
- Would like to make it full stack application



