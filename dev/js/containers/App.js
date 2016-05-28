import React, { Component, PropTypes } from 'react';
import Button from '../components/Button.jsx';

export class App extends Component {
  render() {
    return (
      <section>
        <section className="contentContainer">
          <div className="contentContainer__descriptionWrapper">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos modi, nulla necessitatibus praesentium, corporis dolores officia. Dicta enim aliquam dolorem voluptatibus, minus qui nesciunt, amet deleniti natus ducimus perspiciatis corrupti.
            </p>
            <p>Odit et quibusdam quasi quae provident asperiores sunt, reiciendis ea, obcaecati voluptatibus blanditiis dolor facilis! Molestiae doloribus recusandae nesciunt, assumenda sit dolores pariatur hic ullam. Commodi, possimus nemo consectetur tempore?
            </p>
            <p>Voluptatibus reiciendis sit eligendi aliquid, inventore fugiat, at quos unde nemo nobis repellat assumenda sunt eaque odio quod pariatur vel aut dolores enim totam numquam mollitia. Quod quia ipsa et?
            </p>
          </div>
          <div className="contentContainer__heroButtonWrapper">
            <Button 
              text="button test"
              classes="heroButtonWrapper__heroButton"
            />
          </div>
        </section>
      </section>
    );
  }

}

export default App;
