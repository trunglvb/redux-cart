
import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav'
import Menu from '@mui/material/Menu';
import {Link , NavLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import { Fragment } from 'react';
import {DELETE, ADD, DELETE_ONLY} from '../redux/actions/actions'
const Header = () => {
    //thu vien
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dataItem = useSelector((state) => state.cartReducer.carts)
    const [price,setPrice] = useState();
    const dispatch = useDispatch()

    const total = ()=>{
        let price = 0;
        dataItem.map((ele,k)=>{
            price = ele.price * ele.qnty + price
        });
        setPrice(price);
    };

    useEffect(()=>{
        total();
    },[total])

    const handleDetete = (id) => {
        dispatch(DELETE(id)) 
    }
    return (
        <>
            <Navbar bg="dark" variant="dark" className='p-3'>
                <Container>
                    <NavLink className='no-underline text-white mx-4'  to='/'>Add to Cart</NavLink>
                    <Nav className="me-auto">
                        <NavLink className='no-underline text-white'  to='/'>Home</NavLink>
                    </Nav>
                    <Badge badgeContent={dataItem.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i className="fa-sharp fa-solid fa-cart-shopping text-white text-2xl cursor-pointer"></i>
                    </Badge>
                    
                </Container>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {
                        dataItem.length > 0 ? 
                        
                        <div className='w-[24rem] p-2'>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Photo</th>
                                        <th>Restaurant Name</th>
                                    </tr>
                                </thead>
                                <>
                                    {
                                        dataItem.map((e, index)=>{
                                            return (
                                                <Fragment key={index}>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <NavLink to={`/cart/${e.id}`}  onClick={handleClose}>
                                                                    <img src={e.imgdata} style={{width:"5rem",height:"5rem"}} alt="" />
                                                                </NavLink>   
                                                            </td>
                                                            <td>
                                                                <p>{e.rname}</p>
                                                                <p>Price : ₹{e.price}</p>
                                                                <p>Quantity : {e.qnty}</p>
                                                                <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                                                            <span style={{fontSize:24}} onClick={() => dispatch(DELETE_ONLY(e))}>-</span>
                                                            <span style={{fontSize:22}}>{e.qnty}</span>
                                                            <span style={{fontSize:24}} onClick={() => dispatch(ADD(e))}>+</span>
                                                </div>
                                                            </td>
    
                                                            <td className='mt-5'style={{color:"red",fontSize:20,cursor:"pointer"}}  onClick={() => handleDetete(e.id)}>
                                                                <i className='fas fa-trash largetrash'></i>
                                                            </td>
                                                            
                                                        </tr>
                                                    </tbody>
                                                
                                                </Fragment>
                                            )
                                        })
                                    }
                                </>
                            </Table>
                            <div className='text-center'>Total :₹ {price}</div>
                        </div>

                        :
                        <div className='card_details flex justify-center items-center w-[24rem] p-3 relative'>
                            <i className='fas fa-close smallclose absolute top-1 right-5 text-2xl cursor-pointer'
                                onClick={handleClose}
                            >
                            </i>
                            <p className='text-2xl mr-2'>Your carts is empty</p>
                            <img src="https://media.istockphoto.com/vectors/empty-shopping-bag-icon-online-business-vector-icon-template-vector-id861576608?k=20&m=861576608&s=612x612&w=0&h=UgHaPYlYrsPTO6BKKTzizGQqFgqEnn7eYK9EOA16uDs=" alt="" className='w-[60px]] h-[60px] object-cover'/>
                        </div>
                    }

                </Menu>
            </Navbar>
        </>
    )
}

export default Header