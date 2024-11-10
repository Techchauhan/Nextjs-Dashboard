export default function handler(req, res) {
    if(req.method === 'GET'){
       res.status(200).json({ message: 'Server is Running' });
    } else {
       res.status(405).json({ error: 'Method Not Allowed' });
    }
 }
 

 //if not working then re-start your server then try- 101% working. 