function Header(props){
    return(
    <div className="header">
        <img src={props.src} className="logo"/>
         <h1 className="logo-text">{props.text}</h1>
    </div>);
}
export default Header