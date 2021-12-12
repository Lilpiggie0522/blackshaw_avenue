import './App.css';
import Room from './Room';
import bathroom1 from './images/bathroom1.png';
import bathroom2 from './images/bathroom2.png';
import bed from './images/bed.png';
import kitchen from './images/kitchen.png';
import living_room from './images/living_room.png';
import study_desk from './images/study_desk.png';
import wardrobe from './images/wardrobe.png';

function App() {
  return (
    <div className="App">
      <Room image = {bathroom1} title="洗手台"/>
      <Room image ={bathroom2} title="洗手间"/>
      <Room image={bed} title="要租的屋的床"/>
      <Room image={kitchen} title="厨房"/>
      <Room image={living_room} title="客厅"/>
      <Room image={study_desk} title="学习桌"/>
      <Room image={wardrobe} title="衣柜"/>
    </div>
  );
}

export default App;
