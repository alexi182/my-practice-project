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
   }

   render() {
      return (
          <div className="profile-content">
             <h2>Информация о пользователе</h2>
             {/*<div className="profile-info">{this.props.data.map((item, index) =>*/}
                  {/*<div key={index}>*/}
                     {/*<p>{item.id}</p>*/}
                     {/*<p>{item.title}</p>*/}
                     {/*<p>{item.body}</p>*/}
                  {/*</div>*/}
                {/*)}*/}
             {/*</div>*/}
          </div>
      );
   }
}