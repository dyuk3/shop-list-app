import Shop from '../shop/Shop';
import './shops.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addShop, getAllShops } from '../../features/shops/shopSlice';
import { v4 as uuidv4 } from 'uuid';

const Shops = () => {

  const dispatch = useDispatch();
  const allShops = useSelector(getAllShops)
  const [show, setShow] = useState(false);


  const [newShop, setNewShop] = useState({
    id: uuidv4(),
    shopName: '',
    shopArea: '',
    category: '',
    startDate: '',
    closeDate: '',
  })


  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => setShow(true)


  const handleCategoryChange = (e) => {
    setNewShop({ ...newShop, category: e.target.value });
  }

  const handleAreaChange = (e) => {
    setNewShop({ ...newShop, shopArea: e.target.value });
  }

  const handleNameChange = (e) => {
    setNewShop({ ...newShop, shopName: e.target.value });

  }


  const handleStartDate = (e) => {
    setNewShop({ ...newShop, startDate: e.target.value });
  }

  const handleCloseDate = (e) => {
    setNewShop({ ...newShop, closeDate: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addShop(newShop));
    setNewShop({
      id: uuidv4(),
      shopName: '',
      shopArea: '',
      category: '',
      startDate: '',
      closeDate: '',
    });
    setShow(false);

  }





  return (
    <div className='shops'>
      <h2>Shops</h2>
      <div className="shopsContainer">
        <div className="shopDetails">
          <div className="detailItem">
            <h5>Name</h5>
          </div>
          <div className="detailItem">
            <h5>Category</h5>
          </div>
          <div className="detailItem">
            <h5>Area</h5>
          </div>
          <div className="dates">
            <h5>Start Date</h5>
          </div>
          <div className="dates">
            <h5>Close Date</h5>
          </div>
        </div>

        {allShops.length === 0 &&
          <h2>No shops found</h2>
        }

        {allShops.map((shop) => (
          <Shop key={shop.id} shopName={shop.shopName} category={shop.category} shopArea={shop.shopArea} startDate={shop.startDate} closingDate={shop.closeDate} id={shop.id} />
        ))}

      </div>
      <button onClick={handleShow}>Add Shop</button>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Shop</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" className='form' onSubmit={handleSubmit} >
            <label htmlFor="shopName">
              Name:
              <input type="text" placeholder='Enter shop name' name='shopName' required onChange={handleNameChange} pattern='[a-zA-Z ]+' title='alphabets only' />
            </label>
            <label htmlFor="category">
              Category:
              <select name="category" id="category" onChange={handleCategoryChange} required>
                <option value="">category</option>
                <option value="grocery">Grocery</option>
                <option value="butcher">Butcher</option>
                <option value="baker">Baker</option>
                <option value="chemist">Chemist</option>
                <option value="stationary">Stationary shop</option>
              </select>
            </label>
            <label htmlFor="area">
              Area:
              <select name="area" id="area" onChange={handleAreaChange} required>
                <option value="">Area</option>
                <option value="thane">Thane</option>
                <option value="pune">Pune</option>
                <option value="mumbai">Mumbai Suburban</option>
                <option value="nashik">Nashik</option>
                <option value="nagpur">Nagpur</option>
                <option value="ahmednagar">Ahmednagar</option>
                <option value="solapur">Solapur</option>
              </select>
            </label>

            <label htmlFor="startDate">
              Start date:
              <input type="date" name='startDate' required onChange={handleStartDate} />
            </label>
            <label htmlFor="closeDate">
              Close date:
              <input type="date" name='closeDate' min={newShop.startDate} required onChange={handleCloseDate} />
            </label>
            <Button variant="primary" type='submit' value='submit'>
              Save Changes
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </form>

        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>



    </div>
  )
}

export default Shops