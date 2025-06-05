import "./footer.css"
const Footer = () => {
    return (
        <footer 
                className="container 
                d-flex 
                flex-wrap 
                justify-content-between 
                align-items-center 
                borderTop ">
                <div 
                className=" d-flex 
                align-items-center">
                    <p className="color">
                        © 2025 Copyright: Edgardo Del Real
                    </p>
                </div>
                <div 
                className=" d-flex 
                gap-2">
                <p className="color">Si te gusto, hazmelo saber</p>
                <i className="like bi bi-hand-thumbs-up fs-6"></i>
                </div>
        </footer>
    ) 
}
export default Footer