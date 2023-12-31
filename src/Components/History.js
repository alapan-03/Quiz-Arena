import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import correct from "./correct.png"
import incorrect1 from "./cancel.png"
import error from "./error.mp3"
import right from "./right.mp3"
import LoadingBar from 'react-top-loading-bar'
import arrow from "./arrow-right.png"

export default function General(props) {
    
    const ref = useRef(null)
    
    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [incorrect, setIncorrect] = useState([]);
    const [selected, setSelected] = useState("");
    const [shuffledAnswers, setShuffledAnswers] = useState([]);
    
    
    
    const shuffleAnswers = (correctAnswer, incorrectAnswers) => {
        const allAns = [correctAnswer, ...incorrectAnswers];
        const shuffled = shuffleArray(allAns);
        setShuffledAnswers(shuffled);
    };
    
    
    
    
    function getTotItem(){
        let localP = localStorage.getItem("totPoint")
        
        if(localP)
        return JSON.parse(localP)
    else
    return []
}
function getPoint(){
    let localP = localStorage.getItem("point")
    
    if(localP)
    return JSON.parse(localP)
else
return []
}
function getReload(){
    let localR = localStorage.getItem("reloadCount")
    
    if(localR)
    return JSON.parse(localR)
else
return []
}

const [points, setPoints] = useState(getPoint());
const [reloadC, setReloadC] = useState(getReload());
const [totPoint, setTotPoint] = useState(getTotItem());
const [selectedOption, setSelectedOption] = useState(null);
const [time, setTime] = useState(30)


if(reloadC===4){
    
    setTimeout(()=>{
        // setReloadC(0)
        // setPoints(0)
        // setTotPoint(0)
        window.location = "/footer";
        
    }, 4000)
    setTimeout(()=>{
        
        setPoints(0)
        
    }, 7000)
}
// const [corrAns, setCorrAns] = useState("");

useEffect(()=>{
    localStorage.setItem("totPoint", JSON.stringify(totPoint))
}, [totPoint]);

useEffect(()=>{
    localStorage.setItem("point", JSON.stringify(points))
}, [points]);


useEffect(()=>{
    localStorage.setItem("reloadCount", JSON.stringify(reloadC));
}, [reloadC])

useEffect(() => {
    // Define the API URL
    const apiUrl = 'https://opentdb.com/api.php?amount=15&type=multiple';
    
    // Fetch data from the API
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        // Handle the data
        setQuestions(data.results);
        
        //   setCorrAns(questions[0].correct_answer)
        
        setIsLoading(false);
        
        shuffleAnswers(data.results[0].correct_answer, data.results[0].incorrect_answers);
        
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
    });
}, []);

const [load, setLoad] = useState(false)

useEffect(()=>{
    questions ? setLoad(true) : setLoad(false)
}, questions)


// useEffect(()=>{

    if (isLoading) {
        
        return <p>Loading...</p>;
    }

    // setInterval(() => {
        
    //     if(!questions)
    //     return <h1>Loading......</h1>
    // }, 1000);
// })

// useEffect(()=>{

//     if (!questions) {
        
//         return <p>Loading...</p>;
//     }
// }, [questions])


let s = 0;
console.log(totPoint)





    let song = new Audio(error);
    let song2 = new Audio(right);

   
    
