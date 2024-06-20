/* eslint-disable jsx-a11y/anchor-is-valid */
function NavBar(){

  return (

    <nav className="navbar navbar-dark navbar-expand-lg" style={{backgroundColor: '#479f76'}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">BadBank</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#/create-account/" 
                data-bs-toggle="tooltip" 
                data-bs-placement="bottom" 
                title="Create a new account">
                  Create Account
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#/deposit/"
                data-bs-toggle="tooltip" 
                data-bs-placement="bottom" 
                title="Deposit to your account.">
                  Deposit
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#/withdraw/"
                data-bs-toggle="tooltip" 
                data-bs-placement="bottom" 
                title="Withdraw from your account">
                  Withdraw
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#/alldata/"
                data-bs-toggle="tooltip" 
                data-bs-placement="bottom" 
                title="View all user data">
                  All Data
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default NavBar;