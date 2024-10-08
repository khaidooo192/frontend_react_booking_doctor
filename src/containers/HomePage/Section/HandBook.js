import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';



class HandBook extends Component {   
    render() {
       
        return (
           <div className='section-share section-handbook'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'><FormattedMessage id="homepage.handbook" /></span>
                        <button className='btn-section'><FormattedMessage id="homepage.more-info" /></button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-custommize'>
                                <div  className='bg-image section-handbook'></div>
                                <div>Top bệnh thường gặp mùa mưa 1</div>
                            </div>
                            <div className='section-custommize'>
                                <div  className='bg-image section-handbook'></div>
                                <div>Top bệnh thường gặp mùa mưa 2</div>
                            </div>
                            <div className='section-custommize'>
                                <div  className='bg-image section-handbook'></div>
                                <div>Top bệnh thường gặp mùa mưa 3</div>
                            </div>
                            <div className='section-custommize'>
                                <div  className='bg-image section-handbook'></div>
                                <div>Top bệnh thường gặp mùa mưa 4</div>
                            </div>
                            <div className='section-custommize'>
                                <div  className='bg-image section-handbook'></div>
                                <div>Top bệnh thường gặp mùa mưa 5</div>
                            </div>
                            <div className='section-custommize'>
                                <div  className='bg-image section-handbook'></div>
                                <div>Top bệnh thường gặp mùa mưa 6</div>
                            </div>
                            
                        </Slider>
                    </div>
                    
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
