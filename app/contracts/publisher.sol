contract Publisher {
    address public owner;
    uint[] public publishedEntities;

    function Publisher() {
        owner = msg.sender;
    }

    function publish(uint newIPFShash) {
        publishedEntities.push(newIPFShash);
    }

    function getIndex(uint index) constant returns (uint) {
        return publishedEntities[index];
    }
}