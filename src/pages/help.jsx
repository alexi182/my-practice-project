import './help.css';
import { autobind } from 'core-decorators';
@autobind()

export default class Help extends React.Component {
   constructor(props) {
      super(props);

      this.name = "Will";

      this.state = this.getCount(this.props.text)
   }

   handleChange(e) {
      this.setState(
          this.getCount(e.target.value)
      );
   }

   getCount(text='') {
      return {
         text, count: this.props.count - text.length
      }
   }

   render() {
      console.log(this.props);
      return (
          <div className="help-content">
             <h2>Раздел помощи</h2>
             <textarea placeholder="Текст сообщения" className="form-control" value={this.state.text} onChange={this.handleChange} />

             <div className="count-remains">
                Максимальное число символов:{this.state.count}
             </div>

             <div>
                <p>Текст: {this.state.text}</p>
                <p>Имя: {this.name}</p>
                <input type="text"/>
             </div>
          </div>
      );
   }
   static defaultProps = {
      count: 300,
      text: ""
   }
}