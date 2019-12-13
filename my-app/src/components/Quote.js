import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getQuote } from '../actions/quoteActions';

const Quote = props => {
    
    return (
        <div>
            <h1>Evil Kayne Quotes</h1>
            {!props.quote && !props.isFetching && <p>Crazy is as Crazy Does . Go on an get it!</p>}
            {props.isFetching && (
                <Loader type='Puff' color='skyblue' height={75} width={75}/>
            )}
            {props.quote && <p>{props.quote.quote} </p>}
            
            <button onClick={props.getQuote}>Take It</button>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        quote: state.quote,
        isFetching: state.isFetching,
        error: state.error
    }
}
export default connect(
    mapStateToProps,
    { getQuote }
)(Quote);