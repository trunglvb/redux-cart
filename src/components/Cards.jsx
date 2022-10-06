import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cardsdata from "./CardsData";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/actions";
const Cards = () => {
    
    const [data, setData] = useState(Cardsdata);
    const dispatch = useDispatch();

    const handleAdd = (element) => {
        dispatch(ADD(element));
    };
    return (
        <div className="lg:w-[1170px] mt-3 m-auto p-5">
            <h2 className="text-center mb-4">Add to Cart Projects</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 mb-12">
                {data.map((element, id) => {
                    return (
                        <Fragment key={id}>
                            <Card className="cursor-pointer transition-all duration-300 hover:shadow-md">
                                <Card.Img
                                    variant="top"
                                    src={element.imgdata}
                                    className="h-[16rem] object-cover"
                                />
                                <Card.Body>
                                    <Card.Title>{element.rname}</Card.Title>
                                    <Card.Text>
                                        Price : ₹ {element.price}
                                    </Card.Text>
                                    <div className="flex justify-center">
                                        {/* <Button
                                            variant="primary"
                                            onClick={() => handleAdd(element)}
                                            className="w-full"
                                        >
                                            Add to Cart
                                        </Button> */}
                                        <button className="w-full bg-slate-600 text-white p-2 mt-[10px]" onClick={() => handleAdd(element)} >Add to cart</button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default Cards;
