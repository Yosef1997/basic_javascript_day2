let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}
let newData = {
    name : 'Yosef Situmorang',
    email : 'yosefsitumorang97@gmail.com',
    hobbies : ['baca','nonton','motor'],
}

let mergeData = {...data,...newData}
console.log(mergeData);

const{street,city} = mergeData.address
console.log(street);
console.log(city)