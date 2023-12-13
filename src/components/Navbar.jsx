const Navbar = ({ onSearch }) => {

    const inputSearchChangeHandler = (e) => {
      onSearch(e.target.value)
    }

    return (
      <nav>  
        <div className="navbar fixed z-10 bg-secondary w-full shadow-md">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Notes App</a>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input 
                type="text" 
                placeholder="Search" 
                className="input input-bordered w-24 md:w-auto"
                onChange={inputSearchChangeHandler}
              />
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Navbar