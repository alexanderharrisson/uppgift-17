function hej(){
	alert("Det funkar!");
}
function getInfo() {
	var url = new URL(window.location.href);
	var tjo = url.searchParams.get("tjo");
	console.log(tjo);
}