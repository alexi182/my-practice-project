import {autobind} from 'core-decorators';

@autobind()
export default class TodoListItem extends React.Component {
   constructor(props) {
      super(props);
   }

   selected() {
      this.props.completed = !this.props.completed;
      this.forceUpdate();
   }

   render() {
      return (

          <div className="todo-block__list-item">
             <input className="col-md-1" type="checkbox" checked={this.props.completed} onChange={this.selected} />

             <p className="col-md-9">{this.props.text}</p>

             <button className="col-md-2">Del</button>
          </div>
      )
   }

}