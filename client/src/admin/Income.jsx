import { useDispatch, useSelector } from "react-redux";
import { useRedirectLoggedOutUser } from "../hooks/useRedirectLoggedOutUser";
import { Title } from "../routes/common/AllRoutes.jsx";
import { CgDollar } from "react-icons/cg";
import { useEffect } from "react";
import { getIncome } from "../redux/features/authSlice.js";

export const Income = () => {

    // useRedirectLoggedOutUser('/login')

    const {income}=useSelector((state)=>state.auth)
    // console.log(income)
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    useEffect(() => {

        dispatch(getIncome())

    }, [dispatch])
    
    // console.log(income)


  return (
    <>
      <section>
        <div className="shadow-s1 p-8 rounded-lg  mb-12">
          <Title level={5} className=" font-normal">
            Commission Income
          </Title>

          <div className="shadow-s3 py-16 my-16 border border-green bg-green_100 p-8 flex items-center text-center justify-center gap-5 flex-col rounded-xl">
            <CgDollar size={80} className="text-green" />
            <div>
              <Title level={1}>${income?.commissionBalance.toFixed(2)}</Title>
              <Title>Total Income</Title>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};