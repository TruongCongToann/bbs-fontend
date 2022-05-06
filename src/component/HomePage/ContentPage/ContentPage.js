import React from 'react'
import './ContentPage.css'
// import Pagination from '../../Pagination/Pagination'
const ContentPage = () => {
  return (
    <div className='content-container'>
          <div className='content-left'>
            <div className='content-img'>
            </div>
          </div>

          <div className='content-right'>
              <div className='content-title'> 
                  Tại sao React sử dụng Virtual DOM ?
              </div>
              <div className='content-info'>
                <div className='autor'>
                    Author: toan_tc
                </div>
                <div className='create'>
                    Created on: 2022-05-06
                </div>
                <div className='update'>
                     Updated on: 2022-05-06
                </div>
              </div>
              <div className='content-body'>
                Kể từ khi React ra đời và trở nên phổ biến trong thế giới Front End, một số thuật ngữ cũng được gắn liề...
              </div>
              <div className='content-more'>
                      learn more
              </div>
          </div>
         
          {/* <Pagination userPerPage={1} 
            totalUsers={10}
            paginate={3}
            /> */}
        
    </div>
  )
}

export default ContentPage