import React from 'react'
import './sass/app.sass'

import { Header, Button, Banner, Block, Info, ListItems, Footer } from './components/index'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />

      <Block title="Let's get acquainted">
        <Info subtitle="I am cool frontend developer"
              description="We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction.">
          <Button label="Sign up" />
        </Info>
      </Block>

      <Block className="sepia"
             title="Our cheerful users"
             pseudoDescription="Attention! Sorting users by registration date">

             <ListItems></ListItems>

             <Button label="Show more"
                     className="red-background" />
      </Block>

      <Block
          title="Register to get a work"
          pseudoDescription="Attention! After successful registration and alert, update the list of users in the block from the top">

          <Button label="Sign up now"
                  className="red-background" />
      </Block>

      <Footer />
    </div>
  )
}

export default App
