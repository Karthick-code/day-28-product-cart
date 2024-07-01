export function TotalAmtCard({amt,qnty,discount}) {
    const subtotal_price=amt*qnty;
    const discount_amt=Math.floor((discount/100)*amt).toFixed(2);
    var total_price=subtotal_price;
    if(qnty>0){total_price=subtotal_price-discount_amt;}
    

    return (
        <div className="row card totdisp">
            
                <div className="col-12-lg subtot" >
                    <div style={{display:"inline"}}> <b>SubTotal</b></div>
                    <div style={{display:"inline"}}><b>{subtotal_price}</b></div>
                </div>
                <div className="col-12-lg ship" >
                    <div style={{display:"inline"}}> <b>Shipping</b></div>
                    <div style={{display:"inline"}}><b>free</b></div>
                </div>
                <div className="col-12-lg ship" >
                    <div style={{display:"inline"}}> <b>Discount</b></div>
                    <div style={{display:"inline"}}><b>{discount_amt}</b></div>
                </div>
                <div className=" row total" >
                    <div style={{display:"inline"}}><b>total</b></div>
                    <div style={{display:"inline"}}><b>{total_price}</b></div>
                </div>
            
        </div>
    );
}
