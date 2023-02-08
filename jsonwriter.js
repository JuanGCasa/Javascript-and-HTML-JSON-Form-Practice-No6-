/**
 * 
 */

 document.getElementById("formUser").addEventListener("submit", submitData, false);
 var regName = /^[A-Za-z]+$/;
 
 
 function submitData(event){
	 event.preventDefault();
	 
	 var name = document.getElementById("name").value;
	 if(!regName.test(name)){
		    alert('Invalid name given.');
		    return false;
		}else{
		    console.log(true);
		}
	 var surname = document.getElementById("surname").value;
	 if(!regName.test(surname)){
		    alert('Invalid surname given.');
		    return false;
		}else{
		    console.log(true);
		}
	 var userType = document.getElementById("userType").value;
	 if (userType != 'admin' && userType != 'user'){
		 alert('Invalid user Type given.');
		    return false;
	 	}else{
			 console.log(true);
		 }
	 var isActive = document.getElementById("isActive").value;
	 
	 var id = '12';
	 var index = '12';
	 
	 var newUser = { id:id, index:index, userType:userType, name: name, surname:surname, isActive:isActive};
	 console.log(newUser);
	 
	 alert('You created ' + name.toString() + ' ' + surname.toString() + '!!');
	 gohome();
 }
 
 
function gohome()
{
window.location.href="index.html"
}