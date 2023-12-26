// step-1
import { useEffect, useState } from "react";

// step-2
function useCurrencyInfo(currency) {
     // step-4
     const [data, setData] = useState({}); // useState yaha isliye banaya hai taki error wegera handle kr le 

     // step-3
     useEffect(() => {
          fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
               .then((res) => res.json()) // string data ko json me convert kr rhe hai yaha
               .then((res) => setData(res[currency]))
          console.log(data);
     }, [currency]) // yaha currency dependency hai 
     console.log(data);
     return data;
}
export default useCurrencyInfo;