import './App.css';
import Menu from './component/menu';
import News from './component/News';
import {BrowserRouter , Routes , Route}  from 'react-router-dom'
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'
import About from './component/About';

  const App = () => {
    const pageSize = 5;
    const apiKey = "6a8977662f8543828997ccf7584c3afe";
    const [progress , setProgress] = useState(0)
    return (
      <div>
    <BrowserRouter>
        <Menu/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        />

       <Routes>
          <Route exact path="/" element={<News setProgress={setProgress}  apiKey= {apiKey} key="general" pageSize={pageSize} country='in' category="general">  </News>}/>
          <Route exact path="/general" element={<News setProgress={setProgress}  apiKey= {apiKey} key="general" pageSize={pageSize} country='in' category="general">  </News>}/>
          <Route exact path="/business" element={<News setProgress={setProgress}  apiKey= {apiKey} key="business" pageSize={pageSize} country='in' category="business">  </News>}/>
          <Route exact path="/entertainment" element={<News setProgress={setProgress}  apiKey= {apiKey} key="entertainment" pageSize={pageSize} country='in' category="entertainment"></News>}/>
          <Route exact path="/category" element={<News setProgress={setProgress}  apiKey= {apiKey} key="category" pageSize={pageSize} country='in' category="category">  </News>}/>
          <Route exact path="/health" element={<News setProgress={setProgress}  apiKey= {apiKey} key="health" pageSize={pageSize} country='in' category="health">  </News>}/>
          <Route exact path="/science" element={<News setProgress={setProgress}  apiKey= {apiKey} key="science" pageSize={pageSize} country='in' category="science">  </News>}/>
          <Route exact path="/sports" element={<News setProgress={setProgress}  apiKey= {apiKey} key="sports" pageSize={pageSize} country='in' category="sports">  </News>}/>
          <Route exact path="/technology" element={<News setProgress={setProgress}  apiKey= {apiKey} key="technology" pageSize={pageSize} country='in' category="technology">  </News>}/>  
          <Route exact path="/about" element={ <About/>}/>       
       </Routes>
   </BrowserRouter>
      </div>
    )
  }
export default App
