function processData(input) {
    //Enter your code here
    let spliting = input.split(/\n/);
    var contactList = {};

    // console.log(spliting[]);

    for (let i = 1; i <= spliting.length - 1; i++){
        // console.log(spliting[i].split(' '));
        if( i <= spliting[0] ){
            let [ name, phone ] = spliting[i].split(' ');
            contactList[name] = phone;
        }else{
            if (Object.keys(contactList).includes(spliting[i])) {
                console.log(spliting[i] + '=' + contactList[spliting[i]]);
            } else {
                console.log('Not found');
            }
        }
        // console.log(name)


    }


}

var test = `3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry`;

processData(test);