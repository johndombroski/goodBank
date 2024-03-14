function Withdraw(){

  const [show, setShow] = React.useState(true)
  const [status, setStatus] = React.useState('')
  const [withdraw, setWithdraw] = React.useState(0)

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

    if(Number(withdraw) > ctx.currentUser.balance){
      setStatus('Not enough balance for this withdraw');
      clearForm();
      setTimeout(() => setStatus(''), 3000);
      return false;
    }


    return true;
  }

  function handleWithdraw(){
    if(!validate(withdraw, 'withdraw')) return;

    if(!ctx.currentUser){
      setWithdraw(0);
      return;
    }

    ctx.submissions.push(buildSubmission(ctx.currentUser, 'withdraw', withdraw));
    ctx.currentUser.balance -= Number(withdraw);
    setWithdraw(0);
    setShow(false);

  }


  function clearForm(){
    setWithdraw(0);
    setShow(true);
  }

  return (
    <Card
    bgcolor = "info"
    header = {ctx.currentUser ? `Withdraw (${ctx.currentUser.name})` : 'Withdraw (Please login)'}
    txtcolor = "black"
    status = {status}
    body = {show ? (
      <>
      Balance &emsp;${ctx.currentUser.balance} 
      <br/>
      Withdraw Amount
      <br/>
      <input type="input" className ="form-control" id="withdraw"
      placeholder="Withdraw Amount" value={withdraw} onChange={e => 
      setWithdraw(e.currentTarget.value)}/>
      <br/>
      <button type="submit" className="btn btn-light" onClick={handleWithdraw}>
        Withdraw
      </button>
      </>
    ):(
    <>
    <h5>Successful Withdraw</h5>
    Current Balance: ${ctx.currentUser.balance}
    <button type="submit" className="btn btn-light" onClick={clearForm}>
      Another Withdraw
    </button>
    </>
    )}
    />
  )
    };
