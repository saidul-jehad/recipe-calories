
const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path 
                             d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>Home</li>
                            <li>Recipes</li>
                            <li>About</li>
                            <li>Search</li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl font-bold">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-3 px-1">
                        <li className="btn btn-ghost">Home</li>
                        <li className="btn btn-ghost">Recipes</li>
                        <li className="btn btn-ghost">About</li>
                        <li className="btn btn-ghost">Search</li>
                    </ul>
                </div>
                <div className="navbar-end">

                    <div className="flex items-center bg-gray-200 px-3 rounded-2xl" >
                    <i className="fa-solid fa-magnifying-glass"></i> <input type="text" placeholder="Type here" className="input bg-gray-200 focus:outline-none border-none input-primary w-full max-w-xs" />
                    </div>

                    <a className="btn btn-ghost" href=""><i className="fa-regular bg-green-400 rounded-full p-2 fa-2x fa-circle-user"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Header;