function Login(){

  const [show, setShow] = React.useState(true)
  const [status, setStatus] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const ctx = React.useContext(UserContext); 

  function validate(field, label){
    if(!field){
      setStatus('Error: ' +  label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleLogin(){
    if(!validate(email, 'email')) return;
    if(!validate(password, 'password')) return;

    if(ctx.currentUser){
      ctx.submissions.push(buildSubmission(ctx.currentUser, 'logout', '-'));
    }
    ctx.currentUser = '';

    // if found, set current user
    let cUser = findUser(email, password)
    if(cUser){
      ctx.currentUser = cUser;
      ctx.submissions.push(buildSubmission(ctx.currentUser, 'login', '-'));
      setShow(false)
    }
    else{
      setStatus('User not found');
      clearForm();
    }
    setTimeout(() => setStatus(''), 3000);
  }

  function findUser(email, password){
    let oUser = false
    ctx.users.forEach(element => {
      if(element.email == email && element.password==password){
        oUser = element
      }
    });
    return oUser;
  }

  function clearForm(){
    if(ctx.currentUser){
      ctx.submissions.push(buildSubmission(ctx.currentUser, 'logout', 'na'));
    }
    ctx.currentUser = '';
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
    bgcolor = "warning"
    header = "Login"
    txtcolor = "black"
    status = {status}
    body = {show ? (
      <>
      Email Address <br/>
      <input type="input" className ="form-control" id="email"
      placeholder="Enter email" value={email} onChange={e => 
      setEmail(e.currentTarget.value)}/><br/>
      Password <br/>
      <input type="password" className ="form-control" id="password"
      placeholder="Enter password" value={password} onChange={e => 
      setPassword(e.currentTarget.value)}/><br/>
      <button type="submit" className="btn btn-light" onClick={handleLogin}>
          Login
      </button>
      </>
    ):(
    <>
    <h5>Welcome back {ctx.currentUser.name}</h5>
    <button type="submit" className="btn btn-light" onClick={clearForm}>
      Logout
    </button>
    </>
    )}
    />
  )
    };
