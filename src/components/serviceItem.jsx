import {autobind} from 'core-decorators';

@autobind()
export default class ServiceItem extends React.Component {

   constructor(props) {
      super(props);
   }

   clicked() {
      this.props.select(this.props.service)
   }

   getActive() {
      return this.props.selected ? 'selected' : ''
   }

   render() {
      return (
          <tr className={ `row ${this.props.selected ? 'selected' : ''}` } onClick={this.clicked} >
             <td>{this.props.service}</td>
             <td>{this.props.price} p.</td>
          </tr>
      )};
}

