import React from "react";
import {Form} from "react-bootstrap";
import { useForm } from "react-hook-form";
import '../App.css';

const CardDetailsForm = () => {

    const {register, handleSubmit,formState: {errors}} =useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
     return (
         <div className="card-details-form d-flex">
                 <div className="left">
                     <div className="front">
                         <div className="circle"></div>
                         <div className="small-circle"></div>
                         <h3>9591 6489 6389 1011</h3>
                         <h5>felicia leire</h5>
                         <h6>09/00</h6>
                     </div>
                     <div className="back">
                         <div className="black"></div>
                         <div className="line"><h6>000</h6></div>
                     </div>
                 </div>
                 <div className="right">
                     <Form onSubmit={handleSubmit(onSubmit)}>
                         <label className="form-label">CARDHOLDER NAME</label>
                         <input type="text" className="form-control" {...register("Name", {required:true, maxLength: 20})}/>
                         {errors.Name && <p>Please the check name</p>}
                         <label className="form-label">CARD NUMBER</label>
                         <input type="number" className="form-control" {...register("cardNumber", {required:true, pattern:/^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/})}/>
                         {errors.cardNumber && <p>Wrong format, numbers only</p>}
                         <label className="form-label  MM">Exp. Date </label>
                         <label className="form-label YY">(MM/YY)</label>
                         <label className="form-label CVV">CVV2</label>
                         <div className="d-flex">
                             <input type="number" className="form-control month" {...register("cardMonth", {required:true, pattern:null})}/>
                             <input type="number" className="form-control year" {...register("cardYear")}/>
                             <input type="number" className="form-control cvv2" {...register("cvv2", {required:true, pattern:null})}/>
                         </div>

                         {errors.cardMonth && <p>Can’t be blank</p>}
                         <button className="btn btn-primary" type="submit">Confirm</button>
                     </Form>
                 </div>
         </div>
     );
}
export default CardDetailsForm;
