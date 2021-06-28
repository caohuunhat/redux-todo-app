import { useState } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import Table from './components/Table';

function App() {
  const [toggle, setToggle] = useState(false);

  const onToggleForm = () => {
    setToggle(!toggle)
  }

  return (
    <div className="container">
      <div className="container row mt-5">
        <div className="col-lg-4">
          <button
            type="button"
            className={`btn btn-${toggle === false ? 'primary' : 'danger'}`}
            onClick={onToggleForm}
          >{toggle === false ? "Thêm" : "Đóng"}</button>
        </div>
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-8">
              <input type="text" className="form-control" placeholder="Nhập từ khóa tìm kiếm" />
            </div>
            <div className="col-lg-4">
              <button type="button" className="btn btn-primary">Tìm kiếm</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {toggle === false ? '' :
          <div className="col-lg-4">
            <AddItem />
          </div>}
        <div className={toggle === false ? "col-lg-12" : "col-lg-8"}>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
