import Header from '../components/header';
import Footer from '../components/footer';

export default class Layout extends React.Component {
   constructor(props) {
      super(props)
   }

   render() {
      const title = 'Hi!';

      return (
          <div className="page-inner">
             <Header header={title} />
             <div className="content container">
                {this.props.children}
             </div>
             <Footer />
          </div>
      );
   }
}

