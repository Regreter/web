function GetSpeed()
{
	var spd=document.getElementById("text2").value
	return spd;
}
function random(){  
    var numbers = [];  
    for (var i = 0; i < 40; i++) {  
        var number = Math.floor(Math.random() * 90 + 10);  
        numbers.push(number);  
        var pElement = document.createElement("p");  
        var parentElement = document.getElementById("boxes");  
        pElement.style.left = i * 20 + i * 2 + "px";  
        pElement.style.top = 300 - 3 * number + "px";  
        pElement.style.height = 3 * number + "px";  
        pElement.setAttribute("class","box");  
        parentElement.appendChild(pElement);  
        }  
        return numbers;  
        }  
function sort(){  
    var numbers = random();  
    var speed=GetSpeed();
    var parentElement = document.getElementById("boxes");  
    var i = 0, j = 0;  
    var time = setInterval(function() {  
    if (i < numbers.length) {  
        if (j < numbers.length - i) {  
            if (numbers[j] > numbers[j + 1]) {  
                var temp = numbers[j];  
                numbers[j] = numbers[j + 1];  
                numbers[j + 1] = temp;  
                parentElement.innerHTML = "";  
                for (var k = 0; k < numbers.length; k++) {  
                    var textNode = document.createTextNode(numbers[k]);  
                    var pElement = document.createElement("p");  
                    pElement.appendChild(textNode);  
                    pElement.style.left = k * 20 + k * 2 + "px";  
                    pElement.style.top = 300 - 3 * numbers[k] + "px";  
                    pElement.style.height = 3 * numbers[k] + "px";  
                    pElement.setAttribute("class","box");  
                    parentElement.appendChild(pElement);  
                   			}  
                   		 }  
                    j++;  
                    }  
                    else{  
                        i++;  
                        j = 0;  
                        }  
                    }  
                    else {  
                        clearInterval(time);   
                        return;  
                    }  
                }, speed);    
            }  
          
function stop()
{
	alert('stop');
}

function clear()
{
	$('#box').remove();
}

/*
function removeTags() {//tagName：标签；tagClass：类名
            var tagElements = document.getElementsByTagName('p');
            for (var m = 0; m < tagElements.length; m++) {
                if (tagElements[m].className == 'box') {
                    //tagElements[m].parentNode.replaceChild(document.createTextNode(tagElements[m].textContent), tagElements[m]);//去除元素中标签，保留文本
                    tagElements[m].parentNode.removeChild(tagElements[m]);//去除元素
                }
            }
        }
 */
function GetArray()
{
	var input=document.getElementById("text1");
	if(input.value)
	{
		var arr=input.value.split(",");
		
	}
	    for (var i = 0; i <arr.length; i++) {  
        var pElement = document.createElement("p");  
        var parentElement = document.getElementById("boxes");  
        pElement.style.left = i * 20 + i * 2 + "px";  
        pElement.style.top = 300 - 3 * arr[i] + "px";  
        pElement.style.height = 3 * arr[i] + "px";  
        pElement.setAttribute("class","box");  
        parentElement.appendChild(pElement);  
        }  
        return arr;  
}
function inputsort(){  
    var numbers = GetArray();  
    var speed=GetSpeed();
    var parentElement = document.getElementById("boxes");  
    var i = 0, j = 0;  
    var time = setInterval(function() {  
    if (i < numbers.length) {  
        if (j < numbers.length - i) {  
            if (numbers[j] > numbers[j + 1]) {  
                var temp = numbers[j];  
                numbers[j] = numbers[j + 1];  
                numbers[j + 1] = temp;  
                parentElement.innerHTML = "";  
                for (var k = 0; k < numbers.length; k++) {  
                    var textNode = document.createTextNode(numbers[k]);  
                    var pElement = document.createElement("p");  
                    pElement.appendChild(textNode);  
                    pElement.style.left = k * 20 + k * 2 + "px";  
                    pElement.style.top = 300 - 3 * numbers[k] + "px";  
                    pElement.style.height = 3 * numbers[k] + "px";  
                    pElement.setAttribute("class","box");  
                    parentElement.appendChild(pElement);  
                   			}  
                   		 }  
                    j++;  
                    }  
                    else{  
                        i++;  
                        j = 0;  
                        }  
                    }  
                    else {  
                        clearInterval(time);   
                        return;  
                    }  
                }, speed);    
            }  
