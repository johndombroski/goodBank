function TableRow(props){

  return (
    <tr>
      <th scope="row" >{props.index+1}</th>
      <td>{props.name}</td>
      <td>{props.balance}</td>
      <td>{props.type}</td>
      <td>{props.amount}</td>
  </tr>
  )
}

function AllData(){

  const ctx = React.useContext(UserContext); 



  const tRows = [];
  ctx.submissions.forEach((obj, inx) => {
    tRows.push(<TableRow key={inx} index={inx} name={obj.name} balance={obj.balance} 
    type={obj.type} amount={obj.amount} />);
  })


  return (
    <Card
    bgcolor = "success"
    header = "All Data"
    txtcolor = "black"
    maxWidth = "30em"
    body = {
      <>
      <table className="table">
        <thead className="thead-dark">
          <tr>    
            <th scope="col">Index</th>
            <th scope="col">Name</th>
            <th scope="col">Balance</th>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {tRows}
        </tbody>
      </table>
      </>
    }
    />
  )
    };


