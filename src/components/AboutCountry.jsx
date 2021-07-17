import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './styles/AboutCountry.scss'
const arrowBack  = <ion-icon name="arrow-back-outline"></ion-icon>
export default class AboutCountry extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                altSpellings:[],
                borders:[],
                callingCodes:[],
                currencies:[],
                languages:[]
            },
            error:null,
        }
    }
    componentDidMount(){
        this.getCountry();
        
    }
    getCountry = async ()=>{
        try{
            // a simple way to search a param on the url 
            let url_string = window.location;
            let url = new URL(url_string);
            let alphaCode = url.searchParams.get("alphaCode");
            const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${alphaCode}`)
            const data = await response.json();
            this.setState({data})
        }catch(error){
            this.setState({error})
        }
    }

    render() {
        const country = this.state.data;
        const currenciName = country.currencies.map(currenci =>{
            return currenci.name;
        })
        const languages = country.languages.map(language =>{
            return language.name;
        })
        let populationNumber = country.population;
        return (
            <main className="about-container">
                <Link to="/countries" className="about__btn-back">{arrowBack} Back</Link>
                <section className="country-container"> 
                    <figure>
                        <img src={country.flag} alt={`flag of ${country.name}`} />
                    </figure>
                    <article className="country__information">
                        <h1 className="country__name">{country.name}</h1>
                        <div className="country__details">
                            <div className="first-content">
                                <p><span className="bold">Native Name:</span> {country.nativeName}</p>
                                <p><span className="bold">Population:</span> {new Intl.NumberFormat('en-EU').format(populationNumber)}</p>
                                <p><span className="bold">Region:</span> {country.region}</p>
                                <p><span className="bold">Sub Region:</span> {country.subregion}</p>
                                <p><span className="bold">Capital:</span> {country.capital}</p>
                            </div>
                            <div className="second-content">
                                <p><span className="bold">Top Level Domain:</span> {country.topLevelDomain}</p>
                                <p><span className="bold">Currencies:</span> {currenciName.join(', ')}</p>
                                <p><span className="bold">Languages: </span>{languages.join(', ')}</p> 
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        )
    }
}
