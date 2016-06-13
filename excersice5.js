
			
 			var event1 = document.getElementById('btn');
			event1.addEventListener('click',sums,false);
			
			function sums(){
				
				var num1 = Number(document.getElementById('input1').value);
				var increment =  num1 +1 ;
				var decrement = num1-1;
				document.getElementById('demo').innerHTML = increment + '<br/> '+ decrement ;
			}
			


				 