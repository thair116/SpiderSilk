import "queue.sol";

contract Magazine {
    uint public storedData;
    address public owner;
    address public editor;
    address public publisher;
    // address public queue;
    Queue public queue;

    modifier onlyOwner {
        if (msg.sender != owner) throw;
    }

    function Magazine (uint initialValue, address newQueue) {
        storedData = initialValue;
        owner = msg.sender;
        queue = Queue(newQueue);
    }

    function setEditor(address newEditor) {
        editor = newEditor;
    }

    function setPublisher(address newPublisher) {
        publisher = newPublisher;
    }

    function setQueue(address newQueue) {
        // queue = newQueue;
        queue = Queue(newQueue);
    }

    function addEntity(uint newIPFShash) {
        // this needs to send the msg.sender. will it be sent automatically?
        queue.addEntity(newIPFShash);
    }

    function latestEntity() constant returns (uint) {
        return queue.latestEntity();
    }

    function deleteLatestEntity() {
        queue.deleteLatestEntity();
    }

    function publishLatestEntity() {
        uint newIPFShash = queue.deleteLatestEntity();
    }
}