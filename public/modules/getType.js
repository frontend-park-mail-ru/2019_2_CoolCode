class Type {
	constructor() {
		this.imageExtensions = ['jpeg', 'jpg', 'png', 'svg'];
		this.fileExtensions = ['pdf', 'docx', 'doc'];
		this.audioExtensions = ['webm'];
	}

	checkImage(ext) {
		return this.imageExtensions.includes(ext);
	}

	checkFile(ext) {
		return this.fileExtensions.includes(ext);
	}

	checkAudio(ext) {
		return this.audioExtensions.includes(ext);
	}

	createMimeType(ext) {
		if (this.audioExtensions.includes(ext)) {
			return `audio/${ext}`;
		} else if (this.fileExtensions.includes(ext)) {
			switch (ext) {
			case 'pdf':
				return `application/pdf`;
				break;
			case 'doc':
				return `application/msword`;
				break;
			case 'docx':
				return `application/msword`;
				break;
			}
		}
	}
}

export {Type};