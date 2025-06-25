function fetchPostData(){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve("Post Data Fetched")
        },2000)
    })
}


function fetchCommentData(){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            
            resolve("comment data fetched")
        },2000)
    });
}

async function getBlogData(){
    try {
        console.log('Fetching block data');
        const blogData= await fetchPostData()
        const commentData =await fetchCommentData();
    } catch (error) {
        console.error("Error Fetching block datae")
    }
}