import { useRef } from 'react';
import { useDispatch } from 'react-redux'
import { filterShops } from '../../features/shops/shopSlice';
import './filter.scss'

const areas = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Mumbai',
    value: 'mumbai',
  },
  {
    label: 'Pune',
    value: 'pune',
  },
  {
    label: 'Thane',
    value: 'thane',
  },
  {
    label: 'Nashik',
    value: 'nashik',
  },
  {
    label: 'Nagpur',
    value: 'nagpur',
  },
  {
    label: 'Ahmednagar',
    value: 'ahmednagar',
  },
  {
    label: 'Solapur',
    value: 'solapur',
  },
]


const categories = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Grocery',
    value: 'grocery',
  },
  {
    label: 'Butcher',
    value: 'butcher',
  },
  {
    label: 'Baker',
    value: 'baker',
  },
  {
    label: 'Chemist',
    value: 'chemist',
  },
  {
    label: 'Stationary Shop',
    value: 'stationary',
  },
]


const Filter = () => {

  const dispatch = useDispatch();

  const shopAreaRef = useRef(null);
  const shopCategoryRef = useRef(null);


  const filter = () => {
    dispatch(filterShops([shopAreaRef.current.value, shopCategoryRef.current.value]))

  }

  return (
    <div className='filter'>
      <div className="filterContainer">
        <span>Filter by: </span>
        <div className="item">
          <label htmlFor='area'>Area</label>
          <select name="area" id="area" ref={shopAreaRef} >


            {areas.map(({ label, value }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>



        </div>
        <div className="item">
          <label htmlFor='category'>Category
            <select name="category" id="category" ref={shopCategoryRef}>
              {categories.map(({ label, value }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>

          </label>
        </div>
        <div className="item">

          <label htmlFor="status">
            Status
            <select name="status" id="status">
              <option value="open">Open</option>
              <option value="close">Close</option>
            </select>
          </label>
        </div>

        <button onClick={filter}>filter</button>
      </div>
    </div>
  )
}

export default Filter