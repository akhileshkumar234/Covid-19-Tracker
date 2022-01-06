import React, { useEffect, useState } from 'react'
import './covid.css';
const Covid19 = () => {
    const [data, setData] = useState([]);
    const getCovid19Data = async () => {
       
            try {
                const respon = await fetch('https://data.covid19india.org/data.json');
                const datag = await respon.json();
                console.log(datag.statewise[0]);
                setData(datag.statewise[0]);
            } catch (e) {
                console.log(e);
            }
     
    }
    useEffect(() => {
        setInterval(() => {
            getCovid19Data();
        }, 1000);
    }, [])
    return (
        <section>
           
            <div className="mainbody1">
                
                    <h1 className="blink "><span className="colortop">🔴 LIVE</span></h1>
                    <h2>COVID-19 TRACKER</h2>
               
            </div>
            <div className="mainbody">

                <div className="container">
                    <div className="card">
                        <div className="box">
                            <div className="content">
                                <h2><span> OUR </span> COUNTRY </h2>
                                <h3>INDIA</h3>
                                <p>COVID-19 CASES</p>

                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="box">
                            <div className="content">
                                <h2><span> TOTAL </span> RECOVERED </h2>
                                <h3>{data.recovered}</h3>
                                <p>COVID-19 CASES</p>

                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="content">
                                <h2><span> TOTAL </span> CONFIRMED </h2>
                                <h3>{data.confirmed}</h3>
                                <p>COVID-19 CASES</p>

                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="content">
                                <h2><span> TOTAL </span> DEATH </h2>
                                <h3>{data.deaths}</h3>
                                <p>COVID-19 CASES</p>

                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="content">
                                <h2><span> TOTAL </span> ACTIVE </h2>
                                <h3>{data.active}</h3>
                                <p>COVID-19 CASES</p>

                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="content">
                                <h2><span> LAST </span> UPDATED </h2>
                                <h3>{data.lastupdatedtime}</h3>
                                <p>COVID-19 CASES</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='rightside'>
                <h3 className='hostname'>By - Akhilesh Kumar</h3>
            </div>
        </section>

    )
}
export default Covid19;

