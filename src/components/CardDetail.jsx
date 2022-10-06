
import React, { Fragment, useState } from "react";
import Table from 'react-bootstrap/Table'
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {DELETE, ADD, DELETE_ONLY} from '../redux/actions/actions'
const CardDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [dataDetail, setDataDetail] = useState([])
    const history = useNavigate()

    const dataItem = useSelector((state) => state.cartReducer.carts)

    const compare = () => {
        let comnparedata = dataItem.filter((e) => {
            return e.id == id;
        })
        setDataDetail(comnparedata)
    }
    const handleDetete = (id) => {
        dispatch(DELETE(id))
        history('/') 
    }
    useEffect(() => {
        compare();
    }, [id])
    return (
        <>
            <div className="lg:w-[1170px] mt-2 m-auto">
                <h2 className='text-center'>Iteams Details Page</h2>
                <section className="mt-3">
                    <div className="max-w-[800px] flex justify-between m-auto items-center shadow-md">
                        {console.log(dataDetail)}
                        {
                            dataDetail && dataDetail.map((ele)=> (
                                <Fragment key={id}>
                                    <div className="flex-[4_4_0%] mr-8">
                                        <img src={ele.imgdata} alt="" />
                                    </div>
                                    <div className="flex-[5_5_0%]">
                                        <Table>
                                            <tr>
                                            <td>
                                            <p> <strong>Restaurant</strong>  : {ele.rname}</p>
                                                <p> <strong>Price</strong>  : ₹{ele.price}</p>
                                                <p> <strong>Dishes</strong>  : {ele.address}</p>
                                                <p> <strong>Total</strong>  :₹  {ele.price * ele.qnty}</p>
                                                <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                                                    <span style={{fontSize:24}} onClick={() => dispatch(DELETE_ONLY(ele))}>-</span>
                                                    <span style={{fontSize:22}}>{ele.qnty}</span>
                                                    <span style={{fontSize:24}} onClick={() => dispatch(ADD(ele))}>+</span>
                                                </div>
                                            </td>
                                            <td>
                                                <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>{ele.rating} ★	</span></p>
                                                <p><strong>Order Review :</strong> <span >{ele.somedata}	</span></p>
                                                <p><strong>Remove :</strong> <span ><i className='fas fa-trash' style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={ () => handleDetete(ele.id)} ></i>	</span></p>
                                            </td>
                                            </tr>
                                        </Table>
                                    </div>
                                </Fragment>
                            ))
                            
                        }
                    </div>
                </section>
            </div>
        </>
    )
};

export default CardDetail;
