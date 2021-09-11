// props are immutable,will can not be changed

const Hello=(props)=>{
    //props.name = 'bhanu' ---> this will gives an error because props is immutable we can not assign any value

    // we can destructure props and will use use it latter destructcring can be done through curly braces

    let {name,heroname}=props;
    return(
        // if we have to return multiple things then add div tag in return
        <div>
        <h1> Hi i am {name} known as {heroname}</h1>
        {props.children}
        </div>
    )
}

export default Hello;