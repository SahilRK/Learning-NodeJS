function existPosts(){
    const posts = [
      {title: 'Post1', description: "First Post"},
      {title: 'Post2', description: "Second Post"}  
    ]
    return posts;
}
  
function createPost(post,callback){
setTimeout(()=>{
    const posts = existPosts();
    callback(posts);
    posts.push(post);
    console.log(post);
},3000)
}

function getPosts(posts){
setTimeout(()=>{
    posts.forEach((post)=>{
    console.log(`This is the ${post.description}`);
    })
},1000)
}

createPost({title: 'Post3', description: "Third Post"},getPosts);

  
/* What happens in the above async program:

Step1: When createPost is called, the function goes to the call stack and 
*/