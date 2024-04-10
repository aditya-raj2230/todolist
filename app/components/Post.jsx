import DeletePostbtn from './DeletePostbtn'
export default function Post ({id,title,content,authorName}){
    return(
        <div style={{border:'1px solid white',padding:'15px'}}>
            <h3>{authorName}</h3>
            <h4>{title}</h4>
            <p>{content}</p>
            <DeletePostbtn postId={id}/>

        </div>
    )
}