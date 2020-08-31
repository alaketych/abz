import React from 'react'
import './sass/app.sass'

import { Header, Button, Banner, Block, Info, ListItems, Registration, Footer } from './components/_index'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Banner description="We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens"
              title="Test assignment for Frontend Developer position"
      />

      <Block title="Let's get acquainted">
        <Info subtitle="I am cool frontend developer"
              description="We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction.">
          <Button label="Sign up" />
        </Info>
      </Block>

      <Block className="sepia"
             title="Our cheerful users"
             pseudoDescription="Attention! Sorting users by registration date">

             <ListItems />

             <Button label="Show more"
                     className="red-background" />
      </Block>

      <Block
          title="Register to get a work"
          pseudoDescription="Attention! After successful registration and alert, update the list of users in the block from the top">

          <Registration />
      </Block>

      <Footer />
    </div>
  )
}