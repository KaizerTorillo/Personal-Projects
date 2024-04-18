import banner from "./attendancelogo.png"
import "./homepage.css"

function HomePage() {
    return (
        <div className="image">
            <img src={banner} alt="banner" height="600px"/>
        </div>
    );
}

export default HomePage;