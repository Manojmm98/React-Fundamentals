import React,{useState,useMemo} from 'react'


// usememo is used when we have to cast a certain value means when we will depends on a certain value

// here we have two component one is for incrementing salary and other is for incrementing count if we continue a loop inside iseven function that
// deppends on the count value then our salary value also effected and our program become slower if we will now go 
// to increment count or salary then both will take som time to change the state to solve this issue we use usememo in react

// steps--> import usememo, call the usememo function which will take two arguments one is the callback function anothe one depency array 
//wherer we will  provide the value for which the component depends
function UseMemo() {

    
    let [count,setCount]= useState(0);
    let [salary,setSalary]= useState(10000);


    let handleSalary=()=>{
        setSalary(salary+1000);
    }
    
    let handleCount=()=> {
        
        setCount(count+1)

       }

       // now after using useMemo our 2nd component will not be affected   
     const isEven= useMemo(()=>{
        
        let i=0;
        while (i<2000000000) {
            i++;
        }
        
         return count%2==0;
       },[count])


    return (
        <div>
             <h2>{count}</h2>
             <span>{isEven?'even':'odd'}</span>
            <button onClick={handleCount}> increse count</button>
            <h2>{salary}</h2>
            <button onClick={handleSalary}>increse salary</button>     
        </div>
    )
}

export default UseMemo
