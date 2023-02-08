/**
 * 
 */
 
 document.querySelector('#btn').addEventListener('click', bringData);
 
 function bringData(){
	 
	 const xhttp = new XMLHttpRequest();
	 
	 xhttp.open('GET', 'user-catalog.json', true);
	 
	 xhttp.send();
	 
	 xhttp.onreadystatechange= function(){
		 if(this.readyState ==4 && this.status == 200){

			 let datos = JSON.parse(this.responseText);
			 
			 let users = document.querySelector('#users');
			 users.innerHTML = '';
			 
			 
			 for(let item of datos){
				 users.innerHTML  +=  `
				 <tr scope="row">
				 	<td>${item.name}</td>
				 	<td>${item.surname}</td>
				 	<td>${item.usertype}</td>
				 	<td>${item.isActive}</td>
				 </tr>
				 `
			 }
		 }
	 }
 }