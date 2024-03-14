function CreateAccount(){

  const [show, setShow] = React.useState(true)
  const [status, setStatus] = React.useState('')
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const ctx = React.useContext(UserContext); 

  function validate(field, label){
    if(!field){
      setStatus('Error: ' +  label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }

    if(label == "password" && field.length<8){
      setStatus('Error: password must be 8 characters long.');
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleCreate(){
    console.log(name, email, password);
    if(!validate(name, 'name')) return;
    if(!validate(email, 'email')) return;
    if(!validate(password, 'password')) return;
    ctx.users.push({name, email, password, balance:100});

    let nuser = ctx.users[ctx.users.length-1];
    ctx.submissions.push(buildSubmission(nuser, 'create', '-'));
    ctx.users.forEach(element => {
      console.log(element.name)
    });
    setShow(false);
  }

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
    bgcolor = "primary"
    header = "Create Account"
    status = {status}
    body = {show ? (
      <>
      Name <br/>
      <input type="input" className ="form-control" id="name"
      placeholder="Enter name" value={name} onChange={e => 
        setName(e.currentTarget.value)}/><br/>
        Email Address <br/>
      <input type="input" className ="form-control" id="email"
      placeholder="Enter email" value={email} onChange={e => 
        setEmail(e.currentTarget.value)}/><br/>
        Password <br/>
      <input type="password" className ="form-control" id="password"
      placeholder="Enter password" value={password} onChange={e => 
        setPassword(e.currentTarget.value)}/><br/>
        <button type="submit" className="btn btn-light" onClick={handleCreate}>
          Create Account
        </button>
      </>
    ):(
    <>
    <h5>Account Creation Successful!</h5>
    <button type="submit" className="btn btn-light" onClick={clearForm}>
          Add another account
        </button>
    </>
    )}
    />
  )
    };