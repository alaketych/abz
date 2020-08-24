import React from 'react'
import './sass/app.sass'
import logo from './assets/images/logo.svg'
import manLaptop from './assets/images/man-laptop-v1.svg'
import userPhoto from './assets/images/photo-cover.png'

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <a href="/" className="link">
            <img src={ logo } alt="TESTTASK" />
          </a>
        </div>

        <ul className="navigation">
          <li className="navigation__item">
            <a href="/" className="link">About me</a>
          </li>
          <li className="navigation__item">
            <a href="/" className="link">Relationships</a>
          </li>
          <li className="navigation__item">
            <a href="/" className="link">Requirements</a>
          </li>
          <li className="navigation__item">
            <a href="/" className="link">Users</a>
          </li>
          <li className="navigation__item">
            <a href="/" className="link">Sign Up</a>
          </li>
        </ul>
      </header>

      <div className="banner">
        <h3 className="title big-letters white">
          Test assignment for Frontend Developer position
        </h3>

        <h3 className="description white">
          We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens
        </h3>

        <button className="button red-background">Sign up now</button>
      </div>

      <section className="block">
        <div className="title centered">Let's get acquainted</div>

        <div className="info">
          <div className="picture">
            <img src={ manLaptop } alt="man-laptop"/>
          </div>

          <div className="more">
            <div className="subtitle">I am cool frontend developer</div>

            <div className="description">
              <p>We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction.</p>
              <br />
              <p>If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page P​SD mockup​ into HTML5/CSS3.</p>
            </div>

            <button className="button">Sing up now</button>
          </div>
        </div>
      </section>

      <section className="block sepia centered">
        <h3 className="title centered">Our cheerful users</h3>

        <h3 className="pseudo-description">Attention! Sorting users by registration date</h3>

        <ul className="list">
          <li className="item">
            <img className="item__photo" src={userPhoto} alt="user-1"/>
            <div className="item__name">
              <h3 className="subtitle">Maximillian</h3>
            </div>
            <div className="item__description">
              <h3 className="description">Leading specialist of the Control Department controldepartment@gmail +380 50 678 03 24</h3>
            </div>
          </li>

          <li className="item">
            <img className="item__photo" src={userPhoto} alt="user-1"/>
            <div className="item__name">
              <h3 className="subtitle">Maximillian</h3>
            </div>
            <div className="item__description">
              <h3 className="description">Leading specialist of the Control Department controldepartment@gmail +380 50 678 03 24</h3>
            </div>
          </li>

          <li className="item">
            <img className="item__photo" src={userPhoto} alt="user-1"/>
            <div className="item__name">
              <h3 className="subtitle">Maximillian</h3>
            </div>
            <div className="item__description">
              <h3 className="description">Leading specialist of the Control Department controldepartment@gmail +380 50 678 03 24</h3>
            </div>
          </li>

          <li className="item">
            <img className="item__photo" src={userPhoto} alt="user-1"/>
            <div className="item__name">
              <h3 className="subtitle">Maximillian</h3>
            </div>
            <div className="item__description">
              <h3 className="description">Leading specialist of the Control Department controldepartment@gmail +380 50 678 03 24</h3>
            </div>
          </li>

          <li className="item">
            <img className="item__photo" src={userPhoto} alt="user-1"/>
            <div className="item__name">
              <h3 className="subtitle">Maximillian</h3>
            </div>
            <div className="item__description">
              <h3 className="description">Leading specialist of the Control Department controldepartment@gmail +380 50 678 03 24</h3>
            </div>
          </li>

          <li className="item">
            <img className="item__photo" src={userPhoto} alt="user-1"/>
            <div className="item__name">
              <h3 className="subtitle">Maximillian</h3>
            </div>
            <div className="item__description">
              <h3 className="description">Leading specialist of the Control Department controldepartment@gmail +380 50 678 03 24</h3>
            </div>
          </li>
        </ul>

        <button className="button red-background">Sign up now</button>
      </section>

      <section className="block centered">
        <h3 className="title">Register to get a work</h3>
        <h3 className="pseudo-description">Attention! After successful registration and alert, update the list of users in the block from the top</h3>

        <button className="button red-background">Sign up now</button>
      </section>

      <footer className="footer">
        <h3 className="description">abz.agency specially for the test task</h3>
      </footer>
    </div>
  )
}

export default App
