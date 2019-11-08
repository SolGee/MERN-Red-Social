import React, { Component } from 'react';


class LoginForm extends Component {
    render() {
        return (

            <section className='login'>
                <form onSubmit={this.handleSubmit}>
                    {/* email field */}
                    <div className='form-group'>
                        <input required
                            type='email'
                            placeholder='Email'
                            name='email-login'
                            className='form-control'
                            // value={this.state.user}
                            onChange={this.handleChange}
                        />
                    </div>

                    {/* password field */}
                    <div className='form-group'>
                        <input required
                            type='password'
                            placeholder='Contraseña'
                            name='password-login'
                            className='form-control'
                            // value={this.state.user}
                            onChange={this.handleChange}
                        />
                    </div>

                </form>
            </section>
        )
    }
}

export default LoginForm;


