function sum(a,b){
    return a + b;

}
test('add  2 +3 is 5',()=>{
    expect(sum(2,3)).toBe(5);
})