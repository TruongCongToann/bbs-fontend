import React,{useEffect,useState} from 'react'
import './ContentPage.css'
import { path } from '../../../route/routes';
import { useNavigate } from 'react-router-dom';
import { useFetch ,getDataById} from '../../customhook/useFetch';
import { useSelector,useDispatch } from 'react-redux';
import allAction from '../../../redux/action/allAction';
import  Pagination  from '../../Pagination/Pagination';

const ContentPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 var url = "http://localhost:9000/api/posts/"

 //using for paination
 const [currentPage, setcurrentPage] = useState(1);
 const [userPerPage, setuserPerPage] = useState(10);

 //using for read img base64
 const [previewImgURL, setpreviewImgURL] = useState('')
// var previewImgURL = ""
//----------------------------------------------------------------------------------------------------
  //get index of last user
  const indexOfLastUser = currentPage*userPerPage;
  const indexOfFirstUser = indexOfLastUser-userPerPage;
  let currentUser = [];
  let totalUsers = 0;


 //data get from api
 const {data:posts} = useFetch(url);
const [postData, setpostData] = useState('')
// const {data:post} = getDataById(url); 
const redux_Posts = useSelector(state => state.post);

//----------------------------------------------------------------------------------------------------
  //handle go to detail page
  const handleDetail = () =>{
    navigate(path.DETAIL)
  }
  //handle goto export
  const handleExport = () =>{
    // navigate(path.DETAIL)
    alert("export")
  }

   //add data to redux
 useEffect(() => {
  dispatch(allAction.postAction.addPost(posts));
 setpostData(posts)
 }, [posts])


   // Change page
   const paginate = pageNumber => setcurrentPage(pageNumber);

if (postData && postData.result.length >0 ) {
  currentUser =   postData.result.slice(indexOfFirstUser,indexOfLastUser);
  totalUsers = postData.result.length;
}  
//reduce image size 


async function reduce_image_file_size(base64Str, MAX_WIDTH = 200, MAX_HEIGHT = 200) {
  let resized_base64 = await new Promise((resolve) => {
      let img = new Image()
      img.src = base64Str
      img.onload = () => {
          let canvas = document.createElement('canvas')
          let width = img.width
          let height = img.height

          if (width > height) {
              if (width > MAX_WIDTH) {
                  height *= MAX_WIDTH / width
                  width = MAX_WIDTH
              }
          } else {
              if (height > MAX_HEIGHT) {
                  width *= MAX_HEIGHT / height
                  height = MAX_HEIGHT
              }
          }
          canvas.width = width
          canvas.height = height
          let ctx = canvas.getContext('2d')
          ctx.drawImage(img, 0, 0, width, height)
          resolve(canvas.toDataURL()) // this will return base64 image results after resize
      }
  });
  return resized_base64;
}
//----------------------------------------------------------------------------------------------------

return (
<>
  <div className='content-container'>
<table class="table">
  <tbody>
    {
    
     currentUser&&currentUser.length>0
      &&currentUser.map((item,index) =>{
        //make sub content
        var subContent = item.post.content.substr(0,100);
          // const resized =  reduce_image_file_size(previewImgURL);
          // console.log("gia tri resize la ",resized.result);

        return(
      <tr key={index}>
          <th scope="row">
          <div className='content-body'>
                <div className='content-left'
                 style={{backgroundImage:`url(${
                   item.post.thumbnail
                 })`}}
                 >
              
              </div>
          </div>
          </th>
          <td>
          <div className='content-right'>
            
                    <div className='content-title' onClick={() => handleDetail()}> 
                    {item.post.title}
                    </div>
                    <div className='content-info' >

                    <div className='autor'>
                        Author: {item.author.username}
                    </div>
                    <div className='create'>
                        Created on: {item.post.createdDate}
                    </div>
                    <div className='update'>
                        Updated on: {item.post.updatedDate}
                    </div>
                    </div>

                    <div className='content-body'>
                     {
                       `${subContent}...`
                     }
                    </div>
                    <div className='content-footer'>
                        <div className='content-export' onClick={() => handleExport()}>
                                  Export
                          </div>
                          <div className='content-more' onClick={() => handleDetail()}>
                                  learn more
                          </div>
                      </div>
                  </div>
                  </td>
                </tr>

            );
          })
      
    }
  </tbody>    
</table>
          <Pagination userPerPage={userPerPage} 
            totalUsers={totalUsers}
            paginate={paginate}
            />
  </div>
  
 </>
  );
}

export default ContentPage

