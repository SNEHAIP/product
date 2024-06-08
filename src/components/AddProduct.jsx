import React, { useState } from 'react'
import NavBar from './NavBar'

const AddProduct = () => {
    const[data,setData]=useState(
        {
            "id":"",
            "title":"",
            "description":"",
            "price":"",
            "category": "",
            "manufact":"",
            "expiry":""
        }
    )
        const inputHandler=(event)=>{
            setData({...data,[event.target.name]:event.target.value})
        }
        
           const readValue=()=>{
            console.log(data)
           }
        
  return (
    <div><NavBar/>
     <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="form-label">ProductId</label>
                        <input type="text" className="form-control"name='id'value={data.name}onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="form-label">ProducName</label>
                    <input type="text" className="form-control" name='title' value={data.title}onChange={inputHandler}/>

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="form-label">Description</label>
                     <textarea name="" id="" className="form-control"name='description' value={data.description}onChange={inputHandler}></textarea>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="form-label">Price</label>
                    <input type="text" className="form-control"name='price'value={data.price}onChange={inputHandler} />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="form-label">Category</label>
                    <select name="" id="" className="form-control"name='category'value={data.category}onChange={inputHandler}>
                        <option value="Electronics"Electronics></option>
                        <option value="Beauty">Electronics</option>
                        <option value="Stationary">Stationary</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Grocery">Grocery</option>
                    </select>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="form-label">Manufactured Date</label>
                    <input type="date" name="" id="" className="form-control"name='manufact'value={data.manufact}onChange={inputHandler} />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="form-label">Expiry Date</label>
                    <input type="date" name="" id="" className="form-control"name='expiry'value={data.expiry}onChange={inputHandler} />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button class="btn btn-success"onClick={readValue} >SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    </div></div>
  )
}

export default AddProduct