function next(){
    let arrow = document.getElementsByClassName("arrow")[0]
    setTimeout(() => {
        window.location.reload()
        shuffleAnswers(questions[0].correct_answer, questions[0].incorrect_answers);
    }, 3000);

    arrow.style.transform = "translateX(-4rem)";
    setTimeout(() => {
        
        arrow.style.transform = "translate(4rem)";
    }, 1000);
    arrow.style.transition = "1.5s"
}

    
    const option1 = async () => {
        
        if (selectedOption === null) {
            setSelectedOption(1);
            
            setReloadC(parseInt(reloadC)+1);
            
            let cor = questions[0].correct_answer
            let a = document.getElementsByClassName("option-1")[0];
            let b = document.getElementsByClassName("correct")[0];
            let c = document.getElementsByClassName("incorrect")[0];
            
            
            // console.log(a)
            // console.log(cor)
        
        if(cor===a.innerText){
            song2.play();
            setTotPoint(s+2)
            a.style.backgroundColor = "#23b049"
            b.style.top = "2rem"
            b.style.transition = "1s"
            
            setPoints(points+1);
            setTimeout(() => {
                window.location.reload()
            }, 4000);
        }
        else{
            let ansScreen = document.getElementsByClassName("ans-screen")[0]
            let navbar = document.getElementsByClassName("navbar")[0]
            let yellow = document.getElementsByClassName("yellow-part")[0]
            let timer = document.getElementsByClassName("timer")[0]
            let qcont = document.getElementsByClassName("q-cont")[0]
            let points = document.getElementsByClassName("points")[0]
            let opt = document.getElementsByClassName("options-container")[0]
            song.play()
            a.style.backgroundColor = "#eb3313"
            c.style.top = "2rem"
            c.style.transition = ".2s"
            
            setTimeout(()=>{
                // document.body.style.filter = "blur(2px)"
                navbar.style.filter = "blur(4px)"
                yellow.style.filter = "blur(4px)"
                points.style.filter = "blur(4px)"
                // qcont.style.filter = "blur(2px)"
                // qtext.style.filter = "blur(2px)"
                opt.style.filter = "blur(4px)"

                ansScreen.style.display = "block";
                ansScreen.style.transition = "0.5s"
            }, 2000)
            // ansScreen.style.filter = "blur(0px)"
            // setTimeout(() => {
            //     window.location.reload()
            //     shuffleAnswers(questions[0].correct_answer, questions[0].incorrect_answers);
            // }, 4000);
        }
    }

    }
    const option2 = async () => {

 if (selectedOption === null) {
            setSelectedOption(1);    
        setReloadC(reloadC+1);
        
        
        let cor = questions[0].correct_answer
        let a = document.getElementsByClassName("option-2")[0];
        let b = document.getElementsByClassName("correct")[0];
        let c = document.getElementsByClassName("incorrect")[0];

        // console.log(a)
        // console.log(cor)
        
        if(cor===a.innerText){
            song2.play();
            setTotPoint(s+2)
            a.style.backgroundColor = "#23b049"
            b.style.top = "2rem"
            b.style.transition = "1s"
            
            setPoints(points+1);
                setTimeout(() => {
                    window.location.reload()
                    setReloadC(reloadC+1);

                }, 4000);
        }
        else{
            song.play()
            a.style.backgroundColor = "#eb3313"
            c.style.top = "2rem"
            c.style.transition = ".2s"

            let ansScreen = document.getElementsByClassName("ans-screen")[0]
            let navbar = document.getElementsByClassName("navbar")[0]
            let yellow = document.getElementsByClassName("yellow-part")[0]
            let timer = document.getElementsByClassName("timer")[0]
            let qcont = document.getElementsByClassName("q-cont")[0]
            let points = document.getElementsByClassName("points")[0]
            let opt = document.getElementsByClassName("options-container")[0]
            song.play()
            a.style.backgroundColor = "#eb3313"
            c.style.top = "2rem"
            c.style.transition = ".2s"
            
            setTimeout(()=>{
                // document.body.style.filter = "blur(2px)"
                navbar.style.filter = "blur(4px)"
                yellow.style.filter = "blur(4px)"
                points.style.filter = "blur(4px)"
                // qcont.style.filter = "blur(2px)"
                // qtext.style.filter = "blur(2px)"
                opt.style.filter = "blur(4px)"

                ansScreen.style.display = "block";
                ansScreen.style.transition = "0.5s"
            }, 2000)
        }
        }
    }
    const option3 = async () => {

     if (selectedOption === null) {
            setSelectedOption(1);
        setReloadC(reloadC+1);
        
        let cor = questions[0].correct_answer
        let a = document.getElementsByClassName("option-3")[0];
        let b = document.getElementsByClassName("correct")[0];
        let c = document.getElementsByClassName("incorrect")[0];

        
        // console.log(a)
        // console.log(cor)
        
        if(cor===a.innerText){
            song2.play();
            setTotPoint(s+2)
            a.style.backgroundColor = "#23b049"
            b.style.top = "2rem"
            b.style.transition = "1s"
            
            setPoints(points+1);
            setTimeout(() => {
                window.location.reload()
                setReloadC(reloadC+1);
                
            }, 4000);
        }
        else{
            song.play()
            a.style.backgroundColor = "#eb3313"
            c.style.top = "2rem"
            c.style.transition = ".2s"

            let ansScreen = document.getElementsByClassName("ans-screen")[0]
            let navbar = document.getElementsByClassName("navbar")[0]
            let yellow = document.getElementsByClassName("yellow-part")[0]
            let timer = document.getElementsByClassName("timer")[0]
            let qcont = document.getElementsByClassName("q-cont")[0]
            let points = document.getElementsByClassName("points")[0]
            let opt = document.getElementsByClassName("options-container")[0]
            song.play()
            a.style.backgroundColor = "#eb3313"
            c.style.top = "2rem"
            c.style.transition = ".2s"
            
            setTimeout(()=>{
                // document.body.style.filter = "blur(2px)"
                navbar.style.filter = "blur(4px)"
                yellow.style.filter = "blur(4px)"
                points.style.filter = "blur(4px)"
                // qcont.style.filter = "blur(2px)"
                // qtext.style.filter = "blur(2px)"
                opt.style.filter = "blur(4px)"

                ansScreen.style.display = "block";
                ansScreen.style.transition = "0.5s"
            }, 2000)
    }
    }
    }
    const option4 = async () => {

     if (selectedOption === null) {
            setSelectedOption(1);
        setReloadC(reloadC+1);
        
        let cor = questions[0].correct_answer
        let a = document.getElementsByClassName("option-4")[0];
        let b = document.getElementsByClassName("correct")[0];
        let c = document.getElementsByClassName("incorrect")[0];
        
        // console.log(a)
        // console.log(cor)
        
        if(cor===a.innerText){
            song2.play();
            setTotPoint(s+2)
            a.style.backgroundColor = "#23b049"
            b.style.top = "2rem"
            b.style.transition = ".2s"
            
            setPoints(points+1);
            setTimeout(() => {
                window.location.reload()
            }, 4000);
        }
        else{
            song.play()
            a.style.backgroundColor = "#eb3313"
            c.style.top = "2rem"
            c.style.transition = ".2s"

            let ansScreen = document.getElementsByClassName("ans-screen")[0]
            let navbar = document.getElementsByClassName("navbar")[0]
            let yellow = document.getElementsByClassName("yellow-part")[0]
            let timer = document.getElementsByClassName("timer")[0]
            let qcont = document.getElementsByClassName("q-cont")[0]
            let points = document.getElementsByClassName("points")[0]
            let opt = document.getElementsByClassName("options-container")[0]
            song.play()
            a.style.backgroundColor = "#eb3313"
            c.style.top = "2rem"
            c.style.transition = ".2s"
            
            setTimeout(()=>{
                // document.body.style.filter = "blur(2px)"
                navbar.style.filter = "blur(4px)"
                yellow.style.filter = "blur(4px)"
                points.style.filter = "blur(4px)"
                // qcont.style.filter = "blur(2px)"
                // qtext.style.filter = "blur(2px)"
                opt.style.filter = "blur(4px)"

                ansScreen.style.display = "block";
                ansScreen.style.transition = "0.5s"
            }, 2000)
    }
    }
    }

    
    // Function to shuffle an array (Fisher-Yates algorithm)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    // const allAns = [questions[0].correct_answer, ...questions[0].incorrect_answers]
    // const shuffledAnswers = shuffleArray(allAns);
    


    // function bold1(){
    //     let a = document.getElementsByClassName("g-li")[0]
    //     a.style.fontWeight = "bold"
    // }

