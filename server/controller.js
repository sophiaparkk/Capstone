//controller files are responsible for handling incoming requests and returning responses to the client


module.exports = {
    startButton: (req, res) => {
        res.sendStatus(200)
    },
    
    specButton: (req, res) => {
        res.sendStatus(200)
    },

    thisButton: (req, res) => {
        res.sendStatus(200)
    },

    thatButton: (req, res) => {
        res.sendStatus(200)
    },

    ratingRadio: (req, res) => {
        res.sendStatus(200)
    }
}