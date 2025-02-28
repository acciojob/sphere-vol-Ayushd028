function volume_sphere() {
	let radiusInput = document.querySelector("#radius").value;
	let radius = parseFloat(radiusInput);

	if(isNaN(radius) || radius<0){
		document.querySelector("#volume").value = "NaN";
		return false;
	}
	
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
	document.querySelector("#volume").value = volume.toFixed(4);
	return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
