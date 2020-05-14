import React, { Component } from 'react';
import { firebase, firebaseDB } from '../firebase'

class Admin extends Component {


    state = {
        route: 'users',
        users: [],
        user: {},
        payments: [],
        isLoading: true,
        reviews: []
    }
    
    componentDidMount(){
        

        firebaseDB.ref('users').on('value', e=>{
            const users = []
            console.log(e.val(), '..............')
                e.forEach(e=>{
                    const userKey = e.key
                    users.push({...e.val(), userKey})
    
                })
            
            // new Notification('GOOD NEWS', {body: 'Check for changes'})
            this.setState({users, isLoading: false})

            
        })

        ////////////// rendering reviews //////////////////
        firebaseDB.ref('reviews').on('value', e=>{
            const reviews = []
            const review = Object.entries(e.val())
            review.forEach(e=>{
                reviews.push({...e[1]})
            })
            this.setState({reviews})
        })
       


           
    }

    confirmPayment = (e) => {

        const amount = e.amount
        const newInvestedAmount = this.state.user.totalInvested + parseInt(amount)

        console.log(e)
        firebaseDB.ref(`users/${this.state.user.userKey}/payments/${e.key}`).update({
            confirmed: true
        }).then(e=>{
            firebaseDB.ref(`users/${this.state.user.userKey}`).update({
                totalInvested: newInvestedAmount
            }).then(e=>{
                alert('completed')
            })
        }).catch(e=>{
            alert(e.message)
        })
    }
     
    reqFull=(e)=>{
        e.requstFullscreen()
    }

    clickdeUser=(user)=>{
        this.setState({
            route: 'user',
            user,
        })
        setTimeout(() => {
            if(this.state.user.payments !== undefined) {
                const payments = []
                const payment = Object.entries(this.state.user.payments)
                payment.forEach(e=>{
                    const key = e[0]
                    payments.push({...e[1], key})
                    console.log(e[0])
                })
                this.setState({payments})
    
            }
        }, 1000);
        console.log(user)
    }

    render() {

            
            
                // console.log(this.state.payments)
        // new Notification('GOOD NEWS', {body: 'CHECKUP'})
        return (
            <div className="admin">
                {
                    this.state.route === 'user'?
                    <button className="back_btn" onClick={()=>this.setState({route: 'users'})}>BACK</button>:null
                }
                {
                    this.state.isLoading?
                    <img className="loading" src={require('./2.gif')}/>:null
                }
                {
                    this.state.route==='users'?
                    <div className="users">
                    {
                        this.state.users.map(user=>{
                            return <div className="user" onClick={()=> this.clickdeUser(user)}>
                                <p>{user.username}</p>
                                <p>{user.email}</p>
                                <p>{user.totalInvested}</p>
                                
                            </div>
                        })
                    } 
                    </div>:
                    <div className="user_page">
                       
                        {
                            this.state.user.payments?
                                <div>
                                
                                <div className="user top">
                                    <p>Username: {this.state.user.username}</p>
                                    <p>Fullname: {this.state.user.name}</p>
                                    <p>Date registered: {this.state.user.registeredDate}</p>
                                    <p>Total Invested: {this.state.user.totalInvested}</p>
                                    <p>Earnings: {this.state.user.earnings}</p>
                                    
                                    {/* {
                                        e.confirmed?
                                        'CONFIRMED':
                                        <button onClick={()=>this.confirmPayment(e)}>CONFIRM</button>
                                    } */}
                                </div>
                                <div className="payments">
                                        <h2>Payments for {this.state.user.username}</h2>
                                        {
                                            this.state.payments.map(e=>{
                                                const dueDate = {...e.dueDate}
                                            return <div className="user pay">
                                                    <a href={`${e.screenshot}`}><img style={{width:'2rem', height:'2rem'}} src={e.screenshot}/></a>
                                                    <p>{e.username}</p>
                                                    <p>{e.amount}</p>
                                                    <p>{e.date}</p>
                                                    <p>due for payment on:{dueDate.day}/{dueDate.month}</p>
                                                    {
                                                        e.confirmed?
                                                        'CONFIRMED':
                                                        <button onClick={()=>this.confirmPayment(e)}>CONFIRM</button>
                                                    }
                                                </div>
                                            }) 
                                        }
                                    </div>
                                </div>
                            :<h2>No payment history so far</h2>
                        }
                    </div>
                }
                {/* {
                    this.state.payments.map(e=>{
                        return <div className="user">
                            <a href={`${e.screenshot}`}><img style={{width:'2rem', height:'2rem'}} src={e.screenshot}/></a>
                            <p>{e.username}</p>
                            <p>{e.amount}</p>
                            <p>{e.date}</p>
                            {
                                e.confirmed?
                                'CONFIRMED':
                                <button onClick={()=>this.confirmPayment(e)}>CONFIRM</button>
                            }
                        </div>
                    })
                } */}
            </div>
        );
    }
}

export default Admin;