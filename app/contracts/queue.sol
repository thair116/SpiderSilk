contract Queue {
    address public owner;
    uint[] public entities;

    function Queue() {
        owner = msg.sender;
    }

    function addEntity(uint newIPFShash) {
        entities.push(newIPFShash);
    }

    function latestEntity() constant returns (uint) {
        return entities[entities.length - 1];
    }

    function deleteLatestEntity() returns (uint) {
        uint newIPFShash = latestEntity();
        delete entities[entities.length - 1];
        entities.length--;
        return newIPFShash;
    }
}