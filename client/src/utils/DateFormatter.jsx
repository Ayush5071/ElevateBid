// import React from "react";
// import Moment from "react-moment";

// export const DateFormatter = ({ date }) => {
//   return (
//     <>
//       <Moment format="D MMM YYYY" withTitle>
//         {date}
//       </Moment>
//     </>
//   );
// };

import { format } from 'date-fns';

export const DateFormatter = ({ date }) => {
  return <span>{format(new Date(date), 'd MMM yyyy')}</span>;
};
