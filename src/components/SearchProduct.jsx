import React, { useState } from 'react'
import NavBar from './NavBar'

const SearchProduct = () => {
    const [data,setData]=useState(
        {
            "id":""
        }
    )
        const inputHandler=(event)=>{
            setData({...data,[event.target.name]:event.target.value})
        }
        const readValue=()=>{
            console.log(data)
        }

    
  return (
    <div>
        <NavBar/>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="form-label">ProductId</label>
                            <input type="text" className="form-control"name='id'value={data.id}onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button class="btn btn-success"onClick={readValue}>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchProduct