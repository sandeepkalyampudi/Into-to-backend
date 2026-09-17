const asyncHanderler = (requestHander) => {
    return (req, res, next) => {
        Promise.resolve(requestHander(req, res, next)).catch(next)
    }
}

export { asyncHanderler }