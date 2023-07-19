export default function addEmail(req, res) {
    if(req.method === 'POST') {
    const emailAdd = req?.body;

    return res.json(emailAdd);
    
    }
    return res.status(500).json({
        msg: "No content"
    })
}