import TodoList from '../components/todoList';
import {autobind} from 'core-decorators';
const menu = require('../menu.json');

@autobind()
export default class TodoPage extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         notes: [{
            text: 'Text',
            completed: false,
            id: 0
         }],
         active: 0
      };
   }

   add(val) {
      this.state.notes.push({
         text: val,
         completed: false,
         id: this.state.notes.length + 1
      });

      this.forceUpdate()
   }

   clicked() {
      this.setState({
         active: focused
      })
   }

   selected(id) {
      let note = this.state.notes.find((n) => n.id == id);
      if (note)
         note.completed = !note.completed;
   }

   // total(note) {
   //    let sum =
   // }

   render() {
      return (
          <div className="todo-list">
             <h2>Заметки</h2>

             <TodoList notes={this.state.notes} add={this.add} clicked={this.clicked} menu={menu} />

          </div>
      )
   };
}
