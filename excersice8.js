			var event1 = document.getElementById('btn');
			event1.addEventListener('click',sums,false);

			function sums(){
				var num1 = Number(document.getElementById('input1').value);
				var num2 = Number(document.getElementById('input2').value);
				var num3 = Number(document.getElementById('input3').value);

				var sum1 =  (num1 + num2) * num3; 
				var sum2 =  (num1 + num2 + num3); 

				document.getElementById('demo').innterHTML = "(a + b) * c : " + sum1 +'<br>'+ " (a + b + c) : "+sum2;
			}

			$(window).ready(function(){

				$('#btn').on('click',function(){
					$("body").css('background-color','');
				});

			});