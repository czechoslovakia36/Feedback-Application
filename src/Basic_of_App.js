function App(){
    // returning JSX
    const title= "Blog Post"
    const body="This is my blog post"
    const comments =[
            {id:1,text:'Comment one'},
            {id:2,text:'Comment two'},
            {id:3,text:'Comment three'}
    ]

    const loading = false
    const showComments= true

    const commentBlock= (<div className="comments">
    <h3>Comments ({comments.length})</h3>
    <ul>
        {comments.map((comment,index)=>(
            // prop is basically a attribute (unique)
            <li key={index}>{comment.text}</li>
        ))}
    </ul>
</div>)

    if(loading) return <h1>Loading...</h1>
    return (
        // <> </> empty frag we can use <div> tag too
        <div className="container">
            <h1> {'My Blog'.toUpperCase()} </h1>
            <p> {body}</p>

            {showComments ?  commentBlock : null}


          {/* {Math.random() * (5+5)} */}
           
        </div>

        )
}

export default App

// attributes we can not use 
    // 1. class --> className
    // 2. for --> htmlFor
        //   <label htmlFor=""> </label>