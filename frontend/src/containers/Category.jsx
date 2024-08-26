import './Category.css'
function Category()
{
    return(
        <div className="Category_container">
        <span className='Category'>Category</span>
        <i class="fa fa-angle-down"></i>
            <ul className="Category_items">
                <li className="item Women"><a>Women</a></li>
                <li className="item Men"><a>Men</a></li>
                <li className="item Kids"><a>Kids</a></li>
                
            </ul>
       


        </div>
    )
}
export default Category;