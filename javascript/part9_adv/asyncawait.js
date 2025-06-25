function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout
        (()=>{
            reject({name:"Paresh" ,url :"www.google.com"})
        },3000);
    })
}

async function getUserData(){
    try {
        console.log(`fetching user data....`)       
        const userData= await fetchUserData();
        console.log("User Data Fetch Successsfully")
        console.log("User Data :", userData)
    } catch (error) {
        console.log("Error Fetching Data",error)
        
    }
}


getUserData();