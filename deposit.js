function Deposit(){

  const [show, setShow] = React.useState(true)
  const [status, setStatus] = React.useState('')
  const [deposit, setDeposit] = React.useState(0)

  const ctx = React.useContext(UserContext); 

  function validate(field, label){
    if(!field){
      setStatus('Error: ' +  label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }

    if(isNaN(field)){
      setStatus('Input is not a number.');
      clearForm();
      setTimeout(() => setStatus(''), 3000);
      return false;
    }

    if(Number(field) < 0){
      setStatus('A negative deposit is not possible.');
      clearForm();
      setTimeout(() => setStatus(''), 3000);
      return false;
    }

    return true;
  }

  function handleDeposit(){
    if(!validate(deposit, 'deposit')) return;
    if(!ctx.currentUser){
      setDeposit(0);
      return;
    }
    ctx.submissions.push(buildSubmission(ctx.currentUser, 'deposit', deposit));
    ctx.currentUser.balance += Number(deposit);
    setDeposit(0);
    setShow(false)
  }


  function clearForm(){
    setDeposit(0);
    setShow(true);
  }

  return (
    <Card
    bgcolor = "success"
    header = {ctx.currentUser ? `Deposit (${ctx.currentUser.name})` : 'Deposit (Please login)'}
    txtcolor = "black"
    status = {status}
    body = {show ? (
      <>
      Balance &emsp;${ctx.currentUser.balance} 
      <br/>
      Deposit Amount
      <br/>
      <input type="input" className ="form-control" id="deposit"
      placeholder="Deposit Amount" value={deposit} onChange={e => 
      setDeposit(e.currentTarget.value)}/>
      <br/>
      <button type="submit" className="btn btn-light" onClick={handleDeposit}>
        Deposit
      </button>
      </>
    ):(
    <>
    <h5>Deposit Successful</h5>
    Current Balance: ${ctx.currentUser.balance}
    <br/>
    <button type="submit" className="btn btn-light" onClick={clearForm}>
      Another Deposit
    </button>
    </>
    )}
    />
  )
    };

