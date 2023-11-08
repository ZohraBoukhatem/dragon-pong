# DRAGON PONG

![Screenshot 2023-11-08 153035](https://github.com/ZohraBoukhatem/dragon-pong/assets/138993259/ab2538c0-0257-47ba-a0ea-fa07c1454787)

# Description
A this simple "tennis like" game with two players and a (dragon)ball. 
The goal is to prgisotect the wall behind you and defeat your opponent by making the opponent miss the ball. 

# How to play
- move player1 with the 'w' and 's' keys, 
- move player2 with the Up and Down arow.
- try to keep the ball away from your back wall and push it to the opponents wall

# Demo 
https://zohraboukhatem.github.io/pong/




# MVP (essential functionality)
        - two users with up and down movements in different positions
        - a ball that moves in time, is clamped 
        - a gameover when the ball hits the border behind the player

# MILESTONES
[x] the players
            - create player1 (position size), 
            - connect with HTML, with parent element (the court)
            - add movement (eventlistener, moving fuctions)
            - rinse and repeat for player2 except different keys and position


[x]the ball
            - create ball (position size), 
            - movement in time 

[x]the clamp
            - clamp function for players
            - clamp function for ball

[x]the gameover
            - if ball touches the border behind player 

[x] clean up 
[ ] ball collision with angles
