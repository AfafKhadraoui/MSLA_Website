import './Category.css';
import { useNavigate } from 'react-router-dom';

function Category() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    // Navigate to the product page and pass the selected category as a query parameter
    navigate(`/product?category=${category}`);
  };

  return (
    <div className="Category_container">
      <span className='Category'>Category</span>
      <i className="fa fa-angle-down"></i>
      <ul className="Category_items">
        <li className="item Women"><a onClick={() => handleCategoryClick('Women')}>Women</a></li>
        <li className="item Men"><a onClick={() => handleCategoryClick('men')}>Men</a></li>
        <li className="item Kids"><a onClick={() => handleCategoryClick('kids')}>Kids</a></li>
      </ul>
    </div>
  );
}

export default Category;
