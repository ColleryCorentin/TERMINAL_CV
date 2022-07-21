const prompt = require ("prompt")

prompt.get(['username', 'email']), function (res, err){
    if (err){
        console.log(err)
    }
    console.log(res.username)
    console.log(res.email)

}