import {Link} from 'react-router';

const data = [
   {
      "id": 1,
      "title": "join",
      "body": "Вызов arr.join(str) делает в точности противоположное split. Он берет массив и склеивает его в строку, используя str как разделитель."
   },
   {
      "id": 2,
      "title": "split",
      "body": "К счастью, есть метод split(s), который позволяет превратить строку в массив, разбив ее по разделителю s. В примере ниже таким разделителем является строка из запятой и пробела."
   },
   {
      "id": 3,
      "title": "splice",
      "body": "Метод splice – это универсальный раскладной нож для работы с массивами. Умеет все: удалять элементы, вставлять элементы, заменять элементы – по очереди и одновременно."
   },
   {
      "id": 4,
      "title": "slice",
      "body": "Метод slice(begin, end) копирует участок массива от begin до end, не включая end. Исходный массив при этом не меняется."
   },
   {
      "id": 5,
      "title": "sort(fn)",
      "body": "Метод sort() сортирует массив на месте."
   }
];

export default class Profile extends React.Component {
   constructor(props) {
      super(props)

      this.state = {
         users: [1,2,3,4,5,6,7,8,9]
      };
   }

   render() {
      if (this.props.children) {
         return (
             <div>
                {this.props.children}
             </div>
         )}


      let users = this.state.users.map((user, index) =>
         <div>
            {/*<Link to={ `/profile/${index}` } > Go to user {index}</Link>*/}
            <Link to={{pathname: `/profile/${index}`, query: {ppp:1} }} > Go to user {index}</Link>
         </div>
      );


      return (
          <div className="profile-content">

             <h2>Информация о пользователе</h2>
             {users}
             {/*<div className="profile-info">{this.props.data.map((item, index) =>
              <div key={index}>
              <p>{item.id}</p>
              <p>{item.title}</p>
              <p>{item.body}</p>
              </div>
              )}
              </div>*/}
          </div>
      );
   }
}