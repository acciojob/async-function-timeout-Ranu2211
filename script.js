//your JS code here. If required.
document.getElementById('use-form').addEventListener('click', async function(e){
	e.preventDefault();
	const text = document.getElementById('text').value.trim();
	const delay = parseInt(document.getElementById('delay').value.trim(),10);
	if(!text || isNaN(delay) || delay<=0){
		alert("plase provide valid values");
		return;
	}
	 function lateInTime(){
		 return new Promise((resolve, reject) => {
			 setTimeout(()=>{
			resolve(text);
		}, delay);
		 });
	}
	 
		const result = await lateInTime();
		document.getElementById('output').textContent = result;
});