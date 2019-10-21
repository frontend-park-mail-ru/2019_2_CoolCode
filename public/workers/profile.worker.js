onmessage = function(buffer) {
	console.log("message received");
	let reader = new FileReaderSync();
	let answer = reader.readAsDataURL(buffer.data);
	postMessage(answer);
};