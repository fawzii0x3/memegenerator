import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
const Content = () => {
    const [memes,setMemes] = useState({});
    const [meme,setMeme]= useState({
      top:"",
      bottom:"",
      img:""
    });
    const randomImg=()=>{
      let i = Math.floor(Math.random() * (memes.length));
      setMeme({...meme,img:memes[i].url });
    }
    const handleChange=(e)=>{
      const {type,name,value}=e.target
      setMeme({...meme,[name]:value})
    };
    useEffect(()=>{
      fetch("https://api.imgflip.com/get_memes")
      .then(res=>res.json())
      .then(Data=>setMemes(Data.data.memes))
    },[])
  return (
    <main>
      <section>
        <input value={meme.top} name="top" onChange={handleChange} type="text" placeholder="top"/>
        <input value={meme.bottom} name="bottom" onChange={handleChange} type="text" placeholder="bottom"/>
        <button onClick={randomImg} type="button">Get new meme image🖼️</button>
      </section>
      <div className="container">  
        <img src={meme.img}/>
        <pre className="top">{meme.top}</pre>
        <pre className="bottom">{meme.bottom}</pre>
      </div>
    </main>
  );
};

export default Content;
