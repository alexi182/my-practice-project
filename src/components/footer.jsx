import './footer.css';

export default class Footer extends React.Component {
   render() {
      return (
          <footer className="footer">
             <div class="container">
                <p class="text-muted">Place sticky footer content here.</p>
             </div>
          </footer>
      );
   }
}

'use strict';

function objCheck(obj) {

   if (typeof(obj) == "object" && Object.keys(obj).length !== 0)
      console.log('Это объект');
}

const x = {
   name: "Sasha",
   town: "Moscow"
};

objCheck(x);


function list(y) {

    y.forEach(function(item, key) {
      if (((key+1) % 4) == 3 && item.indexOf('question more') == -1) {
      }
       console.log (item);
   });
}

const _y = ["Привет", "question more", "question more awesome", "пока", "давай", "нет", "да", "может"];

list(_y);
