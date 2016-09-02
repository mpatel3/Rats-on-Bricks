# Rats-on-Bricks
A JavaScript code for Rats moving on the bricks based on the Temperature change on adjacent blocks of the bricks

##Question

* Some Rats are moving in Rectangular Surface which is made using Rectangular bricks. Each brick has its own **temprature**.

*   col-1   | col-2    | col-3   | col-4   | col-5
    --- | --- | --- | --- | ---
    2   | 6   | 8   | 6   | 7
    2   | 5   | -5  | -5  | 0
    -1  | 3   | -8  | 8   | 7
    3   | 2   | 0   | 6   | 9
    2   | 1   | -4  | 5   | 8
    -5  | 6   | 7   | 4   | 7
    
* Above table shows the example.Number written in each brick is the temprature of that brick. 

* Lets say some rats are positioned on some bricks. i.e. on **[1,1] & [2,5] & [3,3] & [6,3]**

* At any time Lets say rat always move to that nearby brick,by moving to which he can go
  minimum temprature change.(magnitude)

![Example ScreenShot](https://github.com/CybageManthan/Rats-on-Bricks/blob/master/screenshot/Capture.PNG)


* Above Figure Shows the one iteration of the rats movements from their **initial position** and the  
  calculation of the Temperature differnce(magnitude.)
  
* **Your code should output positions of the rats after any number of steps say after n steps**

* Criteria
    
    * **Input Specification**: Input should be initial position of rats,temperature of bricks and the no. of steps after which you want to find the position of the rats. ** For example: input should be    "1#1,2#5,3#3,6#3","2#6#8#6#-7,2#5#-5#-5#0,-1#3#-8#8#7,3#2#0#6#9,2#1#-4#5#8,-5#6#7#4#7",3**
        
    * **Output Specification**: Output should be positions of rats after given number of steps.Output position should be in order of given input positions. ** For example: output for above input should be "2#1,2#4,2#3,6#2".
    
    * **Condition**: If you have a choice in movement(i.e. more than one positions give minimum change in magnitude ) then preference should be given in order upper,right,bottom and left.

