import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from './Search';
import Library from './Library';
import Customers from './Customers';

function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/library">Library</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
        </ul>

        <hr />

        <Route path="/search" component={Search} />
        <Route path="/library" component={Library} />
        <Route path="/customers" component={Customers} />
      </div>
    </Router>
  );
}

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Topics({ match }) {
//   return (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>
//
//       <Route path={`${match.path}/:topicId`} component={Topic} />
//       <Route
//         exact
//         path={match.path}
//         render={() => <h3>Please select a topic.</h3>}
//       />
//     </div>
//   );
// }
//
// function Topic({ match }) {
//   return (
//     <div>
//       <h3>{match.params.topicId}</h3>
//     </div>
//   );
// }

export default BasicExample;
