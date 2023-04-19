import React, {useEffect, useState} from 'react'
import "./register.css"
import Typewriter from 'react-simple-typewriter'
import { useTypewriter } from 'react-simple-typewriter'

const facts = [
  "Manicure comes from the Latin words for 'hand' and 'care.'",
  "Pedicure comes from the Latin words for 'foot' and 'care.'",
  "Egyptians created the first manicure tools.",
  "Michelle Ménard invented the first colored nail polish in the early 20th century.",
  "Pedicures can improve foot health.",
  "Popular nail shapes for women include round, square, oval, almond, and stiletto.",
  "Lee Redmond holds the world record for the longest fingernails ever recorded.",
  "Henna is used to decorate nails in some cultures.",
  "Gel and acrylic nail treatments provide a longer-lasting finish.",
  "Manicures and pedicures promote relaxation and reduce stress.",
  "Fish pedicures involve using Garra rufa fish to nibble away dead skin.",
  "Nail art is a popular trend in some countries.",
  "Massaging the hands and feet can improve circulation and relieve muscle tension.",
  "Manicures and pedicures can strengthen weak, brittle nails.",
  "Some nail products contain harmful chemicals.",
  "French manicures remain a classic, timeless look.",
  "Nail color was used to signify social status in ancient Greece and Rome.",
  "Manicures and pedicures can express individuality and creativity.",
  "Regular manicures and pedicures prevent foot and nail problems.",
  "Manicures and pedicures discourage nail biting."
];
function Register() {

  const pickRandomString = () => {
    let random = Math.floor(Math.random() * facts.length);
    console.log(facts[random])
    return [facts[random],"smth"];
  }
  
  const [singleArray, setSingleArray] = useState(["test"]);
  const [loopEnded, setLoopEnded] = useState(false);


  const [text, flags] = useTypewriter({
    words: facts,
    loop: false,
    typeSpeed: 50,
    deleteSpeed: 40,
  });

  const { isDelete, isType, isDelay, isDone } = flags;

  useEffect(() => {
      setSingleArray(pickRandomString());
    console.log("IM DONE")
    setLoopEnded(true);
  },[isDone && !isType && !isDelete])


  return (
    <div><section className="container">
    <div className="columns is-multiline">
      <div className="column is-8 is-offset-2 register">
        <div className="columns">
          <div className="column left">
            <h1 className="title is-1">Did you know?</h1>
            <h2 className="subtitle colored is-4">There are some interesting facts about manicure:</h2>
            <p>
            {/* <Typewriter
                    options={{
                      strings: [...facts],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 20,
                      delay: 40,
                    }}
                  /> */}
                  {text}
            </p>
          </div>
          <div className="column right has-text-centered">
            <h1 className="title is-4">Sign up today</h1>
            <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
            <form>
              <div className="field">
                <div className="control">
                  <input className="input is-medium" type="text" placeholder="Name"/>
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <input className="input is-medium" type="email" placeholder="Email"/>
                </div>
              </div>
              <button className="button is-block is-primary is-fullwidth is-medium">Submit</button>
              <br />
              <small><em>Lorem ipsum dolor sit amet consectetur.</em></small>
            </form>
          </div>
        </div>
      </div>
      <div className="column is-8 is-offset-2">
        <br/>
        {/* <nav className="level">
          <div className="level-left">
            <div className="level-item">
              <span className="icon">
                <i className="fab fa-twitter"></i>
              </span> &emsp;
              <span className="icon">
                <i className="fab fa-facebook"></i>
              </span> &emsp;
              <span className="icon">
                <i className="fab fa-instagram"></i>
              </span> &emsp;
              <span className="icon">
                <i className="fab fa-github"></i>
              </span> &emsp;
              <span className="icon">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className="level-right">
            <small className="level-item" text-white-50>
              &copy; Super Cool Website. All Rights Reserved.
            </small>
          </div>
        </nav> */}
      </div>
    </div>
  </section>
</div>
  )
}

export default Register