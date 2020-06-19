import React, { Component } from 'react';

import { firebase, firebaseDB } from '../firebase'

class Reviews extends Component {
    state = {
        pendingReviews: [],
        reviews: []
    }
    componentDidMount(){
        firebaseDB.ref('pendingreview').on('value', e=>{
            const pendingReviews = []
            const review = Object.entries(e.val())
            review.forEach(e=>{
                pendingReviews.push({...e[1], key: e[0]})
            })
            this.setState({pendingReviews})
        })
    }
    uploadReview = (review) => {
        console.log(review)
        firebaseDB.ref('reviews').push().set({
            email: review.email,
            review: review.review,
        }).then(e=>{
            firebaseDB.ref('pendingreview').child(review.key).update({
                email: null,
                review: null
            })
        }).catch(e=>{
            console.log(e)
        })
    }
    deleteReview = (review) => {
        
        firebaseDB.ref('pendingreview').child(review.key).update({
            email: null,
            review: null
        })
    }
    render() {
        return (
            <div>
                <h2 style={{color: 'white'}}>Pending Reviews</h2>
                {
                    this.state.pendingReviews.map(e=>{
                        return <div className="review">
                            <div>
                                <h2>Email: {e.email}</h2>
                                <p style={{color: 'white'}}>Review: {e.review}</p>
                            </div>
                            <button onClick={()=>this.uploadReview(e)}>Publish review</button>
                            <button onClick={()=>this.deleteReview(e)}>Delete review</button>
                        </div>
                    })
                }
            </div>
        );
    }
}

export default Reviews;