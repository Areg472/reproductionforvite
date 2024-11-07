import './homepage.css';
import {Link} from "react-router-dom"

export function Homepage() {
    return (
        <>
            <body className="body">
            <div className="Headings">
                <h1 className="mb-4 leading-normal">A test</h1>
                <h2 className="mb-1.5 leading-normal">Anywhere, anytime, for free, no restrictions.</h2>
                <div className="buttonscont space-x-3">
                    <Link to="/"><input className="oplusbuttons leading-loose mt-4" type="button" value="Access the website"/></Link>
                    <Link to="/"><input className="oplusbuttons leading-loose mt-4" type="button" value="Privacy Policy"/></Link>
                </div>
            </div>
            </body>
        </>
    )
}
