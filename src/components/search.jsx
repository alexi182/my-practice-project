import {autobind} from 'core-decorators';
const searchData = require('../data2.json');

@autobind()
export default class Search extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         people: searchData
      }
   }

   search(e) {
      let val = this.refs.search.value.toLowerCase();
      let people2 = val.length ?
          this.state.people.filter((p, index) =>
          p.name.toLowerCase().indexOf(val) !== -1 ||
          p.surname.toLowerCase().indexOf(val) !== -1 ||
          p.age.toString().toLowerCase().indexOf(val) !== -1 )
          : searchData;

      this.setState({
         people: people2
      })
   }

   render() {
      return (
          <div>
             <h2>Поиск</h2>
             <input type="text" ref="search" className="form-control" onChange={this.search} />

             <table className="table">
                <thead>
                <tr className="row">
                   <th>Имя</th>
                   <th>Фамилия</th>
                   <th>Возраст</th>
                </tr>
                </thead>
                <tbody>
                {
                   this.state.people.map((searchItem, index) =>
                       <tr className="row" key={index}>
                          <td>{searchItem.name}</td>
                          <td>{searchItem.surname}</td>
                          <td>{searchItem.age}</td>
                       </tr>
                   )}
                </tbody>
             </table>
          </div>
      )};
}