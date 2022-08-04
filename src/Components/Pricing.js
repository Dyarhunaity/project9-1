import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../css/pricing.css'
function Pricing () {

  const[dis,setDis]=useState('none');
  const[pack,setPack]=useState('');
  const[re,setRe]=useState(false);

    const package_submit=(e,str)=>{
      e.preventDefault();
      if (sessionStorage.getItem('user_id')) { 
        sessionStorage.setItem('pricing_package',str);
        window.location='./Subscribe';
      }
      else{
        setDis('flex');
      }
    };

    function getPackage()
    {
      if (sessionStorage.getItem('user_id')) 
      {
      
      axios.get('http://localhost/project9/PHP/package.php?id='+sessionStorage.getItem('user_id'))
      .then((res)=>{
        setPack(res.data);
        console.log(pack);
      })
      .catch((e)=>{
        console.log('Error Message: ',e);
      })
      }
      setRe(false);
    }
    useEffect(()=>{
        getPackage();
      setRe(false);
    },[pack,re])



        return (
      <div id="generic_price_table">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {/*PRICE HEADING START*/}
                <div className="price-heading clearfix">
                  <h1>Choose Your Health Plan</h1>
                </div>
                {/*//PRICE HEADING END*/}
              </div>
            </div>
          </div>
          <div className="container">
            {/*BLOCK ROW START*/}
            <div className="row">
              <div className="col-md-4">
                {/*PRICE CONTENT START*/}
                <div className="generic_content clearfix">
                  {/*HEAD PRICE DETAIL START*/}
                  <div className="generic_head_price clearfix">
                    {/*HEAD CONTENT START*/}
                    <div className="generic_head_content clearfix">
                      {/*HEAD START*/}
                      <div className="head_bg" />
                      <div className="head">
                        <span>Basic</span>
                      </div>
                      {/*//HEAD END*/}
                    </div>
                    {/*//HEAD CONTENT END*/}
                    {/*PRICE START*/}
                    <div className="generic_price_tag clearfix">
                      <span className="price">
                        <span className="sign">$</span>
                        <span className="currency">99</span>
                        <span className="cent">.99</span>
                        <span className="month">/3 MON</span>
                      </span>
                    </div>
                    {/*//PRICE END*/}
                  </div>
                  {/*//HEAD PRICE DETAIL END*/}
                  {/*FEATURE LIST START*/}
                  <div className="generic_feature_list">
                    <ul>
                      <li>
                        {/* <span>2GB</span>  */}
                       Zakie Package
                      </li>
                      <li>
                      <span>20%</span> Discount for aside orders
                      </li>
                      <li>
                      <span>24/7</span> Customer Services
                      </li>
                      <li>
                      Healthy follow-up with Zakie Food Health Service
                      </li>
                    </ul>
                  </div>
                  {/*//FEATURE LIST END*/}
                  {/*BUTTON START*/}
                  <div className="generic_price_btn clearfix">
                  <a className={pack === 'weekly' ?'disabled':''} href="" onClick={(e)=>{package_submit(e,"weekly")}} >
                     {pack === ''?"Choose":<>{pack !== "weekly" ? 'Update Plan' :'Your Plan'}</>}
                    </a>
                  </div>
                  {/*//BUTTON END*/}
                </div>
                {/*//PRICE CONTENT END*/}
              </div>
              <div className="col-md-4">
                {/*PRICE CONTENT START*/}
                <div className="generic_content active clearfix">
                  {/*HEAD PRICE DETAIL START*/}
                  <div className="generic_head_price clearfix">
                    {/*HEAD CONTENT START*/}
                    <div className="generic_head_content clearfix">
                      {/*HEAD START*/}
                      <div className="head_bg" />
                      <div className="head">
                        <span>Standard</span>
                      </div>
                      {/*//HEAD END*/}
                    </div>
                    {/*//HEAD CONTENT END*/}
                    {/*PRICE START*/}
                    <div className="generic_price_tag clearfix">
                      <span className="price">
                        <span className="sign">$</span>
                        <span className="currency">199</span>
                        <span className="cent">.99</span>
                        <span className="month">/6 MON</span>
                      </span>
                    </div>
                    {/*//PRICE END*/}
                  </div>
                  {/*//HEAD PRICE DETAIL END*/}
                  {/*FEATURE LIST START*/}
                  <div className="generic_feature_list">
                    <ul>
                    <li>
                        {/* <span>2GB</span>  */}
                       Zakie Package
                      </li>
                      <li>
                      <span>40%</span> Discount for aside orders
                      </li>
                      <li>
                      <span>24/7</span> Customer Services
                      </li>
                      <li>
                      Healthy follow-up with Zakie Food Health Service
                      </li>
                    </ul>
                  </div>
                  {/*//FEATURE LIST END*/}
                  {/*BUTTON START*/}
                  <div className="generic_price_btn clearfix">
                    <a className={pack === 'monthly' ?'disabled':''} href="" onClick={(e)=>{package_submit(e,"monthly")}}>
                    {pack === ''?"Choose":<>{pack !== "monthly" ? 'Update Plan' :'Your Plan'}</>}
                    </a>
                  </div>
                  {/*//BUTTON END*/}
                </div>
                {/*//PRICE CONTENT END*/}
              </div>
              <div className="col-md-4">
                {/*PRICE CONTENT START*/}
                <div className="generic_content clearfix">
                  {/*HEAD PRICE DETAIL START*/}
                  <div className="generic_head_price clearfix">
                    {/*HEAD CONTENT START*/}
                    <div className="generic_head_content clearfix">
                      {/*HEAD START*/}
                      <div className="head_bg" />
                      <div className="head">
                        <span>Zakie Offer</span>
                      </div>
                      {/*//HEAD END*/}
                    </div>
                    {/*//HEAD CONTENT END*/}
                    {/*PRICE START*/}
                    <div className="generic_price_tag clearfix">
                      <span className="price">
                        <span className="sign">$</span>
                        <span className="currency">299</span>
                        <span className="cent">.99</span>
                        <span className="month">/9 MON</span>
                      </span>
                    </div>
                    {/*//PRICE END*/}
                  </div>
                  {/*//HEAD PRICE DETAIL END*/}
                  {/*FEATURE LIST START*/}
                  <div className="generic_feature_list">
                    <ul>
                    <li>
                        {/* <span>2GB</span>  */}
                       Zakie Package
                      </li>
                      <li>
                      <span>60%</span> Discount for aside orders
                      </li>
                      <li>
                      <span>24/7</span> Customer Services
                      </li>
                      <li>
                      Healthy follow-up with Zakie Food Health Service
                      </li>
                    </ul>
                  </div>
                  {/*//FEATURE LIST END*/}
                  {/*BUTTON START*/}
                  <div className="generic_price_btn clearfix">
                  <a className={pack === 'yearly' ?'disabled':''} href="" onClick={(e)=>{package_submit(e,"yearly")}}>
                  {pack === ''?"Choose":<>{pack !== "yearly" ? 'Update Plan' :'Your Plan'}</>}
                    </a>
                  </div>
                  {/*//BUTTON END*/}
                </div>
                {/*//PRICE CONTENT END*/}
              </div>
            </div>
            {/*//BLOCK ROW END*/}
          </div>
        </section>
       <div className='container justify-content-center' style={{display: dis}}><h3 style={{color: 'red'}}>To Subscribe Please Log in first</h3></div>
      </div>
  
    );
    
}
 
export default Pricing;