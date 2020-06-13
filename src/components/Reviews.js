import React, { Component } from 'react';

import { firebase, firebaseDB } from '../firebase'

class Reviews extends Component {
    state = {
        pendingReviews: [],
        reviews: []
    }
    componentDidMount(){
        firebaseDB.ref('pendingreviews').on('value', e=>{
            const pendingReviews = []
            const review = Object.entries(e.val())
            review.forEach(e=>{
                pendingReviews.push({...e[1]})
            })
            this.setState({pendingReviews})
        })
    }
    uploadReview = (review) => {
        firebaseDB.ref('reviews').push().set({
            email: review.email,
            review: review.review,
        }).then(e=>{
            console.log(e)
        }).catch(e=>{
            console.log(e)
        })
    }
    render() {
        return (
            <div>
                <h2>Reviews</h2>
                {
                    this.state.pendingReviews.map(e=>{
                        return <div className="review">
                            <div>
                                <h2>{e.email}</h2>
                                <p style={{color: 'white'}}>{e.review}</p>
                            </div>
                            <button onClick={this.uploadReview(e)}>Publish review</button>
                            <button>Delete review</button>
                        </div>
                    })
                }
            </div>
        );
    }
}

export default Reviews;