//4. What is Virtual DOM? How does it improve performance in React?
//  virtual dom ek light weight process hai jo react ke components ke current state ko represent karta hai. jab bhi component me koi change hota hai, 
//  react virtual dom me us change ko pehle update karta hai, phir real DOM me update karta hai. isse performance improve hoti hai kyunki real DOM me direct updates costly hote hain,
//   jabki virtual DOM me updates fast hote hain. react diffing algorithm ka use karke virtual DOM aur real DOM ke beech differences ko calculate karta hai aur sirf necessary updates real DOM me karta hai, 
//   jisse overall performance better hoti hai.
//   USE FAST REFRESH
//   USE BEST UI LIBRARY
//   MINIMIZE RE-RENDERS
//   USE OPTIMIZATION TECHNIQUES LIKE MEMOIZATION





// 5.Explain the dependency array in useEffect. What happens if it's empty or missing?

//  useEffect hook me dependency array ek optional parameter hai jo specify karta hai ki useEffect kab run hoga.
//  agar dependency array empty hai (useEffect(() => { ... }, [])), to useEffect sirf component ke initial render ke baad run hoga, aur uske baad kabhi nahi.
// it is use the useEffect hook and it will run only once when the component mounts


//6.What are controlled and uncontrolled components in React forms?
// A controlled component is a form element whose value is controlled by React state
//Value is stored in state
//Use onChange to update state
// An uncontrolled component is a form element that maintains its own internal state
//Value is stored in the DOM
//Use refs to access value


//7How does React handle component re-rendering?
// React khud decide karta hai kab component ko re-render karna hai based on changes.
// react use a vitual dom and to optimise the rendering process 
// jab bhi component ke state ya props me koi change hota hai, react virtual DOM me us change ko pehle update karta hai,
//  phir real DOM me update karta hai.

//8What is the folder structure of a scalable React project? Explain best practices.
// a well structured folder structure for a scalable React project typically includes the following directories:
// src/
  // components/ - Reusable UI components
  // pages/ - Page-level components for routing 
    // services/ - API calls and business logic
    // utils/ - Utility functions and helpers
    // assets/ - Images, styles, and other static files
    // hooks/ - Custom React hooks
    // context/ - Context API for state management
    // App.jsx - Main application component
    // Main.js - Entry point of the application            

    //9.What are the advantages of using Context API over props drilling?

    //context  api data ka easily share krti hai
    //props drilling me data ko multiple levels ke components ke through pass krna padta hai, jo code ko complex aur difficult to maintain bana deta hai.
    // ye disadvantages ko avoid krne ke liye context api use ki jati hai, jo data ko directly components ke beech share karne ki suvidha deti hai, bina intermediate components ke through pass kiye.
    //context api se code cleaner aur easier to maintain hota hai, kyunki data ko directly access kiya ja sakta hai jahan zarurat ho, bina unnecessary props passing ke.'
    // 3 step hai 
    // 1. create context
    // 2. provide context
    // 3. consume context


    // 10 What is the difference between synchronous and asynchronous API calls in React?
// synchronous API calls me code sequentially execute hota hai, yani ek call complete hone ke baad hi next call execute hota hai. 
// isme user interface block ho sakta hai jab tak API response nahi aata.
// asynchronous API calls me code non-blocking hota hai, yani API call ke response ka wait nahi karta.
//  isme user interface responsive rehta hai aur API response aane par callback function execute hota hai.
//  asynchronous calls me promises ya async/await ka use kiya jata hai to handle the asynchronous nature of the calls.




