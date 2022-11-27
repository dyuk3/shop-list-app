import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { deleteShop } from '../../features/shops/shopSlice';
import './shop.scss';




const Shop = ({ shopName, category, shopArea, startDate, closingDate, id }) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteShop(id));

  }

  return (
    <div className='shop'>
      <div className="shopDetails">
        <div className="detailItem">
          <span className='shopName'>{shopName}</span>
        </div>
        {/* <div className="shopInfo"> */}
        <div className="detailItem">
          <span className='others'>{category}</span>
        </div>
        <div className="detailItem">
          <span className='others'>{shopArea}</span>
        </div>
        <div className="dates">
          <span className='others'>{startDate}</span>
        </div>
        <div className="dates">
          <span className='others'>{closingDate}</span>
        </div>
        {/* </div> */}
      </div>
      <div className="buttons">
        {/* <i class="fa-light fa-pen-to-square"></i> */}
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />

        {/* <i class="fa-light fa-trash"></i> */}
      </div>

    </div>
  )
}

export default Shop