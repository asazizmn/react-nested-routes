/*
 * A simple web app to test the react-router and nested routes
 * To test this version, please change index.js accordingly
 */

import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'


const cuisines = [
  {
    name: 'Asian',
    id: 'asian'
  },
  {
    name: 'Turkish',
    id: 'turkish'
  },
  {
    name: 'Indian',
    id: 'indian'
  }
]



function Cuisine({ match }) {

  // this will traverse the `cuisines array` as described above
  // and return each element, in this case destructuring `id` to use it only
  // and eventually check which one of the array id's actually matches the `:id` from the url
  //
  // i.e. Array.find(element => matching test)
  const cuisine = cuisines.find(({ id }) => id === match.params.id)

  return (
    <div>
      <h2>{cuisine.name}</h2>
      <p>This is the {cuisine.name} description page</p>
    </div>
  )
}


function Cuisines({ match }) {
  return (
    <div>
      <h1>Cuisines</h1>
      <ul>
        {cuisines.map(({ name, id }) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <Route path={`${match.path}/:id`} component={Cuisine} />
    </div>
  )
}


function Home() {
  return (
    <div>
        <h1>Home</h1>
        <p>This is the homepage</p>
    </div>
  )
}


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/cuisines'>Cuisines</Link></li>
          </ul>

          <hr />

          <Route exact path='/' component={Home} />
          <Route path='/cuisines' component={Cuisines} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App