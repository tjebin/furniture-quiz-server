module.exports = (app) => {

    const add = (rq, rs) => {
        // const a = parseInt(rq.params['paramA']);
        // const b = parseInt(rq.params['paramB']);
        const a = rq.params['paramA'];
        const b = rq.params['paramB'];
        const aa = parseInt(a);
        const bb = parseInt(b);
        rs.send(`${aa + bb}`);
    }

    const subtract = (req, res) => {
        const x = parseInt(req.query['x']);
        const y = parseInt(req.query['y']);
        const z = x - y;
        res.send(`${z}`);
    }
    //http://localhost:2000/subtract?x=4&y=7
    app.get('/subtract', subtract)

    //http://localhost:2000/add/1/2
    app.get('/add/:paramA/:paramB', add)

    app.get('/can/be/anything', function (req, res) {
        res.send('Hello World')
    })

}

