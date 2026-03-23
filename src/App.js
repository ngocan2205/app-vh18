import List from './components/List';
import './App.css';

function App() {
  return (
    <>
      <List />
      <hr />
    <img src="keera.png" width={380} height={260} />
    <h1>Keera Mon do xao quyet</h1>
    <table border={1}>
      <tr>
        <th>STT</th>
        <th>Ma sinh vien</th>
        <th>Hoa va ten</th>
        <th>Diem</th>
      </tr>
      <tr>
        <td>1</td>
        <td>B23DVCN009</td>
        <td>Nguyen Ngoc An</td>
        <td>8.5</td>
      </tr>
    </table>
    </>
  );
}

export default App;
