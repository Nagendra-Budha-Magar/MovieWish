export function getHome(req,res){
    res.statusCode = 200;
    res.end('This is the Start of Node js.')
}

export function getAbout(req,res){
    res.statusCode = 200;
    res.end('This is plain http web server using built in nodejs modules.')
}