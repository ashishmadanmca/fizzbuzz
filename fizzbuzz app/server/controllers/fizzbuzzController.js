let fizzBuzzData = require('../models/fizzBuzzModel')

//Method that holds and does the fizzBuzz logic
calculateFizzbuzz = (num) => {
    let mod5, mod3;
    mod3 = num % 3 === 0;
    mod5 = num % 5 === 0;

    if (mod3 && mod5) {
        return "FizzBuzz";
    } else if (mod3 && !mod5) {
        return "Fizz";
    } else if (!mod3 && mod5) {
        return "Buzz";
    } else {
        return num.toString();
    }
}

//getFizbuzz api that gets called
getFizbuzz = async (req, res) => {
    try {
        let count = parseInt(req.params.count);
        let upperBound = 100;
        fizzBuzzData = [];

        //Api validation : Check is count is integer
        if (Number.isInteger(count)) {
            //Api validation : Integer validations
            if (count > 0 && count <= upperBound) {
                for (let num = 1; num <= count; num++) {
                    fizzBuzzData[num - 1] = calculateFizzbuzz(num);
                }

                //The below statement would have just returned the array with fizzBuzzData, since stringify is needed updated code is below
                //return res.status(200).json({success: true, data: fizzBuzzData});

                //Returning stringifiedData version of the array to be shown on the UI
                //Returning fizzBuzzData which is the actual array that holds the data
                return res.status(200).json({success: true, stringifiedData: fizzBuzzData.join("\n"), data: fizzBuzzData});

            } else {
                return res.status(400).json({
                    success: false,
                    error: "Data validation error. Count needs to be greater then 0 and less then or equal to 100"
                })
            }
        } else {
            return res.status(400).json({
                success: false,
                error: "Data validation error. Please enter a number"
            })
        }
    } catch (e) {
        return res.status(400).json({
            success: false,
            error: "Data validation error. Exception occured " + e.toString()
        })
    }
}

module.exports = {
    getFizbuzz
}