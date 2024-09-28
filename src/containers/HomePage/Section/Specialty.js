import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';



class Specialty extends Component {   
    render() {
       
        return (
           <div className='section-share section-specialty'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'> <FormattedMessage id="homepage.specialty" /></span>
                        <button className='btn-section'><FormattedMessage id="homepage.more-info" /></button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-custommize'>
                                <div  className='bg-image section-specialty'></div>
                                <div>Cơ Xương khớp 1</div>
                            </div>
                            <div className='section-custommize'>
                                <div  className='bg-image section-specialty'></div>
                                <div>Cơ Xương khớp 2</div>
                            </div>
                            <div className='section-custommize'>
                                <div  className='bg-image section-specialty'></div>
                                <div>Cơ Xương khớp 3</div>
                            </div>
                            <div className='section-custommize'>
                                <div  className='bg-image section-specialty'></div>
                                <div>Cơ Xương khớp 4</div>
                            </div>
                            <div className='section-custommize'>
                                <div  className='bg-image section-specialty'></div>
                                <div>Cơ Xương khớp 5</div>
                            </div>
                            <div className='section-custommize'>
                                <div  className='bg-image section-specialty'></div>
                                <div>Cơ Xương khớp 6</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
