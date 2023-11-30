import React from 'react'

const ImgBox = () => {
  return (
    <>

    {/* img box */}
      <div className='imgbox'>
        <div className='imgbox-child1'>
          <div className='number'>01</div>
          <div className='tree-img'>
            <img src='./img/threeImg1.jpg' className='img-1'></img>
            <img src='./img/threeImg2.jpg' className='img-2'></img>
            <img src='./img/threeImg1.jpg' className='img-3'></img>

          </div>
          <div className='imgbox1-text1'>
            <p>Learn from best mentors</p>
          </div>

          <div className='start'>
            <button >START LEARNING <i class="fa-solid fa-arrow-down"></i></button>
          </div>

        </div>
        <div className='imgbox-child2'>

        <div className='number'>02</div>

        <ul className='imgbox-ul'>
          <li>Free Edit <i class="fa-solid fa-arrow-down"></i></li>
          <li>Interactive <i class="fa-solid fa-arrow-down"></i></li>
          <li>Easy interface <i class="fa-solid fa-arrow-down"></i></li>
          <li>Compare to other <i class="fa-solid fa-arrow-down"></i></li>
        </ul>
        </div>
        <div className='imgbox-child3'>
        <div className='number'>03</div>

        <div className='imbbox3-text'>
          <h1>+20K</h1><p>Glass Pattern generated this week in the first release</p>
          <div className='e-logo'>
            <img src='./img/e-logo.png'></img>
            <img src='./img/e-logo.png'></img>
          </div>
        </div>
        </div>
      </div>

    </>
  )
}

export default ImgBox
{/* <img src='./img/images1.png'></img> */ }