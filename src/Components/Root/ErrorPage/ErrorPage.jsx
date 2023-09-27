import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center text-red-600 mt-20">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-10">Opps!!!</h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">404 error</h1>
            <NavLink to="/"> <button className="btn btn-success mt-10 text-4xl">Go Home</button></NavLink>
        </div>
    );
};

export default ErrorPage;