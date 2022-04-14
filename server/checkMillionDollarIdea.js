const res = require("express/lib/response")

const checkMillionDollarIdea = ('idea') => {
    const weekRevenue = Number(idea.weeklyRevenue)
    const numWeeks = Number(idea.numWeeks)
    const totalValue = (weekRevenue * numWeeks)

    if(totalValue >= 1000000) {
        res.send('Idea value is a valid amount.')
    } else {
        res.send('Idea value less than base amount.')
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
