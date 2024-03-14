function Spa() {
  //const [currentUser, setCurrentUser] = React.useState('');

  return (
    <HashRouter>
      
      <UserContext.Provider value={{currentUser: '',
        submissions:[{name:'', balance: 0, type: '', amount: 0}],
        users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
          {console.log('reloaded')}
      <NavBar/>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
        </div>                    
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
