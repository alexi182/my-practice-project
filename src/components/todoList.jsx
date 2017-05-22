import TodoListItem from './todoListItem';
import {autobind} from "core-decorators";

@autobind()
export default class TodoList extends React.Component {
   constructor(props) {
      super(props);
   }

   add(e) {   // передача введёного занчения из input , add(e) функция уровня TodoList, которая принимает на вход событие
      if (e.keyCode == 13) { // по нажатому Enter
         let val = e.target.value;
         this.props.add(val); // add передал из todoPage и вызываем (передаю ссылку на функцию), функция добаляет новую запись
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
                   <span>{ notes.length } items left</span>
                </div>

                <div className="todo-block__userpanel-right col-md-9">
                   <ul>
                      <li>
                         <a href="#" onClick={this.clicked}>Все</a>
                      </li>
                      <li>
                         <a href="#" onClick={this.clicked}>Завершённые</a>
                      </li>
                      <li>
                         <a href="#" onClick={this.clicked}>В работе</a>
                      </li>
                      <li>
                         <a href="#" onClick={this.clicked}>Удалить</a>
                      </li>
                   </ul>
                </div>
             </div>
          </div>
      )
   }
}