const array = [10, 5, 'a', 'b', 'h', 11];

const numbers= array.filter((item)=>{
    return typeof item == 'number';
})
const alphabets= array.filter((item)=>{
    return typeof item == 'string';
})
numbers.sort((a, b)=>{
    a - b;
})
alphabets.sort();
console.log('Numbers:', numbers.join(','));
console.log('Alphabets:', alphabets.join(','));