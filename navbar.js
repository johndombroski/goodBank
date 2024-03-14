function NavBar(){


  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#"
      data-toggle="tooltip" data-placement="bottom" 
      title="Tooltip on top">Good Bank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/" 
            data-toggle="tooltip" data-placement="bottom" 
            title="This page is used to add a new user.  This is done by 
            creating a new account.">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/"
            data-toggle="tooltip" data-placement="bottom" 
            title="This is the user login page.  If a user is not found, access
            to account data is not permitted.  When a user logs in, the user
            name is placed in the navbar.">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/" 
            data-toggle="tooltip" data-placement="bottom" 
            title="If a user is logged in, they can deposit into thier 
            account.">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/"
            data-toggle="tooltip" data-placement="bottom" 
            title="If a user is logged in, they can withdraw from thier 
            account.">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/"
            data-toggle="tooltip" data-placement="bottom" 
            title="This displays user info">AllData</a>
          </li>          
        </ul>

      </div>
    </nav>
    </>
  );
}