import React, { Component } from 'react'
import './styles/Card.scss'

export default class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        }
    }
    componentDidMount(){
        this.getCountries();
    }
    getCountries =async ()=>{
        try{
            const response = await fetch('https://restcountries.eu/rest/v2/all');
            const data = await response.json();
            this.setState({data:data});
        }catch(error){
            return console.error(error)
        }
    }
    render() {
        const country = this.state.data;

        const countries = country.map((country)=>{
            return <article key={country.numericCode} className="country">
                        <figure className="country__image">
                            <img src={country.flag} alt={country.name} />        
                        </figure>
                        <div className="country__information">
                            <h3 className="country__title">{country.name}</h3>
                            <p>Population: {country.population}</p>
                            <p>Region: {country.region}</p>
                            <p>Capital: {country.capital}</p>
                        </div>
                    </article>
        })
        return (
            <main>
                {countries}
            </main>
        )
    }
}