import React, { Component } from 'react'

export default class Form extends Component {

    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    state = {
        name: '',
        phone: ''
    };

    onChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }

        )
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.addContact({
            ...this.state
        });
        this.setState({
            name:'',
            phone:''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input name="name" onChange={this.onChange} value={this.state.name} id="name" placeholder="Bir isim giriniz" />
                    <br />
                    <input name="phone" onChange={this.onChange} value={this.state.phone} id="phone" placeholder="Bir telefon giriniz" />
                    <br />
                    <br />
                    <button>Ekle</button>
                </form>
            </div>
        )
    }
}
