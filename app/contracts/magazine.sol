contract Magazine {
	uint public storedData;
	address public owner;
	address public editor;
	address public publisher;

	modifier onlyOwner {
		if (msg.sender != owner) throw;
	}

	function Magazine (uint initialValue) {
		owner = msg.sender;
		storedData = initialValue;
	}

	function setEditor(address newEditor) {
		editor = newEditor;
	}

	function setPublisher(address newPublisher) {
		publisher = newPublisher;
	}
}