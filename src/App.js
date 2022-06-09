import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Addcontact from './components/Addcontact';
import Contactlist from './components/Contactlist';


function App() {
  const contacts = [
    {
      id: " 1",
      name: ' josh',
      email : 'joshimatta777@gmail.com'
    },
    {
      id: " 2",
      name: ' naveen',
      email : 'naveen777@gmail.com'
    },
    {
      id: " 3",
      name: ' sivaji',
      email : 'sivaji777@gmail.com'
    }

  ];
  return (
   <>
   <div className=" ui container">
   <Header/>
     <Addcontact/>
     {/* <Main/> */}
     <Contactlist contacts={contacts}/>
     <Footer/>
   </div>
     
   
   </>
   
   
  );
}

export default App;
