exports.decodedToken = function(req){
const asd = req.headers.authorization
const decoded = jwt.decode(asd.toString().replace("Bearer ",""))
return decoded
}