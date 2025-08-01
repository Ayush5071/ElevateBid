import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { getAllCategory } from "../../redux/features/categorySlice";
import { Loader } from "./Loader";

export const CategoryDropDown = (props) => {

  
  const dispatch=useDispatch()
  const {categorys,isLoading}=useSelector((state)=>state.category)
  
  useEffect(()=>{
    dispatch(getAllCategory())
  },[dispatch])

  const allCategory= Array.isArray(categorys) && categorys?.map((category)=>{
    return {
      label:category?.title,
      value:category?._id
    }
  })

  const handleChange=(selectedOption)=>{
    props.onChange(selectedOption)
  }

  return (
    <>
     {isLoading ? <Loader/> : <Select id="category" onChange={handleChange} options={allCategory} value={props.value}/>}
    </>
  );
};