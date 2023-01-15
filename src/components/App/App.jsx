import logo from './logo.svg';
import styles from './App.module.css';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.layout}>
        <Nav />
        <Main />
      </div>
    </div>
  );
}

export default App;
