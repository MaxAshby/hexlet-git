// const staff = {
//     'General director': {
//         Name: 'Belken Gregorei Pavlovech',
//         Age: '43',
//         Married: true,
//         Childrens: false
//     },
//     'Production manager': {
//         Name: 'Druker Nikolay Boresovich',
//         Age: '37',
//         Married: true,
//         Childrens: ['Ivan', 'Alex']
//     }
//  }

// console.log(staff)

// staff['General director'].Number = '89300569541'
// staff['Production manager'].Number = '83506346128'

// console.log(staff)

// staff['Production manager'].Childrens = [
//   Ivan = {Age: 7, School: true},
//   Alex = {Age: 8, School: true}
// ]
// console.log(staff['Production manager'].Childrens[0])
// console.log(staff)


const myReverse = (str) => {
    let i = 0;
    let result = '';
    while (i < str.length) {
        result = `${str[i]}${result}`;
        i += 1;
    }
    return result;
}
console.log(myReverse('Alex'))
