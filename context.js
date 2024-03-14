const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function buildSubmission(user, type, amount){
  let name = user.name;
  let balance = user.balance;
  return {name, balance, type, amount}
}

function Card(props){
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';

      return 'card mb-3 ' + bg + txt;
    }

    function styles(){
      const wid = props.maxWidth ? props.maxWidth : "18rem";
      return wid;
    }
  
    return (
      <div className={classes()} style={{maxWidth: styles()}}>
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </div>
      </div>      
    );    
  }

  