import {autobind} from 'core-decorators';

@autobind()
export default class ServiceItem extends React.Component {

   constructor(props) {
      super(props);
   }

   clicked() {
      this.props.select(this.props.service)
   }

   render() {
      return (
          <tr className={ `row ${this.props.selected ? 'active' : ''}` } onClick={this.clicked} >
             <td>{this.props.service}</td>
             <td>{this.props.price} p.</td>
          </tr>
      )};
}