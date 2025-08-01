import { useNavigate, useParams } from "react-router-dom";
import { useRedirectLoggedOutUser } from "../../hooks/useRedirectLoggedOutUser";
import { Caption, Title,commonClassNameOfInput, PrimaryButton } from "../../routes/common/AllRoutes";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct, updateProductByAdmin } from "../../redux/features/productSlice";
import { useState } from "react";

export const UpdateProductByAdmin = () => {
    // useRedirectLoggedOutUser('/login')
    const {id}=useParams();
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const {isSuccess}=useSelector((state)=>state.product)

    const [commission,setCommission]=useState(0);

    const save=async(e)=>{

        e.preventDefault();
        const formData={
            commission
        }

        await dispatch(updateProductByAdmin({id,formData}))
        await dispatch(getAllProduct())

        if(isSuccess){
            navigate('/product/admin')
        }
    }
  return (
    <>
      <section className="bg-white shadow-s1 p-8 rounded-xl">
        <Title level={5} className=" font-normal mb-5">
          Update Product
        </Title>
        <hr className="my-5" />
        <div className="create-product">
          <form onSubmit={save}>
            <div className="w-full">
              <Caption className="mb-2">Commission *</Caption>
              <input type="number" value={commission} onChange={(e)=>setCommission(e.target.value)} name="commission" className={`${commonClassNameOfInput}`} />
            </div>
            <PrimaryButton type="submit" className="rounded-none my-5">
              Update
            </PrimaryButton>
          </form>
        </div>
      </section>
    </>
  );
};