import GameInterface from "../components/elements/GameInterface";
import BasicWords from "../assets/words/BasicWords";
import CommonWords from "../assets/words/CommonWords";
import Alphabet from "../assets/words/Alphabet";
function Words() {
  return <GameInterface target={Alphabet} />;
}
export default Words;
