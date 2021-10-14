const context = require ('../testing/Context');
const functions = require('./index');

test('Http trigger example', async() => {
const request={
    query:{name:'oliver'}
    };

var iteration=1000000;
console.time('FUNCION #1');
for (var i = 0; i < iteration; i++){
     functions(context, request);
};
console.timeEnd('FUNCION #1');
expect(context.res.body).toEqual('Welcome, oliver');
expect(context.log.mock.calls.length).toBe(1000000);
});