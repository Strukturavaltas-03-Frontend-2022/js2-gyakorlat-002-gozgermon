
const summarize=function(...args)
{
    let numArray=args.filter(item=>Number.isInteger(item))
    
    numArray=numArray.map(item=>BigInt(item))
    const initialValue = 0n;
    let result= numArray.reduce((first,second)=>first+second,initialValue)
    if (result>BigInt(Number.MAX_SAFE_INTEGER))
        {
            return result
        }
        else{
            return Number(result)
        }
}

 export default summarize;
