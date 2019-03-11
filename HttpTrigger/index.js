function isPrime(value) {
    if (value <= 1) {
        return false;
    } else {
        for(var div = 2 ; div * div <= value; div++) {
            if (value % div == 0) {
                return false;
            }
        }
        return true;
    }
}   

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    var value = (req.query.value || (req.body && req.body.value));
    if (value) {
        if (isNaN(value)) {
            context.res = {
                status: 400, 
                body: "value is not a number : " + (value)
            };
        } 
        else {
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: "The prime number test result is: " + (isPrime(value))
            };
        }
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a value on the query string or in the request body"
        };
    }
};
