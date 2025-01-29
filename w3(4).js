  
  
function fetchDataWithCallback(isSuccess, callback) {
    setTimeout(() => {
        if (isSuccess) {

            const response ="successfull";
            callback(null, response); 
        } else {

            const error = "fail";
            callback(error, null);
        }
    }, 2000);
}

fetchDataWithCallback(true, (error, response) => {
    if (error) {
        console.log("error:", error);
    } else {
        console.log("success:", response);
    }
});

fetchDataWithCallback(false)
fetchDataWithCallback(true)
