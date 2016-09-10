
/*------------------------------DECLARING ARRAYS -----------------------------------------------------------------*/

var temp_array = [];    /*ARRAY FOR STORING THE TEMPRATUE VALUES*/
var input_arr = [];    /*ARRAY FOR STORING THE RATS POSITIONS AND FINAL OUTPUT*/
var min_array = [];    /*RATS POSITION ARRAY USED FOR INTERMIDIATE PHASES*/

function RatsPostions(input1,input2,input3)
{ 
	temp_array = input2.split(',');
        
        /*CREATING 2 DIMENSION ARRAY FOR THE TEMPRATURE*/
        
        for(var k=0;k<temp_array.length;k++)
        {
            temp_array.push(temp_array[0].split('#'));
            temp_array.shift();
           
        }
        
        /*CREATING 2 DIMENSION ARRAY FOR RATS POSITIONS*/
        
        input_arr = input1.split(',');
        
        for(var p=0;p<input_arr.length;p++)  
        {
            input_arr.push(input_arr[0].split('#'));
            input_arr.shift();
        }
       
       /* FUNCTION TO FIND THE MINIMUM MAGNITUDE(TEMPRATURE DIFFERENCE) AND THE CURRENT RAT POSITIONS (i.e. BRICK DIMENSION) */
        
        function findMin(pos1,pos2) {
    
          var  Min;
          var  obj  = [pos1,pos2];
          var count = 0;
           
            /* CHECK TOP POSITION FROM THE CURRENT BRICK */
            
            if( pos1-1 >= 0 && pos2 >= 0) {
 
                Min = Math.abs(temp_array[pos1][pos2] - temp_array[pos1-1][pos2]); 
                obj[0]=pos1-1;
                obj[1]=pos2;
                
            } 
                       
            /* CHECK RIGHT POSITION FROM THE CURRENT BRICK */
            
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
	   
	    /* CHECK BOTTOM POSITION FROM THE CURRENT BRICK */	                   
            
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
            
           /* CHECK LEFT POSITION FROM THE CURRENT BRICK */ 
           
            if(pos1 >= 0 && pos2-1 >= 0 ) {
                
                if(Math.abs(temp_array[pos1][pos2] - temp_array[pos1][pos2-1]) < Min) {
                   
                   Min = Math.abs(temp_array[pos1][pos2] - temp_array[pos1][pos2-1]);
                   obj[0]=pos1;
                   obj[1]=pos2-1;
                }
                
            } 
                
            return obj; /* RETURN NEXT POSITION BASED ON THE MINIMUM TEMPRATURE DIFFERENCE */
        
        } /*------------------------- END OF FINDMIN FUNCTION --------------------------------*/
            
        var count2=0;
        
        /*NO. OF ITERATION NEED TO PERFORM TO FIND THE FINAL POSTION OF RATS .*/ 
        /* TAKE INPUT3 FOR LOOPING CONSTRAINT WHICH PASSED AS ARGUMENT WHEN ratsPosition FUNCTION IS CALLED. */
        
        for(var x=0;x<input3;x++)
            { 
                if(count2 === 0 ) {
                    for(var q=0;q<input_arr.length;q++)   
                    {   
                    	/* ARRAY START FROM 0TH POSTION SO WE NEED TO CHANGE THE INPUT */
                        
                        input_arr[q][0] = input_arr[q][0] - 1;
                        input_arr[q][1] = input_arr[q][1] - 1;
                        min_array.push(findMin(input_arr[q][0],input_arr[q][1]));

                    }
                    count2++; /*ONLY ONCE WE NEED TO PEFORM -1 OPERATION */
                    
                } else {
                    
                    for(var q=0;q<input_arr.length;q++)   
                    {   
                        min_array.push(findMin(input_arr[q][0],input_arr[q][1]));

                    }
                    
                } /*END OF ELSE */

                /*INPUT_ARR CONTAINS THE FINAL RESULT*/   
                
                input_arr = []; /* FLUSH THE INPUT ARRAY FOR THE NEXT ITERATION */
                input_arr = min_array;
                min_array = []; /* FLUSH THE MIN_ARRAY FOR THE NEXT ITERATION. */ 
            
            	
            } /*END OF FOR LOOP*/
           
           /*---------------------------------CREATE A STRING TO RETURN A FINAL RESULT-------------------*/
           var finalString = '';
           
           for(z=0;z<input_arr.length;z++) {
            
              finalString += (input_arr[z][0] + 1) + '#' + (input_arr[z][1] + 1) + ','; 
              
           }
           
          /*RETURN THE FINAL OUTPUT*/ 
          
          return finalString.substr(0,(finalString.length - 1));          
            
	} 


/* CALL FUNCTION TO CHECK THE RESULT */
var finalRatsPositions = RatsPostions("1#1,2#5,3#3,6#3","2#6#8#6#-7,2#5#-5#-5#0,-1#3#-8#8#7,3#2#0#6#9,2#1#-4#5#8,-5#6#7#4#7",3);
console.log(finalRatsPositions);

    
