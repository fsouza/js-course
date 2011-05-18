var walk = function (object) {
    var memberCount = 0;
    for (var member in object) {
        console.log(member, object[member]);
        memberCount++;
    };
    console.log(memberCount);
};
