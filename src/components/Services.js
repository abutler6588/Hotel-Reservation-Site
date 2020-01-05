import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {
   state={
       services:[
        {
           icon:<FaCocktail></FaCocktail>,
           title:'Free Cocktails',
           info:'Bacon ipsum dolor amet short loin doner venison, kielbasa meatloaf!'
        },
        {
            icon:<FaHiking></FaHiking>,
            title:'Endless Hiking',
            info:'Bacon ipsum dolor amet short loin doner venison, kielbasa meatloaf!'
        },
        {
            icon:<FaShuttleVan></FaShuttleVan>,
            title:'Free Shuttle',
            info:'Bacon ipsum dolor amet short loin doner venison, kielbasa meatloaf!'
        },
        {
            icon:<FaBeer></FaBeer>,
            title:'Strongest Soda',
            info:'Bacon ipsum dolor amet short loin doner venison, kielbasa meatloaf!'
        }
    ]
   }
   
   
    render() {
        return (
            <section className='services'>
                <Title title='services'></Title>
                <div className='services-center'>
                    {this.state.services.map((item, index) => {
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
