var ClozeCard = function(fullText, cloze) {
	this.fullText = fullText;
	this.cloze = cloze;
	this.partial = this.getPartialText(this.fullText, this.cloze);
}

ClozeCard.prototype.getPartialText = function(fullText, cloze) {
	var partialText = null;
	var clozeLocation = fullText.indexOf(cloze);
	var clozeLength = cloze.length;
	if( clozeLocation >= 0 ) {
		partialText = fullText.substring(0, clozeLocation) + "..."
			+ fullText.substring(clozeLocation + clozeLength);
	} else {
		throw new Error("Cloze text does not exitst in full text.");
	}
	return partialText;
}

module.exports = ClozeCard;
