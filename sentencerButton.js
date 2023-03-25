import Sentencer from 'sentencer';
import adjectives from './words/adjectives';
import nouns from './words/nouns';
Sentencer.configure({
  // the list of nouns to use. Sentencer provides its own if you don't have one!
  nounList: nouns,

  // the list of adjectives to use. Again, Sentencer comes with one!
  adjectiveList: adjectives,

  // additional actions for the template engine to use.
  // you can also redefine the preset actions here if you need to.
  // See the "Add your own actions" section below.
  actions: {
    my_action: function () {
      return 'something';
    }
  }
});

export function setupSentencer(element, container) {
  const setSentencer = () => {
    const sentance = Sentencer.make(
      'This sentence has {{ a_noun }} and {{ an_adjective }} {{ noun }} in it.'
    );
    container.innerHTML = `${sentance}`;
  };
  element.addEventListener('click', () => setSentencer());
  setSentencer();
}
