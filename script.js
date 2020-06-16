window.onload = function(){
     let addBtn = document.querySelector(".add"),
         subBtn = document.querySelector(".sub"),
         multBtn = document.querySelector(".mult"),
         divBtn = document.querySelector(".div"),
         percBtn = document.querySelector(".percent"),
         clearBtn = document.querySelector(".clear"),
         dotBtn = document.querySelector('.dot'),
         sqrBtn = document.querySelector('.sqr'),
         displayVal = document.querySelector(".display .currentValue"),
         equal = document.querySelector(".equal"),
         displayCurrentExpression = document.querySelector(".display .currentExpression"),
         keyOperand =  document.querySelectorAll(".keyOperand"),
         keyNumb = document.querySelectorAll(".keyNumb"),
         currentOperand,
         arrRes = 0,
         a=0,
         b=0,
         val1='',
         val2='',
         checkOperand = false; //флаг нажатия операции

        equal.onclick = showResult;    
        clearBtn.onclick = clearVal;

        //Определяем нажатый знак операции
        for(i=0;i<keyOperand.length;i++){             
            keyOperand[i].onclick = function(){         
                currentOperand = this.value;
                if(currentOperand=='^2') {
                    displayCurrentExpression.innerHTML = a +'*'+ a
                }
                else if(currentOperand=='%'){
                    displayCurrentExpression.innerHTML = a + '-' +  b;
                }
                else{
                    displayCurrentExpression.innerHTML = a + currentOperand + val2;
                };
                checkOperand = true;
            }
        }           
        //Определяем нажатую цифру                
        for(i=0;i<keyNumb.length;i++){                  
            keyNumb[i].addEventListener('click', function(){
                if(checkOperand == false){    //если не нажат знак операции то вводимое значение попадает в первую переменную                                  
                    val1 += this.value;   
                    if(val1.length<=16){
                        a = parseInt(val1);
                        displayVal.innerHTML = val1
                        console.log(val1)

                    }
                }
                else if(checkOperand == true){  //если нажат знак операции то вводимое значение попадает во вторую переменную     
                    val2 += this.value;  
                    if(val2.length<=16){  
                        b = parseInt(val2);        
                        displayVal.innerHTML = val2;
                        displayCurrentExpression.innerHTML = a + currentOperand + val2;
                    }
                }   
            }) 
        }
        function showResult(){ 
            if(currentOperand=='+'){
                arrRes = (a+b); 
            }
            else if(currentOperand=='-'){
                arrRes = (a-b)
            }
            else if(currentOperand=='*'){
                arrRes = (a*b) 
            }
            else if(currentOperand=='/'){
                arrRes = (a/b)         
            }
            else if(currentOperand=='%'){
                arrRes = ((a*b)/100)         
            }
            else if(currentOperand=='^2'){
                arrRes = (a*a)         
            }
            displayVal.innerHTML = arrRes 
                val1 = arrRes;
                a = arrRes;
                val2 = '';
                checkOperand = true    
    }
    function clearVal(){
            val1='';
            val2='';
            checkOperand = false; 
            displayVal.innerHTML = 0;
            displayCurrentExpression.innerHTML = '';
    }


}