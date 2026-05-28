function Title({children, link}) {
    return ( 
        <div className="title-container">
            <h1> {children} </h1>
            {link ? <img src={link} alt="title-icon"/> : ""}
        </div>
     );
}

export default Title;