const errorMiddleware = async(error, request, response, next) => {
    if(!error) {
        next()
    } else {
        const errorMessage = {
            'status': 'Error',
            'message': error.message
        }
        response.status(500).json(errorMessage)  
    }   
}

module.exports = errorMiddleware
