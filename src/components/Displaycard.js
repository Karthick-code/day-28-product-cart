import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteIcon from '@mui/icons-material/Delete';
import { TotalAmtCard } from './TotalAmtCard';

export function Displaycard({ data }) {
    const [qnty, setQnty] = useState(1);
    
   

    const handleIncrease = () => {
        if (qnty > 0) {
            setQnty(qnty + 1);
            
        }
        else if(qnty===0){
            setQnty(qnty + 1);
            
        }
    }
    const handleDecrease = () => {
        if (qnty > 1) {
            setQnty(qnty - 1);
        }
    }
    const handleDel = () => {
        setQnty(0)
    }

    return (
        <>
            <div className="row card" >
                <div className="col-6-lg imgslot">
                    <div className="row">
                        <div className="col-4-lg">
                            <div className="img">
                                <img src={data.thumbnail} alt="" />
                            </div>
                            <div className="rate">
                                Rating:  {data.rating} <span className="star">★</span>
                            </div>
                        </div>
                        <div className="col-4-lg descslot">
                            <h5 className="title">{data.title}</h5>
                            <p className="desc">{data.description}</p>
                            <h6 className="brand">Brand: <b>{data.brand}</b></h6>
                            <h6 className="stock">Stocks Available: <b>{data.stock}</b></h6>
                        </div>
                    </div>

                </div>
                <div className="col-4-lg pricecol">
                    <div className="row priceslot">
                        <div className="col-6-lg button">
                            <ButtonGroup variant="contained" aria-label="Basic button group">
                                <Button onClick={handleDecrease}><RemoveIcon /></Button>
                                <div className="qnty" style={{ display: "inline" }}>{qnty}</div>
                                <Button onClick={handleIncrease}><AddIcon /></Button>
                            </ButtonGroup>
                        </div>
                        <div className="col-6-lg price">${data.price} </div>
                    </div>
                    <div className="row discountslot">
                        <div style={{ display: "inline" }}>discount Rate(in%):</div> <div>{data.discountPercentage}</div>
                    </div><br />
                    <div className="row removebut">
                        <div><Button onClick={handleDel}><DeleteIcon /> Remove </Button></div>
                        <div></div>
                    </div>

                </div>

            </div>
            <TotalAmtCard amt={data.price} qnty={qnty} discount={data.discountPercentage}/>

        </>

    )
}


