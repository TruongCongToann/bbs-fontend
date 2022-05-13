import React, { Fragment } from 'react'
import ContentInfo from '../HomePage/ContentPage/ContentInfo/ContentInfo'
import Header from '../HomePage/Header/Header'
import './DetailPage.css'

import '@fortawesome/fontawesome-free/css/all.min.css';

function DetailPage() {
  return (
  <Fragment>

    <Header/>

    <div className='detail-container'>
          <div className='detail-header'>
                <div className='detail-title'> 
                Tại sao React sử dụng Virtual DOM ?
              </div>
              <div className='detail-export'>
          
              <i class="fas fa-cloud-download-alt"></i>
              EXPORT
              </div>
          </div>
         <ContentInfo/>
         <div className='detail-body'>
         Virtual DOM không được tạo ra bởi React tuy nhiên nó được React sử dụng và cung cấp miễn phí.

      Một cách tổng quát thì nó là một định dạng dữ liệu JavaScript nhẹ được dùng để thể hiện nội dung của DOM tại một thời điểm nhất định nào đó. Nó có tất cả các thuộc tính giống như DOM nhưng không có khả năng tương tác lên màn hình như DOM.
      Bạn có thể tưởng tượng, ở DOM có thẻ div và các thẻ p ở trong, ReactJs sử dụng Virtual DOM bằng cách tạo ra các object React.div và React.p và khi tương tác, 
      ta sẽ tương tác qua các object đó một cách nhanh chóng mà không phải đụng tới DOM hay DOM API của nó.
      Việc tách biệt logic liên quan đến việc rendering ra khỏi DOM cho phép React chạy được trên nhiều môi trường khác nhau thay vì chỉ một môi trường duy nhất là trình duyệt (React Navtive hoặc SSR - Server-Side Rendering cho cả React). Chúng ta biết rằng Virtual DOM trên thực tế chỉ là một JavaScript object do đó chúng ta chỉ cần một môi trường cho chép chạy JavaScript và việc sử dụng Virtual DOM là hoàn toàn khả thi. Một số ví dụ có thể nói đến ở đây là: SSR sử dụng NodeJS hoặc embedded JavaScript khi xây dựng các ứng dụng native cho nền tảng Web cũng như Mobile. Công việc của chúng ta là thay đổi generation algorithm cho từng môi trường cụ thể nhằm thu được các output mong muốn cho từng môi trường đó.

Sử dụng Virtual DOM cho phép chúng ta tính toán các thay đổi trên đó (just JavaScript) và áp dụng đồng thời các thay đổi đó lên Actual DOM khi cần thiết. Phương pháp này sẽ hiệu quả hơn khá nhiều so với việc access Actual DOM element (sử dụng jQuery chẳng hạn) và tính toán các thay đổi trên đó.


         </div>   
    </div>
  </Fragment>
  )
}

export default DetailPage