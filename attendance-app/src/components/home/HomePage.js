import banner from "./attendancelogo.png"
import "./homepage.css"

function HomePage() {
    return (
        <div className="image">
            <img src={banner} alt="banner"/>
        </div>
    );
}

export default HomePage;