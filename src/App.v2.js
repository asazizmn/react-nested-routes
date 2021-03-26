/*
 * A simple web app to test the react-router, nested routes, and passing props to rendered components with it.
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



function Cuisine({ match, restaurant }) {
  const cuisine = cuisines.find(({ id }) => id === match.params.id)

  return (
    <div>
      <h2>{cuisine.name}</h2>
      <p>This is the {cuisine.name} description page</p>
      <hr />
      <p>For enquiries please call: {restaurant}, +852 12345678</p>
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

      <Route path={`${match.path}/:id`} render={({ match }) => {

        return (
          <Cuisine
            match={match}
            restaurant={"Barakat Foods"}
          />
        )
      }} />
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