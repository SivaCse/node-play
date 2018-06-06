export const ReqResHelper = (req, res) => (err, data) => {
    // Handle any possible database errors
        if (err) return res.status(500).send(err);
        return res.send(data);
    }
