contract Queue {
	address public owner;
	uint[] public entities;

	function Queue() {
		owner = msg.sender;
	}

	function addEntity(uint newEntity) {
		entities.push(newEntity);
	}

	function latestEntity() constant returns (uint) {
		return entities[entities.length - 1];
	}
}