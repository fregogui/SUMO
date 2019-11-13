pragma solidity >=0.4.22 <0.6.0;
contract Location {
        struct Course {
            uint id;
            uint price;
            uint startTime;
            uint endTime;
            uint brand;
            uint insurance;
            uint note;
    }

    uint newNote = 3;

    event InitCourse(uint id, uint price, uint brand, uint insurance, address user);
    event FinishCourse(uint id, uint note, address renter);

    mapping (address => uint) public userToNote;
    mapping (uint => Course) public idToCourse;
    mapping (address => uint) public userToTotalCourses;
    mapping (address => mapping (uint => uint)) public userCourseIdByIndex;


    //générer l'id depuis le fronf
    function initCourse(uint _id, uint _price, uint _brand, uint _insurance) public{
        idToCourse[_id] = Course( _id, _price, now, 0, _brand, _insurance, 0);
        userToTotalCourses[msg.sender] = userToTotalCourses[msg.sender] + 1;
        userCourseIdByIndex[msg.sender][userToTotalCourses[msg.sender]] = _id;
        emit InitCourse(_id, _price, _brand, _insurance, msg.sender);
    }

    function updateScore(address _address, uint _note) private {
        require(_address == msg.sender);
        userToNote[_address]=(userToNote[_address]+_note)/2;
    }

    function finishCourse(uint _id) public{
        require(idToCourse[_id].endTime == 0);
        idToCourse[_id].endTime=now;
        idToCourse[_id].note = newNote;
        updateScore(msg.sender,newNote);
        emit FinishCourse(_id, newNote, msg.sender);
    }

    function getNote(address _user) public view returns (uint) {
        return userToNote[_user];
    }


}
