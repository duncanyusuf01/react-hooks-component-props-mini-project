function About({image}){
    return(
        <aside>
            <img src={image} alt="blog logo"/>
            <p>About this blog</p>
        </aside>
    )
}
About.defaultProps ={
    image:'https://via.placeholder.com/215'
}
export default About