import TodoListItem from './todoListItem';
import {autobind} from "core-decorators";

@autobind()
export default class TodoList extends React.Component {
   constructor(props) {
      super(props);
   }

   add(e) {
      if (e.keyCode == 13) {
         let val = e.target.value;
         this.props.add(val);
         e.target.value = '';
      }
   }

   render() {
      let notes = this.props.notes.map((note, index) => <TodoListItem {...note} key={index} />
      );

      return (
          <div className="todo-block">
             <div className="todo-block__input">
                <input type="text" className="form-control" placeholder="Введите" onKeyUp={this.add} />
             </div>

             <div className="todo-block__list">
               { notes }
             </div>
             <div className="todo-block__userpanel">
                <div className="todo-block__userpanel-left col-md-3">
                   <span>8 items left</span>
                </div>
                <div className="todo-block__userpanel-right col-md-9">
                   <ul>
                      <li>
                         <a href="#">Все</a>
                      </li>
                      <li>
                         <a href="#">Завершённые</a>
                      </li>
                      <li>
                         <a href="#">В работе</a>
                      </li>
                      <li>
                         <a href="#">Удалить</a>
                      </li>
                   </ul>
                </div>
             </div>
          </div>
      )
   }
}