//     setInterval(()=>{
//          setTime(time-1)
//         if(time===1){
//         window.location.reload()
//     setReloadC(reloadC+1)
// }
//     }, 1000)

if(!questions){
    setTimeout(()=>{
        window.location.reload()

    },2500)
}
    
    return(
        <>
        <section className="navbar" style={{zIndex:"100"}}>
            <ul style={{listStyle:"none", display:"flex", margin:"3rem", zIndex:"100"}}>
                <li className="g-li" style={{marginRight:"3rem", fontSize:"1.3rem", cursor:"pointer", zIndex:"100"}}><Link className='links-nav' to="/">General</Link></li>
                <li className="g-li" style={{marginRight:"3rem", fontSize:"1.3rem", cursor:"pointer", zIndex:"100"}}><Link className='links-nav' to="/computer">Computer</Link></li>
                <li className="g-li" style={{marginRight:"3rem", fontSize:"1.3rem", cursor:"pointer", zIndex:"100"}}><Link className='links-nav' to="/history">History</Link></li>
                <li className="g-li" style={{marginRight:"3rem", fontSize:"1.3rem", cursor:"pointer", zIndex:"100"}}><Link className='links-nav' to="/sports">Sports</Link></li>
            </ul>
        </section>


        <section className="yellow-part" >
            <div className="circle1" style={{width:"10rem", height:"10rem", borderRadius:"50%", position:"absolute", top:"-2rem",left:"10rem",backgroundColor:"#f5a30c"}}></div>
            <div className="circle1" style={{width:"12rem", height:"12rem", borderRadius:"50%", position:"absolute", top:"-1rem",left:"47rem",backgroundColor:"#f5a30c"}}></div>
            <div className="circle1" style={{width:"5rem", height:"5rem", borderRadius:"50%", position:"absolute", top:"3rem",left:"65rem",backgroundColor:"#f5a30c"}}></div>
            <div className="circle1" style={{width:"10rem", height:"10rem", borderRadius:"50%", position:"absolute", top:"4rem",left:"-4rem",backgroundColor:"#f5a30c"}}></div>
            

            <div className='timer'>
                <div>
                {time}
                </div>
            </div>

        </section>


    <section className='q-cont'>
        <div className='points'><p className='points-text'> {reloadC} / 15 </p></div>
        {/* {points}  */}
        <section className="question" >
    
    {questions && 
(
         <p className='q-text' style={{position:"relative", top:"0rem", left:"4rem",width:"27rem", fontSize:"1.4rem"}} dangerouslySetInnerHTML={{ __html: questions[0].question}}>
        </p>
 )  

}
        {/* {isLoading ? ( */}
        {/* // <p>Loading...</p>
    //   ) : (
        // questions.length > 0 && )
        } */}
    
        </section>





<section className='ans-screen'>

    <p className="ques-text" dangerouslySetInnerHTML={{__html:questions[0].question}}>{
   
    }</p>
    
    <p className='ans-text'>
    {
        
questions[0].correct_answer
}
</p>

<div className='arrow' onClick={next}>
    
    <img src={arrow}></img>
</div>
</section>




    <img className='correct' style={{width:"40px", height:"40px", position:"fixed", top:"-3rem", left:"50%"}} src={correct}></img>
    <img className='incorrect' style={{width:"40px", height:"40px", position:"fixed", top:"-3rem", left:"50%"}} src={incorrect1}></img>
        </section>

                <section className='options-container'>
                    <div className='options option-1' onClick={option1}><p className='opt-text' dangerouslySetInnerHTML={{__html:shuffledAnswers[0]}}></p></div>
                    <div className='options option-2' onClick={option2}><p className='opt-text' dangerouslySetInnerHTML={{__html:shuffledAnswers[1]}}></p></div>
                    <div className='options option-3' onClick={option3}><p className='opt-text' dangerouslySetInnerHTML={{__html:shuffledAnswers[2]}}></p></div>
                    <div className='options option-4' onClick={option4}><p className='opt-text' dangerouslySetInnerHTML={{__html:shuffledAnswers[3]}}></p></div>
                </section>
          
        </>
    )
}