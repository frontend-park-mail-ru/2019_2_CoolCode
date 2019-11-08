onmessage = function(buffer) {
	let reader = new FileReaderSync();
	let answer = reader.readAsDataURL(buffer.data);
	postMessage(answer);
};