import { Route } from "react-router";
import Main from "./components/main";
import Header from "./components/header";
import getRepos from "./components/getRepos";

function App() {

  return (
    <div>
      	<Header>
        	<Route path='/' component={Main} exact={true}/>
    	</Header>
      	<Main>
			  <Route path='/search/' component={getRepos} />
		</Main>
    </div>
  );
}

export default App;
