import ServiceItem from './serviceItem';
import {autobind} from 'core-decorators';
const services = require('../service.json');

@autobind()
export default class Service extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         services,
         total: this.total(services)
      }
   }

   /*total(services) {
       return services.filter(function(s) {
         return s.selected
      }).reduce(function(prev, current) {
      return prev + current.price}, 0);
    }*/

   select(serviceId) {
      let services = this.state.services.slice(0);
      let s = services.find((srv, index) => srv.service == serviceId);

      if (!s) {
         return
      }
      else {
         s.selected = !s.selected;
      }

      this.setState({
         services,
         total: this.total(services)
      })
   }

   total(services) {
      return services.filter(s => s.selected).reduce((prev, current) => { prev += current.price; return prev; }, 0);
   }

   render() {
      return (
          <div>
             <h2>Услуги</h2>
             <table className="table service-table">
                <tbody>
                {
                   this.state.services.map((serviceItem, index) =>
                       <ServiceItem {...serviceItem} key={index} select={ this.select } />
                   )}

                <tr className="row">
                   <td>Итого</td>
                   <td>{this.state.total}  p.</td>
                </tr>
                </tbody>
             </table>
          </div>
      )};
}