import './HomeMiddle.css';
import pink_background from '../components/Assets/images/pink.png'
import models from '../components/Assets/images/HomeMiddle image.jpg'
import pink_shadow from '../components/Assets/images/pink shadow.webp'
function HomeMiddle()
{
    return( 
        <div className="HomeMiddle_container">
<div className="half image">
    <img src={pink_background} alt="pink background" className='pink_back_img' />
    <img src={models} alt="models" className='models_img' />
</div>
<div className="half info">
<p className="title"> Your Style, Your Story</p>
<p className="paragraph">Discover a world of fashion for the whole family at MSLA.
     From trendy kids' clothes to stylish women's apparel and sophisticated men's attire,
      our carefully curated collection offers something for everyone. Explore our diverse 
      range of styles, colors, and sizes to find the perfect pieces that express your individuality.</p>
{/* <img src={pink_shadow} alt="pink_shadow" className="pink_shadow" /> */}
<div className="icons"><i class="fa fa-heart"></i><span>Best Selling Fashion</span><br/>
<i class="fa fa-female"></i><span>new collection always coming...</span>
</div> </div></div>
    )
}
export default HomeMiddle