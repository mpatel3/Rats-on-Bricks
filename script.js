/*Declaring Array */
var temp_array = [];  /*Array for storing the Temprature Values */
var input_arr = []; /*Array for storing the Rats positions*/
var min_array = []; /*Final Rats Positions*/

function RatsPostions(input1,input2,input3)
{ 
	temp_array = input2.split(',');
        
        /*Creating a 2 dimension array for the temprature*/
        for(var k=0;k<temp_array.length;k++)
        {
            temp_array.push(temp_array[0].split('#'));
            temp_array.shift();
           
        }
        
        /*Creating a 2 dimensional array for rat positions*/
        
        input_arr = input1.split(',');
        
        for(var p=0;p<input_arr.length;p++)  // position array
        {
            input_arr.push(input_arr[0].split('#'));
            input_arr.shift();
        }
       
       /*Function to find the Minimum Magnitude from the current rat position and that bricks's dimension.*/
        function findMin(pos1,pos2) {
    
          var  Min;
          var  obj  = [pos1,pos2];
          var count = 0;
           
            /* Checking Top position from current brick */
            if( pos1-1 >= 0 && pos2 >= 0) {
 
                Min = Math.abs(temp_array[pos1][pos2] - temp_array[pos1-1][pos2]); 
                obj[0]=pos1-1;
                obj[1]=pos2;
                
            } 
                       
            /* Checking right position from current brick */
            if(pos1 >= 0 && pos2+1 < 5) {

              if( Min != undefined ) {
               
                if(Math.abs(temp_array[pos1][pos2] - temp_array[pos1][pos2+1]) < Min) {
                    
                    Min = Math.abs(temp_array[pos1][pos2] - temp_array[pos1][pos2+1]);
                    obj[0]=pos1;
                    obj[1]=pos2+1;
                        
                    }
                    
                } else {
                
                    Min = Math.abs(temp_array[pos1][pos2] - temp_array[pos1][pos2+1]);
                    obj[0]=pos1;
                    obj[1]=pos2+1;
                    
                }
            }  
	   
	    /* Checking Bottom position from current brick */	                   
            
            if(pos1+1 < 6 && pos2 >= 0) {
               
                
                if(Min != undefined ) {
                
                if(Math.abs(temp_array[pos1][pos2] - temp_array[pos1+1][pos2]) < Min) {
                      
                    Min = Math.abs(temp_array[pos1][pos2] - temp_array[pos1+1][pos2]);
                    
                    obj[0]=pos1+1;
                    obj[1]=pos2;
                        
                    }
                    
                } else {
                
                    Min = Math.abs(temp_array[pos1][pos2] - temp_array[pos1+1][pos2]);
                    obj[0]=pos1+1;
                    obj[1]=pos2;
                    
                }
            } 
            
           /* Checking left position from current brick */ 
           
            if(pos1 >= 0 && pos2-1 >= 0 ) {
                
                if(Math.abs(temp_array[pos1][pos2] - temp_array[pos1][pos2-1]) < Min) {
                   
                   Min = Math.abs(temp_array[pos1][pos2] - temp_array[pos1][pos2-1]);
                   obj[0]=pos1;
                   obj[1]=pos2-1;
                }
                
            } 
                
            return obj; /*Returning a next position of rat as an array of rats */
        
        } /*End of findMin function*/
            
        var count2=0;
        
        /*No. of iteration need to perform to find the final rat position.*/ 
        /*Taking input3 for looping constraint which passed as argument when ratsPosition function is called. */
        for(var x=0;x<input3;x++)
            { 
                if(count2 === 0 ) {
                    for(var q=0;q<input_arr.length;q++)   
                    {   
                    	/*Array start from 0th position so we need to change the input */
                        input_arr[q][0] = input_arr[q][0] - 1;
                        input_arr[q][1] = input_arr[q][1] - 1;
                        min_array.push(findMin(input_arr[q][0],input_arr[q][1]));

                    }
                    count2++;
                } else {
                    
                    for(var q=0;q<input_arr.length;q++)   
                    {   
                        min_array.push(findMin(input_arr[q][0],input_arr[q][1]));

                    }
                    
                }
              
                input_arr = []; /*flusing the input_array for the next iteration. */
                input_arr = min_array;
                min_array = []; /*or flusing the min_array for the next iteration. */ 
                
             
            }             
	} 


/*Calling a Function. */
RatsPostions("1#1,2#5,3#3,6#3","2#6#8#6#-7,2#5#-5#-5#0,-1#3#-8#8#7,3#2#0#6#9,2#1#-4#5#8,-5#6#7#4#7",3);

    
