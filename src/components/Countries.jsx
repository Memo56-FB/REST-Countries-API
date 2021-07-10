import React, { Component } from 'react'
import SerachSection from './SerachSection';
import './styles/Card.scss'

export default class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            inputValue:"",
            sortCountries:[],
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
    countryFilterOnChange = (event) => {
        console.log("Esta jalando esta wea? " + event.target.value);
        this.setState({inputValue: event.target.value});
        this.setState({data:this.sortCountries(this.filteredCountries)})
    }
    render() {
        const filteredCountries = this.state.data.filter(country =>{
            return country.name.toLowerCase().includes(this.state.inputValue.toLowerCase())
        })
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
            <React.Fragment>
                <SerachSection value={this.state.inputValue} countryFilterOnChange={this.countryFilterOnChange} />
                <main>
                    {countries}
                </main>
            </React.Fragment>
        )
    }
}